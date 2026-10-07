// Chargement des échantillons d'instruments (banque « SGM » publiée par le projet Magenta).
// Les fichiers MP3 sont téléchargés une seule fois puis décodés en PCM 48 kHz stéréo (cache local).
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';

export const SR = 48000;
const BASE = 'https://storage.googleapis.com/magentadata/js/soundfonts/sgm_plus';
const CACHE = path.resolve('.cache/samples');
export const LAYERS = [63, 111];

const mem = new Map();

async function download(url, file) {
  for (let i = 0; i < 4; i++) {
    try {
      const r = await fetch(url);
      if (!r.ok) throw new Error('HTTP ' + r.status);
      fs.writeFileSync(file, Buffer.from(await r.arrayBuffer()));
      return;
    } catch (e) {
      if (i === 3) throw new Error(`échec du téléchargement ${url} : ${e.message}`);
      await new Promise((r) => setTimeout(r, 1000 * 2 ** i));
    }
  }
}

function decode(mp3) {
  const raw = execFileSync('ffmpeg', ['-v', 'error', '-i', mp3, '-ac', '2', '-ar', String(SR), '-f', 'f32le', '-'], { maxBuffer: 1 << 28 });
  const f = new Float32Array(raw.buffer, raw.byteOffset, raw.byteLength / 4);
  // retire le délai d'encodeur MP3 (~25 ms) pour une attaque bien calée
  const skip = Math.round(0.025 * SR) * 2;
  return f.slice(skip);
}

// Prépare en parallèle tous les échantillons nécessaires : liste de [instrument, hauteur, couche].
export async function prefetch(list) {
  fs.mkdirSync(CACHE, { recursive: true });
  const todo = [...new Set(list.map((x) => x.join('|')))].map((k) => k.split('|'));
  let done = 0;
  const worker = async () => {
    while (todo.length) {
      const [inst, p, v] = todo.pop();
      const dir = path.join(CACHE, inst);
      fs.mkdirSync(dir, { recursive: true });
      const mp3 = path.join(dir, `p${p}_v${v}.mp3`);
      if (!fs.existsSync(mp3)) await download(`${BASE}/${inst}/p${p}_v${v}.mp3`, mp3);
      done++;
    }
  };
  await Promise.all(Array.from({ length: 8 }, worker));
  return done;
}

export function sample(inst, p, v) {
  const key = `${inst}/${p}/${v}`;
  if (!mem.has(key)) mem.set(key, decode(path.join(CACHE, inst, `p${p}_v${v}.mp3`)));
  return mem.get(key);
}
