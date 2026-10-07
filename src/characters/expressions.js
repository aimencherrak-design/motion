import { lerp } from '../lib/util.js';

// Expressions de base, réutilisées par tous les personnages pour garder une cohérence de jeu.
// eo/lo/tilt/es : yeux ; bL/bR : sourcils (hauteur) ; baL/baR : angle des sourcils ;
// sm/op/wd/rd/th/gr/tg/wv/sk : bouche ; bl : rougeurs.
export const EXPR = {
  neutral: { eo: 1, lo: 0, tilt: 0, es: 1, bL: 0, bR: 0, baL: 0, baR: 0, sm: 0.25, op: 0, wd: 1, rd: 0, th: 0, gr: 0, wv: 0, sk: 0, bl: 0 },
  happy: { eo: 1, lo: 0.1, bL: 0.2, bR: 0.2, baL: -0.1, baR: -0.1, sm: 0.9, op: 0, wd: 1.05 },
  grin: { eo: 0.95, lo: 0.15, bL: 0.3, bR: 0.3, baL: -0.15, baR: -0.15, sm: 1, op: 0.45, th: 0.7, wd: 1.15, tg: 0.5 },
  laugh: { eo: 0.18, lo: 1, bL: 0.4, bR: 0.4, baL: -0.3, baR: -0.3, sm: 1, op: 0.8, th: 0.6, wd: 1.15, tg: 0.8, bl: 0.6 },
  giggle: { eo: 0.3, lo: 0.9, bL: 0.3, bR: 0.3, baL: -0.25, baR: -0.25, sm: 1, op: 0.15, wd: 0.9, bl: 0.5 },
  surprised: { eo: 1.35, lo: 0, bL: 0.9, bR: 0.9, baL: -0.2, baR: -0.2, sm: 0, op: 0.55, rd: 0.9, wd: 0.8, tg: 0.4 },
  amazed: { eo: 1.3, lo: 0.1, bL: 0.8, bR: 0.8, baL: -0.25, baR: -0.25, sm: 0.6, op: 0.6, rd: 0.4, th: 0.4, tg: 0.5, bl: 0.4 },
  worried: { eo: 1.1, lo: 0, bL: 0.5, bR: 0.5, baL: -0.7, baR: -0.7, sm: -0.45, op: 0.05, wv: 0.6, wd: 0.85 },
  oops: { eo: 1.15, lo: 0, bL: 0.6, bR: 0.6, baL: -0.6, baR: -0.6, sm: -0.2, op: 0.3, gr: 1, wd: 1.15 },
  sheepish: { eo: 0.85, lo: 0.2, bL: 0.4, bR: 0.4, baL: -0.6, baR: -0.6, sm: 0.6, op: 0.25, gr: 1, wd: 1.1, sk: 0.4, bl: 0.7 },
  determined: { eo: 0.85, lo: 0.1, tilt: 0.55, bL: -0.4, bR: -0.4, baL: 0.7, baR: 0.7, sm: 0.35, op: 0, wd: 0.85, sk: -0.3 },
  thinking: { eo: 0.8, lo: 0.15, bL: 0.6, bR: -0.2, baL: -0.2, baR: 0.3, sm: -0.05, op: 0, wd: 0.6, sk: 0.6 },
  idea: { eo: 1.3, lo: 0, bL: 1, bR: 1, baL: -0.1, baR: -0.1, sm: 1, op: 0.5, th: 0.7, wd: 1.1, tg: 0.4 },
  skeptic: { eo: 0.75, lo: 0.2, bL: 0.6, bR: -0.4, baL: -0.3, baR: 0.5, sm: 0.1, op: 0, wd: 0.7, sk: -0.5 },
  scared: { eo: 1.35, lo: 0, bL: 0.9, bR: 0.9, baL: -0.8, baR: -0.8, sm: -0.6, op: 0.35, gr: 1, wd: 0.9, wv: 0.4 },
  effort: { eo: 0.35, lo: 0.6, tilt: 0.3, bL: -0.3, bR: -0.3, baL: 0.6, baR: 0.6, sm: -0.3, op: 0.25, gr: 1, wd: 1.1 },
  tender: { eo: 0.55, lo: 0.6, bL: 0.35, bR: 0.35, baL: -0.35, baR: -0.35, sm: 0.85, op: 0, wd: 0.95, bl: 0.8 },
  proud: { eo: 0.3, lo: 0.7, bL: 0.5, bR: 0.5, baL: -0.1, baR: -0.1, sm: 0.9, op: 0, wd: 1, bl: 0.4 },
};

// Mélange l'expression courante vers un préréglage (poids w).
export function expr(face, name, w = 1) {
  const p = EXPR[name];
  for (const k in p) face[k] = lerp(face[k] ?? EXPR.neutral[k] ?? 0, p[k], w);
  return face;
}
export function freshFace() {
  return { ...EXPR.neutral, lx: 0, ly: 0 };
}
