import {useF} from '../lib/frame';
import React from 'react';
import {C} from '../constants';
import {breath, clamp} from '../lib/anim';
import {Pose} from './poses';

// Dimensions à l'échelle 1 (perso ≈ 620 px, tête = 1/6)
export const DIM = {head: 50, neck: 22, sp: [68, 62, 58], ua: 112, fa: 100, th: 150, sh: 142, foot: 46};
export const HIP_H = DIM.th + DIM.sh + 8;

type V = [number, number];
const R = Math.PI / 180;
const up = (a: number, l: number): V => [Math.sin(a * R) * l, -Math.cos(a * R) * l];
const dn = (a: number, l: number): V => [Math.sin(a * R) * l, Math.cos(a * R) * l];
const add = (a: V, b: V): V => [a[0] + b[0], a[1] + b[1]];

export type Joints = ReturnType<typeof solve>;

// Cinématique directe, coordonnées locales (hanche = origine, perso tourné vers +x)
export const solve = (p: Pose, b = 0) => {
  const hip: V = [0, 0];
  const a1 = p.s1;
  const p1 = add(hip, up(a1, DIM.sp[0]));
  const a2 = a1 + p.s2;
  const p2 = add(p1, up(a2, DIM.sp[1]));
  const a3 = a2 + p.s3 + b * 1.2;
  const p3 = add(p2, up(a3, DIM.sp[2]));
  const an = a3 + p.nk;
  const nk = add(p3, up(an, DIM.neck));
  const ah = an + p.hd;
  const head = add(nk, up(ah, DIM.head * 0.92));
  const sho = add(p3, up(a3, -12 - b * 2));
  const arm = (a: number, e: number, w: number) => {
    const el = add(sho, dn(a, DIM.ua));
    const fa = a + e;
    const wr = add(el, dn(fa, DIM.fa));
    return {el, wr, fa, ha: fa + w, a};
  };
  const leg = (l: number, k: number, f: number) => {
    const kn = add(hip, dn(l, DIM.th));
    const sa = l - k;
    const an = add(kn, dn(sa, DIM.sh));
    const fa = sa + 90 + f;
    return {kn, an, toe: add(an, dn(fa, DIM.foot)), heel: add(an, dn(fa, -12)), fa};
  };
  return {
    hip, p1, p2, p3, nk, head, sho, a3, an, ah,
    armL: arm(p.aL - b * 1.5, p.eL, p.wL),
    armR: arm(p.aR + b * 1.5, p.eR, p.wR),
    legL: leg(p.lL, p.kL, p.fL),
    legR: leg(p.lR, p.kR, p.fR),
  };
};

// Segment effilé à bouts ronds
const Cap: React.FC<{a: V; b: V; wa: number; wb: number; fill: string}> = ({a, b, wa, wb, fill}) => {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  const L = Math.hypot(dx, dy) || 0.001;
  const nx = (-dy / L) * 0.5;
  const ny = (dx / L) * 0.5;
  const d = `M${a[0] + nx * wa},${a[1] + ny * wa} L${b[0] + nx * wb},${b[1] + ny * wb} L${b[0] - nx * wb},${b[1] - ny * wb} L${a[0] - nx * wa},${a[1] - ny * wa}Z`;
  return (
    <>
      <path d={d} fill={fill} />
      <circle cx={a[0]} cy={a[1]} r={wa / 2} fill={fill} />
      <circle cx={b[0]} cy={b[1]} r={wb / 2} fill={fill} />
    </>
  );
};

export type Acc = {
  phone?: boolean; hood?: boolean; cap?: boolean; chain?: boolean;
  backpack?: boolean; notebook?: boolean; gloves?: boolean; watch?: boolean; coat?: boolean;
};

export type StickProps = {
  id: string;
  pose: Pose;
  x: number;
  floor: number;
  scale?: number;
  facing?: 1 | -1;
  look: 'gold' | 'gray';
  goldReveal?: number; // 0..1 balayage gris → or des pieds à la tête
  glow?: number;
  acc?: Acc;
  screen?: string; // teinte de l'écran du téléphone
  phoneLight?: number;
  nearHand?: React.ReactNode; // dessiné dans le repère de la main proche
  farHand?: React.ReactNode;
  breathe?: boolean;
  headTurn?: number; // 0 profil → 1 face caméra
  coatWind?: number;
  opacity?: number;
};

const LOOKS = {
  gold: {fill: C.gold, far: '#B8952C', line: C.goldLight, head: 'url(#headGold)'},
  gray: {fill: C.gray, far: '#575757', line: C.grayDark, head: 'url(#headGray)'},
};

export const Stickman: React.FC<StickProps> = (props) => {
  const frame = useF();
  const {pose, x, floor, scale = 1, facing = 1, look, glow = 1, acc = {}, breathe = true, headTurn = 0} = props;
  const b = breathe ? breath(frame, 96, props.id.length * 13) : 0;
  const J = solve(pose, b);

  const draw = (lk: 'gold' | 'gray', withAcc: boolean) => {
    const L = LOOKS[lk];
    const out = (w: number) => w + 5;
    type Seg = [V, V, number, number];
    // Contour d'abord pour toute la chaîne, puis le remplissage : pas de coutures aux articulations
    const chain = (segs: Seg[], fill: string, line: string, extra?: React.ReactNode) => (
      <>
        {segs.map(([a, bb, wa, wb], i) => <Cap key={`o${i}`} a={a} b={bb} wa={out(wa)} wb={out(wb)} fill={line} />)}
        {segs.map(([a, bb, wa, wb], i) => <Cap key={`f${i}`} a={a} b={bb} wa={wa} wb={wb} fill={fill} />)}
        {extra}
      </>
    );
    const handSegs = (arm: Joints['armL']): Seg[] => {
      const dir = dn(arm.ha, 1);
      const tip: V = add(arm.wr, [dir[0] * 18, dir[1] * 18]);
      const th = dn(arm.ha + 55, 1);
      const thb: V = add(arm.wr, [dir[0] * 4, dir[1] * 4]);
      const tht: V = add(thb, [th[0] * 14, th[1] * 14]);
      return [[thb, tht, 10, 8], [arm.wr, tip, 23, 18]];
    };
    const gloves = withAcc && acc.gloves && lk === 'gold';
    const legC = (lg: Joints['legL'], fill: string, line: string) =>
      chain([[J.hip, lg.kn, 31, 23], [lg.kn, lg.an, 23, 16], [lg.heel, lg.toe, 19, 12]], fill, line);
    const armC = (arm: Joints['armL'], fill: string, line: string) => (
      <>
        {chain([[J.sho, arm.el, 25, 19], [arm.el, arm.wr, 19, 15], ...(gloves ? [] : handSegs(arm))], fill, line)}
        {gloves && chain(handSegs(arm), '#6E4E1E', '#3B2A10')}
      </>
    );
    const farFill = L.far;
    const ch = 1 + b * 0.015;
    const coatSway = Math.sin(frame / 9) * 6 * (props.coatWind ?? 1) + (props.coatWind ?? 1) * 10;
    return (
      <g>
        {withAcc && acc.coat && (
          <path
            d={`M${J.sho[0] - 4},${J.sho[1] - 6} C${J.sho[0] - 34},${J.sho[1] + 60} ${J.hip[0] - 40 - coatSway},${J.hip[1] + 40} ${J.hip[0] - 54 - coatSway * 1.6},${J.hip[1] + 128 + Math.sin(frame / 7) * 4} L${J.hip[0] - 10 - coatSway},${J.hip[1] + 120} C${J.hip[0] - 6},${J.hip[1] + 60} ${J.p2[0] - 6},${J.p2[1]} ${J.sho[0] + 6},${J.sho[1] - 2}Z`}
            fill="#8E7020"
            stroke={C.goldLight}
            strokeWidth={2.5}
            strokeLinejoin="round"
          />
        )}
        {armC(J.armL, farFill, L.line)}
        {legC(J.legL, farFill, L.line)}
        {withAcc && acc.backpack && (
          <g transform={`translate(${J.p2[0]},${J.p2[1]}) rotate(${J.a3})`}>
            <rect x={-48} y={-46} width={36} height={80} rx={12} fill="#7A6120" stroke={C.goldLight} strokeWidth={2.5} />
            <rect x={-44} y={-6} width={26} height={26} rx={6} fill="#5F4A16" />
          </g>
        )}
        <g transform={`translate(${J.p2[0]},${J.p2[1]}) scale(${ch}) translate(${-J.p2[0]},${-J.p2[1]})`}>
          {chain([[J.hip, J.p1, 40, 42], [J.p1, J.p2, 42, 46], [J.p2, J.p3, 46, 40], [J.p3, J.nk, 20, 17]], L.fill, L.line)}
        </g>
        {withAcc && acc.hood && (
          <path
            d={`M${J.nk[0] - 30},${J.nk[1] - 10} Q${J.nk[0] - 46},${J.nk[1] + 26} ${J.nk[0] - 4},${J.nk[1] + 20} Q${J.nk[0] - 12},${J.nk[1] + 2} ${J.nk[0] - 30},${J.nk[1] - 10}Z`}
            fill="#5A5A5A"
            stroke={L.line}
            strokeWidth={3}
          />
        )}
        <circle cx={J.head[0]} cy={J.head[1]} r={DIM.head + 2.5} fill={L.line} />
        <circle cx={J.head[0]} cy={J.head[1]} r={DIM.head} fill={L.head} />
        {/* reflet spéculaire : glisse vers le centre quand la tête se tourne vers la caméra */}
        <ellipse
          cx={J.head[0] + 14 - headTurn * 20}
          cy={J.head[1] - 20}
          rx={14}
          ry={9}
          transform={`rotate(-30 ${J.head[0] + 14 - headTurn * 20} ${J.head[1] - 20})`}
          fill="#fff"
          opacity={lk === 'gold' ? 0.45 : 0.18}
        />
        {withAcc && acc.cap && (
          <g transform={`translate(${J.head[0]},${J.head[1]}) rotate(${J.ah})`}>
            <path d="M-46,-14 Q-44,-56 0,-56 Q44,-56 46,-14 Z" fill="#2B2F3A" stroke="#151821" strokeWidth={3} />
            <path d="M-40,-18 L-82,-10 Q-84,-2 -74,0 L-38,-6Z" fill="#232631" stroke="#151821" strokeWidth={3} />
            <circle cx={0} cy={-56} r={4} fill="#3A3F4D" />
          </g>
        )}
        {withAcc && acc.chain && (
          <path
            d={`M${J.p3[0] - 12},${J.p3[1] - 4} Q${J.p3[0] + 10},${J.p3[1] + 42} ${J.p3[0] + 18},${J.p3[1] - 6}`}
            fill="none"
            stroke="#D7DCE4"
            strokeWidth={3.5}
            strokeDasharray="4 3"
          />
        )}
        {legC(J.legR, L.fill, L.line)}
        {armC(J.armR, L.fill, L.line)}
        {withAcc && acc.watch && (
          <g transform={`translate(${J.armR.wr[0]},${J.armR.wr[1]}) rotate(${-J.armR.fa})`}>
            <rect x={-11} y={-12} width={22} height={11} rx={3} fill="#2A2210" stroke="#FFF2B8" strokeWidth={2} />
          </g>
        )}
      </g>
    );
  };

  const lk = LOOKS[look];
  const g = clamp(glow, 0, 2);
  const tr = `translate(${x},${floor - HIP_H * scale}) scale(${scale * facing},${scale}) translate(${pose.x},${pose.y}) rotate(${pose.rot})`;
  const reveal = props.goldReveal;
  const handNode = (arm: Joints['armL'], node: React.ReactNode) =>
    node ? <g transform={`translate(${arm.wr[0]},${arm.wr[1]}) rotate(${-arm.ha})`}>{node}</g> : null;

  // téléphone + cône de lumière bleue
  const ph = J.armR;
  const phDir = dn(ph.ha, 1);
  const phPos: V = add(ph.wr, [phDir[0] * 12, phDir[1] * 12]);
  const scr = props.screen ?? C.phone;
  const pl = props.phoneLight ?? 1;

  return (
    <g transform={tr} opacity={props.opacity ?? 1}>
      {acc.phone && (
        <g opacity={0.55 * pl} style={{mixBlendMode: 'screen'}}>
          <path
            d={`M${phPos[0]},${phPos[1]} L${J.head[0] - 30},${J.head[1] - 40} L${J.head[0] + 50},${J.head[1] + 30} L${J.p2[0] + 40},${J.p2[1] + 50}Z`}
            fill="url(#phoneCone)"
            filter="url(#blur8)"
          />
        </g>
      )}
      {look === 'gold' && g > 0 && (
        <g filter="url(#glow3)" opacity={g * (0.92 + b * 0.08)}>
          {draw('gold', true)}
        </g>
      )}
      {reveal !== undefined && reveal < 1 ? (
        <>
          {draw('gray', true)}
          <clipPath id={`rv-${props.id}`}>
            <rect x={-300} y={HIP_H - reveal * (HIP_H + 420)} width={600} height={1000} />
          </clipPath>
          {reveal > 0 && <g clipPath={`url(#rv-${props.id})`}>{draw('gold', true)}</g>}
          {reveal > 0 && reveal < 1 && (
            <rect x={-120} y={HIP_H - reveal * (HIP_H + 420) - 3} width={240} height={6} fill="#FFF6D0" filter="url(#blur4)" opacity={0.9} />
          )}
        </>
      ) : (
        draw(reveal !== undefined ? 'gold' : look, true)
      )}
      {acc.phone && (
        <>
          {/* tête éclairée en bleu par l'écran */}
          <circle cx={J.head[0] + 18} cy={J.head[1] + 10} r={DIM.head} fill="url(#blueLit)" opacity={0.8 * pl} />
          <g transform={`translate(${phPos[0]},${phPos[1]}) rotate(${-ph.ha - 70})`}>
            <rect x={-12} y={-22} width={24} height={44} rx={5} fill="#0E1118" stroke="#2A3346" strokeWidth={2} />
            <rect x={-9} y={-18} width={18} height={36} rx={3} fill={scr} opacity={0.95} />
            <rect x={-9} y={-18} width={18} height={36} rx={3} fill="#fff" opacity={0.18 * pl} filter="url(#blur4)" />
          </g>
        </>
      )}
      {handNode(J.armR, props.nearHand)}
      {handNode(J.armL, props.farHand)}
      {lk && null}
    </g>
  );
};

// Position monde d'un point local du perso (ex. le poignet) — pour accrocher des objets
export const toWorld = (pt: [number, number], o: {pose: Pose; x: number; floor: number; scale?: number; facing?: 1 | -1}): [number, number] => {
  const s = o.scale ?? 1;
  const fc = o.facing ?? 1;
  const r = (o.pose.rot * Math.PI) / 180;
  const lx = pt[0] * Math.cos(r) - pt[1] * Math.sin(r) + o.pose.x;
  const ly = pt[0] * Math.sin(r) + pt[1] * Math.cos(r) + o.pose.y;
  return [o.x + lx * s * fc, o.floor - HIP_H * s + ly * s];
};
