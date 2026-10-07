// Rend des images fixes de l'épisode à des instants donnés (vérification visuelle).
// usage : node tools/frames.mjs <out-prefix> <W> <H> t1 t2 ...   (ou "contact" pour une planche)
import { chromium } from 'playwright-core';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
const [out, W, H, ...times] = process.argv.slice(2);
const tmp = path.resolve('.dev');
fs.mkdirSync(tmp, { recursive: true });
execSync(`npx esbuild src/main.js --bundle --format=iife --outfile=${tmp}/ep.js --log-level=warning`);
fs.writeFileSync(`${tmp}/ep.html`, `<!doctype html><html><body style="margin:0;background:#000"><canvas id="c" width="${W}" height="${H}"></canvas><script src="ep.js"></script></body></html>`);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: +W, height: +H } });
page.on('console', (m) => console.log('console:', m.text()));
page.on('pageerror', (e) => console.log('pageerror:', e.message));
await page.goto('file://' + tmp + '/ep.html');
await page.waitForFunction(() => window.ready, null, { timeout: 60000 });
await page.evaluate(([w, h]) => { window.EP = window.MeliMelo.create(document.getElementById('c'), w, h); }, [+W, +H]);
const dur = await page.evaluate(() => window.EP.duration);
console.log('duration', dur.toFixed(2));
for (const t of times) {
  const info = await page.evaluate((t) => window.EP.renderAt(t), +t);
  const b64 = await page.evaluate(() => window.MeliMelo.grab(document.getElementById('c')));
  const f = `${out}-${String(t).replace('.', '_')}.jpg`;
  fs.writeFileSync(f, Buffer.from(b64, 'base64'));
  console.log(t, info.shot, info.t.toFixed(2), f);
}
await browser.close();
