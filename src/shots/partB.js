// 0:46 – 1:15 — La poursuite (prairie derrière la colline).
import { clamp, lerp, ease, seg, kf, arc, pulse, spring, bell, TAU } from '../lib/util.js';
import { face, idle, walk, run, lookAt, point, holdBall, armsUp, shrug, laugh, visor, facing, bibIdle, bibHop, bibFlap, bibLook, bibFace, crouchReady } from './anim.js';
import { BALL_R } from './common.js';
import { MEADOW } from '../world/meadow.js';

const pz = MEADOW.pathZ;
const pathRy = (x) => Math.atan2(1, (1.6 / 11) * Math.cos(x / 11));
const LIGHT = { focus: [6, 0, 0], size: 10, sunDir: [0.4, 0.85, 0.7] };
const ROCK = MEADOW.rock;
const TOP = [ROCK[0] - 0.05, MEADOW.rockTop, ROCK[2] + 0.1];
const BALL_TREE = MEADOW.ballTree;

function onPath(P, x) {
  P.x = x; P.z = pz(x); P.ry = pathRy(x);
}

export const partB = [
  {
    id: 'B1-course', set: 'meadow', dur: 4, light: LIGHT,
    sfx: [[0, 'steps_run', { dur: 4, rate: 3.6, who: 'kids' }], [0, 'hops', { dur: 4, rate: 6.5 }], [1.4, 'flap_fast', { dur: 0.9 }]],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.vis.ball = false;
      const xl = -14 + t * 3.1;
      onPath(L, xl); onPath(M, xl - 1.7); onPath(B, xl - 3.1);
      M.z += 0.35; B.z -= 0.25;
      run(L, t * 1.75); run(M, t * 1.75 + 0.3);
      idle(L, T, 1, 0.3); idle(M, T, 2, 0.3);
      face(L, 'determined'); face(M, 'determined', 0.5); M.face.sm = 0.3;
      bibHop(B, t * 6.5, 0.1);
      B.lean = 0.25;
      bibFace(B, 'effort', 0.6);
      if (t > 1.4 && t < 2.3) bibFlap(B, t, 1, 15);
      const cx = xl - 1.4;
      S.cam([cx + 0.6, 1.0, pz(cx) + 5.0], [cx, 0.7, pz(cx)], 36);
      S.light.focus = [cx, 0, pz(cx)];
    },
  },
  {
    id: 'B2-bibou-essaie-de-voler', set: 'meadow', dur: 5, light: { ...LIGHT, focus: [2, 0, 0] },
    sfx: [[0.15, 'bib_land'], [0.6, 'flap_fast', { dur: 1.0 }], [0.7, 'bib_strain'], [1.62, 'flop_soft'], [1.95, 'bib_shake'], [2.3, 'flap_fast', { dur: 1.1 }], [2.4, 'bib_strain2'], [3.42, 'flop_flat'], [3.6, 'bib_grumble'], [4.3, 'idea_pop']],
    run(S, t) {
      const T = S.T;
      const B = S.bib;
      S.vis.leo = S.vis.maya = S.vis.ball = false;
      const x = 2.0;
      onPath(B, x);
      bibIdle(B, T, 3, 0.4);
      // arrivée en sautillant
      if (t < 0.15) bibHop(B, t * 6, 0.1);
      B.sq *= 1 - 0.15 * pulse(t, 0.15, 0.2);
      // tentative 1
      const a1 = t > 0.6 && t < 1.62;
      if (a1) {
        bibFlap(B, t, 1, 17);
        B.y = 0.06 * seg(t, 0.75, 1.0) * (1 - seg(t, 1.5, 1.62, ease.in));
        B.sq = 1.08;
        bibFace(B, 'effort');
        B.face.eo = 0.2;
        B.tufts = 1;
      }
      B.sq *= 1 - 0.25 * pulse(t, 1.62, 0.25);
      // secoue la tête
      if (t > 1.85 && t < 2.3) { B.ry += Math.sin((t - 1.85) * 40) * 0.25 * bell(t, 1.85, 2.3); bibFace(B, 'determined'); }
      // tentative 2, plus fort
      const a2 = t > 2.3 && t < 3.42;
      if (a2) {
        bibFlap(B, t, 1.2, 21);
        B.y = 0.11 * seg(t, 2.45, 2.8) * (1 - seg(t, 3.3, 3.42, ease.in));
        B.sq = 1.12;
        B.puff = 0.5;
        bibFace(B, 'effort');
        B.face.eo = 0;
        B.tremble = 0.6;
        B.tufts = 1.2;
      }
      // retombe à plat comme une crêpe
      if (t >= 3.42) {
        const f = 1 - seg(t, 3.42, 3.5) + seg(t, 3.5, 4.4) * 0;
        B.sq = lerp(0.62, 0.9, seg(t, 3.6, 4.2, ease.outElastic));
        B.wL = B.wR = 1.4 - seg(t, 3.6, 4.0) * 1.0;
        bibFace(B, 'skeptic');
        B.face.eo = 0.55; B.face.lx = 0;
        B.tufts = -0.8;
        // l'idée !
        const id = seg(t, 4.25, 4.45, ease.outBack);
        bibFace(B, 'idea', id);
        B.face.es = 1 + 0.15 * id;
        B.tufts = lerp(-0.8, 1, id);
        S.fx.sparkle([B.x, 0.45, B.z], T - t + 4.3, T, { n: 6, radius: 0.18, size: 0.08 });
      }
      const ry = B.ry + 0.55;
      S.cam([B.x + Math.sin(ry) * 1.05, 0.28, B.z + Math.cos(ry) * 1.05], [B.x, 0.17 + B.y * 0.6, B.z], 34);
    },
  },
  {
    id: 'B3-bibou-roule', set: 'meadow', dur: 2.5, light: { ...LIGHT, focus: [7, 0, 0] },
    sfx: [[0.0, 'roll', { dur: 2.2 }], [1.05, 'whoosh_fast'], [1.25, 'kids_surprise']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.vis.ball = false;
      const xl = 4.8 + t * 1.6, xm = 3.6 + t * 1.6;
      onPath(L, xl); onPath(M, xm); L.z -= 0.45; M.z += 0.5;
      const slow = seg(t, 1.1, 1.6);
      run(L, t * 1.7, 1 - slow * 0.7); run(M, t * 1.7 + 0.3, 1 - slow * 0.7);
      idle(L, T, 1, 0.3); idle(M, T, 2, 0.3);
      const bx = 0.5 + t * 5.4;
      onPath(B, bx);
      B.rx = (bx / 0.16) * 0.9;
      B.wL = B.wR = -0.1;
      B.tufts = -1;
      bibFace(B, 'effort'); B.face.eo = 0;
      B.y = Math.abs(Math.sin(t * 9)) * 0.03;
      S.fx.puff([bx - 0.2, 0, pz(bx)], T - t + 0.2, T, { n: 6, size: 0.25, spread: 0.3, color: 0xe9d5a6, seed: 4 });
      S.fx.puff([bx - 0.2, 0, pz(bx)], T - t + 0.9, T, { n: 6, size: 0.25, spread: 0.3, color: 0xe9d5a6, seed: 5 });
      // surprise au passage
      const sp = seg(t, 1.1, 1.3);
      face(L, 'determined', 1 - sp); face(L, 'surprised', sp);
      face(M, 'determined', 0.4 * (1 - sp)); face(M, 'surprised', sp);
      lookAt(L, [bx, 0.2, pz(bx)], sp); lookAt(M, [bx, 0.2, pz(bx)], sp);
      L.ry += 0.5 * sp; M.ry -= 0.5 * sp;
      S.cam([10.6, 0.75, pz(10.6) + 1.6], [5.2, 0.62, pz(5.2) - 0.1], 34);
    },
  },
  {
    id: 'B4-le-rocher', set: 'meadow', dur: 4, light: { ...LIGHT, focus: [11.5, 0, -1.5] },
    sfx: [[0.18, 'bonk'], [0.3, 'dizzy_tweets', { dur: 3.5 }], [0.3, 'steps_run', { dur: 0.5, rate: 3.6 }], [0.75, 'climb', { dur: 1.2 }], [2.05, 'step'], [2.4, 'look_tick'], [3.1, 'look_tick']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.vis.ball = false;
      // Bibou finit sa course contre le rocher
      const bpos = [10.9, 0, -0.95];
      if (t < 0.18) {
        const u = t / 0.18;
        B.x = lerp(9.6, bpos[0], u); B.z = lerp(pz(9.6), bpos[2], u);
        B.rx = u * 6; B.ry = 1.2;
      } else {
        B.x = bpos[0]; B.z = bpos[2];
        B.ry = 1.9 + Math.sin(T * 3) * 0.1;
        B.sq = 1 - 0.35 * pulse(t, 0.18, 0.3);
        B.rz = Math.sin(T * 5) * 0.12;
        bibFace(B, 'neutral');
        B.face.eo = 0.55; B.face.lx = Math.sin(T * 6) * 0.8; B.face.ly = Math.cos(T * 6) * 0.5;
        B.tufts = -0.4;
        S.fx.dizzy([B.x, 0.42, B.z], T, 0.17, 0.8);
      }
      // Leo arrive et escalade le rocher
      const arrive = seg(t, 0, 0.7, ease.out);
      const start = [9.0, 0, pz(9.0)], base = [11.2, 0, -1.55];
      const climb = seg(t, 0.75, 1.95, ease.inOut);
      if (t < 0.75) {
        L.x = lerp(start[0], base[0], arrive); L.z = lerp(start[2], base[2], arrive);
        L.ry = facing(start, base);
        run(L, t * 1.7, 1 - seg(t, 0.4, 0.75));
      } else {
        L.x = lerp(base[0], TOP[0], climb); L.z = lerp(base[2], TOP[2], climb);
        L.y = MEADOW.rockTop * seg(t, 0.75, 1.95, ease.out);
        L.ry = facing(base, TOP) + 0.2 * (1 - climb);
        const c = bell(t, 0.75, 2.0);
        L.crouch += 0.8 * c; L.lean += 0.6 * c;
        L.aL.f += (1.6 + Math.sin(t * 14) * 0.6) * c; L.aR.f += (1.6 - Math.sin(t * 14) * 0.6) * c;
        L.lL.f += Math.max(0, Math.sin(t * 14)) * 0.8 * c; L.lR.f += Math.max(0, -Math.sin(t * 14)) * 0.8 * c;
      }
      // en haut : main en visière, il scrute à gauche puis à droite
      const scan = seg(t, 2.1, 2.4);
      if (t > 2.0) {
        L.ry = lerp(L.ry, facing(TOP, BALL_TREE), seg(t, 2.0, 2.3));
        visor(L, 'R', scan);
        L.headYaw = kf(t, [[2.3, 0], [2.6, 0.55], [3.2, 0.55], [3.5, -0.55], [4, -0.55]]);
        L.face.lx = L.headYaw * 0.8;
        face(L, 'thinking', 0.6);
        L.face.bL = L.face.bR = 0.3;
      } else face(L, 'determined');
      idle(L, T, 1, 0.3);
      // Maya arrive en courant
      const ms = [8.3, 0, pz(8.3)], mb = [10.55, 0, -0.35];
      const ma = seg(t, 0.6, 1.6, ease.out);
      M.x = lerp(ms[0], mb[0], ma); M.z = lerp(ms[2], mb[2], ma);
      M.ry = facing(ms, mb);
      if (t < 1.6) run(M, t * 1.7, 1 - seg(t, 1.2, 1.6));
      else { M.ry = lerp(M.ry, facing(mb, [L.x, 0, L.z]), seg(t, 1.6, 1.9)); lookAt(M, [L.x, L.y + 1.2, L.z], seg(t, 1.6, 2.0)); }
      idle(M, T, 2, 0.4);
      face(M, 'happy', 0.6);
      S.cam(kf(t, [[0, [13.6, 1.3, 2.9]], [4, [13.8, 1.6, 2.7]]]), kf(t, [[0, [10.6, 0.8, -1.2]], [2.2, [11.6, 1.6, -1.9]], [4, [11.7, 1.8, -2.0]]]), 38);
    },
  },
  {
    id: 'B5-rien-a-l-horizon', set: 'meadow', dur: 2.5, light: { ...LIGHT, focus: [14, 0, -4], size: 14 },
    sfx: [[1.65, 'shrug_sigh']],
    run(S, t) {
      const T = S.T;
      const L = S.leo;
      S.vis.maya = S.vis.bib = S.vis.ball = false;
      Object.assign(L, { x: TOP[0], y: MEADOW.rockTop, z: TOP[2], ry: facing(TOP, BALL_TREE) - 0.25 });
      idle(L, T, 1, 0.4);
      visor(L, 'R', 1 - seg(t, 1.5, 1.7));
      L.headYaw = kf(t, [[0, -0.5], [0.5, 0.5], [1.1, 0.5], [1.4, 0]]);
      shrug(L, bell(t, 1.6, 2.4));
      face(L, 'worried', seg(t, 1.5, 1.7));
      const fw = facing(TOP, BALL_TREE);
      S.cam([TOP[0] - Math.sin(fw) * 2.3 - Math.cos(fw) * 1.0, 3.0, TOP[2] - Math.cos(fw) * 2.3 + Math.sin(fw) * 1.0], [BALL_TREE[0], 1.0, BALL_TREE[2] + 2], 46);
    },
  },
  {
    id: 'B6-maya-montre', set: 'meadow', dur: 2.5, light: { ...LIGHT, focus: [11.2, 0, -1.4] },
    sfx: [[0.3, 'tap'], [0.9, 'point_swish']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.vis.ball = false;
      Object.assign(L, { x: TOP[0], y: MEADOW.rockTop, z: TOP[2], ry: facing(TOP, BALL_TREE) - 0.25 });
      Object.assign(M, { x: 10.55, z: -0.35 });
      M.ry = facing([M.x, 0, M.z], [L.x, 0, L.z]);
      Object.assign(B, { x: 10.9, z: -0.95, ry: 1.2 });
      idle(L, T, 1); idle(M, T, 2); bibIdle(B, T, 3);
      face(L, 'worried', 0.5);
      lookAt(L, [M.x, 1.0, M.z], seg(t, 0.3, 0.6));
      // Maya attire son attention, puis montre au loin
      const p = seg(t, 0.75, 1.05, ease.outBack);
      M.ry = lerp(M.ry, facing([M.x, 0, M.z], BALL_TREE) + 0.35, p);
      point(M, 'R', [BALL_TREE[0], 4, BALL_TREE[2]], p);
      M.aL.f += 1.0 * bell(t, 0.1, 0.6); M.aL.b += 1.0 * bell(t, 0.1, 0.6);
      lookAt(M, [L.x, L.y + 1.2, L.z], 1 - seg(t, 1.4, 1.7));
      lookAt(M, [BALL_TREE[0], 4, BALL_TREE[2]], seg(t, 1.4, 1.7));
      M.headUp += 0.15 * seg(t, 1.6, 1.8);
      face(M, 'idea', 0.6 * p);
      bibLook(B, [M.x, 1, M.z]);
      S.cam(kf(t, [[0, [13.45, 1.0, 0.7]], [2.5, [13.3, 1.0, 0.55]]]), [11.2, 1.35, -1.3], 40);
    },
  },
  {
    id: 'B7-le-ballon-au-loin', set: 'meadow', dur: 2.5, light: { ...LIGHT, focus: [46, 0, -16], size: 8 },
    sfx: [[0.65, 'ball_spot_ding']],
    run(S, t) {
      const T = S.T;
      S.vis.leo = S.vis.maya = S.vis.bib = false;
      const cam = [TOP[0], 2.55, TOP[2]];
      const d = [BALL_TREE[0] - cam[0], 0, BALL_TREE[2] - cam[2]];
      const L = Math.hypot(d[0], d[2]);
      const dir = [d[0] / L, d[2] / L], perp = [-dir[1], dir[0]];
      const yb = 3.6 + 3.5 * bell(t, 0.45, 1.9) * (0.85 + 0.15 * Math.sin(t * 7));
      S.ball.x = BALL_TREE[0] + dir[0] * 1.4 + perp[0] * 0.6;
      S.ball.z = BALL_TREE[2] + dir[1] * 1.4 + perp[1] * 0.6;
      S.ball.y = yb;
      S.ball.rx = T * 2;
      S.cam(cam, [BALL_TREE[0] + perp[0] * 0.5, 5.4, BALL_TREE[2] + perp[1] * 0.5], kf(t, [[0, 10], [2.5, 9]]));
    },
  },
  {
    id: 'B8-leo-saute', set: 'meadow', dur: 2.5, light: { ...LIGHT, focus: [12, 0, -1.5] },
    sfx: [[0.25, 'idea_ting'], [1.3, 'jump'], [1.85, 'land_puff'], [0.9, 'bib_shake'], [1.0, 'maya_cheer_clap']],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.vis.ball = false;
      Object.assign(M, { x: 10.55, z: -0.35, ry: facing([10.55, 0, -0.35], BALL_TREE) });
      Object.assign(B, { x: 10.9, z: -0.95, ry: 1.2 });
      idle(M, T, 2); bibIdle(B, T, 3);
      const land = [13.0, 0, -0.55];
      const jt = seg(t, 1.3, 1.85, ease.linear);
      if (t < 1.3) {
        Object.assign(L, { x: TOP[0], y: MEADOW.rockTop, z: TOP[2], ry: facing(TOP, BALL_TREE) });
        face(L, 'amazed', seg(t, 0.1, 0.3));
        point(L, 'L', [BALL_TREE[0], 4, BALL_TREE[2]], bell(t, 0.3, 1.2));
        L.crouch += 0.5 * seg(t, 1.0, 1.3);
        armsUp(L, seg(t, 1.0, 1.3) * 0.3);
      } else {
        const p = arc([TOP[0], MEADOW.rockTop, TOP[2]], land, 0.5, jt);
        L.x = p[0]; L.y = p[1]; L.z = p[2];
        L.ry = facing(TOP, land);
        face(L, 'grin');
        armsUp(L, 1 - jt * 0.6, 0.6);
        L.lL.f += 0.6 * (1 - jt); L.lR.f -= 0.3; L.lL.k += 0.8; L.lR.k += 1.0;
        if (t > 1.85) { L.crouch += 0.5 * pulse(t, 1.85, 0.5); L.lL.k = L.lR.k = 0; L.lL.f = L.lR.f = 0; armsUp(L, 0); }
        S.fx.puff([land[0], 0, land[2]], T - t + 1.85, T, { n: 10, size: 0.4, spread: 0.7, color: 0xe9e2c6, seed: 7 });
      }
      idle(L, T, 1, 0.4);
      // Bibou se secoue, Maya applaudit
      B.ry += Math.sin(t * 40) * 0.3 * bell(t, 0.8, 1.3);
      bibFace(B, 'happy', seg(t, 1.2, 1.5));
      B.tufts = seg(t, 1.2, 1.5);
      if (t < 0.9) { S.fx.dizzy([B.x, 0.42, B.z], T, 0.17, 0.8 * (1 - seg(t, 0.6, 0.9))); bibFace(B, 'neutral'); B.face.eo = 0.6; }
      const clap = bell(t, 0.9, 1.9);
      M.aL.f += 1.2 * clap; M.aR.f += 1.2 * clap;
      M.aL.b += 0.9 * clap; M.aR.b += 0.9 * clap;
      M.aL.o -= (0.2 + 0.25 * Math.abs(Math.sin(t * 16))) * clap; M.aR.o -= (0.2 + 0.25 * Math.abs(Math.sin(t * 16))) * clap;
      face(M, 'grin');
      lookAt(M, [L.x, L.y + 1.1, L.z], 0.7);
      S.cam(kf(t, [[0, [14.6, 1.25, 2.6]], [2.5, [14.9, 1.15, 2.9]]]), kf(t, [[0, [12.0, 1.5, -1.8]], [2.5, [12.2, 0.9, -1.0]]]), 38);
    },
  },
  {
    id: 'B9-vers-la-foret', set: 'meadow', dur: 3.5, light: { ...LIGHT, focus: [18, 0, -3], size: 12 },
    sfx: [[0, 'steps_run', { dur: 3.4, rate: 3.6, who: 'kids' }], [0, 'hops', { dur: 3.4, rate: 6.5 }]],
    run(S, t) {
      const T = S.T;
      const L = S.leo, M = S.maya, B = S.bib;
      S.vis.ball = false;
      const target = [36, 0, -14];
      const l0 = [13.4, 0, -0.3], m0 = [12.0, 0, 0.4], b0 = [12.6, 0, 1.0];
      const u = t * 3.0;
      const mv = (P, p0, off) => {
        const d = [target[0] - p0[0], target[2] - p0[2]];
        const n = Math.hypot(d[0], d[1]);
        P.x = p0[0] + (d[0] / n) * Math.max(0, u - off); P.z = p0[2] + (d[1] / n) * Math.max(0, u - off);
        P.ry = Math.atan2(d[0], d[1]);
      };
      mv(L, l0, 0); mv(M, m0, 0.4); mv(B, b0, 0.7);
      run(L, t * 1.75); run(M, t * 1.75 + 0.35);
      idle(L, T, 1, 0.3); idle(M, T, 2, 0.3);
      bibHop(B, t * 6.5, 0.1);
      B.lean = 0.25;
      bibFace(B, 'determined');
      face(L, 'determined'); face(M, 'determined', 0.6);
      S.cam(kf(t, [[0, [10.2, 1.25, 2.4]], [3.5, [15.0, 1.45, -0.8]]]), kf(t, [[0, [14, 0.8, -1]], [3.5, [26, 1.4, -8]]]), 38);
    },
  },
];
