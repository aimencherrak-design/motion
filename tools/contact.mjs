// Planche contact : une image par plan (à une fraction donnée de sa durée), pour la relecture.
// usage : node tools/contact.mjs <out.jpg> <fraction> [premierPlan] [dernierPlan]
import { chromium } from 'playwright-core';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
const [out, frac = '0.5', from = '0', to = '999'] = process.argv.slice(2);
const W = 480, H = 270;
const tmp = path.resolve('.dev');
fs.mkdirSync(tmp + '/contact', { recursive: true });
execSync(`npx esbuild src/main.js --bundle --format=iife --outfile=${tmp}/ep.js --log-level=warning`);
fs.writeFileSync(`${tmp}/ep.html`, `<!doctype html><html><body style="margin:0;background:#000"><canvas id="c" width="${W}" height="${H}"></canvas><script src="ep.js"></script></body></html>`);
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: W, height: H } });
page.on('pageerror', (e) => console.log('pageerror:', e.message));
await page.goto('file://' + tmp + '/ep.html');
await page.waitForFunction(() => window.ready, null, { timeout: 60000 });
await page.evaluate(([w, h]) => { window.EP = window.MeliMelo.create(document.getElementById('c'), w, h); }, [W, H]);
const tl = await page.evaluate(() => window.EP.timeline.map((e) => [e.start, e.shot.dur, e.shot.id]));
const files = [];
for (let i = +from; i < Math.min(tl.length, +to + 1); i++) {
  const [s, d, id] = tl[i];
  const fr = frac.split(',').map(Number);
  for (const f of fr) {
    const t = s + d * f;
    await page.evaluate((t) => window.EP.renderAt(t), t);
    const b64 = await page.evaluate(() => window.MeliMelo.grab(document.getElementById('c')));
    const fn = `${tmp}/contact/${String(i).padStart(2, '0')}-${f}.jpg`;
    fs.writeFileSync(fn, Buffer.from(b64, 'base64'));
    execSync(`convert ${fn} -gravity NorthWest -fill white -undercolor '#0008' -pointsize 13 -annotate +4+4 '${id} ${t.toFixed(1)}s' ${fn}`);
    files.push(fn);
  }
}
await browser.close();
const cols = frac.split(',').length > 1 ? frac.split(',').length : 4;
execSync(`montage ${files.join(' ')} -tile ${cols}x -geometry ${W}x${H}+2+2 ${out}`);
console.log('ok', files.length);
