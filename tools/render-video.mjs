// Rendu de l'épisode en MP4 : chaque image est calculée dans Chromium (WebGL),
// puis encodée par ffmpeg et assemblée avec la bande-son.
// usage : node tools/render-video.mjs [--w 1920] [--h 1080] [--fps 24] [--workers 2] [--from 0] [--to fin] [--out build/episode.mp4]
import { chromium } from 'playwright-core';
import { spawn, execSync, execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const args = Object.fromEntries(process.argv.slice(2).reduce((a, v, i, arr) => (v.startsWith('--') ? [...a, [v.slice(2), arr[i + 1]]] : a), []));
const W = +(args.w || 1920), H = +(args.h || 1080), FPS = +(args.fps || 24), WORKERS = +(args.workers || 2);
const OUT = path.resolve(args.out || 'build/episode.mp4');
const AUDIO = path.resolve(args.audio || 'build/bande-son.wav');
const tmp = path.resolve('.dev/render');
fs.mkdirSync(tmp, { recursive: true });
fs.mkdirSync(path.dirname(OUT), { recursive: true });
execSync(`npx esbuild src/main.js --bundle --format=iife --minify --outfile=${tmp}/ep.js --log-level=warning`);
fs.writeFileSync(`${tmp}/ep.html`, `<!doctype html><html><body style="margin:0;background:#000"><canvas id="c" width="${W}" height="${H}"></canvas><script src="ep.js"></script></body></html>`);

const browserArgs = ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'];
const exe = process.env.CHROMIUM || '/opt/pw-browsers/chromium-1194/chrome-linux/chrome';

async function getDuration() {
  const b = await chromium.launch({ executablePath: exe, args: browserArgs });
  const p = await b.newPage({ viewport: { width: 320, height: 180 } });
  await p.goto('file://' + tmp + '/ep.html');
  await p.waitForFunction(() => window.ready);
  const d = await p.evaluate(() => { const c = document.createElement('canvas'); return window.MeliMelo.create(c, 32, 18).duration; });
  await b.close();
  return d;
}

async function worker(id, f0, f1) {
  const seg = path.join(tmp, `seg-${String(id).padStart(2, '0')}.mp4`);
  const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '17', '-pix_fmt', 'yuv420p', '-r', String(FPS), seg], { stdio: ['pipe', 'inherit', 'inherit'] });
  const b = await chromium.launch({ executablePath: exe, args: browserArgs });
  const page = await b.newPage({ viewport: { width: W, height: H } });
  page.on('pageerror', (e) => console.log(`[${id}] erreur page :`, e.message));
  await page.goto('file://' + tmp + '/ep.html');
  await page.waitForFunction(() => window.ready);
  await page.evaluate(([w, h]) => { window.EP = window.MeliMelo.create(document.getElementById('c'), w, h); }, [W, H]);
  const t0 = Date.now();
  for (let f = f0; f < f1; f++) {
    const b64 = await page.evaluate(async (t) => { window.EP.renderAt(t); return window.MeliMelo.grab(document.getElementById('c'), 'image/jpeg', 0.95); }, f / FPS);
    const ok = ff.stdin.write(Buffer.from(b64, 'base64'));
    if (!ok) await new Promise((r) => ff.stdin.once('drain', r));
    if ((f - f0) % 48 === 0) {
      const el = (Date.now() - t0) / 1000, done = f - f0 + 1;
      console.log(`[${id}] image ${f}/${f1} — ${(el / done).toFixed(2)} s/image, reste ~${((f1 - f) * el / done / 60).toFixed(1)} min`);
    }
  }
  ff.stdin.end();
  await new Promise((r) => ff.on('close', r));
  await b.close();
  return seg;
}

const dur = await getDuration();
const total = Math.round(dur * FPS);
const from = Math.round(+(args.from || 0) * FPS), to = args.to ? Math.round(+args.to * FPS) : total;
console.log(`épisode : ${dur.toFixed(2)} s, images ${from} → ${to}, ${W}x${H} à ${FPS} i/s, ${WORKERS} rendus parallèles`);
const per = Math.ceil((to - from) / WORKERS);
const segs = await Promise.all(Array.from({ length: WORKERS }, (_, i) => worker(i, from + i * per, Math.min(to, from + (i + 1) * per))));
const list = path.join(tmp, 'segs.txt');
fs.writeFileSync(list, segs.map((s) => `file '${s}'`).join('\n'));
const video = path.join(tmp, 'video.mp4');
execFileSync('ffmpeg', ['-y', '-v', 'error', '-f', 'concat', '-safe', '0', '-i', list, '-c', 'copy', video]);
if (fs.existsSync(AUDIO) && !args.noaudio) {
  const ss = from / FPS, len = (to - from) / FPS;
  execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', video, '-ss', String(ss), '-t', String(len), '-i', AUDIO,
    '-map', '0:v', '-map', '1:a', '-c:v', 'copy', '-c:a', 'aac', '-b:a', '192k', '-shortest', '-movflags', '+faststart',
    '-metadata', 'title=Méli-Mélo — Épisode 1 : Le Ballon Perdu', OUT]);
} else fs.copyFileSync(video, OUT);
console.log('vidéo prête :', OUT);
