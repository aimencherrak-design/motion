// Rend une page de développement (src/dev/*.js) et capture des images PNG.
// usage : node tools/snap-dev.mjs <entry> <out-prefix> <W> <H> '<js à évaluer>'...
import { chromium } from 'playwright-core';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
const [entry, out, W, H, ...cmds] = process.argv.slice(2);
const tmp = path.resolve('.dev');
fs.mkdirSync(tmp, { recursive: true });
execSync(`npx esbuild ${entry} --bundle --format=iife --outfile=${tmp}/dev.js --log-level=warning`);
fs.writeFileSync(`${tmp}/dev.html`, '<!doctype html><html><body style="margin:0;overflow:hidden"><script src="dev.js"></script></body></html>');
const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome', args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const page = await browser.newPage({ viewport: { width: +W, height: +H } });
page.on('console', (m) => console.log('console:', m.text()));
page.on('pageerror', (e) => console.log('pageerror:', e.message));
await page.goto('file://' + tmp + '/dev.html');
await page.waitForFunction(() => window.ready, null, { timeout: 60000 });
let i = 0;
for (const c of cmds) {
  await page.evaluate(c);
  await page.screenshot({ path: `${out}-${i++}.png` });
}
await browser.close();
