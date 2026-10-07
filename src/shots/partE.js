// 2:15 – 2:38 — Le retour : la descente, la touffe d'herbe, les rires, le câlin.
import { clamp, lerp, ease, seg, kf, arc, pulse, spring, bell, TAU } from '../lib/util.js';
import { face, idle, walk, run, lookAt, point, holdBall, armsUp, armsOut, shrug, laugh, handToMouth, facing, bibIdle, bibHop, bibFlap, bibLook, bibFace } from './anim.js';
import { CLEAR } from '../world/clearing.js';
import { LIGHT_C } from './partC.js';

const LIGHT = { ...LIGHT_C, focus: [0.3, 0, 1.5], size: 8 };
const TUFT = CLEAR.tuft;
const LAND_T = 143.25;
// assis dans l'herbe haute après la chute
const SIT = { leo: [TUFT[0] - 0.6, -0.42, TUFT[2] + 0.12], maya: [TUFT[0] + 0.6, -0.42, TUFT[2] + 0.18], bib: [TUFT[0], 0.6, TUFT[2] - 0.05] };

// descente de Bibou, accroché au ballon, comme une feuille qui tombe
export function descend(T) {
  const top = [2.35, 7.6, -2.05];
  const end = [TUFT[0], 0.55, TUFT[2] - 0.05];
  const u = seg(T, 135.3, LAND_T, (x) => x * x * (3 - 2 * x) * 0.6 + x * 0.4);
  const sway = Math.sin(T * 2.4) * 0.55 * (1 - u * 0.7);
  return [lerp(top[0], end[0], u) + sway, lerp(top[1], end[1], u) + Math.abs(Math.sin(T * 2.4)) * 0.12 * (1 - u), lerp(top[2], end[2], u) + sway * 0.4];
}
function bibFalling(S, T, t) {
  const B = S.bib;
  const p = descend(T);
  B.x = p[0]; B.y = p[1]; B.z = p[2];
  B.ry = 0.2 + Math.sin(T * 2.4) * 0.3;
  B.rz = -Math.cos(T * 2.4) * 0.25;
  S.hold('bib', 'above');
  bibFlap(B, T, 1.1, 22);
  B.wfL = B.wfR = 0;
  bibFace(B, 'scared');
  B.face.es = 1.25;
  B.beak = 0.6 + 0.2 * Math.sin(T * 30);
  B.tufts = 1.3;
  B.fL = 0.8 + 0.2 * Math.sin(T * 20); B.fR = 0.8 + 0.2 * Math.sin(T * 20 + 1);
  return p;
}

export const partE = [
  {
    id: 'E1-descente', set: 'clearing', dur: 4, light: { ...LIGHT, focus: [1.5, 3, -0.5], size: 8 },
    sfx: [[0.0, 'slide_whistle_down', { dur: 3.8 }], [0.0, 'flap_fast', { dur: 4.0 }], [0.6, 'bib_eek'], [2.4, 'bib_eek']],
    run(S, t) {
      const T = S.T;
      S.vis.leo = S.vis.maya = false;
      S.set.state.lever = 1;
      const p = bibFalling(S, T, t);
      S.cam([p[0] + 1.5, p[1] + 0.25, p[2] + 1.9], [p[0], p[1] + 0.05, p[2]], 40, 0.06 * Math.sin(T * 1.2));
    },
  },
  {
    id: 'E2-les-amis-courent', set: 'clearing', dur: 3, light: LIGHT,
    sfx: [[0.0, 'steps_run', { dur: 2.2, rate: 3.8, who: 'kids' }], [2.15, 'bump_boing'], [0.0, 'flap_fast', { dur: 3.0 }], [2.2, 'kids_oof']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya;
      S.set.state.lever = 1;
      const p = bibFalling(S, T, t);
      // ils courent sous Bibou en ajustant leur position, et se cognent
      const target = [p[0], 0, p[2]];
      const l0 = [3.4, 0, 1.3], m0 = [2.95, 0, 1.85];
      const u = seg(t, 0, 2.2, ease.inOut);
      const zig = Math.sin(t * 5) * 0.5 * (1 - u);
      L.x = lerp(l0[0], target[0] - 0.3, u) + zig; L.z = lerp(l0[2], target[2] + 0.6, u);
      M.x = lerp(m0[0], target[0] + 0.25, u) - zig; M.z = lerp(m0[2], target[2] + 0.95, u);
      L.ry = facing(l0, target) + Math.sin(t * 5) * 0.3; M.ry = facing(m0, target) - Math.sin(t * 5) * 0.3;
      if (t < 2.2) { run(L, t * 1.8, 0.8); run(M, t * 1.8 + 0.3, 0.8); }
      armsUp(L, 0.6, 0.5); armsUp(M, 0.6, 0.5);
      lookAt(L, p); lookAt(M, p);
      face(L, 'worried'); face(M, 'worried');
      // bousculade
      const bump = pulse(t, 2.15, 0.6);
      L.fallSide = 0.25 * bump; M.fallSide = -0.25 * bump;
      if (t > 2.15) { face(L, 'oops'); face(M, 'oops'); }
      idle(L, T, 1, 0.3); idle(M, T, 2, 0.3);
      S.cam(kf(t, [[0, [1.6, 1.15, 7.6]], [3, [0.8, 1.25, 7.3]]]), kf(t, [[0, [1.6, 2.0, 0.8]], [3, [-0.8, 1.6, 2.0]]]), 42);
    },
  },
  {
    id: 'E3-flump', set: 'clearing', dur: 2, light: LIGHT,
    sfx: [[0.6, 'grass_flump'], [0.62, 'kids_oof'], [0.65, 'bib_squeak_hurt'], [0.7, 'leaves_rustle']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.set.state.lever = 1;
      const land = seg(T, LAND_T - 0.25, LAND_T, ease.in);
      if (T < LAND_T) {
        const p = bibFalling(S, T, t);
        // les deux enfants plongent dans la touffe
        const l0 = [TUFT[0] - 0.1, 0, TUFT[2] + 1.15], m0 = [TUFT[0] + 0.55, 0, TUFT[2] + 1.35];
        const dive = seg(t, 0.2, 0.75, ease.in);
        L.x = lerp(l0[0], SIT.leo[0], dive); L.z = lerp(l0[2], SIT.leo[2], dive);
        M.x = lerp(m0[0], SIT.maya[0], dive); M.z = lerp(m0[2], SIT.maya[2], dive);
        L.ry = facing(l0, p); M.ry = facing(m0, p);
        armsUp(L, 0.8); armsUp(M, 0.8);
        L.fall = 1.3 * dive; M.fall = 1.3 * dive;
        L.y = SIT.leo[1] * dive * 0.5; M.y = SIT.maya[1] * dive * 0.5;
        face(L, 'scared'); face(M, 'scared');
      } else {
        S.vis.leo = S.vis.maya = S.vis.bib = false;
        S.ball.visible = false;
      }
      S.set.state.tuftWobble = seg(T, LAND_T, LAND_T + 0.05) * (1 - seg(T, LAND_T, LAND_T + 1.3));
      S.set.state.tuftPart = 0.6 * seg(T, LAND_T, LAND_T + 0.2);
      S.fx.puff([TUFT[0], 0.5, TUFT[2]], LAND_T, T, { n: 14, size: 0.45, spread: 1.0, color: 0xcfeeb0, seed: 81, opacity: 0.6, up: 0.6 });
      S.fx.sparkle([TUFT[0], 0.9, TUFT[2]], LAND_T + 0.05, T, { n: 10, radius: 0.9, size: 0.07, life: 1.6, color: 0xffffff, seed: 82, rise: 0.4 });
      S.shake(0.35 * pulse(T, LAND_T, 0.5), 25);
      S.cam([TUFT[0] + 1.6, 1.35, TUFT[2] + 4.2], [TUFT[0] + 0.1, 0.65, TUFT[2]], 40);
    },
  },
  {
    id: 'E4-silence-puis-ballon', set: 'clearing', dur: 3.5, light: LIGHT,
    sfx: [[0.0, 'birds_ambience', { dur: 3.5 }], [1.6, 'grass_rustle_slow'], [2.55, 'pop_small'], [2.9, 'bib_tiny_squeak']],
    run(S, t) {
      const T = S.T;
      const B = S.bib;
      S.set.state.lever = 1;
      S.vis.leo = S.vis.maya = false;
      S.set.state.tuftPart = 0.6;
      S.set.state.tuftWobble = 0.08 * bell(t, 1.5, 2.6);
      // d'abord le ballon rouge sort de l'herbe, puis Bibou en dessous
      const up = seg(t, 1.6, 3.3, ease.out);
      Object.assign(B, { x: SIT.bib[0], y: lerp(-0.1, SIT.bib[1], up), z: SIT.bib[2], ry: 0 });
      S.hold('bib', 'above');
      B.wL = B.wR = 2.4; B.wfL = B.wfR = 0.1;
      bibFace(B, 'neutral');
      B.face.eo = 0.8;
      B.face.lx = Math.sin(t * 2) * 0.4;
      B.tufts = -0.5 + up;
      S.cam(kf(t, [[0, [TUFT[0] + 0.15, 0.85, TUFT[2] + 3.4]], [3.5, [TUFT[0] + 0.12, 0.88, TUFT[2] + 2.8]]]), [TUFT[0], 0.75, TUFT[2]], 36);
    },
  },
  {
    id: 'E5-fou-rire', set: 'clearing', dur: 3, light: LIGHT,
    sfx: [[0.3, 'grass_rustle_slow'], [0.5, 'pop_small'], [0.75, 'pop_small'], [1.1, 'kids_laugh_breath', { dur: 1.8 }], [1.3, 'bib_giggle']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.set.state.lever = 1;
      S.set.state.tuftPart = 0.6;
      Object.assign(B, { x: SIT.bib[0], y: SIT.bib[1], z: SIT.bib[2], ry: 0 });
      S.hold('bib', 'above');
      B.wL = B.wR = 2.4; B.wfL = B.wfR = 0.1;
      bibIdle(B, T, 3, 0.5);
      // les têtes de Leo et Maya surgissent de l'herbe
      const pl = seg(t, 0.4, 0.65, ease.outBack), pm = seg(t, 0.65, 0.9, ease.outBack);
      Object.assign(L, { x: SIT.leo[0], y: lerp(-1.2, SIT.leo[1], pl), z: SIT.leo[2], ry: 0.15 });
      Object.assign(M, { x: SIT.maya[0], y: lerp(-1.2, SIT.maya[1], pm), z: SIT.maya[2], ry: -0.15 });
      idle(L, T, 1); idle(M, T, 2);
      lookAt(L, [B.x, B.y + 0.3, B.z], 0.65); lookAt(M, [B.x, B.y + 0.3, B.z], 0.65);
      const lg = seg(t, 1.05, 1.25);
      face(L, 'surprised', 1 - lg); face(M, 'surprised', 1 - lg);
      face(L, 'laugh', lg); face(M, 'laugh', lg);
      laugh(L, t, lg, true); laugh(M, t + 0.2, lg, true);
      L.aL.f = 0.6 * lg; L.aL.b = 1.6 * lg; L.aR.f = 0.6 * lg; L.aR.b = 1.6 * lg;
      handToMouth(M, 'R', 0.5 * lg);
      bibLook(B, [L.x, 0.8, L.z], seg(t, 0.5, 0.7) * (1 - seg(t, 0.9, 1.1)));
      bibLook(B, [M.x, 0.8, M.z], seg(t, 0.9, 1.1));
      bibFace(B, 'happy', seg(t, 1.3, 1.6));
      S.cam(kf(t, [[0, [TUFT[0] + 0.1, 0.95, TUFT[2] + 3.3]], [3, [TUFT[0] + 0.1, 0.95, TUFT[2] + 3.1]]]), [TUFT[0], 0.7, TUFT[2]], 38);
    },
  },
  {
    id: 'E6-bibou-fier', set: 'clearing', dur: 3, light: LIGHT,
    sfx: [[0.2, 'puff_up'], [0.4, 'bib_proud_hum'], [1.9, 'bib_offer_chirp']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.set.state.lever = 1;
      S.set.state.tuftPart = 0.6;
      Object.assign(L, { x: SIT.leo[0], y: SIT.leo[1], z: SIT.leo[2], ry: 0.3 });
      Object.assign(M, { x: SIT.maya[0], y: SIT.maya[1], z: SIT.maya[2], ry: -0.3 });
      Object.assign(B, { x: SIT.bib[0], y: SIT.bib[1], z: SIT.bib[2] });
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3, 0.4);
      face(L, 'happy'); face(M, 'happy');
      laugh(L, t, 0.3 * (1 - seg(t, 0, 0.6))); laugh(M, t, 0.3 * (1 - seg(t, 0, 0.6)));
      // fier comme un héros... puis il tend le ballon à Leo
      const offer = seg(t, 1.7, 2.2);
      B.ry = lerp(0, facing([B.x, 0, B.z], [L.x, 0, L.z]), offer);
      S.hold('bib', offer > 0.5 ? 'front' : 'above');
      B.wL = B.wR = lerp(2.4, 0.5, offer);
      B.wfL = B.wfR = lerp(0.1, 1.25, offer);
      bibFace(B, 'proud', seg(t, 0.2, 0.5) * (1 - offer));
      bibFace(B, 'happy', offer);
      B.puff = 0.7 * seg(t, 0.2, 0.5) * (1 - offer * 0.6);
      B.tufts = 1;
      B.y += 0.03 * pulse(t, 1.9, 0.3);
      lookAt(L, [B.x, B.y + 0.25, B.z]); lookAt(M, [B.x, B.y + 0.25, B.z]);
      L.face.bl = 0.5 * offer;
      S.cam(kf(t, [[0, [TUFT[0] + 1.0, 0.98, TUFT[2] + 1.75]], [3, [TUFT[0] + 0.9, 0.95, TUFT[2] + 1.6]]]), [TUFT[0] - 0.2, 0.8, TUFT[2]], 36);
    },
  },
  {
    id: 'E7-calin', set: 'clearing', dur: 4.5, light: LIGHT,
    sfx: [[0.45, 'catch_soft'], [1.25, 'hug_squish'], [1.35, 'bib_squeeze_squeak'], [2.4, 'bib_coo'], [3.2, 'maya_aww_breath']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.set.state.lever = 1;
      S.set.state.tuftPart = 0.6;
      Object.assign(L, { x: SIT.leo[0], y: SIT.leo[1], z: SIT.leo[2], ry: 0.45 });
      Object.assign(M, { x: SIT.maya[0], y: SIT.maya[1], z: SIT.maya[2], ry: -0.4 });
      idle(L, T, 1); idle(M, T, 2);
      // Leo prend le ballon, le pose devant lui, puis serre Bibou contre sa joue
      const take = seg(t, 0.3, 0.6), hug = seg(t, 1.0, 1.35, ease.out);
      const bStart = [SIT.bib[0], SIT.bib[1], SIT.bib[2]];
      const cheek = [L.x + 0.2, L.y + 1.02, L.z + 0.18];
      B.x = lerp(bStart[0], cheek[0], hug); B.y = lerp(bStart[1], cheek[1], hug); B.z = lerp(bStart[2], cheek[2], hug);
      B.ry = facing([B.x, 0, B.z], [L.x, 0, L.z]) * (1 - hug) + 0.5 * hug;
      if (t < 0.45) {
        S.hold('bib', 'front');
        B.wfL = B.wfR = 1.25; B.wL = B.wR = 0.5;
      } else if (t < 1.0) {
        holdBall(L, 1);
        S.hold('leo', 'hands');
      } else {
        S.ball.x = L.x + 0.38; S.ball.y = 0.42; S.ball.z = L.z + 0.42;
      }
      if (t > 0.45) {
        holdBall(L, take * (1 - hug));
        // les bras entourent Bibou
        L.aL.f = lerp(L.aL.f, 1.25, hug); L.aL.o = lerp(L.aL.o, 0.15, hug); L.aL.b = lerp(L.aL.b, 2.0, hug); L.aL.t = lerp(L.aL.t, -0.7, hug);
        L.aR.f = lerp(L.aR.f, 1.15, hug); L.aR.o = lerp(L.aR.o, 0.05, hug); L.aR.b = lerp(L.aR.b, 2.1, hug); L.aR.t = lerp(L.aR.t, -0.6, hug);
        L.headTilt = -0.25 * hug + Math.sin(t * 3) * 0.05 * hug;
        L.twist = 0.12 * Math.sin(t * 3) * hug;
      }
      face(L, 'happy', 1 - hug); face(L, 'tender', hug);
      // Bibou écrasé... et ravi
      B.sq = lerp(1, 0.78, hug);
      B.scale = 1;
      bibFace(B, 'happy', 1 - hug);
      bibFace(B, 'giggle', hug);
      B.face.bl = 1;
      B.wL = lerp(B.wL, 1.1, hug); B.wR = lerp(B.wR, 1.1, hug);
      B.wfL = lerp(B.wfL, 0, hug); B.wfR = lerp(B.wfR, 0, hug);
      B.tufts = 0.8;
      B.fL = B.fR = 0.6 * hug;
      if (t > 2.3) B.y += 0.008 * Math.sin(t * 9);
      face(M, 'tender', seg(t, 1.5, 2.0));
      lookAt(M, [L.x, L.y + 1.0, L.z], 1);
      M.aL.f = 0.7 * seg(t, 2.0, 2.5); M.aR.f = 0.7 * seg(t, 2.0, 2.5);
      M.aL.b = M.aR.b = 1.7 * seg(t, 2.0, 2.5);
      M.aL.o = M.aR.o = -0.05;
      M.headTilt = 0.2 * seg(t, 1.8, 2.4);
      S.cam(kf(t, [[0, [TUFT[0] + 0.05, 0.95, TUFT[2] + 2.1]], [4.5, [TUFT[0] - 0.15, 0.92, TUFT[2] + 1.75]]]), [TUFT[0] - 0.2, 0.75, TUFT[2]], 36);
    },
  },
];
