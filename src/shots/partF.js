// 2:38 – 3:07 — Gag final au village, au coucher du soleil.
import { clamp, lerp, ease, seg, kf, arc, pulse, spring, bell, TAU } from '../lib/util.js';
import { face, idle, walk, run, lookAt, point, holdBall, armsUp, shrug, laugh, handToMouth, facing, bibIdle, bibHop, bibFlap, bibLook, bibFace } from './anim.js';
import { passGame, handPos, bounceY, BALL_R } from './common.js';

const GOLD = { focus: [1, 0, 1], size: 8, sunDir: [0.75, 0.3, 0.5], sunColor: 0xffb469, sunI: 2.9, hemiI: 1.1, hemiSky: 0xffd3a8, hemiGround: 0xa99a6a, rimColor: 0xffc890, rimI: 1.5, rimDir: [-0.7, 0.4, -0.6], envI: 0.45, exposure: 1.04 };
const G = { leo: [-0.2, 0, 1.6], maya: [2.4, 0, 1.5], bib: [1.1, 0, 0.55] };
const PASSES_F = [
  { t: 159.6, from: 'leo', to: 'maya', dur: 0.9, h: 0.7 },
  { t: 162.4, from: 'maya', to: 'leo', dur: 0.9, h: 0.7 },
];
const TOSS_T = 167.15, CATCH_T = 167.9, SLIP_T = 168.45, POC_T = 177.62;

function place(S, T) {
  const L = S.leo, M = S.maya, B = S.bib;
  Object.assign(L, { x: G.leo[0], z: G.leo[2], ry: facing(G.leo, G.maya) });
  Object.assign(M, { x: G.maya[0], z: G.maya[2], ry: facing(G.maya, G.leo) });
  Object.assign(B, { x: G.bib[0], z: G.bib[2], ry: 0.15 });
  idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
  face(L, 'happy'); face(M, 'happy');
}
// le ballon qui s'échappe : monte très haut, puis retombe droit sur Bibou
function escapedBall(T) {
  const top = 13;
  const x = G.bib[0] + 0.02, z = G.bib[2] + 0.05;
  if (T < SLIP_T) return null;
  const up = SLIP_T, peak = 171.6;
  if (T < peak) {
    const u = seg(T, up, peak, ease.out);
    return [x, lerp(0.95, top, u), z];
  }
  if (T < POC_T) {
    const u = seg(T, 175.9, POC_T, ease.in);
    return [x, lerp(top, 0.42, u) + (T < 175.9 ? Math.sin((T - peak) * 1.5) * 0.15 : 0), z];
  }
  // rebond après le « POC »
  const d = T - POC_T;
  return [x + 1.6 * (1 - Math.exp(-d * 1.4)), BALL_R + bounceY(d + 0.24, 0.9, 0.5), z + 1.0 * (1 - Math.exp(-d * 1.4))];
}

export const partF = [
  {
    id: 'F1-retour-au-village', set: 'village', sky: 'golden', dur: 3.5, light: { ...GOLD, size: 12 },
    sfx: [[2.0, 'catch']],
    run(S, t) {
      const T = S.T;
      place(S, T);
      passGame(S, T, PASSES_F);
      const bp = [S.ball.x, S.ball.y, S.ball.z];
      lookAt(S.leo, bp, 0.7); lookAt(S.maya, bp, 0.7); bibLook(S.bib, bp);
      S.bib.ry = S.bib.face.lx * 0.35;
      S.cam(kf(t, [[0, [4.2, 1.9, 5.0]], [3.5, [2.1, 1.45, 4.8]]]), kf(t, [[0, [1.0, 1.0, 0.8]], [3.5, [1.0, 0.82, 0.9]]]), 40);
    },
  },
  {
    id: 'F2-passes', set: 'village', sky: 'golden', dur: 3, light: GOLD,
    sfx: [[0.9, 'catch'], [1.5, 'look_tick'], [2.1, 'leo_hmm']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      place(S, T);
      const st = passGame(S, T, PASSES_F);
      const bp = [S.ball.x, S.ball.y, S.ball.z];
      lookAt(M, bp, 0.7); bibLook(B, bp);
      // Leo se tourne vers Bibou : « à toi ! »
      const turn = seg(t, 1.3, 1.7);
      L.ry = lerp(facing(G.leo, G.maya), facing(G.leo, G.bib), turn);
      lookAt(L, bp, 0.7 * (1 - turn));
      lookAt(L, [B.x, 0.3, B.z], turn);
      face(L, 'grin', turn);
      L.face.bL += 0.4 * bell(t, 1.8, 2.8); L.face.bR += 0.4 * bell(t, 1.8, 2.8);
      L.headTilt += 0.15 * turn;
      bibFace(B, 'amazed', turn);
      B.ry = lerp(B.face.lx * 0.35, facing(G.bib, G.leo), turn);
      S.cam(kf(t, [[0, [1.0, 1.25, 6.0]], [3, [0.9, 1.15, 5.3]]]), [0.9, 0.8, 1.0], 36);
    },
  },
  {
    id: 'F3-bibou-se-prepare', set: 'village', sky: 'golden', dur: 2, light: GOLD,
    sfx: [[0.2, 'bib_determined'], [0.6, 'wiggle', { dur: 1.0 }], [1.6, 'bib_hup']],
    run(S, t) {
      const T = S.T;
      const B = S.bib;
      place(S, T);
      S.vis.leo = S.vis.maya = false;
      S.ball.visible = false;
      B.ry = facing(G.bib, G.leo);
      // posture héroïque : il se ramasse, tortille, aigrettes dressées
      const c = seg(t, 0.2, 0.6);
      B.sq = 1 - 0.18 * c;
      B.rz += Math.sin(t * 24) * 0.1 * bell(t, 0.6, 1.6);
      B.fL = Math.max(0, Math.sin(t * 24)) * 0.5 * bell(t, 0.6, 1.6);
      B.fR = Math.max(0, -Math.sin(t * 24)) * 0.5 * bell(t, 0.6, 1.6);
      B.tufts = 1.2 * c;
      B.puff = 0.4 * c;
      B.wL = B.wR = 0.15 + 0.5 * c;
      bibFace(B, 'determined', c);
      B.face.eo = 1.0 - 0.1 * c;
      B.face.es = 1.08;
      bibLook(B, [G.leo[0], 0.9, G.leo[2]]);
      const fw = [Math.sin(B.ry + 0.5), Math.cos(B.ry + 0.5)];
      S.cam([B.x + fw[0] * 1.0, 0.3, B.z + fw[1] * 1.0], [B.x, 0.22, B.z], 32, 0.05);
    },
  },
  {
    id: 'F4-attrape-et-glisse', set: 'village', sky: 'golden', dur: 2.5, light: GOLD,
    sfx: [[0.15, 'toss'], [0.6, 'jump_small'], [0.9, 'catch_soft'], [1.0, 'bib_triumph_short'], [1.45, 'slip_boing'], [1.5, 'whoosh_up'], [1.6, 'bib_uh_oh']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      place(S, T);
      L.ry = facing(G.leo, G.bib);
      M.ry = facing(G.maya, G.bib);
      const air = seg(T, 167.6, 168.6);
      if (T < TOSS_T) { holdBall(L, 1); S.hold('leo', 'hands'); }
      else if (T < CATCH_T) {
        const u = (T - TOSS_T) / (CATCH_T - TOSS_T);
        const p = arc(handPos(L), [G.bib[0], 0.95, G.bib[2]], 0.45, u);
        S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2]; S.ball.rx = u * 5;
        holdBall(L, 1 - seg(T, TOSS_T, TOSS_T + 0.3));
      } else if (T < SLIP_T) {
        S.hold('bib', 'above');
      } else {
        const p = escapedBall(T);
        S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2]; S.ball.rx = T * 6;
      }
      // saut de Bibou
      B.ry = facing(G.bib, G.leo);
      const jy = 0.55 * Math.sin(air * Math.PI);
      B.y = jy;
      if (T > 167.6 && T < 168.6) { B.sq = 1.12; bibFlap(B, T, 0.4, 12); }
      if (T >= CATCH_T && T < SLIP_T) {
        B.wL = B.wR = 2.5; B.wfL = B.wfR = 0.1;
        bibFace(B, 'proud');
        B.face.eo = 0.5;
      } else if (T >= SLIP_T) {
        const k = seg(T, SLIP_T, SLIP_T + 0.25);
        B.wL = B.wR = lerp(2.5, 1.2, k);
        bibFace(B, 'surprised', k);
        B.face.ly = 1.2 * k;
        B.face.es = 1.2;
        bibLook(B, [S.ball.x, S.ball.y, S.ball.z]);
      } else {
        bibFace(B, 'determined');
        bibLook(B, [S.ball.x, S.ball.y, S.ball.z]);
      }
      B.sq *= 1 - 0.2 * pulse(T, 168.6, 0.25);
      lookAt(L, [S.ball.x, S.ball.y, S.ball.z], 0.8); lookAt(M, [S.ball.x, S.ball.y, S.ball.z], 0.8);
      face(L, T < SLIP_T ? 'grin' : 'surprised'); face(M, T < SLIP_T ? 'happy' : 'surprised');
      S.cam(kf(t, [[0, [1.0, 0.62, 3.35]], [2.5, [1.0, 0.7, 3.15]]]), kf(t, [[0, [1.0, 0.7, 0.7]], [1.4, [1.05, 0.95, 0.6]], [2.5, [1.1, 2.0, 0.55]]]), 44);
    },
  },
  {
    id: 'F5-tous-regardent-en-l-air', set: 'village', sky: 'golden', dur: 3, light: GOLD,
    sfx: [[0.0, 'music_cut'], [0.1, 'wind_soft'], [0.2, 'cricket_silence', { dur: 2.6 }]],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      place(S, T);
      const p = escapedBall(T);
      S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2]; S.ball.rx = T * 4;
      L.ry = facing(G.leo, [G.bib[0], 0, G.bib[2] + 1]); M.ry = facing(G.maya, [G.bib[0], 0, G.bib[2] + 1]);
      B.ry = 0;
      lookAt(L, p); lookAt(M, p); bibLook(B, p);
      L.headUp = M.headUp = 0.65;
      face(L, 'surprised', 0.7); face(M, 'surprised', 0.7); bibFace(B, 'surprised', 0.8);
      L.face.op = M.face.op = 0.35;
      S.cam(kf(t, [[0, [1.1, 0.45, 4.6]], [3, [1.1, 0.45, 4.3]]]), [1.1, 1.25, 1.0], 42);
    },
  },
  {
    id: 'F6-ils-se-regardent', set: 'village', sky: 'golden', dur: 2, light: GOLD,
    sfx: [[0.2, 'look_tick'], [0.45, 'look_tick'], [0.8, 'look_tick'], [1.2, 'look_tick']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      place(S, T);
      S.ball.visible = false;
      L.ry = facing(G.leo, [G.bib[0], 0, G.bib[2] + 1]); M.ry = facing(G.maya, [G.bib[0], 0, G.bib[2] + 1]);
      B.ry = 0;
      const sky = [1.1, 12, 0.6];
      const a = seg(t, 0.15, 0.35), b = seg(t, 0.4, 0.6);
      lookAt(L, sky, 1 - a); lookAt(L, [M.x, 1.1, M.z], a);
      lookAt(M, sky, 1 - b); lookAt(M, [L.x, 1.1, L.z], b);
      bibLook(B, sky, 1);
      bibLook(B, [L.x, 1.0, L.z], seg(t, 0.7, 0.85) * (1 - seg(t, 1.1, 1.25)));
      bibLook(B, [M.x, 1.0, M.z], seg(t, 1.1, 1.25));
      face(L, 'neutral'); face(M, 'neutral'); bibFace(B, 'neutral');
      L.face.sm = M.face.sm = 0;
      S.cam([1.1, 0.95, 5.2], [1.1, 0.8, 1.0], 36);
    },
  },
  {
    id: 'F7-regard-camera', set: 'village', sky: 'golden', dur: 2.5, light: GOLD,
    sfx: [[0.3, 'look_tick_double'], [0.8, 'sheepish_sting']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      place(S, T);
      S.ball.visible = false;
      const cam = kf(t, [[0, [1.1, 0.95, 4.6]], [2.5, [1.1, 0.92, 4.0]]]);
      L.ry = facing(G.leo, cam) * seg(t, 0.2, 0.5) + facing(G.leo, [G.bib[0], 0, G.bib[2] + 1]) * (1 - seg(t, 0.2, 0.5));
      M.ry = facing(G.maya, cam) * seg(t, 0.2, 0.5) + facing(G.maya, [G.bib[0], 0, G.bib[2] + 1]) * (1 - seg(t, 0.2, 0.5));
      B.ry = 0;
      const k = seg(t, 0.25, 0.45, ease.out);
      lookAt(L, [M.x, 1.1, M.z], 1 - k); lookAt(L, cam, k);
      lookAt(M, [L.x, 1.1, L.z], 1 - k); lookAt(M, cam, k);
      bibLook(B, cam, k);
      // petit sourire gêné, face au spectateur
      const sm = seg(t, 0.7, 1.0);
      face(L, 'sheepish', sm); face(M, 'sheepish', sm); bibFace(B, 'sheepish', sm);
      B.face.bl = 0.9 * sm;
      L.headTilt += 0.12 * sm; M.headTilt -= 0.12 * sm;
      shrug(L, 0.4 * bell(t, 0.9, 2.3)); shrug(M, 0.4 * bell(t, 1.0, 2.4));
      B.wL = B.wR = 0.15 + 0.6 * bell(t, 1.0, 2.2);
      S.cam(cam, [1.1, 0.72, 1.0], 36);
    },
  },
  {
    id: 'F8-poc', set: 'village', sky: 'golden', dur: 2.5, light: GOLD,
    sfx: [[0.05, 'falling_whistle', { dur: 0.55 }], [POC_T - 177, 'poc'], [POC_T - 177 + 0.3, 'flop_soft'], [POC_T - 177 + 0.32, 'boing'], [POC_T - 177 + 0.5, 'ball_bounce', { v: 0.7 }], [POC_T - 177 + 0.95, 'ball_bounce', { v: 0.4 }], [POC_T - 177 + 0.4, 'dizzy_tweets', { dur: 1.8 }]],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      place(S, T);
      const p = escapedBall(T);
      S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2];
      B.ry = 0;
      face(L, 'sheepish', 0.6); face(M, 'sheepish', 0.6);
      bibFace(B, 'sheepish', 1 - seg(T, POC_T, POC_T + 0.05));
      const camP = [1.1, 0.8, 3.2];
      lookAt(L, camP, 0.6); lookAt(M, camP, 0.6); bibLook(B, camP, 1 - seg(T, POC_T, POC_T + 0.05));
      if (T >= POC_T) {
        // POC ! écrasé, puis il bascule doucement sur le dos
        B.sq = 1 - 0.4 * pulse(T, POC_T, 0.3);
        const f = seg(T, POC_T + 0.2, POC_T + 0.5, ease.in);
        B.rx = -1.75 * f + spring(T, POC_T + 0.5, 1.6, 3) * 0.3;
        B.fL = 0.7 * f; B.fR = 0.7 * f;
        bibFace(B, 'neutral');
        B.face.eo = 0.6; B.face.lx = Math.sin(T * 7) * 0.8; B.face.ly = Math.cos(T * 7) * 0.6;
        B.tufts = -0.5;
        S.fx.dizzy([B.x, 0.42 - 0.2 * f, B.z + 0.1 * f], T, 0.17, 0.9);
        S.fx.sparkle([B.x, 0.42, B.z], POC_T, T, { n: 6, radius: 0.25, size: 0.12, life: 0.5, color: 0xffe08a, seed: 91 });
        face(L, 'oops', seg(T, POC_T, POC_T + 0.1)); face(M, 'oops', seg(T, POC_T, POC_T + 0.1));
        L.crouch += 0.15 * pulse(T, POC_T, 0.4); M.crouch += 0.15 * pulse(T, POC_T, 0.4);
      }
      S.cam(kf(t, [[0, [1.25, 0.72, 2.85]], [2.5, [1.2, 0.7, 2.6]]]), [1.1, 0.42, 0.55], 38, kf(T, [[POC_T, 0], [POC_T + 0.4, 0.05, ease.outBack]]));
    },
  },
  {
    id: 'F9-eclats-de-rire', set: 'village', sky: 'golden', dur: 4.5, light: { ...GOLD, size: 10 },
    sfx: [[0.1, 'kids_laugh_breath', { dur: 3.5 }], [0.6, 'bib_giggle'], [1.6, 'bib_giggle'], [2.6, 'bib_giggle']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      place(S, T);
      const p = escapedBall(T);
      S.ball.x = p[0]; S.ball.y = p[1]; S.ball.z = p[2];
      B.rx = -1.75 + Math.sin(t * 6) * 0.06;
      B.ry = 0;
      B.fL = 0.7 + 0.3 * Math.sin(t * 12); B.fR = 0.7 + 0.3 * Math.sin(t * 12 + 2);
      B.wL = 0.6 + 0.3 * Math.sin(t * 10); B.wR = 0.6 + 0.3 * Math.sin(t * 10 + 1);
      bibFace(B, 'laugh', seg(t, 0.4, 0.8));
      B.beak = 0.5 + 0.3 * Math.sin(t * 20);
      S.fx.dizzy([B.x, 0.22, B.z + 0.1], T, 0.17, 0.9 * (1 - seg(t, 0, 1.0)));
      L.ry = facing(G.leo, G.bib); M.ry = facing(G.maya, G.bib);
      face(L, 'laugh'); face(M, 'laugh');
      laugh(L, t, 1, true); laugh(M, t + 0.15, 1, true);
      handToMouth(M, 'R', 0.4);
      L.aL.f = 0.5; L.aL.b = 1.7; L.aR.f = 0.5; L.aR.b = 1.7;
      // la caméra s'élève doucement au-dessus du village au coucher du soleil
      const u = seg(t, 0.8, 4.5, ease.inOut);
      S.cam([lerp(1.1, 1.6, u), lerp(1.0, 5.6, u), lerp(4.0, 10.5, u)], [1.1, lerp(0.5, 1.6, u), lerp(0.8, -2, u)], lerp(38, 44, u));
    },
  },
  {
    id: 'F10-fondu', set: 'village', sky: 'golden', dur: 3, light: { ...GOLD, size: 16 },
    sfx: [],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      place(S, T);
      S.ball.x = G.bib[0] + 1.6; S.ball.y = BALL_R; S.ball.z = G.bib[2] + 1.0;
      B.rx = -1.75 + Math.sin(t * 6) * 0.06;
      B.ry = 0;
      B.fL = 0.7 + 0.3 * Math.sin(t * 12); B.fR = 0.7 + 0.3 * Math.sin(t * 12 + 2);
      bibFace(B, 'laugh');
      L.ry = facing(G.leo, G.bib); M.ry = facing(G.maya, G.bib);
      face(L, 'laugh'); face(M, 'laugh');
      laugh(L, t, 0.8, true); laugh(M, t + 0.15, 0.8, true);
      const u = seg(t, 0, 3, ease.out);
      S.cam([lerp(1.6, 1.9, u), lerp(5.6, 7.4, u), lerp(10.5, 13.5, u)], [1.1, lerp(1.6, 2.4, u), lerp(-2, -5, u)], 44);
      S.fade(seg(t, 0.3, 2.6, ease.inOut));
    },
  },
];
