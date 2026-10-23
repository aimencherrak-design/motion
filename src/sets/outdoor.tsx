import React from 'react';
import {random} from 'remotion';
import {C} from '../constants';
import {useF} from '../lib/frame';

// Silhouette de ville : immeubles + fenêtres allumées (seed fixe)
export const Skyline: React.FC<{seed: string; base: number; minH: number; maxH: number; color: string; lit?: number; n?: number; x0?: number; w?: number; win?: string; edge?: string}> = ({
  seed, base, minH, maxH, color, lit = 0.35, n = 10, x0 = -200, w = 1000, win = '#F3C877', edge,
}) => {
  const f = useF();
  let x = x0;
  const out: React.ReactNode[] = [];
  for (let i = 0; i < n; i++) {
    const bw = 50 + random(`${seed}w${i}`) * 90;
    const bh = minH + random(`${seed}h${i}`) * (maxH - minH);
    const cols = Math.max(2, Math.floor(bw / 18));
    const rows = Math.floor(bh / 26);
    out.push(
      <g key={i}>
        <rect x={x} y={base - bh} width={bw} height={bh + 400} fill={color} />
        {edge && <rect x={x} y={base - bh} width={bw} height={2} fill={edge} opacity={0.7} />}
        {random(`${seed}ant${i}`) > 0.7 && <rect x={x + bw / 2 - 2} y={base - bh - 30} width={4} height={30} fill={color} />}
        {lit > 0 &&
          new Array(cols * rows).fill(0).map((_, j) => {
            const r = random(`${seed}l${i}-${j}`);
            if (r > lit) return null;
            const blink = random(`${seed}b${i}-${j}`) > 0.95 ? (Math.sin(f / 17 + j) > 0 ? 1 : 0.2) : 1;
            return <rect key={j} x={x + 6 + (j % cols) * ((bw - 8) / cols)} y={base - bh + 12 + Math.floor(j / cols) * 26} width={6} height={10} fill={win} opacity={(0.4 + r) * blink} />;
          })}
      </g>,
    );
    x += bw + random(`${seed}g${i}`) * 20;
    if (x > x0 + w) break;
  }
  return <g>{out}</g>;
};

export const StreetLamp: React.FC<{x: number; floor: number; h?: number; warm?: boolean}> = ({x, floor, h = 620, warm}) => {
  const f = useF();
  const fl = 0.95 + Math.sin(f / 5) * 0.03 + (Math.sin(f * 2.3) > 0.97 ? -0.2 : 0);
  const col = warm ? '#FFD58A' : '#CFE0FF';
  return (
    <g>
      <rect x={x - 6} y={floor - h} width={12} height={h} fill="#1B2A44" />
      <rect x={x - 6} y={floor - h} width={3} height={h} fill="#4A6696" opacity={0.6} />
      <path d={`M${x},${floor - h} q0,-40 60,-40 l20,0`} stroke="#1B2A44" strokeWidth={10} fill="none" />
      <path d={`M${x + 56},${floor - h - 50} l50,0 l10,18 l-70,0z`} fill="#2B3F66" />
      <g style={{mixBlendMode: 'screen'}} opacity={fl}>
        <path d={`M${x + 50},${floor - h - 32} L${x + 116},${floor - h - 32} L${x + 300},${floor} L${x - 130},${floor}Z`} fill={warm ? 'url(#lampCone)' : 'url(#floodCone)'} opacity={0.5} filter="url(#blur14)" />
        <ellipse cx={x + 85} cy={floor} rx={220} ry={34} fill={warm ? 'url(#poolAmber)' : 'url(#pool)'} />
        <ellipse cx={x + 82} cy={floor - h - 30} rx={50} ry={22} fill={col} opacity={0.6} filter="url(#blur14)" />
      </g>
      <ellipse cx={x + 82} cy={floor - h - 32} rx={34} ry={5} fill="#FFFFFF" opacity={fl} />
    </g>
  );
};

// Voiture neuve de profil (avant vers +x). lights 0..1, shine 0..1 (reflet qui balaye)
export const Car: React.FC<{x: number; floor: number; lights: number; shine: number; dent?: number}> = ({x, floor, lights, shine, dent = 0}) => {
  const f = useF();
  const y = floor;
  const wheel = (cx: number) => (
    <g>
      <circle cx={cx} cy={y - 44} r={46} fill="#07090F" />
      <circle cx={cx} cy={y - 44} r={30} fill="#9AA6BC" />
      <circle cx={cx} cy={y - 44} r={26} fill="#2A3346" />
      {[0, 1, 2, 3, 4].map((i) => {
        const a = (i * 72 * Math.PI) / 180;
        return <line key={i} x1={cx} y1={y - 44} x2={cx + Math.cos(a) * 26} y2={y - 44 + Math.sin(a) * 26} stroke="#C9D3E6" strokeWidth={5} />;
      })}
      <circle cx={cx} cy={y - 44} r={7} fill="#DDE5F5" />
    </g>
  );
  const body = `M${x},${y - 60} L${x},${y - 112} Q${x + 4},${y - 132} ${x + 40},${y - 136} L${x + 130},${y - 142} L${x + 190},${y - 206} Q${x + 206},${y - 220} ${x + 236},${y - 220} L${x + 360},${y - 220} Q${x + 390},${y - 218} ${x + 410},${y - 196} L${x + 452},${y - 146} L${x + 520},${y - 136 + dent * 14} Q${x + 548},${y - 128} ${x + 550},${y - 100} L${x + 550},${y - 60} Z`;
  return (
    <g>
      <ellipse cx={x + 275} cy={y + 2} rx={320} ry={22} fill="url(#shadow)" />
      {/* faisceaux des phares */}
      <g style={{mixBlendMode: 'screen'}} opacity={lights}>
        <path d={`M${x + 540},${y - 110} L${x + 1000},${y - 200} L${x + 1000},${y + 40}Z`} fill="url(#floodCone)" filter="url(#blur14)" transform={`rotate(90 ${x + 540} ${y - 110}) rotate(-90 ${x + 540} ${y - 110})`} />
        <circle cx={x + 540} cy={y - 108} r={40} fill="#EAF2FF" opacity={0.6} filter="url(#blur14)" />
      </g>
      <path d={body} fill="url(#carBody)" stroke="#6F8FC4" strokeWidth={2.5} />
      {/* vitres */}
      <path d={`M${x + 146},${y - 146} L${x + 198},${y - 202} Q${x + 208},${y - 210} ${x + 226},${y - 210} L${x + 286},${y - 210} L${x + 286},${y - 146}Z`} fill="#0B1428" stroke="#5576AE" strokeWidth={2} />
      <path d={`M${x + 298},${y - 146} L${x + 298},${y - 210} L${x + 356},${y - 210} Q${x + 378},${y - 208} ${x + 394},${y - 190} L${x + 432},${y - 146}Z`} fill="#0B1428" stroke="#5576AE" strokeWidth={2} />
      <path d={`M${x + 210},${y - 200} L${x + 240},${y - 200} L${x + 200},${y - 154} L${x + 180},${y - 154}Z`} fill="#fff" opacity={0.12} />
      {/* ligne de caisse + poignées */}
      <path d={`M${x + 20},${y - 118} L${x + 530},${y - 112}`} stroke="#8FB0E6" strokeWidth={2} opacity={0.5} />
      <rect x={x + 240} y={y - 126} width={28} height={6} rx={3} fill="#9AA6BC" />
      <rect x={x + 370} y={y - 124} width={28} height={6} rx={3} fill="#9AA6BC" />
      {/* reflet qui balaye la carrosserie */}
      <clipPath id="carClip">
        <path d={body} />
      </clipPath>
      <g clipPath="url(#carClip)">
        <rect x={x - 200 + shine * 900} y={y - 240} width={60} height={260} fill="#fff" opacity={0.22} transform={`skewX(-25)`} filter="url(#blur8)" />
      </g>
      {/* phares / feux */}
      <path d={`M${x + 522},${y - 128} L${x + 548},${y - 120} L${x + 548},${y - 104} L${x + 520},${y - 108}Z`} fill={lights > 0.3 ? '#FFFFFF' : '#C9D3E6'} />
      <rect x={x - 2} y={y - 124} width={12} height={22} rx={3} fill={C.red} opacity={0.4 + lights * 0.6} />
      {lights > 0.3 && <rect x={x - 30} y={y - 130} width={40} height={34} fill={C.red} opacity={0.4 * lights} filter="url(#blur8)" />}
      {wheel(x + 120)}
      {wheel(x + 440)}
      {f < -9999 && null}
    </g>
  );
};

// Projecteur de chantier sur mât
export const Floodlight: React.FC<{x: number; floor: number; h?: number; o?: number; aimX: number}> = ({x, floor, h = 700, o = 1, aimX}) => {
  const f = useF();
  const fl = 0.94 + Math.sin(f / 4) * 0.03;
  return (
    <g>
      <rect x={x - 5} y={floor - h} width={10} height={h} fill="#1B2A44" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <line key={i} x1={x - 5} y1={floor - h + i * 110} x2={x + 5} y2={floor - h + i * 110 + 55} stroke="#2E4268" strokeWidth={2} />
      ))}
      <rect x={x - 34} y={floor - h - 30} width={68} height={40} rx={4} fill="#22314F" stroke="#4A6696" strokeWidth={2} />
      <g style={{mixBlendMode: 'screen'}} opacity={o * fl}>
        <path d={`M${x - 30},${floor - h + 8} L${x + 30},${floor - h + 8} L${aimX + 260},${floor} L${aimX - 260},${floor}Z`} fill="url(#floodCone)" opacity={0.55} filter="url(#blur14)" />
        <ellipse cx={aimX} cy={floor} rx={300} ry={40} fill="url(#pool)" />
        <rect x={x - 40} y={floor - h - 30} width={80} height={46} fill="#F4F8FF" opacity={0.7} filter="url(#blur14)" />
      </g>
      <rect x={x - 28} y={floor - h - 6} width={56} height={14} fill="#F4F8FF" opacity={o} />
    </g>
  );
};

export const Fence: React.FC<{y: number; floor: number}> = ({y, floor}) => (
  <g opacity={0.6}>
    {new Array(14).fill(0).map((_, i) => (
      <rect key={i} x={-200 + i * 80} y={y} width={6} height={floor - y} fill="#22314F" />
    ))}
    <rect x={-200} y={y} width={1200} height={4} fill="#22314F" />
    {new Array(40).fill(0).map((_, i) => (
      <line key={i} x1={-200 + i * 30} y1={y} x2={-200 + i * 30 + (floor - y)} y2={floor} stroke="#1B2A44" strokeWidth={1.5} />
    ))}
    {new Array(40).fill(0).map((_, i) => (
      <line key={`b${i}`} x1={-200 + i * 30} y1={y} x2={-200 + i * 30 - (floor - y)} y2={floor} stroke="#1B2A44" strokeWidth={1.5} />
    ))}
  </g>
);

export const Brick: React.FC<{x: number; y: number; rot?: number; w?: number; o?: number}> = ({x, y, rot = 0, w = 64, o = 1}) => (
  <g transform={`translate(${x},${y}) rotate(${rot})`} opacity={o}>
    <rect x={-w / 2} y={-14} width={w} height={28} rx={3} fill="#3A4E72" stroke="#0A0F1A" strokeWidth={2} />
    <rect x={-w / 2 + 3} y={-12} width={w - 6} height={5} fill="#7E9CCB" opacity={0.5} />
  </g>
);

// Ciel dégradé (t 0 = nuit, 1 = aube dorée)
export const Sky: React.FC<{t: number; id: string}> = ({t, id}) => {
  const mixC = (a: string, b: string) => {
    const pa = parseInt(a.slice(1), 16);
    const pb = parseInt(b.slice(1), 16);
    const ch = (s: number) => Math.round(((pa >> s) & 255) * (1 - t) + ((pb >> s) & 255) * t);
    return `rgb(${ch(16)},${ch(8)},${ch(0)})`;
  };
  return (
    <g>
      <defs>
        <linearGradient id={`sky${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={mixC('#050912', '#0F1A2E')} />
          <stop offset="0.45" stopColor={mixC('#0B1428', '#3A3A5E')} />
          <stop offset="0.7" stopColor={mixC('#13213D', '#D08A44')} />
          <stop offset="1" stopColor={mixC('#1B2A44', '#F2C66A')} />
        </linearGradient>
      </defs>
      <rect x={-300} y={-100} width={1200} height={1480} fill={`url(#sky${id})`} />
      <rect x={-300} y={1379} width={1200} height={1000} fill="#0C1426" />
    </g>
  );
};

export const Clouds: React.FC<{seed: string; y: number; speed: number; color: string; o?: number}> = ({seed, y, speed, color, o = 0.5}) => {
  const f = useF();
  return (
    <g opacity={o} filter="url(#blur14)">
      {new Array(5).fill(0).map((_, i) => {
        const r = random(`${seed}${i}`);
        const cx = ((r * 1200 + f * speed * (0.6 + r)) % 1200) - 300;
        const cy = y + (random(`${seed}y${i}`) - 0.5) * 160;
        return (
          <g key={i}>
            <ellipse cx={cx} cy={cy} rx={140 + r * 80} ry={26} fill={color} />
            <ellipse cx={cx + 40} cy={cy - 18} rx={70} ry={26} fill={color} />
          </g>
        );
      })}
    </g>
  );
};

// Toit d'immeuble (premier plan) avec rambarde, bouches d'aération
export const Roof: React.FC<{floor: number; tint?: string}> = ({floor, tint = '#1B2A44'}) => (
  <g>
    <rect x={-300} y={floor} width={1200} height={800} fill="#0D1424" />
    <rect x={-300} y={floor} width={1200} height={6} fill={tint} />
    <rect x={-300} y={floor} width={1200} height={2} fill="#FFD58A" opacity={0.35} />
    {new Array(30).fill(0).map((_, i) => (
      <rect key={i} x={-300 + i * 40} y={floor - 46} width={5} height={46} fill="#15213A" />
    ))}
    <rect x={-300} y={floor - 50} width={1200} height={6} fill="#1B2A44" />
  </g>
);

// Immeuble qui se construit étage par étage (floors 0..N)
export const Tower: React.FC<{x: number; floor: number; w: number; floors: number; maxFloors: number; seed: string; fh?: number}> = ({x, floor, w, floors, maxFloors, seed, fh = 46}) => {
  const f = useF();
  const full = Math.floor(floors);
  const part = floors - full;
  const rows: React.ReactNode[] = [];
  for (let i = 0; i < Math.min(maxFloors, full + 1); i++) {
    const k = i < full ? 1 : part;
    if (k <= 0) continue;
    const y = floor - (i + 1) * fh;
    rows.push(
      <g key={i} opacity={k} transform={`translate(0,${(1 - k) * -30})`}>
        <rect x={x} y={y} width={w} height={fh} fill={i % 2 ? '#16233D' : '#182742'} stroke="#2C4268" strokeWidth={1.5} />
        {new Array(5).fill(0).map((_, j) => {
          const on = random(`${seed}${i}-${j}`) < 0.75 && (f + j * 7 + i * 13) % 400 > 20;
          return <rect key={j} x={x + 12 + j * ((w - 24) / 5)} y={y + 12} width={(w - 24) / 5 - 10} height={fh - 24} fill={on ? '#F3C877' : '#0B1222'} opacity={on ? 0.85 * Math.min(1, k * 2) : 1} />;
        })}
      </g>,
    );
  }
  return (
    <g>
      {rows}
      {full < maxFloors && full > 0 && (
        <g>
          {/* grue */}
          <rect x={x + w - 20} y={floor - (full + 3) * fh} width={8} height={3 * fh} fill="#3A4E72" />
          <rect x={x - 60} y={floor - (full + 3) * fh} width={w + 60} height={8} fill="#3A4E72" />
          <line x1={x + 10 + Math.sin(f / 10) * 4} y1={floor - (full + 3) * fh + 8} x2={x + 10 + Math.sin(f / 10) * 8} y2={floor - (full + 1.2) * fh} stroke="#9AA6BC" strokeWidth={2} />
          <circle cx={x + w - 16} cy={floor - (full + 3) * fh - 6} r={5} fill={C.red} opacity={Math.sin(f / 6) > 0 ? 1 : 0.3} />
        </g>
      )}
    </g>
  );
};
