// Fabrique la bande-son complète : musique (échantillons d'orchestre), bruitages, ambiances.
// usage : node audio/render-audio.js [dossier de sortie]
import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { SR, LAYERS, prefetch, sample } from './samples.js';
import { createScore, INSTR } from './score.js';
import { SFX, AMB, targetLevel } from './sfx.js';
import { TIMELINE, DURATION } from '../src/shots/index.js';
import { PASSES_A } from '../src/shots/common.js';

const OUT = path.resolve(process.argv[2] || 'build');
fs.mkdirSync(OUT, { recursive: true });
const TOTAL = DURATION + 0.5;
const N = Math.ceil(TOTAL * SR);
const bus = () => ({ L: new Float32Array(N), R: new Float32Array(N) });

function addStereo(dst, src, t, g = 1, pan = 0) {
  const o = Math.round(t * SR);
  const a = ((pan + 1) * Math.PI) / 4;
  const gl = g * Math.cos(a) * Math.SQRT2, gr = g * Math.sin(a) * Math.SQRT2;
  for (let i = 0; i < src.L.length && o + i < N; i++) {
    if (o + i < 0) continue;
    dst.L[o + i] += src.L[i] * gl;
    dst.R[o + i] += src.R[i] * gr;
  }
}

// ---------------- musique ----------------
async function renderMusic() {
  const notes = createScore();
  const layer = (v) => (v < 0.62 ? LAYERS[0] : LAYERS[1]);
  console.log('notes :', notes.length);
  const need = notes.map((n) => [n.inst, n.p, layer(n.v)]);
  await prefetch(need);
  const m = bus();
  for (const n of notes) {
    const cfg = INSTR[n.inst] || { g: 0.5, pan: 0 };
    const ly = layer(n.v);
    const s = sample(n.inst, n.p, ly);
    const frames = s.length / 2;
    const g = cfg.g * Math.min(1.6, Math.max(0.25, n.v / (ly / 127)));
    const pan = n.pan ?? cfg.pan;
    const a = ((pan + 1) * Math.PI) / 4;
    const gl = g * Math.cos(a) * Math.SQRT2, gr = g * Math.sin(a) * Math.SQRT2;
    const o = Math.round(n.t * SR);
    const rel = (cfg.rel ?? 0.15) * SR;
    let len;
    if (cfg.perc) len = frames;
    else len = Math.min(frames, Math.round(n.d * SR + rel));
    // notes plus longues que l'échantillon : boucle sur la partie tenue avec fondus enchaînés
    const loopA = Math.round(0.6 * SR), loopB = Math.round(2.8 * SR), xf = Math.round(0.15 * SR);
    const want = cfg.perc ? frames : Math.round(n.d * SR + rel);
    const total = cfg.perc ? frames : want;
    for (let i = 0; i < total && o + i < N; i++) {
      let j = i;
      let w = 1;
      if (!cfg.perc && i >= loopB) {
        const span = loopB - loopA;
        const k = (i - loopA) % span;
        j = loopA + k;
        if (k > span - xf) w = (span - k) / xf;
      }
      if (j >= frames) break;
      let e = 1;
      if (!cfg.perc) {
        const end = Math.round(n.d * SR);
        if (i > end) e = Math.max(0, 1 - (i - end) / rel);
        if (e <= 0) break;
      }
      const L = s[j * 2], R = s[j * 2 + 1];
      m.L[o + i] += L * gl * e * w;
      m.R[o + i] += R * gr * e * w;
      if (w < 1 && !cfg.perc) {
        // complément du fondu : début de boucle
        const j2 = loopA + ((i - loopA) % (loopB - loopA)) - (loopB - loopA - xf);
        if (j2 >= 0 && j2 < frames) { m.L[o + i] += s[j2 * 2] * gl * e * (1 - w); m.R[o + i] += s[j2 * 2 + 1] * gr * e * (1 - w); }
      }
    }
    void len;
  }
  return m;
}

// ---------------- réverbération (Freeverb) ----------------
function freeverb(src, { room = 0.82, damp = 0.35, wet = 0.25, width = 1 } = {}) {
  const k = SR / 44100;
  const combs = [1116, 1188, 1277, 1356, 1422, 1491, 1557, 1617].map((x) => Math.round(x * k));
  const aps = [556, 441, 341, 225].map((x) => Math.round(x * k));
  const out = { L: new Float32Array(N), R: new Float32Array(N) };
  for (const [ch, spread] of [['L', 0], ['R', Math.round(23 * k)]]) {
    const x = src[ch];
    const acc = new Float32Array(N);
    for (const c of combs) {
      const L = c + spread, b = new Float32Array(L);
      let idx = 0, store = 0;
      for (let i = 0; i < N; i++) {
        const y = b[idx];
        store = y * (1 - damp) + store * damp;
        b[idx] = x[i] * 0.015 + store * room;
        acc[i] += y;
        if (++idx >= L) idx = 0;
      }
    }
    for (const a of aps) {
      const L = a + spread, b = new Float32Array(L);
      let idx = 0;
      for (let i = 0; i < N; i++) {
        const bo = b[idx];
        const y = -acc[i] + bo;
        b[idx] = acc[i] + bo * 0.5;
        acc[i] = y;
        if (++idx >= L) idx = 0;
      }
    }
    out[ch] = acc;
  }
  const w1 = wet * (width / 2 + 0.5), w2 = wet * ((1 - width) / 2);
  const r = { L: new Float32Array(N), R: new Float32Array(N) };
  for (let i = 0; i < N; i++) {
    r.L[i] = src.L[i] + out.L[i] * w1 + out.R[i] * w2;
    r.R[i] = src.R[i] + out.R[i] * w1 + out.L[i] * w2;
  }
  return r;
}

// ---------------- bruitages ----------------
function renderSfx() {
  const s = bus();
  const events = [];
  for (const e of TIMELINE) for (const [t, name, opts = {}] of e.shot.sfx || []) events.push([e.start + t, name, opts]);
  // passes de l'introduction
  for (const p of PASSES_A) {
    if (p.t < 10.4) events.push([p.t, 'toss', {}]);
    if (p.t + p.dur < 10.4) events.push([p.t + p.dur, 'catch', {}]);
  }
  events.push([12.45, 'toss', {}], [159.6, 'toss', {}], [162.4, 'toss', {}], [163.3, 'catch', {}]);
  let missing = new Set();
  for (const [t, name, opts] of events) {
    const f = SFX[name];
    if (!f) { missing.add(name); continue; }
    const b = f(opts);
    let pk = 0;
    for (let i = 0; i < b.L.length; i++) pk = Math.max(pk, Math.abs(b.L[i]), Math.abs(b.R[i]));
    if (pk < 1e-6) continue;
    const v = opts.v ?? 1;
    addStereo(s, b, t, (targetLevel(name) / pk) * (opts.g ?? 1) * (name === 'ball_bounce' ? v : 1), opts.pan ?? 0);
  }
  if (missing.size) console.warn('bruitages inconnus :', [...missing].join(', '));
  console.log('bruitages :', events.length);
  return s;
}

// ---------------- ambiances par décor ----------------
function renderAmbience() {
  const a = bus();
  // regroupe les plans consécutifs du même décor
  const runs = [];
  for (const e of TIMELINE) {
    const key = e.shot.set + (e.shot.sky === 'golden' ? '-gold' : '');
    const last = runs[runs.length - 1];
    if (last && last.key === key) last.end = e.start + e.shot.dur;
    else runs.push({ key, start: e.start, end: e.start + e.shot.dur });
  }
  runs.forEach((r, i) => {
    const dur = r.end - r.start + 1.0;
    const t = Math.max(0, r.start - 0.5);
    const fade = (buf) => {
      const n = buf.L.length;
      for (let k = 0; k < n; k++) { const g = Math.min(1, k / (0.5 * SR), (n - k) / (0.5 * SR)); buf.L[k] *= g; buf.R[k] *= g; }
      return buf;
    };
    addStereo(a, fade(AMB.birds(dur, 300 + i)), t, r.key.includes('gold') ? 0.5 : 1);
    addStereo(a, fade(AMB.wind(dur, 400 + i, r.key === 'clearing' ? 0.06 : 0.08)), t, 1);
    if (r.key.startsWith('village')) addStereo(a, fade(AMB.water(dur, 500 + i)), t, 0.6);
  });
  // coupe-bas : pas de grondement sous 120 Hz dans les ambiances
  for (const ch of ['L', 'R']) {
    const x = a[ch];
    const rc = 1 / (2 * Math.PI * 120), dt = 1 / SR, al = rc / (rc + dt);
    let py = 0, px = 0;
    for (let i = 0; i < N; i++) { const y = al * (py + x[i] - px); px = x[i]; py = y; x[i] = y; }
  }
  return a;
}

function writeWav(file, L, R, bits = 16) {
  const n = L.length;
  const data = Buffer.alloc(n * 4);
  for (let i = 0; i < n; i++) {
    data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, L[i])) * 32767), i * 4);
    data.writeInt16LE(Math.round(Math.max(-1, Math.min(1, R[i])) * 32767), i * 4 + 2);
  }
  const h = Buffer.alloc(44);
  h.write('RIFF', 0); h.writeUInt32LE(36 + data.length, 4); h.write('WAVE', 8); h.write('fmt ', 12);
  h.writeUInt32LE(16, 16); h.writeUInt16LE(1, 20); h.writeUInt16LE(2, 22); h.writeUInt32LE(SR, 24);
  h.writeUInt32LE(SR * 4, 28); h.writeUInt16LE(4, 32); h.writeUInt16LE(bits, 34); h.write('data', 36); h.writeUInt32LE(data.length, 40);
  fs.writeFileSync(file, Buffer.concat([h, data]));
}

const music = freeverb(await renderMusic(), { room: 0.84, damp: 0.4, wet: 0.3 });
const sfx = freeverb(renderSfx(), { room: 0.6, damp: 0.5, wet: 0.08 });
const amb = renderAmbience();
for (const [nm, b] of [['musique', music], ['bruitages', sfx], ['ambiance', amb]]) {
  let pk = 0, at = 0, rms = 0;
  for (let i = 0; i < N; i++) { const v = Math.abs(b.L[i]); rms += b.L[i] * b.L[i]; if (v > pk) { pk = v; at = i / SR; } }
  console.log(`${nm} : crête ${pk.toFixed(2)} à ${at.toFixed(2)} s, rms ${Math.sqrt(rms / N).toFixed(3)}`);
}

// mixage final + limiteur doux
const MUS = 3.2;
const L = new Float32Array(N), R = new Float32Array(N);
let peak = 0;
for (let i = 0; i < N; i++) {
  L[i] = music.L[i] * MUS + sfx.L[i] * 1.0 + amb.L[i] * 1.6;
  R[i] = music.R[i] * MUS + sfx.R[i] * 1.0 + amb.R[i] * 1.6;
  peak = Math.max(peak, Math.abs(L[i]), Math.abs(R[i]));
}
console.log('crête avant limiteur :', peak.toFixed(3));
const norm = 0.95 / Math.max(peak, 0.3);
const soft = (x) => Math.tanh(x * 1.1) / Math.tanh(1.1);
for (let i = 0; i < N; i++) { L[i] = soft(L[i] * norm * 1.25) * 0.94; R[i] = soft(R[i] * norm * 1.25) * 0.94; }
// fondu final
for (let i = 0; i < N; i++) {
  const t = i / SR;
  if (t > DURATION - 1.2) { const g = Math.max(0, (DURATION + 0.3 - t) / 1.5); L[i] *= g; R[i] *= g; }
}
const raw = path.join(OUT, 'bande-son-brute.wav');
writeWav(raw, L, R);
writeWav(path.join(OUT, 'stem-musique.wav'), music.L.map((x) => x * MUS * norm), music.R.map((x) => x * MUS * norm));
// normalisation de sonie (-16 LUFS) et encodages
const final = path.join(OUT, 'bande-son.wav');
execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', raw, '-af', 'loudnorm=I=-16:TP=-1.5:LRA=14', '-ar', String(SR), final]);
execFileSync('ffmpeg', ['-y', '-v', 'error', '-i', final, '-c:a', 'libmp3lame', '-b:a', '160k', path.join(OUT, 'bande-son.mp3')]);
console.log('bande-son prête :', final);
