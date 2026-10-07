// Données et outils partagés entre les plans : positions de mise en scène, passes, trajectoire du ballon.
import { clamp, lerp, ease, seg, arc } from '../lib/util.js';
import { holdBall, facing, lookAt, bibLook } from './anim.js';

export const BALL_R = 0.13;

// --- Village : mise en scène des passes ---
export const V = {
  leo: [-0.7, 0, 1.6],
  maya: [2.9, 0, 0.8],
  bib: [1.1, 0, -0.25],
};

export function handPos(P, h = 0.84, f = 0.34) {
  return [P.x + Math.sin(P.ry) * f, (P.y || 0) + h, P.z + Math.cos(P.ry) * f];
}

// Partie de passes : schedule = [{ t, from, to, dur, h }]. Gère poses de lancer/réception et vol du ballon.
export function passGame(S, T, schedule, { first = 'leo' } = {}) {
  let holder = first, flight = null;
  for (const p of schedule) {
    if (T >= p.t) {
      if (T < p.t + p.dur) { flight = p; holder = null; }
      else { holder = p.to; flight = null; }
    }
  }
  const people = ['leo', 'maya'];
  for (const who of people) {
    const P = S[who];
    // anticipation du lancer
    for (const p of schedule) {
      if (p.from !== who) continue;
      const a = T - p.t;
      if (a > -0.45 && a < 0.35) {
        const wind = a < 0 ? seg(a, -0.45, -0.05) : 1 - seg(a, 0, 0.35);
        const rel = a < 0 ? 0 : seg(a, 0, 0.15, ease.out);
        holdBall(P, 1);
        for (const k of ['aL', 'aR']) {
          P[k].f = lerp(1.05, 0.55, wind * (1 - rel)) + rel * 0.55;
          P[k].b = lerp(0.55, 1.2, wind * (1 - rel)) * (1 - rel * 0.7);
        }
        P.crouch += 0.18 * wind;
        P.lean += 0.1 * rel;
      }
      // réception
    }
    for (const p of schedule) {
      if (p.to !== who) continue;
      const a = T - (p.t + p.dur);
      if (a > -0.5 && a < 0.4) {
        const w = a < 0 ? seg(a, -0.5, -0.15) : 1 - seg(a, 0.1, 0.4);
        holdBall(P, w, 0.18 * (a < 0 ? 1 : 0));
        if (a > 0 && a < 0.25) { P.lean -= 0.08 * Math.sin((a / 0.25) * Math.PI); P.crouch += 0.1 * Math.sin((a / 0.25) * Math.PI); }
      }
    }
    if (holder === who) holdBall(P, 1);
  }
  if (flight) {
    const u = (T - flight.t) / flight.dur;
    const A = handPos(S[flight.from]), B = handPos(S[flight.to]);
    const p = arc(A, B, flight.h ?? 0.9, u);
    S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2];
    S.ball.rx = u * 9; S.ball.rz = u * 3;
    return { flying: true, pos: p, flight };
  } else if (holder) {
    S.hold(holder, 'hands');
  }
  return { flying: false, holder };
}

export const PASSES_A = [
  { t: 0.9, from: 'leo', to: 'maya', dur: 0.85, h: 0.9 },
  { t: 2.5, from: 'maya', to: 'leo', dur: 0.85, h: 0.9 },
  { t: 4.1, from: 'leo', to: 'maya', dur: 0.85, h: 0.9 },
  { t: 5.7, from: 'maya', to: 'leo', dur: 0.85, h: 1.0 },
  { t: 7.3, from: 'leo', to: 'maya', dur: 0.85, h: 1.0 },
  { t: 8.9, from: 'maya', to: 'leo', dur: 0.85, h: 1.0 },
];

// Le grand lancer de Leo : le ballon monte très haut puis le vent l'emporte vers la colline.
export const THROW_T = 22.55;
export function skyBall(T) {
  const u = Math.max(0, T - THROW_T);
  const x0 = V.leo[0] + 0.3, z0 = V.leo[2];
  const rise = 22 * (1 - Math.exp(-0.85 * u));
  const w = Math.max(0, u - 8.5);
  const y = 1.7 + rise - 1.5 * w - 0.02 * w * w;
  const z = z0 - 0.5 * u - 3.4 * Math.pow(w, 1.25);
  const x = x0 + 1.2 * (1 - Math.exp(-u)) + 0.25 * u;
  return [x, y, z];
}

// Rebonds amortis : renvoie la hauteur au-dessus du sol au temps local t.
export function bounceY(t, h0 = 1, k = 0.5, g = 9.8) {
  let h = h0, tt = t;
  let v = Math.sqrt(2 * g * h);
  // première chute
  const t0 = Math.sqrt((2 * h) / g);
  if (tt < t0) return h - 0.5 * g * tt * tt;
  tt -= t0;
  v *= k;
  for (let i = 0; i < 6; i++) {
    const d = (2 * v) / g;
    if (tt < d) return v * tt - 0.5 * g * tt * tt;
    tt -= d;
    v *= k;
  }
  return 0;
}
