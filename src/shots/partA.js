// 0:00 – 0:46 — Introduction et « Le problème » (village de Méli-Mélo).
import { clamp, lerp, ease, seg, kf, arc, pulse, spring, bell, TAU } from '../lib/util.js';
import { face, idle, walk, run, lookAt, point, holdBall, armsUp, shrug, laugh, handToMouth, facing, bibIdle, bibHop, bibFlap, bibLook, bibFace, crouchReady } from './anim.js';
import { V, passGame, PASSES_A, handPos, skyBall, THROW_T, bounceY, BALL_R } from './common.js';

const DAY = { focus: [1, 0, 0], size: 9, sunDir: [0.45, 0.85, 0.65] };

// Base commune des plans d'introduction : passes entre Leo et Maya, Bibou fasciné.
function baseIntro(S, T) {
  const L = S.leo, M = S.maya, B = S.bib;
  Object.assign(L, { x: V.leo[0], z: V.leo[2], ry: facing(V.leo, V.maya) });
  Object.assign(M, { x: V.maya[0], z: V.maya[2], ry: facing(V.maya, V.leo) });
  Object.assign(B, { x: V.bib[0], z: V.bib[2], ry: 0 });
  idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
  face(L, 'happy'); face(M, 'happy');
  const st = passGame(S, T, PASSES_A);
  const bp = [S.ball.x, S.ball.y, S.ball.z];
  lookAt(L, bp, 0.8); lookAt(M, bp, 0.8);
  // Bibou suit le ballon des yeux (et de tout le corps)
  if (st.flying) bibLook(B, bp, 1);
  else bibLook(B, st.holder === 'leo' ? handPos(L) : handPos(M), 1);
  B.ry = B.face.lx * 0.35;
  B.tufts = 0.6;
  bibFace(B, 'amazed', 0.5);
  B.face.op = 0;
  return st;
}

export const partA = [
  {
    id: 'A1-aerien', set: 'village', dur: 5, light: { ...DAY, size: 24 },
    run(S, t) {
      const T = S.T;
      baseIntro(S, T);
      const u = seg(t, 0, 5, ease.inOut);
      S.cam(kf(t, [[0, [24, 22, 30]], [5, [5.5, 4.6, 12.5]]]), kf(t, [[0, [-1, 1, -2]], [5, [1.0, 0.9, 0.6]]]), lerp(40, 33, u));
      S.sky.flyBirds(T, 0, 5.2, [-28, 13, 6], [20, 17, -22]);
      S.fade(1 - seg(t, 0, 0.8));
    },
  },
  {
    id: 'A2-passes', set: 'village', dur: 3, light: DAY,
    run(S, t) {
      baseIntro(S, S.T);
      S.cam(kf(t, [[0, [1.1, 1.25, 7.4]], [3, [1.1, 1.2, 6.7]]]), [1.0, 0.75, 0.5], 34);
    },
  },
  {
    id: 'A3-bibou-fascine', set: 'village', dur: 2.5, light: DAY,
    run(S, t) {
      const T = S.T;
      baseIntro(S, T);
      const B = S.bib;
      // petit tortillement avant de bondir
      const w = seg(t, 0.8, 1.4);
      B.rz += Math.sin(t * 22) * 0.12 * w;
      B.sq *= 1 - 0.1 * w;
      B.tufts = 0.6 + 0.4 * w;
      B.fL = Math.max(0, Math.sin(t * 22)) * 0.4 * w;
      B.fR = Math.max(0, -Math.sin(t * 22)) * 0.4 * w;
      bibFace(B, 'determined', w * 0.7);
      B.face.es = 1.05;
      S.cam(kf(t, [[0, [1.25, 0.34, 0.95]], [2.5, [1.18, 0.3, 0.72]]]), [1.1, 0.24, -0.25], 30);
    },
  },
  {
    id: 'A4-leo-passe-a-bibou', set: 'village', dur: 2.5, light: DAY,
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      baseIntro(S, Math.min(T, 9.99));
      // Leo remarque Bibou, sourit et lui fait une petite passe
      const turn = seg(t, 0.2, 0.8);
      const toBib = facing(V.leo, V.bib);
      L.ry = lerp(facing(V.leo, V.maya), toBib, turn);
      lookAt(L, [V.bib[0], 0.3, V.bib[2]], turn);
      face(L, 'grin', turn);
      L.face.bL += 0.3 * bell(t, 0.6, 1.4);
      L.headTilt += 0.15 * bell(t, 0.6, 1.6);
      const tossT = 1.95;
      if (t < tossT) {
        holdBall(L, 1);
        L.crouch += 0.25 * seg(t, 1.4, 1.9);
        L.aL.f -= 0.5 * seg(t, 1.4, 1.9); L.aR.f -= 0.5 * seg(t, 1.4, 1.9);
        S.hold('leo', 'hands');
      } else {
        const r = seg(t, tossT, tossT + 0.25, ease.out);
        holdBall(L, 1 - r * 0.5);
        L.aL.f += 0.5 * r; L.aR.f += 0.5 * r;
        L.crouch += 0.25 * (1 - r);
        const u = (T - (10.5 + tossT)) / 0.95;
        const p = arc(handPos({ ...L, ry: toBib }), [V.bib[0] + 0.25, 0.9, V.bib[2] - 0.6], 0.55, u / 1.25);
        S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2]; S.ball.rx = u * 6;
      }
      lookAt(M, [L.x, 1, L.z], 0.6);
      bibFace(B, 'amazed', 0.6);
      S.cam(kf(t, [[0, [1.05, 0.78, 0.15]], [2.5, [0.85, 0.8, 0.35]]]), [-0.7, 1.0, 1.6], 30);
    },
  },
  {
    id: 'A5-bibou-rate', set: 'village', dur: 3.5, light: DAY,
    sfx: [[0.2, 'bib_effort'], [0.25, 'jump_small'], [0.45, 'whoosh_small'], [0.95, 'flop_soft'], [0.98, 'boing'], [0.75, 'ball_bounce', { v: 0.8 }], [1.25, 'ball_bounce', { v: 0.5 }], [1.6, 'ball_bounce', { v: 0.3 }], [1.6, 'bib_huh']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      Object.assign(L, { x: V.leo[0], z: V.leo[2], ry: facing(V.leo, V.bib) });
      Object.assign(M, { x: V.maya[0], z: V.maya[2], ry: facing(V.maya, V.bib) });
      Object.assign(B, { x: V.bib[0], z: V.bib[2], ry: -0.35 });
      idle(L, T, 1); idle(M, T, 2);
      face(L, 'happy'); face(M, 'happy');
      // vol du ballon : lancé à 12,45 s, passe au-dessus de Bibou et rebondit derrière lui
      const t0 = 12.45, land = [V.bib[0] + 0.9, BALL_R, V.bib[2] - 1.5], tl = 13.75;
      if (T < tl) {
        const u = (T - t0) / (tl - t0);
        const p = arc(handPos({ ...L }), land, 0.75, u);
        S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2]; S.ball.rx = u * 8;
      } else {
        const d = T - tl;
        const k = 1 - Math.exp(-d * 1.2);
        S.ball.x = land[0] + 1.2 * k; S.ball.z = land[2] - 2.6 * k;
        S.ball.y = BALL_R + bounceY(d + 0.32, 0.5, 0.55);
        S.ball.rx = -d * 9;
      }
      lookAt(L, [S.ball.x, S.ball.y, S.ball.z], 0.7);
      lookAt(M, [S.ball.x, S.ball.y, S.ball.z], 0.7);
      // Bibou : préparation, saut les yeux fermés, ratage, chute sur le dos
      const crouch = seg(t, 0, 0.18) * (1 - seg(t, 0.18, 0.26));
      B.sq = 1 - 0.25 * crouch;
      const jt = t - 0.22;
      if (jt > 0 && jt < 0.72) {
        const u = jt / 0.72;
        B.y = 0.62 * 4 * u * (1 - u);
        B.sq = 1 + 0.25 * Math.sin(u * Math.PI) * (u < 0.5 ? 1 : 0.3);
        bibFlap(B, t, 1, 12);
        B.rx = -seg(u, 0.45, 1, ease.in) * 1.75;
        B.z = V.bib[2] - 0.15 * u;
      } else if (jt >= 0.72) {
        const d = jt - 0.72;
        B.z = V.bib[2] - 0.15;
        B.rx = -1.75 + spring(t, 0.95, 1.6, 3.2) * 0.35;
        B.sq = 1 - 0.3 * pulse(t, 0.94, 0.25);
        B.fL = 0.6 + 0.4 * Math.sin(t * 9); B.fR = 0.6 + 0.4 * Math.sin(t * 9 + 2);
        B.wL = 0.5 + 0.3 * Math.sin(t * 7); B.wR = 0.5 + 0.3 * Math.sin(t * 7 + 1);
      }
      if (t < 0.3) bibFace(B, 'determined');
      else if (t < 0.7) { bibFace(B, 'effort'); B.face.eo = 0; }
      else if (t < 1.0) { bibFace(B, 'surprised'); }
      else { bibFace(B, 'surprised', 0.6); B.face.lx = Math.sin(t * 3) * 0.6; }
      B.tufts = t < 0.9 ? 1 : 0.2;
      S.cam(kf(t, [[0, [1.55, 0.7, 1.3]], [1.0, [1.45, 0.85, 1.0]], [3.5, [1.32, 1.0, 0.7]]]), [1.02, kf(t, [[0, 0.45], [0.6, 0.62], [1.1, 0.16]]), -0.42], 42, kf(t, [[0.9, 0], [1.6, 0.07, ease.outBack]]));
    },
  },
  {
    id: 'A6-bibou-se-releve', set: 'village', dur: 2, light: DAY,
    sfx: [[0.25, 'blink'], [0.52, 'blink'], [0.85, 'pop'], [0.88, 'bib_hop'], [1.25, 'bib_whistle']],
    run(S, t) {
      const T = S.T;
      const B = S.bib;
      Object.assign(B, { x: V.bib[0], z: V.bib[2] - 0.15, ry: -0.2 });
      S.vis.ball = false;
      S.vis.leo = S.vis.maya = false;
      const up = seg(t, 0.85, 1.0, ease.outBack);
      B.rx = lerp(-1.75 + Math.sin(t * 4) * 0.08, 0, up);
      B.y = 0.18 * Math.sin(clamp((t - 0.85) / 0.3) * Math.PI);
      B.sq = 1 + 0.2 * pulse(t, 0.85, 0.25) - 0.15 * pulse(t, 1.1, 0.2);
      bibIdle(B, T, 3, 0.5);
      if (t < 0.85) {
        bibFace(B, 'neutral');
        B.face.eo = 1.05 * (1 - bell(t, 0.2, 0.32) - bell(t, 0.47, 0.6));
        B.fL = 0.5; B.fR = 0.5;
      } else {
        // l'air de rien : regard ailleurs, paupières mi-closes, petit sifflotement
        bibFace(B, 'proud', seg(t, 1.0, 1.2));
        B.face.eo = 0.5; B.face.lo = 0.3;
        B.face.lx = -0.8;
        B.puff = 0.3 * seg(t, 1.0, 1.3);
        B.beak = 0.25 * seg(t, 1.2, 1.3);
        B.wR = 0.4 + 0.6 * bell(t, 1.25, 1.85);
        B.wfR = 0.6 * bell(t, 1.25, 1.85);
        B.tufts = 0.3;
      }
      S.cam(kf(t, [[0, [1.25, 0.62, 0.75]], [2, [1.2, 0.55, 0.62]]]), [1.1, 0.16, -0.35], 32, 0.04);
    },
  },
  {
    id: 'A7-maya-rit', set: 'village', dur: 2, light: DAY,
    sfx: [[1.7, 'toss']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya;
      Object.assign(L, { x: V.leo[0], z: V.leo[2], ry: facing(V.leo, V.bib) });
      Object.assign(M, { x: V.maya[0], z: V.maya[2], ry: facing(V.maya, V.bib) + 0.3 });
      idle(L, T, 1); idle(M, T, 2);
      face(M, 'laugh');
      laugh(M, t, 1);
      holdBall(M, 1);
      M.headUp -= 0.1;
      face(L, 'grin');
      laugh(L, t + 0.3, 0.5);
      // Maya renvoie le ballon à Leo
      const tossT = 1.7;
      M.ry = lerp(M.ry, facing(V.maya, V.leo), seg(t, 1.3, 1.6));
      if (t < tossT) S.hold('maya', 'hands');
      else {
        const u = (t - tossT) / 0.8;
        const p = arc(handPos(M), handPos({ ...L, ry: facing(V.leo, V.maya) }), 0.8, u);
        S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2]; S.ball.rx = u * 6;
      }
      S.cam(kf(t, [[0, [1.25, 1.08, 0.65]], [2, [1.4, 1.08, 0.7]]]), [2.9, 1.0, 0.85], 32);
    },
  },
  {
    id: 'A8-grand-lancer', set: 'village', dur: 3.5, light: DAY,
    sfx: [[0.4, 'catch'], [1.05, 'leo_windup'], [2.05, 'throw_big'], [2.15, 'whoosh_up']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      Object.assign(L, { x: V.leo[0], z: V.leo[2], ry: facing(V.leo, V.maya) });
      Object.assign(M, { x: V.maya[0], z: V.maya[2], ry: facing(V.maya, V.leo) });
      Object.assign(B, { x: V.bib[0], z: V.bib[2] - 0.15, ry: 0.3 });
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
      const throwT = THROW_T - 20.5;
      if (t < 0.4) {
        const u = (T - 20.2) / 0.8;
        const p = arc(handPos({ ...M, ry: facing(V.maya, V.leo) }), handPos(L), 0.8, u);
        S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2];
        holdBall(L, seg(t, 0, 0.3));
      } else if (t < throwT) {
        // grand élan : bras au-dessus de la tête
        const w = seg(t, 0.8, 1.7);
        holdBall(L, 1 - w);
        armsUp(L, w, 0.25);
        L.aL.b = L.aR.b = lerp(0.55, 1.6, w);
        L.lean -= 0.25 * w;
        L.crouch += 0.3 * w;
        L.lR.f -= 0.2 * w; L.lL.f += 0.25 * w;
        S.hold('leo', 'hands');
      } else {
        const r = seg(t, throwT, throwT + 0.3, ease.out);
        armsUp(L, 1, 0.25);
        L.aL.f = L.aR.f = lerp(2.7, 1.4, r);
        L.aL.b = L.aR.b = lerp(1.6, 0.1, r);
        L.lean = lerp(-0.25, 0.25, r);
        L.crouch += 0.3 * (1 - r);
        L.bob += 0.06 * pulse(t, throwT, 0.4);
        const p = skyBall(T);
        S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2]; S.ball.rx = T * 5;
      }
      face(L, t < throwT ? 'determined' : 'grin', 1);
      if (t > 0.4 && t < 1.0) face(L, 'grin');
      // Maya s'apprête à attraper... puis lève la tête
      const look = seg(t, throwT + 0.2, throwT + 0.7);
      holdBall(M, (1 - look) * seg(t, 1.2, 1.6), 0.15);
      lookAt(M, [S.ball.x, S.ball.y, S.ball.z], 0.9);
      face(M, 'happy', 1 - look);
      face(M, 'surprised', look);
      lookAt(L, [S.ball.x, S.ball.y, S.ball.z], t > throwT ? 0.8 : 0.3);
      bibLook(B, [S.ball.x, S.ball.y, S.ball.z]);
      bibFace(B, 'amazed', look);
      const tilt = seg(t, throwT, 3.5, ease.inOut);
      S.cam(kf(t, [[0, [1.0, 1.25, 6.4]], [3.5, [1.0, 1.0, 6.9]]]), [1.1, lerp(1.1, 3.6, tilt), 1.0], lerp(36, 40, tilt));
    },
  },
  {
    id: 'A9-ballon-monte', set: 'village', dur: 3, light: DAY,
    sfx: [[0.1, 'wind_soft']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      Object.assign(L, { x: V.leo[0], z: V.leo[2], ry: facing(V.leo, V.maya) - 0.6 });
      Object.assign(M, { x: V.maya[0], z: V.maya[2], ry: facing(V.maya, V.leo) + 0.9 });
      Object.assign(B, { x: V.bib[0], z: V.bib[2] - 0.15, ry: 0 });
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
      const p = skyBall(T);
      S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2]; S.ball.rx = T * 4;
      lookAt(L, p); lookAt(M, p); bibLook(B, p);
      face(L, 'happy'); face(M, 'surprised', 0.5);
      // contre-plongée : les têtes en bas du cadre, le ballon file dans le ciel
      S.cam([1.25, 0.55, 3.4], kf(t, [[0, [p[0], p[1] * 0.8, p[2]]], [3, [p[0], p[1], p[2]]]]), 46, 0.03);
    },
  },
  {
    id: 'A10-sourire-qui-fond', set: 'village', dur: 3.5, light: DAY,
    sfx: [[2.2, 'gulp_leo']],
    run(S, t) {
      const T = S.T;
      const L = S.leo;
      const p = skyBall(T);
      Object.assign(L, { x: V.leo[0], z: V.leo[2], ry: facing(V.leo, p) });
      idle(L, T, 1, 0.6);
      S.vis.maya = false; S.vis.bib = false;
      S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2];
      lookAt(L, p);
      L.headUp = 0.55;
      // fierté -> doute -> inquiétude
      const a = seg(t, 1.0, 2.0), b = seg(t, 2.0, 2.8);
      face(L, 'grin', 1 - a);
      face(L, 'neutral', a * (1 - b));
      L.face.sm = lerp(1, 0.0, a);
      face(L, 'worried', b);
      L.face.ly = 1;
      L.aL.o += 0.1; L.aR.o += 0.1;
      const fw = [Math.sin(L.ry), Math.cos(L.ry)];
      const cx = L.x + fw[0] * 1.55, cz = L.z + fw[1] * 1.55;
      S.cam(kf(t, [[0, [cx, 1.05, cz]], [3.5, [L.x + fw[0] * 1.3, 1.07, L.z + fw[1] * 1.3]]]), [L.x, 1.28, L.z], 34);
    },
  },
  {
    id: 'A11-regards-oups', set: 'village', dur: 2, light: DAY,
    sfx: [[0.15, 'look_tick'], [0.45, 'look_tick'], [1.0, 'uh_oh_sting']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      const p = skyBall(T);
      Object.assign(L, { x: V.leo[0] + 0.6, z: V.leo[2] - 0.3, ry: facing(V.leo, V.maya) - 0.4 });
      Object.assign(M, { x: V.maya[0] - 0.6, z: V.maya[2] + 0.1, ry: facing(V.maya, V.leo) + 0.4 });
      Object.assign(B, { x: V.bib[0], z: V.bib[2] - 0.15 });
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
      S.ball.visible = false;
      const a = seg(t, 0.1, 0.3, ease.out), b = seg(t, 0.4, 0.6, ease.out);
      lookAt(L, p, 1 - a);
      lookAt(L, [M.x, 1.15, M.z], a);
      lookAt(M, p, 1 - b);
      lookAt(M, [L.x, 1.15, L.z], b);
      face(L, 'worried'); face(M, 'surprised', 0.6);
      const c = seg(t, 0.9, 1.15);
      face(L, 'oops', c); face(M, 'oops', c);
      L.headTilt -= 0.1 * c; M.headTilt += 0.1 * c;
      shrug(L, c * 0.4); shrug(M, c * 0.4);
      S.cam(kf(t, [[0, [1.2, 1.1, 4.8]], [2, [1.2, 1.12, 4.3]]]), [1.2, 1.0, 1.1], 30);
    },
  },
  {
    id: 'A12-le-vent', set: 'village', dur: 3, light: { ...DAY, size: 14 },
    sfx: [[0.0, 'wind_gust'], [0.4, 'leaves_rustle']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      const p = skyBall(T);
      Object.assign(L, { x: V.leo[0] + 0.6, z: V.leo[2] - 0.3, ry: Math.PI });
      Object.assign(M, { x: V.maya[0] - 0.6, z: V.maya[2] + 0.1, ry: Math.PI });
      Object.assign(B, { x: V.bib[0], z: V.bib[2] - 0.15, ry: Math.PI });
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
      lookAt(L, p); lookAt(M, p); bibLook(B, p);
      S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2]; S.ball.rx = T * 3;
      S.wind = 2.6;
      L.side += Math.sin(T * 3) * 0.03; M.side += Math.sin(T * 3 + 1) * 0.03;
      L.hairBounce = M.hairBounce = Math.sin(T * 9) * 0.6;
      for (let i = 0; i < 4; i++) S.fx.leaves([-6 + i * 3, 3 + i * 0.4, 3 - i], -0.2 + i * 0.3, t, { n: 10, spread: 3, life: 3.5, fall: 1.2, seed: 40 + i, burst: 1.2 });
      S.cam(kf(t, [[0, [1.5, 1.15, 4.7]], [3, [1.35, 1.2, 4.3]]]), [p[0] * 0.8, p[1] * 0.5, p[2]], 56);
    },
  },
  {
    id: 'A13-bibou-poursuit', set: 'village', dur: 3, light: { ...DAY, focus: [1, 0, -4] },
    sfx: [[0.0, 'bib_determined'], [0.1, 'flap_fast', { dur: 2.5 }], [0.2, 'hops', { dur: 2.4, rate: 7 }], [2.75, 'bib_pant']],
    run(S, t) {
      const T = S.T;
      const B = S.bib;
      S.vis.leo = S.vis.maya = false;
      S.ball.visible = false;
      const u = seg(t, 0, 2.6, ease.linear);
      const from = [V.bib[0], 0, V.bib[2] - 0.15], to = [1.0, 0, -6.6];
      B.x = lerp(from[0], to[0], u); B.z = lerp(from[2], to[2], u);
      B.ry = Math.PI;
      if (t < 2.6) {
        bibHop(B, t * 7, 0.07);
        bibFlap(B, t, 1, 16);
        B.lean = 0.3;
        bibFace(B, 'effort');
        B.face.eo = 0.6;
        B.tufts = -0.3;
        B.wL += 0.5; B.wR += 0.5;
      } else {
        // s'arrête, essoufflé
        bibFace(B, 'worried');
        B.sq = 1 + Math.sin(t * 18) * 0.05;
        B.beak = 0.4 + 0.3 * Math.sin(t * 18);
        B.tufts = -0.6;
        B.face.ly = 0.8;
        B.wL = B.wR = 0.2;
      }
      S.cam([B.x + 2.1, 0.45, B.z + 0.6], [B.x - 0.1, 0.3, B.z - 0.45], 34);
    },
  },
  {
    id: 'A14-derriere-la-colline', set: 'village', dur: 2, light: { ...DAY, size: 14, focus: [1, 0, -5] },
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      Object.assign(L, { x: -0.2, z: -5.8, ry: Math.PI });
      Object.assign(M, { x: 2.1, z: -6.0, ry: Math.PI });
      Object.assign(B, { x: 1.0, z: -6.6, ry: Math.PI });
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
      const p = skyBall(T);
      S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2];
      lookAt(L, p); lookAt(M, p); bibLook(B, p);
      S.cam([1.0, 1.35, -1.2], kf(t, [[0, [0.8, 7.5, -60]], [2, [0.9, 7.0, -60]]]), 30);
    },
  },
  {
    id: 'A15-immobiles', set: 'village', dur: 3.5, light: { ...DAY, focus: [1, 0, -6] },
    sfx: [[0.0, 'wind_soft'], [1.0, 'look_tick'], [1.35, 'look_tick'], [1.7, 'look_tick'], [2.4, 'look_tick_double']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      Object.assign(L, { x: -0.2, z: -5.8, ry: Math.PI });
      Object.assign(M, { x: 2.1, z: -6.0, ry: Math.PI });
      Object.assign(B, { x: 1.0, z: -6.6, ry: Math.PI });
      idle(L, T, 1, 0.3); idle(M, T, 2, 0.3); bibIdle(B, T, 3, 0.3);
      S.ball.visible = false;
      const hill = [0.5, 9, -60];
      // ils regardent la colline, se regardent, puis regardent à nouveau la colline
      const a = seg(t, 0.9, 1.1, ease.out), b = seg(t, 1.25, 1.45, ease.out), c = seg(t, 2.3, 2.5, ease.out);
      lookAt(L, hill); lookAt(M, hill); bibLook(B, hill);
      lookAt(L, [M.x, 1.1, M.z], a * (1 - c));
      lookAt(M, [L.x, 1.1, L.z], b * (1 - c));
      bibLook(B, [L.x, 1.1, L.z], seg(t, 1.0, 1.15) * (1 - seg(t, 1.5, 1.65)));
      bibLook(B, [M.x, 1.1, M.z], seg(t, 1.5, 1.65) * (1 - c));
      lookAt(L, hill, c); lookAt(M, hill, c); bibLook(B, hill, c);
      face(L, 'worried'); face(M, 'worried', 0.7); bibFace(B, 'worried');
      B.tufts = -0.5;
      S.wind = 1.5;
      S.cam([0.95, 0.92, -10.6], [0.95, 0.72, -6.1], 31);
    },
  },
  {
    id: 'A16-leo-decide', set: 'village', dur: 2, light: { ...DAY, focus: [0, 0, -6] },
    sfx: [[0.35, 'determined_sting'], [1.25, 'zip_run']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      Object.assign(L, { x: -0.2, z: -5.8, ry: Math.PI });
      Object.assign(M, { x: 2.1, z: -6.0, ry: Math.PI });
      Object.assign(B, { x: 1.0, z: -6.6, ry: Math.PI });
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
      S.ball.visible = false;
      face(L, 'determined');
      L.headUp += -0.15 * pulse(t, 0.3, 0.3) + 0.08;
      // poing serré, puis il file !
      const fist = bell(t, 0.5, 1.15);
      L.aR.f += 1.2 * fist; L.aR.b += 1.9 * fist; L.aR.o += 0.1;
      const go = seg(t, 1.2, 2.0, ease.in);
      if (t > 1.2) {
        run(L, (t - 1.2) * 2.2, 1);
        L.z -= go * 2.0; L.x -= go * 4.0;
        L.ry = Math.PI + 1.1 * seg(t, 1.2, 1.4);
      }
      lookAt(M, [L.x, 1.1, L.z], 0.8);
      face(M, 'surprised', seg(t, 1.3, 1.5));
      S.cam(kf(t, [[0, [-0.15, 1.12, -7.15]], [1.2, [-0.15, 1.13, -7.0]]]), [-0.2, 1.1, -5.8], 32);
    },
  },
];
