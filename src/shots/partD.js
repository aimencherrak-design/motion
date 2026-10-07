// 1:48 – 2:15 — L'idée : le levier improvisé et l'envol héroïque de Bibou.
import { clamp, lerp, ease, seg, kf, arc, pulse, spring, bell, TAU } from '../lib/util.js';
import { face, idle, walk, run, lookAt, point, holdBall, armsUp, shrug, laugh, handToMouth, crouchReady, facing, bibIdle, bibHop, bibFlap, bibLook, bibFace } from './anim.js';
import { CLEAR } from '../world/clearing.js';
import { LIGHT_C, stuckBall } from './partC.js';

const LIGHT = LIGHT_C;
const BALL = CLEAR.ball;
const P_LEO = [0.25, 0, -0.75], P_MAYA = [1.95, 0, -0.45];
// positions autour du levier
const STUMP_TOP = [CLEAR.stump[0], 0.5, CLEAR.stump[2]];
const MAYA_LEV = [2.95, 0, 1.85];
const BIB_SEAT = [CLEAR.logLow[0], 0, CLEAR.logLow[2]];
// le levier bascule à ce moment (temps global)
export const LAUNCH_T = 124.75;
const GRAB_T = 128.6;

// Hauteur du siège de Bibou sur l'extrémité basse du levier (suivant la bascule)
function leverLowY(lever) {
  return 0.62 - 1.635 * Math.sin(0.30 * (1 - 2 * lever));
}
function leverHighY(lever) {
  return 0.62 + 1.635 * Math.sin(0.30 * (1 - 2 * lever));
}

// Trajectoire de Bibou après la catapulte (temps global)
export function bibFlight(T) {
  const p0 = [BIB_SEAT[0], 1.25, BIB_SEAT[2]];
  const grab = [BALL[0], BALL[1], BALL[2] + 0.12];
  const top = [2.35, 7.6, -2.05];
  if (T < GRAB_T) {
    // ralenti léger : montée régulière jusqu'au ballon
    const u = seg(T, LAUNCH_T, GRAB_T, (x) => 1 - Math.pow(1 - x, 1.6));
    return [lerp(p0[0], grab[0], u), lerp(p0[1], grab[1], u), lerp(p0[2], grab[2], u)];
  }
  const u = seg(T, GRAB_T, 134.6, ease.out);
  return [lerp(grab[0], top[0], u), lerp(grab[1], top[1], u), lerp(grab[2], top[2], u)];
}

function atLever(S, T, t) {
  const L = S.leo, M = S.maya, B = S.bib;
  Object.assign(L, { x: STUMP_TOP[0], y: STUMP_TOP[1], z: STUMP_TOP[2] });
  L.ry = facing(STUMP_TOP, CLEAR.logHigh);
  Object.assign(M, { x: MAYA_LEV[0], z: MAYA_LEV[2] });
  M.ry = facing(MAYA_LEV, CLEAR.logHigh);
  Object.assign(B, { x: BIB_SEAT[0], y: leverLowY(0) + 0.09, z: BIB_SEAT[2] });
  B.ry = facing(BIB_SEAT, [L.x, 0, L.z]);
  idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
}

export const partD = [
  {
    id: 'D1-maya-reflechit', set: 'clearing', dur: 3, light: LIGHT,
    sfx: [[0.2, 'thinking_tick', { dur: 1.4 }]],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      stuckBall(S, T);
      Object.assign(L, { x: P_LEO[0], z: P_LEO[2] }); Object.assign(M, { x: P_MAYA[0], z: P_MAYA[2] });
      Object.assign(B, { x: CLEAR.bush[0] - 0.7, z: CLEAR.bush[2] + 1.2 });
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
      // Maya réfléchit : doigt sur le menton, regard qui balaye la clairière
      const lookPts = [[0, [BALL[0], BALL[1], BALL[2]]], [0.9, [0, 1.2, -2.6]], [1.8, [CLEAR.pivot[0], 0.4, CLEAR.pivot[2]]], [3, [CLEAR.pivot[0], 0.4, CLEAR.pivot[2]]]];
      const lp = kf(t, lookPts);
      M.ry = facing(P_MAYA, lp) * 0.5 + facing(P_MAYA, BALL) * 0.5;
      lookAt(M, lp);
      face(M, 'thinking');
      handToMouth(M, 'R', 0.85);
      M.aR.b = 2.0;
      L.ry = facing(P_LEO, M.x ? [M.x, 0, M.z] : P_MAYA);
      lookAt(L, [M.x, 1.2, M.z], 0.8);
      face(L, 'neutral');
      B.ry = facing([B.x, 0, B.z], [M.x, 0, M.z]);
      bibLook(B, [M.x, 1.1, M.z]);
      bibFace(B, 'neutral'); B.tufts = -0.3;
      // la caméra suit son regard jusqu'au levier
      const pan = seg(t, 1.4, 2.8, ease.inOut);
      S.cam(kf(t, [[0, [2.35, 1.12, -2.15]], [1.4, [2.45, 1.15, -2.05]], [2.8, [5.6, 1.5, -1.4]]]), [lerp(P_MAYA[0], CLEAR.pivot[0], pan), lerp(1.2, 0.55, pan), lerp(P_MAYA[2], CLEAR.pivot[2], pan)], lerp(36, 40, pan));
    },
  },
  {
    id: 'D2-l-idee', set: 'clearing', dur: 2, light: LIGHT,
    sfx: [[0.45, 'idea_ting'], [0.5, 'sparkle']],
    run(S, t) {
      const T = S.T;
      const M = S.maya;
      S.vis.leo = S.vis.bib = false;
      stuckBall(S, T);
      Object.assign(M, { x: P_MAYA[0], z: P_MAYA[2] });
      M.ry = facing(P_MAYA, CLEAR.pivot);
      idle(M, T, 2);
      lookAt(M, [CLEAR.pivot[0], 0.5, CLEAR.pivot[2]]);
      const i = seg(t, 0.4, 0.6, ease.outBack);
      face(M, 'thinking', 1 - i);
      face(M, 'idea', i);
      handToMouth(M, 'R', 0.85 * (1 - i));
      M.bob += 0.05 * pulse(t, 0.45, 0.35);
      M.headUp += 0.1 * i;
      S.fx.sparkle([M.x + 0.05, 1.75, M.z + 0.1], T - t + 0.45, T, { n: 10, radius: 0.25, size: 0.14, life: 1.1, seed: 41 });
      const fw = [Math.sin(M.ry), Math.cos(M.ry)];
      S.cam([M.x + fw[0] * 1.25, 1.18, M.z + fw[1] * 1.25], [M.x, 1.2, M.z], 32);
    },
  },
  {
    id: 'D3-leo-comprend', set: 'clearing', dur: 2.5, light: LIGHT,
    sfx: [[0.15, 'point_swish'], [0.7, 'look_tick'], [1.1, 'look_tick'], [1.55, 'leo_aha'], [1.6, 'nods']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya;
      S.vis.bib = false;
      stuckBall(S, T);
      Object.assign(L, { x: P_LEO[0] + 0.6, z: P_LEO[2] + 0.2 }); Object.assign(M, { x: P_MAYA[0], z: P_MAYA[2] });
      idle(L, T, 1); idle(M, T, 2);
      const lever = [CLEAR.pivot[0], 0.5, CLEAR.pivot[2]];
      M.ry = facing(P_MAYA, [L.x, 0, L.z]) * 0.5 + facing(P_MAYA, lever) * 0.5;
      point(M, 'L', lever, seg(t, 0.1, 0.35, ease.outBack));
      lookAt(M, [L.x, 1.2, L.z], 0.9);
      face(M, 'grin');
      L.ry = facing([L.x, 0, L.z], [M.x, 0, M.z]);
      // Leo regarde la branche, puis le ballon, puis comprend
      const l1 = seg(t, 0.55, 0.75), l2 = seg(t, 0.95, 1.15), l3 = seg(t, 1.45, 1.6);
      lookAt(L, [M.x, 1.1, M.z], 1);
      lookAt(L, lever, l1 * (1 - l2));
      lookAt(L, BALL, l2 * (1 - l3));
      lookAt(L, [M.x, 1.1, M.z], l3);
      face(L, 'neutral');
      face(L, 'thinking', l1 * (1 - l3));
      face(L, 'grin', l3);
      L.headUp += Math.sin((t - 1.6) * 18) * 0.12 * bell(t, 1.6, 2.4);
      S.cam(kf(t, [[0, [1.25, 1.15, 1.6]], [2.5, [1.25, 1.12, 1.4]]]), [1.45, 1.05, -0.55], 38);
    },
  },
  {
    id: 'D4-installation', set: 'clearing', dur: 5, light: { ...LIGHT, focus: [2.8, 0, 0.3] },
    sfx: [[0.2, 'hops', { dur: 1.6, rate: 5 }], [1.9, 'bib_land'], [2.0, 'wood_knock'], [2.1, 'bib_happy'], [0.4, 'steps_walk', { dur: 1.4, rate: 3 }], [2.2, 'climb', { dur: 0.8 }], [3.0, 'step'], [0.6, 'steps_walk', { dur: 1.6, rate: 3 }], [3.6, 'hands_ready']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      stuckBall(S, T);
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
      // Bibou saute sur l'extrémité basse
      const bFrom = [1.0, 0, 0.5];
      if (t < 1.9) {
        const u = seg(t, 0.2, 1.9, ease.inOut);
        B.x = lerp(bFrom[0], BIB_SEAT[0], u); B.z = lerp(bFrom[2], BIB_SEAT[2], u);
        B.ry = facing(bFrom, BIB_SEAT);
        bibHop(B, t * 5, 0.07);
        B.y += (leverLowY(0) + 0.09) * seg(t, 1.5, 1.9);
      } else {
        Object.assign(B, { x: BIB_SEAT[0], y: leverLowY(0) + 0.09, z: BIB_SEAT[2] });
        B.ry = facing(BIB_SEAT, STUMP_TOP);
        B.sq *= 1 - 0.2 * pulse(t, 1.9, 0.3);
        bibFace(B, 'happy');
        B.tufts = 0.7;
      }
      // Leo grimpe sur la souche
      const lFrom = [1.2, 0, 1.6], lBase = [STUMP_TOP[0] - 0.35, 0, STUMP_TOP[2] + 0.35];
      if (t < 2.2) {
        const u = seg(t, 0.4, 2.0, ease.inOut);
        L.x = lerp(lFrom[0], lBase[0], u); L.z = lerp(lFrom[2], lBase[2], u);
        L.ry = facing(lFrom, lBase);
        walk(L, t * 1.6, 1 - seg(t, 1.8, 2.1));
      } else {
        const u = seg(t, 2.2, 3.0, ease.inOut);
        L.x = lerp(lBase[0], STUMP_TOP[0], u); L.z = lerp(lBase[2], STUMP_TOP[2], u);
        L.y = 0.5 * seg(t, 2.2, 2.9, ease.out);
        L.crouch += 0.5 * bell(t, 2.2, 3.0);
        L.ry = facing(STUMP_TOP, CLEAR.logHigh);
      }
      face(L, 'determined');
      // Maya se place de l'autre côté
      const mFrom = [2.0, 0, 2.6];
      const um = seg(t, 0.6, 2.4, ease.inOut);
      M.x = lerp(mFrom[0], MAYA_LEV[0], um); M.z = lerp(mFrom[2], MAYA_LEV[2], um);
      M.ry = t < 2.4 ? facing(mFrom, MAYA_LEV) : facing(MAYA_LEV, CLEAR.logHigh);
      if (t < 2.4) walk(M, t * 1.6 + 0.3, 1 - seg(t, 2.1, 2.4));
      // mains prêtes sur l'extrémité haute
      const hands = seg(t, 3.5, 3.9);
      holdBall(M, hands, 0.05);
      M.aL.f += 0.25 * hands; M.aR.f += 0.25 * hands;
      face(M, 'determined', 0.8);
      lookAt(L, [B.x, 0.6, B.z], seg(t, 3.2, 3.6)); lookAt(M, [B.x, 0.6, B.z], seg(t, 3.9, 4.3));
      S.cam(kf(t, [[0, [5.6, 1.8, 5.0]], [5, [5.2, 1.7, 4.6]]]), kf(t, [[0, [2.2, 0.8, 0.0]], [5, [2.45, 0.9, -0.2]]]), 40);
    },
  },
  {
    id: 'D5-regards-complices', set: 'clearing', dur: 1.2, light: { ...LIGHT, focus: [3.3, 0, 1.3] },
    sfx: [[0.2, 'look_tick'], [0.55, 'nods']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya;
      S.vis.bib = false;
      atLever(S, T, t);
      holdBall(M, 1, 0.05); M.aL.f += 0.25; M.aR.f += 0.25;
      lookAt(L, [M.x, 1.1, M.z]); lookAt(M, [L.x, 1.6, L.z]);
      face(L, 'determined'); face(M, 'determined');
      L.headUp += -0.15 * pulse(t, 0.55, 0.3); M.headUp += -0.15 * pulse(t, 0.6, 0.3);
      S.cam([4.4, 1.45, 3.1], [3.45, 1.25, 1.3], 36);
    },
  },
  {
    id: 'D6-bibou-pret', set: 'clearing', dur: 1.3, light: { ...LIGHT, focus: [2, 0, -0.9] },
    sfx: [[0.3, 'bib_ready_chirp'], [0.35, 'salute_swish']],
    run(S, t) {
      const T = S.T;
      const B = S.bib;
      S.vis.leo = S.vis.maya = false;
      atLever(S, T, t);
      bibFace(B, 'determined');
      B.puff = 0.5;
      B.tufts = 1;
      // petit salut de l'aile
      const s = bell(t, 0.3, 1.1);
      B.wR = 0.15 + 1.6 * s; B.wfR = 0.9 * s;
      B.beak = 0.4 * bell(t, 0.3, 0.55);
      B.sq *= 1 + 0.05 * pulse(t, 0.3, 0.3);
      const fw = [Math.sin(B.ry), Math.cos(B.ry)];
      S.cam([B.x + fw[0] * 0.95 - fw[1] * 0.35, B.y + 0.42, B.z + fw[1] * 0.95 + fw[0] * 0.35], [B.x, B.y + 0.2, B.z], 34);
    },
  },
  {
    id: 'D7-catapulte', set: 'clearing', dur: 2.5, light: { ...LIGHT, focus: [2.6, 0, 0.2] },
    sfx: [[0.25, 'breath_in'], [0.95, 'jump'], [1.25, 'lever_thwack'], [1.28, 'bib_launch_squeak'], [1.3, 'whoosh_up']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      stuckBall(S, T);
      atLever(S, T, t);
      const lever = seg(T, LAUNCH_T, LAUNCH_T + 0.12, ease.in);
      S.set.state.lever = lever;
      // préparation, puis saut ensemble
      const prep = seg(t, 0.2, 0.8) * (1 - seg(t, 0.9, 1.0));
      L.crouch += 0.55 * prep; M.crouch += 0.45 * prep;
      armsUp(L, prep * 0.2);
      const jt = t - 0.95;
      const hi = [CLEAR.logHigh[0], 0, CLEAR.logHigh[2]];
      if (jt > 0) {
        const u = seg(t, 0.95, 1.25);
        const p = arc(STUMP_TOP, [hi[0] - 0.05, leverHighY(1) + 0.08, hi[2] - 0.05], 0.45, u);
        L.x = p[0]; L.y = p[1]; L.z = p[2];
        armsUp(L, 1 - u * 0.5, 0.7);
        L.lL.k = L.lR.k = 0.9 * (1 - u);
        if (t > 1.25) { L.crouch += 0.6 * pulse(t, 1.25, 0.5); armsOutLand(L, t); }
        M.y = 0.35 * Math.sin(seg(t, 0.95, 1.25) * Math.PI);
        holdBall(M, 1, 0.05);
        M.aL.f = M.aR.f = lerp(1.6, 0.9, seg(t, 1.0, 1.25));
        M.crouch += 0.5 * pulse(t, 1.25, 0.5);
      } else {
        holdBall(M, 1, 0.05); M.aL.f += 0.25; M.aR.f += 0.25;
      }
      face(L, t < 1.25 ? 'effort' : 'grin'); face(M, t < 1.25 ? 'effort' : 'amazed');
      // Bibou s'envole
      if (T < LAUNCH_T) {
        bibFace(B, 'determined'); B.puff = 0.4;
      } else {
        const p = bibFlight(T);
        B.x = p[0]; B.y = p[1]; B.z = p[2];
        B.sq = 1.25;
        B.wL = B.wR = 1.3;
        bibFace(B, 'surprised');
        B.face.es = 1.15;
        B.rx = -0.3;
      }
      lookAt(L, [B.x, B.y + 0.2, B.z], seg(t, 1.3, 1.6)); lookAt(M, [B.x, B.y + 0.2, B.z], seg(t, 1.3, 1.6));
      S.fx.puff([CLEAR.logHigh[0], 0.05, CLEAR.logHigh[2]], LAUNCH_T, T, { n: 10, size: 0.35, spread: 0.6, color: 0xe9e2c6, seed: 51 });
      S.shake(0.5 * pulse(T, LAUNCH_T, 0.5), 28);
      S.cam(kf(t, [[0, [5.2, 1.7, 4.6]], [1.2, [5.25, 1.65, 4.7]], [2.5, [5.3, 1.8, 4.9]]]), kf(t, [[0, [2.45, 0.9, -0.2]], [1.2, [2.45, 0.9, -0.2]], [2.5, [2.1, 2.7, -1.2]]]), 42);
    },
  },
  {
    id: 'D8-envol-heroique', set: 'clearing', dur: 4, light: { ...LIGHT, focus: [2.2, 3, -1.8], size: 6 },
    sfx: [[0.0, 'hero_rise'], [2.55, 'grab_ball'], [2.6, 'bib_triumph']],
    run(S, t) {
      const T = S.T;
      const B = S.bib;
      S.vis.leo = S.vis.maya = false;
      S.set.state.lever = 1;
      const p = bibFlight(T);
      B.x = p[0]; B.y = p[1]; B.z = p[2];
      B.ry = facing([p[0], 0, p[2]], [BALL[0], 0, BALL[2] - 0.5]) + Math.sin(t * 2) * 0.2;
      const near = seg(T, GRAB_T - 1.4, GRAB_T - 0.2);
      if (T < GRAB_T) {
        stuckBall(S, T);
        bibFlap(B, t, 0.6, 10);
        bibFace(B, 'determined', 1 - near);
        bibFace(B, 'amazed', near);
        B.face.es = 1 + 0.35 * near;
        bibLook(B, BALL);
        B.wfL = B.wfR = 1.2 * seg(T, GRAB_T - 0.4, GRAB_T);
        B.sq = 1.1;
      } else {
        // il l'attrape !
        S.hold('bib', 'front');
        B.wfL = B.wfR = 1.25;
        B.wL = B.wR = 0.5;
        B.fL = B.fR = 0.8;
        bibFace(B, 'grin');
        B.face.es = 1.15;
        B.puff = 0.4 * seg(T, GRAB_T, GRAB_T + 0.3);
        B.sq = 1 - 0.15 * pulse(T, GRAB_T, 0.3);
        S.fx.sparkle([BALL[0], BALL[1], BALL[2] + 0.1], GRAB_T, T, { n: 12, radius: 0.5, size: 0.18, life: 1.4, seed: 61 });
        S.fx.leaves([BALL[0], BALL[1], BALL[2]], GRAB_T, T, { n: 8, spread: 0.5, life: 2, fall: 3, seed: 62, burst: 0.3 });
      }
      S.set.state.canopyShake = pulse(T, GRAB_T, 0.8);
      // la caméra monte avec lui
      const c = [p[0] + 1.9, p[1] - 0.5, p[2] + 2.3];
      S.cam(c, [p[0], p[1] + 0.2, p[2]], 40, 0.05 * Math.sin(t * 0.8));
    },
  },
  {
    id: 'D9-moment-heroique', set: 'clearing', dur: 2, light: { ...LIGHT, focus: [2.3, 5.5, -2], size: 6, exposure: 1.12 },
    sfx: [[0.05, 'hero_fanfare_hit'], [0.4, 'sparkle']],
    run(S, t) {
      const T = S.T;
      const B = S.bib;
      S.vis.leo = S.vis.maya = false;
      S.set.state.lever = 1;
      const p = bibFlight(T);
      B.x = p[0]; B.y = p[1]; B.z = p[2];
      B.ry = 0.35;
      S.hold('bib', 'front');
      B.wfL = B.wfR = 1.25; B.wL = B.wR = 0.5;
      B.fL = B.fR = 0.6;
      bibFace(B, 'proud');
      B.face.eo = 0.6; B.face.lo = 0.6;
      B.puff = 0.6;
      B.tufts = 1.2;
      B.tail = 0.6;
      S.fx.sparkle([p[0], p[1] + 0.3, p[2]], T - t + 0.1, T, { n: 14, radius: 0.6, size: 0.2, life: 1.8, seed: 71 });
      // contre-plongée, soleil derrière lui
      S.cam(kf(t, [[0, [p[0] + 0.45, p[1] - 0.45, p[2] + 1.45]], [2, [p[0] + 0.5, p[1] - 0.4, p[2] + 1.25]]]), [p[0], p[1] + 0.22, p[2]], 40, -0.06);
      S.light.sunDir = [0.1, 0.5, -0.9];
      S.light.rimI = 2.2;
      S.light.rimDir = [0.2, 0.6, -0.8];
    },
  },
  {
    id: 'D10-trop-haut', set: 'clearing', dur: 3.5, light: { ...LIGHT, focus: [1.5, 0, 0], size: 9 },
    sfx: [[0.9, 'music_cut'], [1.2, 'bib_gulp'], [1.6, 'wind_high', { dur: 1.9 }]],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.set.state.lever = 1;
      const p = bibFlight(T);
      B.x = p[0]; B.y = p[1]; B.z = p[2];
      B.ry = 0.35;
      S.hold('bib', 'front');
      B.wfL = B.wfR = 1.25; B.wL = B.wR = 0.5;
      // il regarde en bas... et réalise
      const down = seg(t, 0.6, 1.1);
      bibFace(B, 'proud', 1 - down);
      bibFace(B, 'scared', down);
      B.face.es = 1 + 0.5 * seg(t, 1.1, 1.4, ease.outBack);
      B.face.ly = -1.2 * down;
      B.lean = 0.5 * down;
      B.tufts = lerp(1.2, -1, down);
      B.tremble = seg(t, 1.4, 1.8);
      // les amis tout petits en bas
      Object.assign(L, { x: CLEAR.logHigh[0] - 0.05, y: leverHighY(1) + 0.08, z: CLEAR.logHigh[2] - 0.05 });
      Object.assign(M, { x: MAYA_LEV[0], z: MAYA_LEV[2] });
      idle(L, T, 1); idle(M, T, 2);
      lookAt(L, p); lookAt(M, p);
      armsUp(L, 0.5); armsUp(M, 0.4);
      face(L, 'amazed'); face(M, 'amazed');
      // caméra au-dessus de Bibou qui plonge vers le sol
      if (t < 1.75) {
        // gros plan : ses yeux deviennent énormes
        const fw = [Math.sin(B.ry), Math.cos(B.ry)];
        S.cam([p[0] + fw[0] * 0.95, p[1] + 0.05, p[2] + fw[1] * 0.95], [p[0], p[1] + 0.12, p[2]], 34);
      } else {
        // vue plongeante : les amis minuscules tout en bas
        S.cam([p[0] - 0.45, p[1] + 0.85, p[2] - 0.4], [p[0] + 0.3, p[1] - 3.2, p[2] + 1.0], 52);
      }
    },
  },
];

function armsOutLand(P, t) {
  P.aL.o += 0.6; P.aR.o += 0.6;
}
