// 1:15 – 1:48 — Premier échec (la clairière).
import { clamp, lerp, ease, seg, kf, arc, pulse, spring, bell, TAU } from '../lib/util.js';
import { face, idle, walk, run, lookAt, point, holdBall, armsUp, shrug, laugh, handToMouth, beckonDown, visor, facing, bibIdle, bibHop, bibFlap, bibLook, bibFace } from './anim.js';
import { BALL_R } from './common.js';
import { CLEAR } from '../world/clearing.js';

export const LIGHT_C = { focus: [0.8, 0, 0], size: 7, sunDir: [0.35, 0.9, 0.55], hemiI: 1.3, envI: 0.6 };
const LIGHT = LIGHT_C;
const BALL = CLEAR.ball;
const TRUNK = [-0.05, 0, -2.0];

// le ballon reste coincé dans la fourche
export function stuckBall(S, T) {
  S.ball.x = BALL[0]; S.ball.y = BALL[1] + Math.sin(T * 1.3) * 0.01; S.ball.z = BALL[2];
  S.ball.ground = 0;
  S.ball.rz = Math.sin(T * 1.1) * 0.05;
}
export function standAll(S, T) {
  const L = S.leo, M = S.maya, B = S.bib;
  Object.assign(L, { x: CLEAR.leo[0], z: CLEAR.leo[2] });
  Object.assign(M, { x: CLEAR.maya[0], z: CLEAR.maya[2] });
  Object.assign(B, { x: CLEAR.bib[0], z: CLEAR.bib[2] });
  L.ry = facing(CLEAR.leo, BALL); M.ry = facing(CLEAR.maya, BALL); B.ry = facing(CLEAR.bib, BALL);
  idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
}
// Leo accroché à l'arbre (h : hauteur des pieds)
function leoOnTrunk(L, h, t, climbing = 0) {
  Object.assign(L, { x: TRUNK[0], z: TRUNK[2], y: h, ry: Math.PI });
  L.aL.f = 2.4 + Math.sin(t * 9) * 0.35 * climbing; L.aR.f = 2.4 - Math.sin(t * 9) * 0.35 * climbing;
  L.aL.o = L.aR.o = 0.45; L.aL.b = L.aR.b = 0.6;
  L.lL.f = 0.5 + Math.max(0, Math.sin(t * 9)) * 0.7 * climbing; L.lR.f = 0.5 + Math.max(0, -Math.sin(t * 9)) * 0.7 * climbing;
  L.lL.k = 0.9; L.lR.k = 0.9; L.lL.o = L.lR.o = 0.25;
  L.lean = 0.12;
}
function leoHanging(L, t) {
  leoOnTrunk(L, 0.9, t, 0);
  L.aL.f = 2.9; L.aL.o = 0.7; L.aR.f = 2.6; L.lL.f = 1.2; L.lL.k = 1.6;
}

export const partC = [
  {
    id: 'C1-la-clairiere', set: 'clearing', dur: 4, light: LIGHT,
    sfx: [[0.0, 'harp_gliss'], [0.3, 'steps_walk', { dur: 3.3, rate: 3.2 }], [0.5, 'hops', { dur: 3.0, rate: 5 }], [2.6, 'magic_shimmer']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      stuckBall(S, T);
      const u = seg(t, 0.2, 3.6, ease.out);
      const go = (P, from, to, ph) => {
        P.x = lerp(from[0], to[0], u); P.z = lerp(from[2], to[2], u);
        P.ry = facing(from, to);
        walk(P, t * 1.6 + ph, 1 - seg(t, 3.0, 3.6));
      };
      go(L, [-4.8, 0, 0.1], CLEAR.leo, 0);
      go(M, [-5.6, 0, 0.6], CLEAR.maya, 0.3);
      B.x = lerp(-5.3, CLEAR.bib[0], u); B.z = lerp(-0.3, CLEAR.bib[2], u);
      B.ry = facing([-5.3, 0, -0.3], CLEAR.bib);
      if (t < 3.5) bibHop(B, t * 5, 0.07);
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
      // émerveillement : ils regardent autour d'eux
      const look = [lerp(-3, 2, seg(t, 0.5, 3)), 3.2, -3];
      lookAt(L, look, 0.7); lookAt(M, look, 0.7); bibLook(B, look, 0.7);
      face(L, 'amazed', 0.7); face(M, 'amazed', 0.6); bibFace(B, 'amazed', 0.7);
      S.cam(kf(t, [[0, [0.6, 1.75, 8.6]], [4, [0.9, 2.3, 7.6]]]), kf(t, [[0, [-2.2, 0.9, 0.4]], [2.2, [-0.4, 1.5, -0.6]], [4, [1.1, 2.6, -1.6]]]), kf(t, [[0, 40], [4, 36]]));
    },
  },
  {
    id: 'C2-le-voila', set: 'clearing', dur: 2.5, light: LIGHT,
    sfx: [[0.55, 'point_swish'], [0.6, 'kids_happy_gasp']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      standAll(S, T);
      stuckBall(S, T);
      lookAt(L, BALL); lookAt(M, BALL); bibLook(B, BALL);
      face(L, 'grin'); face(M, 'happy'); bibFace(B, 'amazed');
      point(L, 'L', BALL, seg(t, 0.45, 0.75, ease.outBack));
      L.bob += 0.04 * pulse(t, 0.5, 0.4);
      B.y += 0.08 * pulse(t, 0.6, 0.35);
      B.tufts = 1;
      S.cam(kf(t, [[0, [0.55, 0.62, -0.75]], [2.5, [0.5, 0.65, -0.5]]]), [0.4, 1.05, 1.7], 40);
    },
  },
  {
    id: 'C3-leo-grimpe', set: 'clearing', dur: 4.5, light: LIGHT,
    sfx: [[0.1, 'steps_run', { dur: 1.0, rate: 3.6 }], [1.15, 'climb', { dur: 2.0 }], [3.4, 'grab_branch'], [3.6, 'leo_effort']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      standAll(S, T);
      stuckBall(S, T);
      if (t < 1.1) {
        const u = seg(t, 0, 1.1, ease.inOut);
        L.x = lerp(CLEAR.leo[0], TRUNK[0], u); L.z = lerp(CLEAR.leo[2], TRUNK[2], u);
        L.ry = facing(CLEAR.leo, TRUNK);
        run(L, t * 1.7, 0.7);
        face(L, 'determined');
      } else {
        const h = kf(t, [[1.1, 0], [3.2, 0.62, ease.out], [3.6, 0.62], [4.5, 0.9, ease.out]]);
        leoOnTrunk(L, h, t, t < 3.2 ? 1 : 0);
        if (t > 3.3) {
          // agrippe la branche basse et se hisse
          const g = seg(t, 3.3, 3.6);
          L.aL.f = lerp(L.aL.f, 2.9, g); L.aL.o = lerp(L.aL.o, 0.7, g);
          L.aR.f = lerp(L.aR.f, 2.6, g);
          L.lL.f = lerp(L.lL.f, 1.2, seg(t, 3.7, 4.2)); L.lL.k = lerp(0.9, 1.6, seg(t, 3.7, 4.2));
        }
        face(L, 'effort');
        L.headUp = 0.3;
      }
      lookAt(M, [L.x, L.y + 1.1, L.z], 0.8); bibLook(B, [L.x, L.y + 1.1, L.z]);
      face(M, 'worried', seg(t, 1.5, 2.5) * 0.6);
      bibFace(B, 'amazed', 0.5);
      S.cam(kf(t, [[0, [-1.9, 1.3, 2.2]], [4.5, [-1.7, 1.65, 1.4]]]), kf(t, [[0, [-0.1, 1.0, 0.0]], [4.5, [-0.25, 1.75, -2.0]]]), 40);
    },
  },
  {
    id: 'C4-craaac', set: 'clearing', dur: 2.5, light: LIGHT,
    sfx: [[0.35, 'branch_creak'], [1.1, 'branch_crack'], [1.15, 'leaves_rustle']],
    run(S, t) {
      const T = S.T;
      const L = S.leo;
      S.vis.maya = S.vis.bib = false;
      stuckBall(S, T);
      leoHanging(L, t);
      face(L, 'effort', 1 - seg(t, 1.1, 1.2));
      face(L, 'scared', seg(t, 1.1, 1.2));
      S.set.state.creak = 0.4 * seg(t, 0.3, 0.6) + 0.6 * seg(t, 1.1, 1.18, ease.outBack) + Math.sin(t * 35) * 0.08 * bell(t, 1.1, 1.8);
      S.fx.leaves([-0.9, 2.35, -1.8], T - t + 1.1, T, { n: 14, spread: 0.6, life: 2.5, fall: 2.4, seed: 11, burst: 0.3 });
      S.fx.puff([-0.42, 2.0, -2.15], T - t + 1.1, T, { n: 6, size: 0.15, spread: 0.12, color: 0xc49a6c, life: 0.6, seed: 9 });
      S.shake(0.4 * pulse(t, 1.1, 0.5), 30);
      S.cam(kf(t, [[0, [-1.35, 2.2, -0.55]], [2.5, [-1.25, 2.15, -0.75]]]), [-0.55, 2.0, -2.1], 38);
    },
  },
  {
    id: 'C5-leo-fige', set: 'clearing', dur: 2, light: LIGHT,
    sfx: [[0.1, 'freeze_sting'], [0.9, 'gulp_leo']],
    run(S, t) {
      const T = S.T;
      const L = S.leo;
      S.vis.maya = S.vis.bib = false;
      stuckBall(S, T);
      leoHanging(L, t);
      S.set.state.creak = 1;
      face(L, 'scared');
      L.face.es = 1.1;
      const cam = kf(t, [[0, [-0.95, 1.75, -0.65]], [2, [-0.9, 1.78, -0.8]]]);
      // tourne lentement la tête et regarde en bas
      lookAt(L, cam, seg(t, 0.2, 1.0));
      L.headUp -= 0.35 * seg(t, 1.0, 1.7);
      L.face.ly = -0.8 * seg(t, 1.0, 1.7);
      L.squash = 1 + Math.sin(t * 50) * 0.008;
      const head = [L.x - 0.12, L.y + 1.32, L.z + 0.18];
      S.fx.sweat([head[0] + 0.18, head[1] + 0.12, head[2] + 0.1], T - t + 0.5, T, 1.4);
      S.cam(cam, [L.x, L.y + 1.15, L.z], 32);
    },
  },
  {
    id: 'C6-maya-descends', set: 'clearing', dur: 2.5, light: LIGHT,
    sfx: [[0.2, 'maya_tsk']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      standAll(S, T);
      stuckBall(S, T);
      leoHanging(L, t);
      face(L, 'scared');
      S.set.state.creak = 1;
      const lp = [L.x, L.y + 1.2, L.z];
      M.ry = facing(CLEAR.maya, lp);
      lookAt(M, lp);
      face(M, 'worried');
      M.headYaw += Math.sin(t * 10) * 0.22 * bell(t, 0.1, 1.0);
      beckonDown(M, t, seg(t, 0.8, 1.1));
      bibLook(B, lp); bibFace(B, 'worried'); B.tufts = -0.5;
      const fw = [Math.sin(M.ry), Math.cos(M.ry)];
      S.cam([M.x + fw[0] * 1.7 + 0.3, 0.95, M.z + fw[1] * 1.7], [M.x, 1.15, M.z], 34);
    },
  },
  {
    id: 'C7-leo-redescend', set: 'clearing', dur: 3, light: LIGHT,
    sfx: [[0.2, 'slide_down'], [1.6, 'land_soft'], [2.1, 'sheepish_giggle']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      standAll(S, T);
      stuckBall(S, T);
      S.set.state.creak = 1 - seg(t, 0.2, 0.6);
      if (t < 1.6) {
        const h = kf(t, [[0, 0.9], [0.4, 0.8], [1.6, 0, ease.in]]);
        leoOnTrunk(L, h, t, 0.3);
        face(L, 'worried');
      } else {
        Object.assign(L, { x: TRUNK[0], z: TRUNK[2] + 0.15, y: 0 });
        const turn = seg(t, 1.8, 2.2);
        L.ry = lerp(Math.PI, facing([L.x, 0, L.z], CLEAR.maya), turn);
        L.crouch += 0.45 * pulse(t, 1.6, 0.5);
        // se gratte la tête, un peu gêné
        const rub = seg(t, 2.1, 2.4);
        L.aR.f = lerp(0, 2.3, rub); L.aR.o = lerp(0.1, 0.9, rub); L.aR.b = lerp(0.15, 2.3, rub);
        L.headTilt += 0.18 * rub + Math.sin(t * 14) * 0.03 * rub;
        face(L, 'sheepish', rub);
        lookAt(L, [M.x, 1.2, M.z], turn);
        S.fx.puff([L.x, 0, L.z], T - t + 1.6, T, { n: 8, size: 0.3, spread: 0.5, color: 0xe9e2c6, seed: 13 });
      }
      lookAt(M, [L.x, L.y + 1.2, L.z]); bibLook(B, [L.x, L.y + 1.0, L.z]);
      face(M, 'neutral'); M.face.sm = lerp(-0.3, 0.6, seg(t, 1.8, 2.4));
      bibFace(B, 'happy', seg(t, 1.8, 2.4));
      S.cam(kf(t, [[0, [1.5, 1.5, 1.6]], [3, [1.35, 1.25, 1.35]]]), kf(t, [[0, [0.0, 1.9, -1.9]], [1.6, [0.0, 1.0, -1.8]], [3, [-0.05, 1.05, -1.6]]]), 38);
    },
  },
  {
    id: 'C8-bibou-heros', set: 'clearing', dur: 3, light: LIGHT,
    sfx: [[0.1, 'hops', { dur: 0.6, rate: 5 }], [0.9, 'puff_up'], [1.3, 'bib_heroic_chirp'], [2.0, 'look_tick'], [2.3, 'look_tick']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      stuckBall(S, T);
      Object.assign(L, { x: 0.25, z: -0.75 }); Object.assign(M, { x: 1.95, z: -0.45 });
      const bpos = [1.15, 0, 0.75];
      B.x = lerp(CLEAR.bib[0], bpos[0], seg(t, 0, 0.7)); B.z = lerp(CLEAR.bib[2], bpos[2], seg(t, 0, 0.7));
      if (t < 0.7) bibHop(B, t * 5, 0.06);
      B.ry = 0.1;
      L.ry = facing([L.x, 0, L.z], bpos); M.ry = facing([M.x, 0, M.z], bpos);
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3, 0.5);
      // gonfle son petit torse
      const p = seg(t, 0.85, 1.25, ease.outBack);
      B.puff = 1.0 * p;
      B.tufts = 1.2 * p;
      B.wL = B.wR = lerp(0.15, -0.1, p);
      B.wfL = B.wfR = -0.4 * p;
      bibFace(B, 'determined', p);
      B.face.lo = 0.3;
      B.beak = 0.5 * bell(t, 1.3, 1.6);
      // Leo et Maya, sceptiques, se regardent
      lookAt(L, [B.x, 0.3, B.z], 1 - seg(t, 1.9, 2.1)); lookAt(M, [B.x, 0.3, B.z], 1 - seg(t, 2.2, 2.4));
      lookAt(L, [M.x, 1.1, M.z], seg(t, 1.9, 2.1)); lookAt(M, [L.x, 1.1, L.z], seg(t, 2.2, 2.4));
      face(L, 'skeptic', seg(t, 1.9, 2.2)); face(M, 'skeptic', seg(t, 2.2, 2.5));
      S.cam(kf(t, [[0, [1.25, 0.16, 2.05]], [3, [1.22, 0.13, 1.85]]]), [1.15, 0.55, 0.0], 44, -0.04);
    },
  },
  {
    id: 'C9-elan', set: 'clearing', dur: 2, light: LIGHT,
    sfx: [[0.25, 'scrape'], [0.55, 'scrape'], [0.85, 'hops', { dur: 0.7, rate: 9 }], [1.6, 'jump_small'], [1.65, 'flap_fast', { dur: 0.4 }], [1.65, 'bib_charge']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      stuckBall(S, T);
      Object.assign(L, { x: 0.25, z: -0.75 }); Object.assign(M, { x: 1.95, z: -0.45 });
      idle(L, T, 1); idle(M, T, 2);
      face(L, 'skeptic', 0.5); face(M, 'neutral');
      const start = [1.15, 0, 0.75], run0 = [1.3, 0, 1.25], launch = [1.75, 0, -0.1];
      B.puff = 0.6;
      B.tufts = 1;
      bibFace(B, 'determined');
      if (t < 0.85) {
        // recule et gratte le sol comme un petit taureau
        B.x = lerp(start[0], run0[0], seg(t, 0, 0.2)); B.z = lerp(start[2], run0[2], seg(t, 0, 0.2));
        B.ry = facing(run0, BALL);
        B.fR = Math.max(0, Math.sin((t - 0.2) * 20)) * bell(t, 0.2, 0.8);
        B.lean = 0.25;
        S.fx.puff([B.x, 0, B.z - 0.1], T - t + 0.25, T, { n: 4, size: 0.12, spread: 0.2, color: 0xe2d2a8, seed: 21 });
        S.fx.puff([B.x, 0, B.z - 0.1], T - t + 0.55, T, { n: 4, size: 0.12, spread: 0.2, color: 0xe2d2a8, seed: 22 });
      } else if (t < 1.6) {
        const u = seg(t, 0.85, 1.6, ease.in);
        B.x = lerp(run0[0], launch[0], u); B.z = lerp(run0[2], launch[2], u);
        B.ry = facing(run0, launch);
        bibHop(B, t * 9, 0.05);
        B.lean = 0.4;
      } else {
        const u = (t - 1.6) / 1.0;
        const p = arc(launch, [2.6, 3.95, -1.75], 0.3, u * 0.4);
        B.x = p[0]; B.y = p[1]; B.z = p[2];
        B.ry = facing(launch, BALL);
        bibFlap(B, t, 1, 18);
        B.sq = 1.15;
      }
      lookAt(L, [B.x, B.y + 0.2, B.z], 0.8); lookAt(M, [B.x, B.y + 0.2, B.z], 0.8);
      S.cam(kf(t, [[0, [2.7, 0.45, 2.25]], [2, [2.6, 0.55, 2.0]]]), kf(t, [[0, [1.25, 0.3, 0.9]], [1.4, [1.5, 0.35, 0.4]], [2, [1.8, 0.9, -0.2]]]), 38);
    },
  },
  {
    id: 'C10-rate-et-buisson', set: 'clearing', dur: 3, light: { ...LIGHT, size: 8 },
    sfx: [[0.0, 'whoosh_up'], [0.85, 'near_miss_swish'], [1.0, 'spin_swirl'], [1.75, 'bush_crash'], [1.8, 'leaves_rustle'], [1.85, 'bib_squeak_hurt']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      stuckBall(S, T);
      Object.assign(L, { x: 0.25, z: -0.75 }); Object.assign(M, { x: 1.95, z: -0.45 });
      idle(L, T, 1); idle(M, T, 2);
      const launch = [1.75, 0, -0.1], near = [2.62, 3.95, -1.72], bush = [CLEAR.bush[0], 0.55, CLEAR.bush[2]];
      if (t < 0.95) {
        const u = seg(t, 0, 0.95, ease.out);
        const p = arc(launch, near, 0.3, 0.4 + 0.6 * u);
        B.x = p[0]; B.y = p[1]; B.z = p[2];
        bibFlap(B, t, 1, 18);
        bibFace(B, 'determined');
        B.ry = facing(launch, BALL);
        B.wfL = B.wfR = 0.8 * seg(t, 0.6, 0.9);
        bibLook(B, BALL);
      } else if (t < 1.75) {
        // passe juste à côté, tourne sur lui-même, retombe
        const u = seg(t, 0.95, 1.75, ease.in);
        const p = arc(near, bush, 0.4, u);
        B.x = p[0]; B.y = p[1]; B.z = p[2];
        B.ry = (t - 0.95) * 18;
        B.rz = (t - 0.95) * 10;
        bibFace(B, 'surprised');
        B.face.es = 1.2;
        B.wL = B.wR = 1.4;
      } else {
        S.vis.bib = false;
      }
      S.set.state.bushShake = seg(t, 1.75, 1.8) * (1 - seg(t, 1.8, 3.0));
      S.fx.leaves([bush[0], 0.9, bush[2]], T - t + 1.75, T, { n: 16, spread: 0.9, life: 1.8, fall: 1.0, seed: 31, burst: 0.8 });
      S.fx.puff([bush[0], 0.6, bush[2]], T - t + 1.75, T, { n: 8, size: 0.35, spread: 0.6, color: 0xb6e39a, seed: 32, opacity: 0.6 });
      const bp = [B.x, B.y, B.z];
      lookAt(L, t < 1.75 ? bp : bush, 0.9); lookAt(M, t < 1.75 ? bp : bush, 0.9);
      face(L, 'amazed', seg(t, 0, 0.5) * (1 - seg(t, 1.0, 1.2))); face(M, 'amazed', seg(t, 0, 0.5) * (1 - seg(t, 1.0, 1.2)));
      face(L, 'oops', seg(t, 1.0, 1.2)); face(M, 'surprised', seg(t, 1.0, 1.2));
      L.headTilt -= 0.15 * seg(t, 1.75, 2.0);
      S.shake(0.25 * pulse(t, 1.75, 0.4), 25);
      S.cam(kf(t, [[0, [0.9, 2.3, 2.6]], [3, [1.2, 1.7, 2.4]]]), kf(t, [[0, [2.0, 2.2, -1.0]], [0.9, [2.5, 3.6, -1.7]], [1.9, [3.3, 1.0, -2.0]], [3, [3.2, 0.8, -1.9]]]), 44, kf(t, [[1.6, 0], [2.2, -0.05, ease.outBack]]));
    },
  },
  {
    id: 'C11-yeux-dans-le-buisson', set: 'clearing', dur: 2.5, light: LIGHT,
    sfx: [[0.1, 'leaves_rustle_small'], [1.2, 'blink'], [1.55, 'blink'], [1.9, 'bib_tiny_squeak']],
    run(S, t) {
      const T = S.T;
      const B = S.bib;
      S.vis.leo = S.vis.maya = false;
      stuckBall(S, T);
      const bush = CLEAR.bush;
      S.set.state.bushShake = 0.6 * (1 - seg(t, 0, 0.9));
      Object.assign(B, { x: bush[0] - 0.12, y: 0.3, z: bush[2] + 0.86, ry: facing(bush, [bush[0] - 0.5, 0, bush[2] + 3]) });
      bibFace(B, 'neutral');
      B.face.eo = seg(t, 0.8, 1.0) * (1 - bell(t, 1.15, 1.3) - bell(t, 1.5, 1.65));
      B.face.lx = kf(t, [[1.0, 0], [1.6, -0.5], [2.2, 0.4]]);
      B.tufts = -0.6;
      S.fx.leaves([bush[0], 1.0, bush[2]], T - t - 0.4, T, { n: 8, spread: 0.6, life: 2.8, fall: 1.2, seed: 33, burst: 0.2 });
      S.cam(kf(t, [[0, [bush[0] - 0.5, 0.75, bush[2] + 2.5]], [2.5, [bush[0] - 0.45, 0.7, bush[2] + 2.2]]]), [bush[0] - 0.05, 0.55, bush[2] + 0.5], 34);
    },
  },
  {
    id: 'C12-maya-sourit', set: 'clearing', dur: 2, light: LIGHT,
    sfx: [[0.3, 'maya_giggle_breath']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya;
      S.vis.bib = false;
      stuckBall(S, T);
      Object.assign(L, { x: 0.25, z: -0.75 }); Object.assign(M, { x: 1.95, z: -0.45 });
      const bush = CLEAR.bush;
      L.ry = facing([L.x, 0, L.z], bush); M.ry = facing([M.x, 0, M.z], bush);
      idle(L, T, 1); idle(M, T, 2);
      lookAt(L, [bush[0], 0.6, bush[2]]); lookAt(M, [bush[0], 0.6, bush[2]]);
      face(M, 'giggle', seg(t, 0.2, 0.5)); M.headTilt += 0.18 * seg(t, 0.2, 0.6);
      handToMouth(M, 'R', 0.6 * seg(t, 0.3, 0.6));
      laugh(M, t, 0.4);
      face(L, 'oops', 1 - seg(t, 0.8, 1.2)); face(L, 'grin', seg(t, 0.8, 1.2));
      S.cam(kf(t, [[0, [3.75, 1.15, -1.55]], [2, [3.65, 1.15, -1.45]]]), [1.1, 1.0, -0.6], 36);
    },
  },
];
