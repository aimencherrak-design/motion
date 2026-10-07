// Bruitages synthétisés (aucune voix humaine) et petits cris non verbaux de Bibou.
// Chaque générateur renvoie { L, R } (Float32Array) à 48 kHz.
import { SR } from './samples.js';

// ---------------- outils DSP ----------------
function rng(seed = 1) {
  let s = seed >>> 0 || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}
const buf = (sec) => new Float32Array(Math.max(1, Math.round(sec * SR)));
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));

// filtre biquad à fréquence variable (fc peut être une fonction du temps)
function biquad(x, type, fc, q = 0.7, gainDb = 0) {
  const y = new Float32Array(x.length);
  let x1 = 0, x2 = 0, y1 = 0, y2 = 0, b0, b1, b2, a1, a2;
  const coef = (f) => {
    f = clamp(f, 20, SR * 0.45);
    const w = (2 * Math.PI * f) / SR, cs = Math.cos(w), sn = Math.sin(w), al = sn / (2 * q);
    let a0;
    if (type === 'lp') { b0 = (1 - cs) / 2; b1 = 1 - cs; b2 = (1 - cs) / 2; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al; }
    else if (type === 'hp') { b0 = (1 + cs) / 2; b1 = -(1 + cs); b2 = (1 + cs) / 2; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al; }
    else { b0 = al; b1 = 0; b2 = -al; a0 = 1 + al; a1 = -2 * cs; a2 = 1 - al; }
    b0 /= a0; b1 /= a0; b2 /= a0; a1 /= a0; a2 /= a0;
  };
  const dyn = typeof fc === 'function';
  if (!dyn) coef(fc);
  for (let i = 0; i < x.length; i++) {
    if (dyn && i % 32 === 0) coef(fc(i / SR));
    const v = b0 * x[i] + b1 * x1 + b2 * x2 - a1 * y1 - a2 * y2;
    x2 = x1; x1 = x[i]; y2 = y1; y1 = v;
    y[i] = v;
  }
  return y;
}
function noise(sec, seed = 1) {
  const r = rng(seed), b = buf(sec);
  for (let i = 0; i < b.length; i++) b[i] = r() * 2 - 1;
  return b;
}
function env(b, fn) {
  for (let i = 0; i < b.length; i++) b[i] *= fn(i / SR);
  return b;
}
// oscillateur : f(t) fréquence, shape 'sine' | 'tri' | 'saw' | 'square'
function osc(sec, f, shape = 'sine', ph0 = 0) {
  const b = buf(sec);
  let ph = ph0;
  for (let i = 0; i < b.length; i++) {
    const t = i / SR;
    ph += f(t) / SR;
    const p = ph - Math.floor(ph);
    b[i] = shape === 'sine' ? Math.sin(2 * Math.PI * p) : shape === 'tri' ? 1 - 4 * Math.abs(p - 0.5) : shape === 'saw' ? 2 * p - 1 : p < 0.5 ? 1 : -1;
  }
  return b;
}
const ad = (a, d) => (t) => (t < a ? t / a : Math.exp(-(t - a) / d));
const mix = (...bs) => {
  const n = Math.max(...bs.map((b) => b.length));
  const o = new Float32Array(n);
  for (const b of bs) for (let i = 0; i < b.length; i++) o[i] += b[i];
  return o;
};
const gain = (b, g) => { for (let i = 0; i < b.length; i++) b[i] *= g; return b; };
const delay = (b, sec) => { const d = Math.round(sec * SR), o = new Float32Array(b.length + d); o.set(b, d); return o; };
// stéréo avec panoramique (−1 gauche, +1 droite), ou balayage pan(t)
function stereo(b, pan = 0) {
  const L = new Float32Array(b.length), R = new Float32Array(b.length);
  for (let i = 0; i < b.length; i++) {
    const p = typeof pan === 'function' ? pan(i / SR) : pan;
    const a = ((clamp(p, -1, 1) + 1) * Math.PI) / 4;
    L[i] = b[i] * Math.cos(a); R[i] = b[i] * Math.sin(a);
  }
  return { L, R };
}
// modes résonants (bois, caillou, ballon) : somme de sinus amortis
function modes(sec, list, seed = 1) {
  const b = buf(sec);
  for (const [f, a, d] of list) for (let i = 0; i < b.length; i++) { const t = i / SR; b[i] += a * Math.sin(2 * Math.PI * f * t) * Math.exp(-t / d); }
  return b;
}
function click(sec = 0.01, seed = 1, fc = 3000) {
  return env(biquad(noise(sec, seed), 'bp', fc, 1.2), ad(0.0005, sec / 4));
}

// ---------------- voix de Bibou (non verbale) ----------------
// contour : [[t, Hz], ...] ; renvoie un petit cri doux (sinus + harmoniques + souffle)
function chirp(contour, { vib = 0, vibRate = 9, amp = 0.5, breath = 0.04, bright = 0.25, attack = 0.012, release = 0.05, seed = 5 } = {}) {
  const dur = contour[contour.length - 1][0];
  const f = (t) => {
    let i = 1;
    while (i < contour.length - 1 && t > contour[i][0]) i++;
    const [t0, f0] = contour[i - 1], [t1, f1] = contour[i];
    const u = clamp((t - t0) / (t1 - t0 || 1), 0, 1);
    const s = u * u * (3 - 2 * u);
    return (f0 + (f1 - f0) * s) * (1 + vib * Math.sin(2 * Math.PI * vibRate * t));
  };
  const a = osc(dur, f, 'sine');
  const h2 = osc(dur, (t) => f(t) * 2, 'sine');
  const h3 = osc(dur, (t) => f(t) * 3, 'sine');
  const out = new Float32Array(a.length);
  for (let i = 0; i < out.length; i++) out[i] = a[i] + bright * h2[i] + bright * 0.4 * h3[i];
  const br = biquad(noise(dur, seed), 'bp', (t) => f(t) * 1.5, 1.2);
  for (let i = 0; i < out.length; i++) out[i] += br[i] * breath * 4;
  return gain(env(out, (t) => clamp(t / attack, 0, 1) * clamp((dur - t) / release, 0, 1)), amp);
}
function seq(parts) {
  // parts : [[décalage, tampon], ...]
  return mix(...parts.map(([d, b]) => delay(b, d)));
}

// ---------------- bibliothèque ----------------
const G = {};

G.whoosh = (o = {}) => {
  const { dur = 0.45, f0 = 500, f1 = 2200, amp = 0.5, seed = 3, pan0 = -0.4, pan1 = 0.4 } = o;
  const n = biquad(noise(dur, seed), 'bp', (t) => f0 + (f1 - f0) * (t / dur), 1.4);
  env(n, (t) => Math.pow(Math.sin(Math.PI * clamp(t / dur, 0, 1)), 1.6));
  return stereo(gain(n, amp * 1.6), (t) => pan0 + (pan1 - pan0) * (t / dur));
};
G.wind = (o = {}) => {
  const { dur = 3, amp = 0.25, gust = 0, seed = 7, base = 500 } = o;
  const r = rng(seed + 1);
  const ph = [r() * 6, r() * 6];
  const fc = (t) => base * (1 + 0.6 * Math.sin(t * 0.9 + ph[0]) + gust * 2.5 * Math.sin(Math.PI * clamp(t / dur, 0, 1)));
  const L = biquad(noise(dur, seed), 'lp', fc, 0.8), R = biquad(noise(dur, seed + 9), 'lp', fc, 0.8);
  const e = (t) => Math.min(1, t / 0.6, (dur - t) / 0.6) * (0.7 + 0.3 * Math.sin(t * 1.3 + ph[1]) + gust * Math.sin(Math.PI * clamp(t / dur, 0, 1)));
  env(L, e); env(R, e);
  return { L: gain(L, amp * 2), R: gain(R, amp * 2) };
};
G.rustle = (o = {}) => {
  const { dur = 0.8, amp = 0.35, seed = 11, fc = 4500, dens = 120 } = o;
  const r = rng(seed);
  const b = buf(dur);
  const n = biquad(noise(dur, seed), 'hp', fc * 0.6, 0.7);
  for (let i = 0; i < b.length; i++) b[i] = n[i] * 0.25;
  const grains = Math.floor(dens * dur);
  for (let g = 0; g < grains; g++) {
    const t0 = r() * dur * 0.9, len = 0.01 + r() * 0.03;
    const s = Math.floor(t0 * SR), L = Math.floor(len * SR);
    for (let i = 0; i < L && s + i < b.length; i++) b[s + i] += n[s + i] * Math.sin((Math.PI * i) / L) * (0.6 + r());
  }
  env(b, (t) => Math.min(1, t / 0.05) * Math.max(0, 1 - t / dur));
  return stereo(gain(biquad(b, 'bp', fc, 0.5), amp * 2.2), (r() - 0.5) * 0.6);
};
G.thump = (o = {}) => {
  const { f = 90, amp = 0.6, dur = 0.35, soft = 0.4, seed = 2, pan = 0 } = o;
  const s = osc(dur, (t) => f * (1 + 0.8 * Math.exp(-t * 30)), 'sine');
  env(s, ad(0.002, dur / 4));
  const n = env(biquad(noise(dur, seed), 'lp', 900, 0.7), ad(0.001, 0.04));
  return stereo(gain(mix(s, gain(n, soft)), amp), pan);
};
G.step = (o = {}) => {
  const { amp = 0.22, seed = 1, pan = 0, grass = true } = o;
  const n = env(biquad(noise(0.12, seed), 'bp', grass ? 1800 : 900, 0.9), ad(0.003, 0.03));
  const k = env(osc(0.1, (t) => 110 - t * 200), ad(0.001, 0.02));
  return stereo(gain(mix(gain(n, 0.9), gain(k, 0.5)), amp), pan);
};
G.steps = (o = {}) => {
  const { dur = 2, rate = 3.4, amp = 0.2, seed = 3, who = 'one' } = o;
  const parts = [];
  const r = rng(seed);
  for (let t = 0; t < dur; t += 1 / rate) {
    parts.push([t + r() * 0.02, G.step({ amp: amp * (0.8 + r() * 0.4), seed: seed + Math.floor(t * 100), pan: (r() - 0.5) * 0.5 })]);
    if (who === 'kids') parts.push([t + 0.13 + r() * 0.03, G.step({ amp: amp * 0.7, seed: seed + 7 + Math.floor(t * 100), pan: (r() - 0.5) * 0.5 })]);
  }
  return stmix(parts);
};
G.hop = (o = {}) => {
  const { amp = 0.16, seed = 4 } = o;
  const n = env(biquad(noise(0.06, seed), 'bp', 2600, 1.2), ad(0.002, 0.012));
  const k = env(osc(0.05, (t) => 380 - t * 2000), ad(0.001, 0.012));
  return stereo(gain(mix(n, gain(k, 0.6)), amp), 0);
};
G.hops = (o = {}) => {
  const { dur = 2, rate = 6, amp = 0.14, seed = 9 } = o;
  const parts = [];
  for (let t = 0; t < dur; t += 1 / rate) parts.push([t, G.hop({ amp, seed: seed + Math.floor(t * 50) })]);
  return stmix(parts);
};
G.flaps = (o = {}) => {
  const { dur = 1, rate = 17, amp = 0.2, seed = 13 } = o;
  const parts = [];
  for (let t = 0; t < dur; t += 1 / rate) {
    const n = env(biquad(noise(0.05, seed + Math.floor(t * 90)), 'bp', 1400, 0.9), ad(0.004, 0.012));
    parts.push([t, stereo(gain(n, amp * (0.8 + 0.2 * Math.sin(t * 7))), 0)]);
  }
  return stmix(parts);
};
G.ballBounce = (o = {}) => {
  const { v = 1, seed = 5 } = o;
  const s = osc(0.25, (t) => 160 + 140 * Math.exp(-t * 40), 'sine');
  env(s, ad(0.001, 0.05));
  const ring = modes(0.25, [[420, 0.25, 0.04], [690, 0.12, 0.03]]);
  const c = click(0.012, seed, 2500);
  return stereo(gain(mix(s, ring, gain(c, 0.5)), 0.5 * v), 0.1);
};
G.catch = (o = {}) => {
  const { amp = 0.4, seed = 6 } = o;
  const slap = env(biquad(noise(0.08, seed), 'bp', 1200, 0.8), ad(0.001, 0.018));
  const b = G.ballBounce({ v: 0.6 }).L;
  return stereo(gain(mix(gain(slap, 1.2), b), amp), 0);
};
G.boing = (o = {}) => {
  const { dur = 0.6, f = 180, amp = 0.35, depth = 0.45, rate = 14 } = o;
  const s = osc(dur, (t) => f * (1 + depth * Math.sin(2 * Math.PI * rate * t) * Math.exp(-t * 5)) * (1 + 0.6 * Math.exp(-t * 10)), 'tri');
  const out = biquad(s, 'lp', 1800, 0.9);
  env(out, ad(0.002, dur / 3));
  return stereo(gain(out, amp), 0);
};
G.pop = (o = {}) => {
  const { amp = 0.35, f0 = 500, f1 = 1500, dur = 0.08 } = o;
  const s = osc(dur, (t) => f0 + (f1 - f0) * Math.min(1, t / dur), 'sine');
  env(s, ad(0.001, dur / 3));
  return stereo(gain(mix(s, gain(click(0.006, 3, 4000), 0.6)), amp), 0);
};
G.knock = (o = {}) => {
  const { amp = 0.5, m = [[520, 1, 0.05], [1310, 0.5, 0.03], [2250, 0.25, 0.02]], seed = 8, low = 0.4 } = o;
  const md = modes(0.4, m);
  const th = env(osc(0.2, (t) => 120 - t * 100), ad(0.001, 0.04));
  const c = click(0.01, seed, 3500);
  return stereo(gain(mix(md, gain(th, low), gain(c, 0.4)), amp), 0);
};
G.creak = (o = {}) => {
  const { dur = 0.7, amp = 0.35, f = 160 } = o;
  const s = osc(dur, (t) => f * (1 + 0.25 * Math.sin(t * 9) + 0.15 * Math.sin(t * 23)), 'saw');
  // frottement : impulsions irrégulières
  const r = rng(12);
  for (let i = 0; i < s.length; i++) s[i] *= 0.5 + 0.5 * (r() < 0.3 ? 1 : 0.2);
  const out = mix(biquad(s, 'bp', 700, 4), gain(biquad(s, 'bp', 1450, 5), 0.6));
  env(out, (t) => Math.sin(Math.PI * clamp(t / dur, 0, 1)));
  return stereo(gain(out, amp), -0.15);
};
G.crack = (o = {}) => {
  const { amp = 0.6, seed = 21 } = o;
  const tr = env(biquad(noise(0.05, seed), 'hp', 1500, 0.7), ad(0.0005, 0.008));
  const wood = modes(0.35, [[380, 0.6, 0.05], [820, 0.4, 0.04], [1650, 0.2, 0.02]]);
  const r = rng(seed);
  const parts = [[0, tr], [0, wood]];
  for (let i = 0; i < 6; i++) parts.push([0.03 + r() * 0.25, gain(env(biquad(noise(0.02, seed + i), 'hp', 2500, 0.7), ad(0.0005, 0.004)), 0.5 * r())]);
  return stereo(gain(seq(parts), amp), -0.15);
};
G.chime = (o = {}) => {
  // scintillement magique (cloches aiguës)
  const { dur = 1.2, amp = 0.2, n = 8, seed = 31, base = 2400 } = o;
  const r = rng(seed);
  const parts = [];
  for (let i = 0; i < n; i++) {
    const f = base * Math.pow(2, Math.floor(r() * 12) / 12 + Math.floor(r() * 2));
    const b = modes(0.8, [[f, 0.5, 0.25], [f * 2.76, 0.15, 0.1]]);
    parts.push([r() * dur * 0.7, stereo(gain(b, amp * (0.5 + r() * 0.5)), r() * 1.4 - 0.7)]);
  }
  return stmix(parts);
};
G.slideWhistle = (o = {}) => {
  const { dur = 3.5, f0 = 1600, f1 = 450, amp = 0.22, wobble = 0.3 } = o;
  const f = (t) => (f0 + (f1 - f0) * (t / dur)) * (1 + 0.03 * Math.sin(2 * Math.PI * 6 * t)) + wobble * 200 * Math.sin(t * 5);
  const s = osc(dur, f, 'sine');
  const br = biquad(noise(dur, 4), 'bp', (t) => f(t), 3);
  const out = mix(s, gain(br, 0.25));
  env(out, (t) => Math.min(1, t / 0.08, (dur - t) / 0.15));
  return stereo(gain(out, amp), 0);
};
G.tweets = (o = {}) => {
  const { dur = 2, amp = 0.12, seed = 41 } = o;
  const parts = [];
  for (let t = 0, i = 0; t < dur; t += 0.28, i++) {
    const c = chirp([[0, 3400], [0.05, 4600], [0.1, 3800]], { amp: 1, bright: 0.05, breath: 0 });
    parts.push([t, stereo(gain(c, amp), Math.sin(i * 1.7))]);
  }
  return stmix(parts);
};
G.birds = (o = {}) => {
  const { dur = 4, amp = 0.06, seed = 51 } = o;
  const r = rng(seed);
  const parts = [];
  for (let t = 0.2; t < dur - 0.5; t += 0.4 + r() * 1.0) {
    const f = 2600 + r() * 1800;
    const n = 2 + Math.floor(r() * 3);
    for (let k = 0; k < n; k++) {
      const c = chirp([[0, f], [0.04, f * (1.2 + r() * 0.3)], [0.08, f * 0.95]], { amp: 1, bright: 0.05, breath: 0, release: 0.03 });
      parts.push([t + k * 0.11, stereo(gain(c, amp * (0.5 + r() * 0.5)), r() * 1.6 - 0.8)]);
    }
  }
  return stmix(parts, dur);
};
G.crickets = (o = {}) => {
  const { dur = 3, amp = 0.05 } = o;
  const s = osc(dur, () => 4600, 'sine');
  env(s, (t) => {
    const g = (t * 3.2) % 1;
    const pulse = g < 0.35 ? (Math.sin(2 * Math.PI * 30 * t) > 0 ? 1 : 0) : 0;
    return pulse * Math.min(1, t / 0.2, (dur - t) / 0.3);
  });
  const s2 = delay(gain(s.slice(), 0.6), 0.47);
  return { L: gain(biquad(s, 'bp', 4600, 3), amp * 2), R: gain(biquad(s2, 'bp', 4600, 3), amp * 2) };
};
G.water = (o = {}) => {
  const { dur = 4, amp = 0.06, seed = 61 } = o;
  const n = biquad(noise(dur, seed), 'bp', 1800, 0.6);
  const r = rng(seed);
  for (let i = 0; i < n.length; i++) n[i] *= 0.5 + 0.5 * Math.sin(i / 300 + r() * 0.3);
  const parts = [[0, { L: gain(n.slice(), amp), R: gain(n.slice(), amp * 0.9) }]];
  for (let t = 0; t < dur; t += 0.05 + r() * 0.12) {
    const f = 900 + r() * 1800;
    parts.push([t, stereo(gain(env(osc(0.04, (x) => f * (1 + x * 8), 'sine'), ad(0.002, 0.008)), amp * 0.6), r() - 0.5)]);
  }
  return stmix(parts, dur);
};
G.clap = (o = {}) => {
  const { n = 4, rate = 6, amp = 0.25, seed = 71 } = o;
  const parts = [];
  for (let i = 0; i < n; i++) parts.push([i / rate, stereo(gain(env(biquad(noise(0.05, seed + i), 'bp', 1400, 1), ad(0.001, 0.012)), amp), 0.3)]);
  return stmix(parts);
};
G.squish = (o = {}) => {
  const { amp = 0.3 } = o;
  const n = env(biquad(noise(0.35, 81), 'lp', (t) => 1200 - t * 2000, 1.5), (t) => Math.sin(Math.PI * clamp(t / 0.35, 0, 1)));
  const sq = chirp([[0, 900], [0.12, 1500], [0.22, 1300]], { amp: 0.3, bright: 0.6 });
  return stereo(mix(gain(n, amp * 1.5), delay(sq, 0.05)), 0);
};
G.puffUp = (o = {}) => {
  const { amp = 0.3 } = o;
  const s = osc(0.5, (t) => 200 + t * 500, 'sine');
  env(s, (t) => Math.sin(Math.PI * clamp(t / 0.5, 0, 1)));
  const n = env(biquad(noise(0.5, 91), 'bp', (t) => 600 + t * 2000, 1), (t) => Math.sin(Math.PI * clamp(t / 0.5, 0, 1)));
  return stereo(gain(mix(gain(s, 0.6), n), amp), 0);
};
G.spin = (o = {}) => {
  const { dur = 0.8, amp = 0.3 } = o;
  const n = biquad(noise(dur, 101), 'bp', (t) => 800 + t * 2500, 2);
  env(n, (t) => (0.5 + 0.5 * Math.sin(2 * Math.PI * (12 + t * 10) * t)) * Math.sin(Math.PI * clamp(t / dur, 0, 1)));
  return stereo(gain(n, amp * 2), (t) => Math.sin(t * 20) * 0.6);
};
G.roll = (o = {}) => {
  const { dur = 2, amp = 0.25 } = o;
  const n = biquad(noise(dur, 111), 'lp', 380, 0.8);
  env(n, (t) => (0.7 + 0.3 * Math.sin(2 * Math.PI * 9 * t)) * Math.min(1, t / 0.1, (dur - t) / 0.2));
  const g = biquad(noise(dur, 112), 'hp', 3000, 0.7);
  env(g, (t) => 0.15 * Math.min(1, t / 0.1, (dur - t) / 0.2));
  return stereo(gain(mix(gain(n, 2), g), amp), (t) => -0.6 + 1.2 * (t / dur));
};
G.zip = (o = {}) => {
  const { amp = 0.3 } = o;
  const s = osc(0.18, (t) => 300 + t * 9000, 'tri');
  env(s, ad(0.005, 0.06));
  return mix2(stereo(gain(biquad(s, 'lp', 4000), amp * 0.7), 0), G.whoosh({ dur: 0.35, f0: 800, f1: 3000, amp: amp * 0.8 }));
};
G.flump = (o = {}) => {
  const { amp = 0.6 } = o;
  return mix2(G.thump({ f: 70, amp: amp, dur: 0.5, soft: 0.8 }), G.rustle({ dur: 1.0, amp: amp * 0.8, seed: 121, fc: 3000, dens: 200 }));
};

// --------- Bibou ---------
const B = {
  effort: () => chirp([[0, 950], [0.35, 1350], [0.5, 1250]], { vib: 0.04, vibRate: 22, amp: 0.4 }),
  huh: () => chirp([[0, 1100], [0.18, 1750]], { amp: 0.4 }),
  whistle: () => seq([[0, chirp([[0, 2100], [0.12, 2400]], { amp: 0.25, bright: 0.02 })], [0.18, chirp([[0, 2400], [0.1, 2600], [0.25, 2000]], { amp: 0.25, bright: 0.02 })]]),
  determined: () => seq([[0, chirp([[0, 1400], [0.06, 1000], [0.14, 1250]], { amp: 0.45 })]]),
  pant: () => seq(Array.from({ length: 6 }, (_, i) => [i * 0.12, chirp([[0, 1500], [0.06, 1250]], { amp: 0.22, breath: 0.12 })])),
  land: () => chirp([[0, 1800], [0.05, 1500]], { amp: 0.25 }),
  strain: () => chirp([[0, 900], [0.9, 1500]], { vib: 0.06, vibRate: 18, amp: 0.38 }),
  strain2: () => chirp([[0, 1000], [1.0, 1900]], { vib: 0.09, vibRate: 24, amp: 0.42 }),
  shake: () => chirp([[0, 1200], [0.3, 1100]], { vib: 0.12, vibRate: 30, amp: 0.25 }),
  grumble: () => chirp([[0, 650], [0.55, 580]], { vib: 0.08, vibRate: 26, amp: 0.35, bright: 0.5 }),
  hurt: () => chirp([[0, 2400], [0.16, 1500]], { amp: 0.45 }),
  tiny: () => chirp([[0, 1900], [0.06, 2200]], { amp: 0.22 }),
  heroic: () => seq([[0, chirp([[0, 1000], [0.08, 1050]], { amp: 0.4 })], [0.12, chirp([[0, 1300], [0.08, 1350]], { amp: 0.4 })], [0.24, chirp([[0, 1700], [0.35, 1750]], { amp: 0.45, vib: 0.02 })]]),
  charge: () => chirp([[0, 1100], [0.5, 2100], [0.65, 2000]], { vib: 0.03, amp: 0.45 }),
  happy: () => seq([[0, chirp([[0, 1300], [0.07, 1800]], { amp: 0.35 })], [0.1, chirp([[0, 1500], [0.08, 2100]], { amp: 0.35 })]]),
  ready: () => seq([[0, chirp([[0, 1700], [0.05, 1900]], { amp: 0.35 })], [0.1, chirp([[0, 1900], [0.07, 2200]], { amp: 0.38 })]]),
  launch: () => chirp([[0, 1200], [0.25, 2600], [0.8, 2700]], { vib: 0.04, vibRate: 12, amp: 0.45 }),
  triumph: () => seq([[0, chirp([[0, 1300], [0.07, 1500]], { amp: 0.4 })], [0.1, chirp([[0, 1600], [0.07, 1800]], { amp: 0.4 })], [0.2, chirp([[0, 1900], [0.07, 2100]], { amp: 0.4 })], [0.3, chirp([[0, 2200], [0.4, 2400]], { amp: 0.45, vib: 0.03 })]]),
  gulp: () => chirp([[0, 700], [0.12, 420]], { amp: 0.4, bright: 0.6 }),
  eek: () => chirp([[0, 2300], [0.7, 2500]], { vib: 0.1, vibRate: 11, amp: 0.35 }),
  giggle: () => seq(Array.from({ length: 6 }, (_, i) => [i * 0.11, chirp([[0, 1900 - i * 60], [0.05, 2200 - i * 60], [0.08, 1800 - i * 60]], { amp: 0.3 })])),
  proud: () => chirp([[0, 850], [0.25, 950], [0.6, 900]], { vib: 0.03, vibRate: 6, amp: 0.3, bright: 0.4 }),
  offer: () => chirp([[0, 1400], [0.1, 1800], [0.22, 1500]], { amp: 0.35 }),
  squeeze: () => chirp([[0, 1600], [0.1, 2300], [0.3, 2100]], { amp: 0.4, bright: 0.7, vib: 0.05, vibRate: 20 }),
  coo: () => chirp([[0, 1300], [0.3, 1100], [0.7, 1000]], { vib: 0.04, vibRate: 7, amp: 0.3 }),
  hup: () => chirp([[0, 1200], [0.08, 1600]], { amp: 0.4 }),
  triumphShort: () => seq([[0, chirp([[0, 1600], [0.06, 1900]], { amp: 0.4 })], [0.09, chirp([[0, 2000], [0.15, 2300]], { amp: 0.4 })]]),
  uhOh: () => seq([[0, chirp([[0, 1350], [0.15, 1350]], { amp: 0.35 })], [0.2, chirp([[0, 1050], [0.25, 1000]], { amp: 0.35 })]]),
  hopChirp: () => chirp([[0, 1700], [0.05, 2000]], { amp: 0.2 }),
};
const bib = (name, pan = 0) => () => stereo(B[name](), pan);

// mélange une liste [[décalage, {L,R}], ...]
function stmix(parts, minDur = 0) {
  let n = Math.round(minDur * SR);
  for (const [d, s] of parts) n = Math.max(n, Math.round(d * SR) + s.L.length);
  const L = new Float32Array(n), R = new Float32Array(n);
  for (const [d, s] of parts) {
    const o = Math.round(d * SR);
    for (let i = 0; i < s.L.length; i++) { L[o + i] += s.L[i]; R[o + i] += s.R[i]; }
  }
  return { L, R };
}
function mix2(...ss) { return stmix(ss.map((s) => [0, s])); }

// ---------------- table : nom de repère -> son ----------------
// Les réactions des enfants ne sont jamais vocales : elles sont portées par la musique
// et par de discrets bruits de vêtements.
const cloth = (amp = 0.12) => () => G.rustle({ dur: 0.35, amp, seed: 141, fc: 2200, dens: 60 });
export const SFX = {
  ball_bounce: (o) => G.ballBounce(o),
  ball_spot_ding: () => G.chime({ n: 4, amp: 0.15, base: 3000 }),
  bib_charge: bib('charge'), bib_coo: bib('coo'), bib_determined: bib('determined'), bib_eek: bib('eek'),
  bib_effort: bib('effort'), bib_giggle: bib('giggle'), bib_grumble: bib('grumble'), bib_gulp: bib('gulp'),
  bib_happy: bib('happy'), bib_heroic_chirp: bib('heroic'), bib_hop: bib('hopChirp'), bib_huh: bib('huh'),
  bib_hup: bib('hup'), bib_land: bib('land'), bib_launch_squeak: bib('launch'), bib_offer_chirp: bib('offer'),
  bib_pant: bib('pant'), bib_proud_hum: bib('proud'), bib_ready_chirp: bib('ready'), bib_shake: () => mix2(stereo(B.shake(), 0), G.flaps({ dur: 0.35, rate: 28, amp: 0.12 })),
  bib_squeak_hurt: bib('hurt'), bib_squeeze_squeak: bib('squeeze'), bib_strain: bib('strain'), bib_strain2: bib('strain2'),
  bib_tiny_squeak: bib('tiny'), bib_triumph: bib('triumph'), bib_triumph_short: bib('triumphShort'), bib_uh_oh: bib('uhOh'),
  bib_whistle: bib('whistle'),
  birds_ambience: (o) => G.birds({ dur: o.dur || 3, amp: 0.08 }),
  blink: () => G.pop({ amp: 0.12, f0: 1800, f1: 2600, dur: 0.035 }),
  boing: () => G.boing({ f: 200, amp: 0.3 }),
  bonk: () => G.knock({ amp: 0.55, m: [[260, 1, 0.06], [610, 0.5, 0.04], [1150, 0.2, 0.02]], low: 0.6 }),
  branch_crack: () => G.crack({ amp: 0.65 }),
  branch_creak: () => G.creak({ dur: 0.75, amp: 0.3 }),
  breath_in: cloth(0.08),
  bump_boing: () => mix2(G.thump({ f: 120, amp: 0.3, dur: 0.2 }), G.boing({ f: 260, amp: 0.2, dur: 0.4 })),
  bush_crash: () => mix2(G.thump({ f: 85, amp: 0.5 }), G.rustle({ dur: 1.1, amp: 0.55, seed: 151, fc: 3200, dens: 220 }), G.crack({ amp: 0.15, seed: 152 })),
  catch: () => G.catch({ amp: 0.4 }),
  catch_soft: () => G.catch({ amp: 0.25 }),
  climb: (o) => stmix(Array.from({ length: Math.floor((o.dur || 1) * 5) }, (_, i) => [i * 0.2, mix2(G.rustle({ dur: 0.18, amp: 0.15, seed: 160 + i, fc: 2500, dens: 80 }), G.step({ amp: 0.12, seed: 170 + i, grass: false }))])),
  cricket_silence: (o) => G.crickets({ dur: o.dur || 2.5, amp: 0.05 }),
  determined_sting: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  dizzy_tweets: (o) => G.tweets({ dur: o.dur || 2, amp: 0.09 }),
  falling_whistle: (o) => G.slideWhistle({ dur: o.dur || 0.55, f0: 2400, f1: 1200, amp: 0.16, wobble: 0 }),
  flap_fast: (o) => G.flaps({ dur: o.dur || 0.9, rate: 18, amp: 0.18 }),
  flop_flat: () => mix2(G.thump({ f: 95, amp: 0.45, dur: 0.3, soft: 0.6 }), G.squish({ amp: 0.15 })),
  flop_soft: () => G.thump({ f: 110, amp: 0.4, dur: 0.3, soft: 0.6 }),
  freeze_sting: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  grab_ball: () => G.catch({ amp: 0.35 }),
  grab_branch: () => mix2(G.knock({ amp: 0.2, m: [[480, 1, 0.04], [1100, 0.4, 0.02]], low: 0.2 }), G.rustle({ dur: 0.4, amp: 0.25, seed: 181 })),
  grass_flump: () => G.flump({ amp: 0.65 }),
  grass_rustle_slow: () => G.rustle({ dur: 1.4, amp: 0.2, seed: 191, fc: 2800, dens: 70 }),
  gulp_leo: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  hands_ready: cloth(0.1),
  harp_gliss: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  hero_fanfare_hit: () => G.chime({ n: 10, amp: 0.12, base: 2600, dur: 1.4 }),
  hero_rise: () => G.whoosh({ dur: 2.4, f0: 300, f1: 2400, amp: 0.25, pan0: 0, pan1: 0 }),
  hops: (o) => G.hops({ dur: o.dur || 1, rate: o.rate || 6 }),
  hug_squish: () => G.squish({ amp: 0.3 }),
  idea_pop: () => G.pop({ amp: 0.3, f0: 600, f1: 2000, dur: 0.07 }),
  idea_ting: () => G.chime({ n: 3, amp: 0.15, base: 3200, dur: 0.3 }),
  jump: () => mix2(G.whoosh({ dur: 0.35, f0: 400, f1: 1800, amp: 0.25 }), G.step({ amp: 0.3 })),
  jump_small: () => mix2(G.whoosh({ dur: 0.25, f0: 700, f1: 2400, amp: 0.18 }), G.hop({ amp: 0.2 })),
  kids_happy_gasp: cloth(0.1),
  kids_laugh_breath: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  kids_oof: () => G.thump({ f: 100, amp: 0.3, dur: 0.25 }),
  kids_surprise: cloth(0.12),
  land_puff: () => mix2(G.thump({ f: 85, amp: 0.45 }), G.rustle({ dur: 0.4, amp: 0.2, seed: 201, fc: 1500 })),
  land_soft: () => G.thump({ f: 95, amp: 0.35, dur: 0.3 }),
  leaves_rustle: () => G.rustle({ dur: 1.4, amp: 0.35, seed: 211, fc: 3800, dens: 160 }),
  leaves_rustle_small: () => G.rustle({ dur: 0.8, amp: 0.2, seed: 221, fc: 3800, dens: 100 }),
  leo_aha: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  leo_effort: cloth(0.12),
  leo_hmm: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  leo_windup: () => G.whoosh({ dur: 0.6, f0: 300, f1: 900, amp: 0.15 }),
  lever_thwack: () => mix2(G.knock({ amp: 0.85, m: [[180, 1, 0.08], [520, 0.7, 0.05], [1150, 0.3, 0.03]], low: 0.9 }), G.thump({ f: 60, amp: 0.6, dur: 0.5 })),
  look_tick: () => G.knock({ amp: 0.1, m: [[2600, 1, 0.012]], low: 0 }),
  look_tick_double: () => stmix([[0, G.knock({ amp: 0.1, m: [[2600, 1, 0.012]], low: 0 })], [0.12, G.knock({ amp: 0.1, m: [[2900, 1, 0.012]], low: 0 })]]),
  magic_shimmer: () => G.chime({ n: 14, amp: 0.1, base: 2200, dur: 1.6 }),
  maya_aww_breath: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  maya_cheer_clap: () => G.clap({ n: 5, rate: 6, amp: 0.22 }),
  maya_giggle_breath: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  maya_tsk: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  music_cut: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  near_miss_swish: () => G.whoosh({ dur: 0.3, f0: 1200, f1: 3500, amp: 0.3, pan0: -0.7, pan1: 0.7 }),
  nods: cloth(0.08),
  poc: () => mix2(G.knock({ amp: 0.75, m: [[780, 1, 0.05], [1360, 0.6, 0.035], [2240, 0.3, 0.02]], low: 0.5 }), G.ballBounce({ v: 0.6 })),
  point_swish: () => G.whoosh({ dur: 0.22, f0: 900, f1: 2600, amp: 0.15 }),
  pop: () => G.pop({ amp: 0.4, f0: 400, f1: 1600, dur: 0.09 }),
  pop_small: () => G.pop({ amp: 0.22, f0: 700, f1: 1800, dur: 0.06 }),
  puff_up: () => G.puffUp({ amp: 0.3 }),
  roll: (o) => G.roll({ dur: o.dur || 2, amp: 0.3 }),
  salute_swish: () => G.whoosh({ dur: 0.2, f0: 1500, f1: 3500, amp: 0.12 }),
  scrape: () => G.rustle({ dur: 0.22, amp: 0.25, seed: 231, fc: 2800, dens: 140 }),
  sheepish_giggle: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  sheepish_sting: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  shrug_sigh: cloth(0.1),
  slide_down: () => G.rustle({ dur: 1.3, amp: 0.25, seed: 241, fc: 1600, dens: 300 }),
  slide_whistle_down: (o) => G.slideWhistle({ dur: o.dur || 3.6, f0: 1700, f1: 500, amp: 0.15 }),
  slip_boing: () => G.boing({ f: 230, amp: 0.35, dur: 0.7, depth: 0.6 }),
  sparkle: () => G.chime({ n: 8, amp: 0.12, base: 2800, dur: 0.9 }),
  spin_swirl: () => G.spin({ dur: 0.75, amp: 0.25 }),
  step: () => G.step({ amp: 0.25 }),
  steps_run: (o) => G.steps({ dur: o.dur || 2, rate: o.rate || 3.6, who: o.who || 'one', amp: 0.18 }),
  steps_walk: (o) => G.steps({ dur: o.dur || 2, rate: o.rate || 2.6, who: 'kids', amp: 0.13 }),
  tap: () => G.knock({ amp: 0.12, m: [[900, 1, 0.02]], low: 0.1 }),
  thinking_tick: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  throw_big: () => G.whoosh({ dur: 0.5, f0: 300, f1: 2000, amp: 0.35 }),
  toss: () => G.whoosh({ dur: 0.25, f0: 600, f1: 1600, amp: 0.12 }),
  uh_oh_sting: () => ({ L: new Float32Array(1), R: new Float32Array(1) }),
  whoosh_fast: () => G.whoosh({ dur: 0.3, f0: 900, f1: 3200, amp: 0.35, pan0: -0.8, pan1: 0.8 }),
  whoosh_small: () => G.whoosh({ dur: 0.25, f0: 800, f1: 2200, amp: 0.2 }),
  whoosh_up: () => G.whoosh({ dur: 0.8, f0: 400, f1: 2800, amp: 0.3, pan0: 0, pan1: 0.2 }),
  wiggle: (o) => G.flaps({ dur: o.dur || 1, rate: 24, amp: 0.08 }),
  wind_gust: () => G.wind({ dur: 3.2, amp: 0.3, gust: 1, seed: 251 }),
  wind_high: (o) => G.wind({ dur: o.dur || 2, amp: 0.25, gust: 0.4, seed: 261, base: 900 }),
  wind_soft: () => G.wind({ dur: 3.2, amp: 0.15, gust: 0.2, seed: 271 }),
  wood_knock: () => G.knock({ amp: 0.35, m: [[420, 1, 0.05], [1050, 0.4, 0.03]], low: 0.3 }),
  zip_run: () => G.zip({ amp: 0.3 }),
};

// ambiances continues
export const AMB = {
  birds: (dur, seed) => G.birds({ dur, amp: 0.05, seed }),
  wind: (dur, seed, amp = 0.08) => G.wind({ dur, amp, seed }),
  water: (dur, seed) => G.water({ dur, amp: 0.05, seed }),
  crickets: (dur) => G.crickets({ dur, amp: 0.04 }),
};

// Niveau de crête visé pour chaque bruitage (le générateur est ensuite normalisé).
const LV = {
  impact: 0.45, medium: 0.3, small: 0.18, tiny: 0.1, voice: 0.32, whoosh: 0.28, bed: 0.16,
};
export const TARGET = {
  ball_bounce: LV.medium, ball_spot_ding: LV.small, birds_ambience: LV.tiny, blink: LV.tiny, boing: LV.medium,
  bonk: LV.impact, branch_crack: LV.impact, branch_creak: LV.medium, breath_in: LV.tiny, bump_boing: LV.medium,
  bush_crash: LV.impact, catch: LV.medium, catch_soft: LV.small, climb: LV.small, cricket_silence: 0.08,
  dizzy_tweets: LV.small, falling_whistle: LV.small, flap_fast: LV.small, flop_flat: LV.medium, flop_soft: LV.medium,
  grab_ball: LV.small, grab_branch: LV.small, grass_flump: LV.impact, grass_rustle_slow: LV.small, hands_ready: LV.tiny,
  hero_fanfare_hit: LV.small, hero_rise: LV.whoosh, hops: LV.small, hug_squish: LV.small, idea_pop: LV.small,
  idea_ting: LV.small, jump: LV.small, jump_small: LV.small, kids_happy_gasp: LV.tiny, kids_oof: LV.small,
  kids_surprise: LV.tiny, land_puff: LV.medium, land_soft: LV.small, leaves_rustle: LV.small, leaves_rustle_small: LV.tiny,
  leo_effort: LV.tiny, leo_windup: LV.small, lever_thwack: 0.55, look_tick: LV.tiny, look_tick_double: LV.tiny,
  magic_shimmer: LV.small, maya_cheer_clap: LV.small, near_miss_swish: LV.whoosh, nods: LV.tiny, poc: 0.5,
  point_swish: LV.tiny, pop: LV.medium, pop_small: LV.small, puff_up: LV.small, roll: LV.small, salute_swish: LV.tiny,
  scrape: LV.small, shrug_sigh: LV.tiny, slide_down: LV.small, slide_whistle_down: LV.medium, slip_boing: LV.medium,
  sparkle: LV.small, spin_swirl: LV.small, step: LV.small, steps_run: LV.small, steps_walk: 0.12, tap: LV.tiny,
  throw_big: LV.whoosh, toss: LV.small, whoosh_fast: LV.whoosh, whoosh_small: LV.small, whoosh_up: LV.whoosh,
  wiggle: LV.tiny, wind_gust: LV.bed, wind_high: LV.bed, wind_soft: 0.1, wood_knock: LV.medium, zip_run: LV.whoosh,
};
export function targetLevel(name) {
  if (TARGET[name] !== undefined) return TARGET[name];
  if (name.startsWith('bib_')) return name === 'bib_whistle' ? 0.2 : LV.voice;
  return 0.25;
}
