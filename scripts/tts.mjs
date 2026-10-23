// Voix off Google Chirp 3 HD, scène par scène, puis assemblage calé sur le découpage.
// Usage : GOOGLE_TTS_API_KEY=... node scripts/tts.mjs [--voice fr-FR-Chirp3-HD-Charon] [--rate 0.95]
import {execFileSync} from 'node:child_process';
import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';

const key = process.env.GOOGLE_TTS_API_KEY;
if (!key) {
  console.error('GOOGLE_TTS_API_KEY manquante (voir README).');
  process.exit(1);
}
const arg = (n, d) => {
  const i = process.argv.indexOf(n);
  return i > 0 ? process.argv[i + 1] : d;
};
const voice = arg('--voice', 'fr-FR-Chirp3-HD-Charon');
const rate = Number(arg('--rate', '0.95'));
const script = JSON.parse(readFileSync('script.json', 'utf8'));
mkdirSync('public/voice', {recursive: true});

const parts = [];
for (const sc of script.scenes) {
  const res = await fetch(`https://texttospeech.googleapis.com/v1/text:synthesize?key=${key}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({input: {text: sc.voice}, voice: {languageCode: 'fr-FR', name: voice}, audioConfig: {audioEncoding: 'MP3', speakingRate: rate}}),
  });
  if (!res.ok) throw new Error(`${sc.id}: ${res.status} ${await res.text()}`);
  const {audioContent} = await res.json();
  const file = `public/voice/${sc.id}.mp3`;
  writeFileSync(file, Buffer.from(audioContent, 'base64'));
  const dur = Number(execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file]).toString());
  const room = (sc.to - sc.from) / script.fps;
  console.log(`${sc.id}: ${dur.toFixed(2)} s (place : ${room.toFixed(2)} s)${dur > room - 0.3 ? '  ⚠ trop long' : ''}`);
  parts.push({file, start: sc.from / script.fps + 0.25});
}

// assemblage : chaque scène démarre 0,25 s après le début de son plan
const inputs = parts.flatMap((p) => ['-i', p.file]);
const filters = parts.map((p, i) => `[${i}]adelay=${Math.round(p.start * 1000)}|${Math.round(p.start * 1000)}[a${i}]`).join(';');
const mix = parts.map((_, i) => `[a${i}]`).join('') + `amix=inputs=${parts.length}:normalize=0,apad,atrim=0:${script.duration_s}`;
execFileSync('ffmpeg', ['-loglevel', 'error', '-y', ...inputs, '-filter_complex', `${filters};${mix}`, '-ac', '1', '-b:a', '192k', 'public/voice.mp3']);
writeFileSync('src/voice.json', JSON.stringify({enabled: true, voice, rate}, null, 1));
console.log('→ public/voice.mp3 ; lance ensuite : python3 scripts/align.py');
