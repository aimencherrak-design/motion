// Render a composition to MP4 by seeking its GSAP timeline frame by frame in headless Chromium.
//
// Usage: node scripts/render.mjs <composition-dir> [options]
//   --out <file.mp4>     output file (default: renders/<composition>.mp4)
//   --audio <file>       audio track to mux (trimmed/padded to the video length)
//   --fps <n>            frame rate (default: data-fps of the composition, else 30)
//   --crf <n>            x264 quality, lower = better (default 16)
//   --still <seconds>    write a single PNG at that time instead of a video (--out file.png)
//   --from/--to <sec>    render only part of the timeline (quick checks)
import { chromium } from "playwright-core";
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { startServer } from "./static-server.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const argv = process.argv.slice(2);
const opt = (name, def) => { const i = argv.indexOf(`--${name}`); return i >= 0 ? argv[i + 1] : def; };
const comp = argv.find((a, i) => !a.startsWith("--") && !(i > 0 && argv[i - 1].startsWith("--"))) || "apporteur-affaires-auto";
const still = opt("still");
const out = path.resolve(ROOT, opt("out", still !== undefined ? `renders/${comp}.png` : `renders/${comp}.mp4`));
const audio = opt("audio");
const crf = opt("crf", "16");

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  try { const p = chromium.executablePath(); if (fs.existsSync(p)) return p; } catch {}
  const base = process.env.PLAYWRIGHT_BROWSERS_PATH || "/opt/pw-browsers";
  if (fs.existsSync(base)) {
    for (const d of fs.readdirSync(base).filter((d) => /^chromium-\d+$/.test(d)).sort().reverse()) {
      const p = path.join(base, d, "chrome-linux", "chrome");
      if (fs.existsSync(p)) return p;
    }
  }
  return undefined; // let Playwright decide
}

const server = await startServer(ROOT);
const url = `http://127.0.0.1:${server.address().port}/${comp}/index.html?render=1`;
const browser = await chromium.launch({ executablePath: findChrome(), args: ["--force-color-profile=srgb", "--hide-scrollbars"] });

try {
  const page = await browser.newPage({ viewport: { width: 1080, height: 1920 }, deviceScaleFactor: 1 });
  page.on("pageerror", (e) => console.error("[page error]", e.message));
  page.on("console", (m) => m.type() === "error" && console.error("[console]", m.text()));
  await page.goto(url, { waitUntil: "load" });
  await page.waitForFunction(() => window.__ready === true, null, { timeout: 30000 });

  const meta = await page.evaluate(() => {
    const el = document.querySelector("[data-composition-id]");
    return { w: +el.dataset.width, h: +el.dataset.height, dur: +el.dataset.duration, fps: +(el.dataset.fps || 30) };
  });
  const fps = Number(opt("fps", meta.fps));
  const clip = { x: 0, y: 0, width: meta.w, height: meta.h };
  fs.mkdirSync(path.dirname(out), { recursive: true });

  if (still !== undefined) {
    await page.evaluate((t) => window.__seek(t), Number(still));
    await page.screenshot({ path: out, clip, type: "png" });
    console.log(`Still @${still}s → ${path.relative(ROOT, out)}`);
  } else {
    const from = Number(opt("from", 0));
    const to = Math.min(Number(opt("to", meta.dur)), meta.dur);
    const first = Math.round(from * fps), last = Math.round(to * fps); // [first, last)
    const total = last - first;

    const ffArgs = ["-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", String(fps), "-c:v", "png", "-i", "-"];
    if (audio) ffArgs.push("-ss", String(from), "-i", path.resolve(ROOT, audio));
    ffArgs.push("-c:v", "libx264", "-preset", "slow", "-crf", crf, "-pix_fmt", "yuv420p", "-profile:v", "high", "-r", String(fps));
    ffArgs.push("-color_primaries", "bt709", "-color_trc", "bt709", "-colorspace", "bt709");
    if (audio) ffArgs.push("-map", "0:v", "-map", "1:a", "-c:a", "aac", "-b:a", "192k", "-af", `apad`, "-t", String(total / fps));
    ffArgs.push("-movflags", "+faststart", out);
    const ff = spawn("ffmpeg", ffArgs, { stdio: ["pipe", "inherit", "inherit"] });
    const ffDone = new Promise((res, rej) => ff.on("close", (c) => (c === 0 ? res() : rej(new Error(`ffmpeg exited ${c}`)))));

    const t0 = Date.now();
    for (let f = first; f < last; f++) {
      await page.evaluate((t) => window.__seek(t), f / fps);
      const buf = await page.screenshot({ clip, type: "png" });
      if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
      const n = f - first + 1;
      if (n % 30 === 0 || n === total) {
        const el = (Date.now() - t0) / 1000;
        process.stdout.write(`\rframe ${n}/${total}  (${(n / el).toFixed(1)} fps, ~${Math.round((total - n) / (n / el))}s left)   `);
      }
    }
    ff.stdin.end();
    await ffDone;
    console.log(`\nVideo → ${path.relative(ROOT, out)}`);
  }
} finally {
  await browser.close();
  server.close();
}
