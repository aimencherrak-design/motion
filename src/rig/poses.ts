import {Ease, clamp, ease, lerp} from '../lib/anim';

// Angles en degrés. Le perso regarde vers +x (le miroir est appliqué au rendu).
// s1..s3 : colonne (relatif, + = penché en avant) · nk/hd : nuque/tête
// a* : bras (absolu, 0 = pendant, 90 = tendu devant) · e* : coude (+ = plié vers l'avant)
// l* : cuisse (absolu, + = vers l'avant) · k* : genou (+ = plié) · f* : cheville
// L = membres du côté lointain, R = côté proche de la caméra
export type Pose = {
  x: number; y: number; rot: number;
  s1: number; s2: number; s3: number; nk: number; hd: number;
  aL: number; eL: number; wL: number;
  aR: number; eR: number; wR: number;
  lL: number; kL: number; fL: number;
  lR: number; kR: number; fR: number;
};

export const STAND: Pose = {
  x: 0, y: 0, rot: 0,
  s1: 0, s2: 0, s3: 0, nk: 2, hd: 0,
  aL: -6, eL: 10, wL: 0,
  aR: 6, eR: 12, wR: 0,
  lL: -4, kL: 2, fL: 0,
  lR: 4, kR: 2, fR: 0,
};

export const P = (o: Partial<Pose>, base: Pose = STAND): Pose => ({...base, ...o});

export const mix = (a: Pose, b: Pose, t: number): Pose => {
  const o = {} as Pose;
  (Object.keys(a) as (keyof Pose)[]).forEach((k) => (o[k] = lerp(a[k], b[k], t)));
  return o;
};

export const add = (a: Pose, d: Partial<Pose>): Pose => {
  const o = {...a};
  (Object.keys(d) as (keyof Pose)[]).forEach((k) => (o[k] = a[k] + (d[k] ?? 0)));
  return o;
};

// Piste de poses : [[frame, pose, ease?]]
export const poseTrack = (f: number, kfs: [number, Pose, Ease?][]): Pose => {
  if (f <= kfs[0][0]) return kfs[0][1];
  for (let i = 1; i < kfs.length; i++) {
    const [f1, p1, e] = kfs[i];
    const [f0, p0] = kfs[i - 1];
    if (f <= f1) return mix(p0, p1, (e ?? ease.inOut)(clamp((f - f0) / (f1 - f0))));
  }
  return kfs[kfs.length - 1][1];
};

// ---- Bibliothèque ----------------------------------------------------------

// Debout voûté sur son téléphone (main proche tient le téléphone devant le visage)
export const SLOUCH_PHONE = (bend = 12): Pose =>
  P({
    s1: bend * 0.3, s2: bend * 0.5, s3: bend * 0.7, nk: 18 + bend * 0.4, hd: 14,
    aR: 28, eR: 112, wR: -10,
    aL: 8, eL: 30,
    lL: -3, kL: 4, lR: 3, kR: 6, y: -bend * 0.4,
  });

export const UPRIGHT = (open = 1): Pose =>
  P({s1: -1, s2: -1, s3: -2 * open, nk: 0, hd: -3, aL: -10 * open, eL: 8, aR: 10 * open, eR: 8, lL: -6, lR: 6});

// Assis avachi (hanche sur le coussin, jambes allongées)
export const SLUMP_SIT: Pose = P({
  y: 0, s1: -24, s2: 6, s3: 16, nk: 26, hd: 14,
  aR: 40, eR: 104, wR: -12,
  aL: 14, eL: 46,
  lL: 72, kL: 10, fL: 18,
  lR: 66, kR: 6, fR: 22,
});

// Assis droit à un bureau, en train d'écrire
export const DESK_SIT: Pose = P({
  s1: 6, s2: 8, s3: 10, nk: 14, hd: 16,
  aR: 34, eR: 60, wR: 10,
  aL: 44, eL: 52, wL: 0,
  lL: 86, kL: 88, fL: -6,
  lR: 92, kR: 96, fR: -4,
});

export const POINT_LAUGH: Pose = P({
  s1: 4, s2: 10, s3: 8, nk: -6, hd: -12,
  aR: 82, eR: 6, wR: 0,
  aL: 30, eL: 120,
  lL: -8, kL: 10, lR: 10, kR: 12,
});

// Cycle de marche (8 poses) — t en cycles
export const walk = (t: number, stride = 1, base: Pose = STAND): Pose => {
  const ph = t * Math.PI * 2;
  const s = Math.sin(ph);
  const c = Math.cos(ph);
  return {
    ...base,
    y: base.y - Math.abs(Math.cos(ph)) * 8 * stride + 4,
    lR: base.lR + s * 24 * stride,
    kR: base.kR + Math.max(0, -c) * 34 * stride + 4,
    fR: base.fR + Math.max(0, s) * 10,
    lL: base.lL - s * 24 * stride,
    kL: base.kL + Math.max(0, c) * 34 * stride + 4,
    fL: base.fL + Math.max(0, -s) * 10,
    aR: base.aR - s * 20 * stride,
    aL: base.aL + s * 20 * stride,
    eR: base.eR + 10 + Math.max(0, -s) * 12,
    eL: base.eL + 10 + Math.max(0, s) * 12,
    s3: base.s3 + Math.abs(c) * 1.5,
  };
};

// Cycle de course (6 poses) — bras qui pompent, phase de suspension
export const run = (t: number, base: Pose = STAND): Pose => {
  const ph = t * Math.PI * 2;
  const s = Math.sin(ph);
  const c = Math.cos(ph);
  return {
    ...base,
    y: base.y - Math.max(0, Math.sin(ph * 2)) * 22 + 10,
    s1: base.s1 + 8, s2: base.s2 + 4, s3: base.s3 + 2, nk: base.nk - 6, hd: base.hd - 4,
    lR: s * 46 + 6,
    kR: 20 + Math.max(0, -c) * 92 + Math.max(0, c) * 12,
    fR: Math.max(0, s) * 8 - 6,
    lL: -s * 46 + 6,
    kL: 20 + Math.max(0, c) * 92 + Math.max(0, -c) * 12,
    fL: Math.max(0, -s) * 8 - 6,
    aR: -s * 52 + 12, eR: 92 + s * 8,
    aL: s * 52 + 12, eL: 92 - s * 8,
  };
};

// Allongé sur le dos après une chute (repère : rot -90 = sur le dos)
export const FALLEN: Pose = P({
  rot: -82, y: 210, x: -40,
  s1: 4, s2: 2, s3: 4, nk: 14, hd: 10,
  aL: -40, eL: 30, aR: 60, eR: 40,
  lL: 18, kL: 30, lR: 40, kR: 64, fR: 10,
});
