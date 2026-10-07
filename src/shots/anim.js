// Outils d'animation des personnages (fonctions pures, sans dépendance au rendu).
import { clamp, lerp, blink, noise1, TAU, smooth, ease } from '../lib/util.js';
import { expr } from '../characters/expressions.js';

export { expr };
export const face = (P, name, w = 1) => expr(P.face, name, w);

export function facing(from, to) {
  return Math.atan2(to[0] - from[0], to[2] - from[2]);
}
export function angDiff(a, b) {
  let d = b - a;
  while (d > Math.PI) d -= TAU;
  while (d < -Math.PI) d += TAU;
  return d;
}

// Respiration, micro-mouvements et clignements : la vie de base.
export function idle(P, t, seed = 0, amt = 1) {
  P.squash = 1 + Math.sin(t * 2.1 + seed) * 0.012 * amt;
  P.side += noise1(t * 0.5 + seed * 10) * 0.025 * amt;
  P.headTilt += noise1(t * 0.4 + seed * 20) * 0.04 * amt;
  P.headYaw += noise1(t * 0.3 + seed * 30) * 0.05 * amt;
  P.aL.o += Math.sin(t * 2.1 + seed) * 0.02;
  P.aR.o += Math.sin(t * 2.1 + seed) * 0.02;
  const b = blink(t, seed);
  P.face.eo *= 1 - b;
}

// Marche / course : phase en cycles (1 = deux pas).
export function walk(P, phase, amp = 1) {
  const s = Math.sin(phase * TAU), c = Math.cos(phase * TAU);
  P.lL.f += s * 0.45 * amp; P.lR.f -= s * 0.45 * amp;
  P.lL.k += Math.max(0, -c) * 0.6 * amp; P.lR.k += Math.max(0, c) * 0.6 * amp;
  P.aL.f -= s * 0.35 * amp; P.aR.f += s * 0.35 * amp;
  P.aL.b += 0.25 * amp; P.aR.b += 0.25 * amp;
  P.bob += Math.abs(c) * 0.03 * amp - 0.015 * amp;
  P.twist += s * 0.06 * amp;
  P.lean += 0.04 * amp;
}
export function run(P, phase, amp = 1) {
  const s = Math.sin(phase * TAU), c = Math.cos(phase * TAU);
  P.lL.f += s * 0.85 * amp; P.lR.f -= s * 0.85 * amp;
  P.lL.k += (Math.max(0, -c) * 1.4 + 0.25) * amp; P.lR.k += (Math.max(0, c) * 1.4 + 0.25) * amp;
  P.aL.f -= s * 0.9 * amp; P.aR.f += s * 0.9 * amp;
  P.aL.b += 1.3 * amp; P.aR.b += 1.3 * amp;
  P.aL.o += 0.15 * amp; P.aR.o += 0.15 * amp;
  P.bob += (Math.abs(s) * 0.07 - 0.02) * amp;
  P.twist += s * 0.12 * amp;
  P.lean += 0.22 * amp;
  P.headUp += 0.12 * amp;
  P.hairBounce = Math.sin(phase * TAU * 2) * amp;
}

// Tourne la tête (et les yeux) vers un point du monde.
export function lookAt(P, target, w = 1, eyesOnly = false) {
  const headY = (P.y || 0) + (P.ground || 0) + 1.15 * (P.scale || 1);
  const dx = target[0] - P.x, dz = target[2] - P.z, dy = target[1] - headY;
  const yaw = angDiff(P.ry, Math.atan2(dx, dz));
  const pitch = Math.atan2(dy, Math.hypot(dx, dz));
  const hy = clamp(yaw, -1.3, 1.3), hp = clamp(pitch, -0.7, 0.8);
  if (!eyesOnly) {
    P.headYaw = lerp(P.headYaw, hy * 0.75, w);
    P.headUp = lerp(P.headUp, hp * 0.7, w);
  }
  const ey = eyesOnly ? yaw : yaw - hy * 0.75;
  const ep = eyesOnly ? pitch : pitch - hp * 0.7;
  P.face.lx = lerp(P.face.lx, clamp(ey * 2.2, -1, 1), w);
  P.face.ly = lerp(P.face.ly, clamp(ep * 2.2, -1, 1), w);
}

// Bras tendu vers une cible (pour montrer quelque chose).
export function point(P, side, target, w = 1) {
  const s = side === 'L' ? 1 : -1;
  const sx = P.x + Math.cos(P.ry) * 0.18 * s, sz = P.z - Math.sin(P.ry) * 0.18 * s, sy = (P.y || 0) + 0.8;
  let dx = target[0] - sx, dy = target[1] - sy, dz = target[2] - sz;
  const L = Math.hypot(dx, dy, dz) || 1;
  dx /= L; dy /= L; dz /= L;
  // repère local du personnage
  const c = Math.cos(-P.ry), sn = Math.sin(-P.ry);
  const lx = dx * c + dz * sn, lz = -dx * sn + dz * c;
  const f = Math.asin(clamp(lz, -1, 1));
  let o = Math.atan2(lx, -dy) * s;
  const a = P['a' + side];
  a.f = lerp(a.f, f, w);
  a.o = lerp(a.o, o, w);
  a.b = lerp(a.b, 0.05, w);
  P['h' + side].point = lerp(P['h' + side].point, 1, w);
}

// Bras ouverts vers l'avant pour tenir / recevoir le ballon.
export function holdBall(P, w = 1, spread = 0) {
  for (const k of ['aL', 'aR']) {
    P[k].f = lerp(P[k].f, 1.05, w);
    P[k].o = lerp(P[k].o, 0.28 + spread, w);
    P[k].b = lerp(P[k].b, 0.55, w);
    P[k].t = lerp(P[k].t, -0.3, w);
  }
}
export function armsUp(P, w = 1, spread = 0.35) {
  for (const k of ['aL', 'aR']) {
    P[k].f = lerp(P[k].f, 2.7, w);
    P[k].o = lerp(P[k].o, spread, w);
    P[k].b = lerp(P[k].b, 0.2, w);
  }
}
export function armsOut(P, w = 1) {
  for (const k of ['aL', 'aR']) {
    P[k].f = lerp(P[k].f, 0.5, w);
    P[k].o = lerp(P[k].o, 1.2, w);
    P[k].b = lerp(P[k].b, 0.3, w);
  }
}
export function shrug(P, w = 1) {
  for (const k of ['aL', 'aR']) {
    P[k].f = lerp(P[k].f, 0.35, w);
    P[k].o = lerp(P[k].o, 0.65, w);
    P[k].b = lerp(P[k].b, 1.5, w);
    P[k].t = lerp(P[k].t, 0.8, w);
  }
  P.headTilt += 0.15 * w;
  P.bob += 0.02 * w;
}
// Main devant la bouche (rire discret).
export function handToMouth(P, side = 'R', w = 1) {
  const a = P['a' + side];
  a.f = lerp(a.f, 0.95, w);
  a.o = lerp(a.o, 0.15, w);
  a.b = lerp(a.b, 2.35, w);
  a.t = lerp(a.t, 0.4, w);
}
// Main en visière au-dessus des yeux.
export function visor(P, side = 'R', w = 1) {
  const a = P['a' + side];
  a.f = lerp(a.f, 1.5, w);
  a.o = lerp(a.o, 0.55, w);
  a.b = lerp(a.b, 2.2, w);
  a.t = lerp(a.t, -0.6, w);
}
// Rire : épaules qui sautillent, tête en arrière.
export function laugh(P, t, w = 1, big = false) {
  const k = Math.sin(t * (big ? 22 : 18));
  P.bob += Math.abs(k) * 0.015 * w;
  P.headUp += (0.18 + 0.06 * k) * w * (big ? 1.4 : 1);
  P.squash += 0.02 * k * w;
  P.lean -= 0.06 * w * (big ? 1.5 : 1);
  P.aL.o += 0.05 * k * w; P.aR.o -= 0.05 * k * w;
}
// Petit signe « descends ! » (paumes vers le bas, mouvement répété).
export function beckonDown(P, t, w = 1) {
  for (const k of ['aL', 'aR']) {
    P[k].f = lerp(P[k].f, 0.9 + Math.sin(t * 9) * 0.25, w);
    P[k].o = lerp(P[k].o, 0.35, w);
    P[k].b = lerp(P[k].b, 0.35, w);
    P[k].t = lerp(P[k].t, -1.2, w);
  }
}
export function crouchReady(P, w = 1) {
  P.crouch += 0.45 * w;
  P.lean += 0.25 * w;
}

// ---------- Bibou ----------
export function bibIdle(B, t, seed = 3, amt = 1) {
  B.sq *= 1 + Math.sin(t * 3.1 + seed) * 0.02 * amt;
  B.tufts += Math.sin(t * 2.3 + seed) * 0.08 * amt;
  B.rz += noise1(t * 0.6 + seed) * 0.05 * amt;
  B.face.eo *= 1 - blink(t, seed, 2.6);
}
// Petits sauts pour avancer (phase en sauts)
export function bibHop(B, phase, h = 0.12) {
  const u = phase % 1;
  const air = Math.sin(u * Math.PI);
  B.y += air * h;
  B.sq *= 1 + (air - 0.35) * 0.18;
  B.fL = air; B.fR = air;
  B.wL += air * 0.4; B.wR += air * 0.4;
}
export function bibRunTo(B, from, to, u, hopRate = 6, dur = 1) {
  B.x = lerp(from[0], to[0], u);
  B.z = lerp(from[2], to[2], u);
  B.ry = Math.atan2(to[0] - from[0], to[2] - from[2]);
  bibHop(B, u * hopRate * dur, 0.08);
}
export function bibFlap(B, t, amt = 1, rate = 9) {
  B.flap = amt;
  B.flapT = t * rate;
  B.wL += 0.6 * amt; B.wR += 0.6 * amt;
}
export function bibLook(B, target, w = 1) {
  const dx = target[0] - B.x, dz = target[2] - B.z, dy = target[1] - (B.y + 0.18);
  const yaw = angDiff(B.ry, Math.atan2(dx, dz));
  const pitch = Math.atan2(dy, Math.hypot(dx, dz));
  B.face.lx = lerp(B.face.lx, clamp(yaw * 1.8, -1.2, 1.2), w);
  B.face.ly = lerp(B.face.ly, clamp(pitch * 1.8, -1.2, 1.2), w);
}
export function bibFace(B, name, w = 1) {
  expr(B.face, name, w);
}
