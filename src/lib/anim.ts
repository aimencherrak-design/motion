import {Easing, interpolate, random} from 'remotion';

export type Ease = (t: number) => number;

export const ease = {
  inOut: Easing.bezier(0.45, 0, 0.2, 1),
  out: Easing.bezier(0.16, 1, 0.3, 1),
  in: Easing.bezier(0.5, 0, 0.9, 0.4),
  back: Easing.out(Easing.back(1.6)),
  backSoft: Easing.out(Easing.back(1.1)),
  linear: (t: number) => t,
};

export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

// Progression 0..1 entre deux frames, avec easing
export const prog = (f: number, a: number, b: number, e: Ease = ease.inOut) =>
  e(clamp((f - a) / (b - a)));

// Piste numérique par images clés : [[frame, valeur, ease?], ...]
export const track = (f: number, kfs: [number, number, Ease?][]) => {
  if (f <= kfs[0][0]) return kfs[0][1];
  for (let i = 1; i < kfs.length; i++) {
    const [f1, v1, e] = kfs[i];
    const [f0, v0] = kfs[i - 1];
    if (f <= f1) return lerp(v0, v1, (e ?? ease.inOut)(clamp((f - f0) / (f1 - f0))));
  }
  return kfs[kfs.length - 1][1];
};

// Bruit lisse déterministe (value noise 1D)
export const noise = (seed: string, t: number) => {
  const i = Math.floor(t);
  const fr = t - i;
  const s = fr * fr * (3 - 2 * fr);
  const a = random(`${seed}-${i}`) * 2 - 1;
  const b = random(`${seed}-${i + 1}`) * 2 - 1;
  return lerp(a, b, s);
};

// Tremblement de caméra qui décroît après un impact
export const shake = (f: number, at: number, amp: number, len = 18, seed = 'sh') => {
  const t = f - at;
  if (t < 0 || t > len) return {x: 0, y: 0};
  const k = Math.pow(1 - t / len, 2) * amp;
  return {x: noise(`${seed}x${at}`, t * 0.9) * k, y: noise(`${seed}y${at}`, t * 0.9 + 7) * k};
};

export const breath = (f: number, period = 90, phase = 0) =>
  Math.sin(((f + phase) / period) * Math.PI * 2);

export const interp = interpolate;
