import React from 'react';
import {random} from 'remotion';
import {C} from '../constants';
import {useF} from '../lib/frame';

// Mur de fond avec plinthe et lumière ambiante
export const Wall: React.FC<{floor: number; tint?: string; tintX?: number; tintO?: number}> = ({floor, tint, tintX = 270, tintO = 0.35}) => (
  <g>
    <rect x={-300} y={-200} width={1200} height={floor + 200} fill="url(#wallNight)" />
    {tint && <ellipse cx={tintX} cy={floor - 300} rx={420} ry={520} fill={tint} opacity={tintO} filter="url(#blur40)" />}
    <rect x={-300} y={floor - 26} width={1200} height={26} fill="#16233B" />
    <rect x={-300} y={floor - 26} width={1200} height={2} fill={C.edge} opacity={0.6} />
    <rect x={-300} y={floor} width={1200} height={1200} fill="#0B111D" />
    {/* lattes de parquet en perspective */}
    {new Array(14).fill(0).map((_, i) => (
      <line key={i} x1={-300 + i * 90} y1={floor} x2={-700 + i * 160} y2={floor + 700} stroke="#1A2740" strokeWidth={2} opacity={0.5} />
    ))}
  </g>
);

// Fenêtre de nuit avec ville floue
export const NightWindow: React.FC<{x: number; y: number; w: number; h: number; seed: string; moon?: boolean; sky?: [string, string]}> = ({x, y, w, h, seed, moon, sky = ['#0A1428', '#16264A']}) => {
  const f = useF();
  return (
    <g>
      <defs>
        <clipPath id={`win-${seed}`}>
          <rect x={x} y={y} width={w} height={h} />
        </clipPath>
        <linearGradient id={`sky-${seed}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={sky[0]} />
          <stop offset="1" stopColor={sky[1]} />
        </linearGradient>
      </defs>
      <rect x={x - 14} y={y - 14} width={w + 28} height={h + 28} rx={4} fill="#1E2C47" />
      <g clipPath={`url(#win-${seed})`}>
        <rect x={x} y={y} width={w} height={h} fill={`url(#sky-${seed})`} />
        {moon && (
          <>
            <circle cx={x + w * 0.72} cy={y + h * 0.25} r={44} fill="#EAF0FF" opacity={0.25} filter="url(#blur14)" />
            <circle cx={x + w * 0.72} cy={y + h * 0.25} r={22} fill="#EEF2FF" opacity={0.85} />
          </>
        )}
        <g filter="url(#blur2)">
          {new Array(9).fill(0).map((_, i) => {
            const bw = 30 + random(`${seed}w${i}`) * 50;
            const bh = 80 + random(`${seed}h${i}`) * 180;
            const bx = x + i * (w / 7) - 20;
            return (
              <g key={i}>
                <rect x={bx} y={y + h - bh} width={bw} height={bh} fill="#0E1830" />
                {new Array(12).fill(0).map((__, j) => {
                  const on = random(`${seed}l${i}-${j}`) > 0.55;
                  const blink = random(`${seed}k${i}-${j}`) > 0.93 ? (Math.sin(f / 13 + j) > 0 ? 1 : 0.3) : 1;
                  return on ? <rect key={j} x={bx + 5 + (j % 3) * (bw / 3.3)} y={y + h - bh + 10 + Math.floor(j / 3) * 22} width={5} height={8} fill="#F3C877" opacity={0.75 * blink} /> : null;
                })}
              </g>
            );
          })}
        </g>
      </g>
      <rect x={x + w / 2 - 4} y={y} width={8} height={h} fill="#1E2C47" />
      <rect x={x} y={y + h / 2 - 4} width={w} height={8} fill="#1E2C47" />
      <rect x={x - 22} y={y + h + 10} width={w + 44} height={12} rx={3} fill="#24365A" />
    </g>
  );
};

// Horloge murale (heure en heures décimales)
export const WallClock: React.FC<{x: number; y: number; r?: number; hour: number}> = ({x, y, r = 58, hour}) => {
  const ha = (hour % 12) * 30;
  const ma = (hour % 1) * 360;
  return (
    <g>
      <circle cx={x + 6} cy={y + 10} r={r + 6} fill="#000" opacity={0.5} filter="url(#blur8)" />
      <circle cx={x} cy={y} r={r + 6} fill="#2A3B5C" />
      <circle cx={x} cy={y} r={r} fill="#C9D3E6" />
      <circle cx={x} cy={y} r={r} fill="url(#poolBlue)" opacity={0.5} />
      {new Array(12).fill(0).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return <line key={i} x1={x + Math.sin(a) * r * 0.8} y1={y - Math.cos(a) * r * 0.8} x2={x + Math.sin(a) * r * 0.92} y2={y - Math.cos(a) * r * 0.92} stroke="#1B2A44" strokeWidth={i % 3 === 0 ? 4 : 2} />;
      })}
      <line x1={x} y1={y} x2={x + Math.sin((ha * Math.PI) / 180) * r * 0.5} y2={y - Math.cos((ha * Math.PI) / 180) * r * 0.5} stroke="#0F1A2E" strokeWidth={6} strokeLinecap="round" />
      <line x1={x} y1={y} x2={x + Math.sin((ma * Math.PI) / 180) * r * 0.75} y2={y - Math.cos((ma * Math.PI) / 180) * r * 0.75} stroke="#0F1A2E" strokeWidth={3.5} strokeLinecap="round" />
      <circle cx={x} cy={y} r={5} fill={C.red} />
      <ellipse cx={x - r * 0.35} cy={y - r * 0.45} rx={r * 0.4} ry={r * 0.18} fill="#fff" opacity={0.25} transform={`rotate(-25 ${x - r * 0.35} ${y - r * 0.45})`} />
    </g>
  );
};

// Canapé vu de face : dossier, 3 coussins, accoudoirs, pieds, plaid
export const Couch: React.FC<{x: number; seatY: number; w: number; worn?: boolean}> = ({x, seatY, w, worn}) => {
  const f = useF();
  const backTop = seatY - 190;
  const cw = (w - 100) / 3;
  const plaidCol = worn ? '#3E4A5E' : '#45618F';
  return (
    <g>
      <ellipse cx={x + w / 2} cy={seatY + 120} rx={w * 0.6} ry={26} fill="url(#shadow)" />
      {/* dossier */}
      <rect x={x + 20} y={backTop} width={w - 40} height={220} rx={28} fill="url(#couchBody)" stroke="#33507F" strokeWidth={2} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={x + 50 + i * cw} y={backTop + 18} width={cw - 8} height={150} rx={24} fill="#1E3053" stroke="#3A5A8C" strokeWidth={2} />
          <path d={`M${x + 64 + i * cw},${backTop + 30} Q${x + 50 + i * cw + cw / 2},${backTop + 22} ${x + 36 + (i + 1) * cw},${backTop + 30}`} stroke="#5776A8" strokeWidth={3} fill="none" opacity={0.6} />
        </g>
      ))}
      {/* assise */}
      <rect x={x + 30} y={seatY - 10} width={w - 60} height={70} rx={18} fill="#1A2B4A" stroke="#3A5A8C" strokeWidth={2} />
      {[0, 1, 2].map((i) => (
        <rect key={i} x={x + 48 + i * cw} y={seatY - 18} width={cw - 6} height={34} rx={14} fill="#223761" stroke="#4466A0" strokeWidth={2} />
      ))}
      <rect x={x + 30} y={seatY + 52} width={w - 60} height={50} rx={10} fill="#111B30" />
      {/* accoudoirs */}
      {[x, x + w - 70].map((ax, i) => (
        <g key={i}>
          <rect x={ax} y={seatY - 110} width={70} height={210} rx={30} fill="url(#couchBody)" stroke="#3A5A8C" strokeWidth={2} />
          <rect x={ax + 8} y={seatY - 104} width={54} height={14} rx={7} fill="#5776A8" opacity={0.35} />
        </g>
      ))}
      {/* pieds */}
      {[x + 26, x + w - 46].map((lx, i) => (
        <rect key={i} x={lx} y={seatY + 100} width={20} height={22} rx={4} fill="#0A0F1A" />
      ))}
      {/* plaid froissé sur l'accoudoir droit */}
      <path
        d={`M${x + w - 80},${seatY - 112} C${x + w - 40},${seatY - 126} ${x + w + 4},${seatY - 104} ${x + w + 6},${seatY - 60} L${x + w - 6},${seatY + 70 + Math.sin(f / 30) * 2} C${x + w - 30},${seatY + 90} ${x + w - 60},${seatY + 60} ${x + w - 74},${seatY + 80} Z`}
        fill={plaidCol}
        stroke="#7C97C4"
        strokeWidth={2}
        opacity={worn ? 0.7 : 1}
      />
      {[0, 1, 2].map((i) => (
        <path key={i} d={`M${x + w - 66 + i * 20},${seatY - 100} Q${x + w - 50 + i * 20},${seatY - 20} ${x + w - 60 + i * 18},${seatY + 64}`} stroke={worn ? '#56627A' : '#6E8BBE'} strokeWidth={3} fill="none" opacity={0.7} />
      ))}
    </g>
  );
};

export const Can: React.FC<{x: number; y: number; rot?: number; col?: string}> = ({x, y, rot = 0, col = '#8A3C3A'}) => (
  <g transform={`translate(${x},${y}) rotate(${rot})`}>
    <rect x={-14} y={-46} width={28} height={46} rx={5} fill={col} stroke="#C9D3E6" strokeWidth={2} />
    <rect x={-14} y={-38} width={28} height={10} fill="#C9D3E6" opacity={0.5} />
    <rect x={-10} y={-44} width={5} height={40} rx={2} fill="#fff" opacity={0.2} />
  </g>
);

// Bureau vu de profil
export const Desk: React.FC<{x: number; top: number; w: number; floor: number}> = ({x, top, w, floor}) => (
  <g>
    <ellipse cx={x + w / 2} cy={floor + 4} rx={w * 0.6} ry={18} fill="url(#shadow)" />
    <rect x={x + 14} y={top + 18} width={18} height={floor - top - 18} fill="#14203A" />
    <rect x={x + w - 32} y={top + 18} width={18} height={floor - top - 18} fill="#14203A" />
    <rect x={x + 30} y={top + 22} width={w - 60} height={70} fill="#16233D" stroke="#2C4268" strokeWidth={2} />
    <rect x={x + w / 2 - 24} y={top + 52} width={48} height={8} rx={4} fill="#3A5276" />
    <rect x={x} y={top} width={w} height={22} rx={4} fill="url(#woodTop)" />
    <rect x={x} y={top} width={w} height={3} fill="#7FA0D0" opacity={0.6} />
  </g>
);

// Lampe de bureau articulée, cône ambré
export const DeskLamp: React.FC<{x: number; y: number; on?: number; aim?: number}> = ({x, y, on = 1, aim = 0}) => {
  const f = useF();
  const flick = 0.96 + Math.sin(f / 7) * 0.02;
  return (
    <g>
      <g opacity={on * flick} style={{mixBlendMode: 'screen'}}>
        <path d={`M${x + 96},${y - 186} L${x + 40 + aim},${y} L${x + 230 + aim},${y}Z`} fill="url(#lampCone)" filter="url(#blur14)" />
        <ellipse cx={x + 135 + aim} cy={y} rx={120} ry={20} fill="url(#poolAmber)" />
        <circle cx={x + 100} cy={y - 180} r={60} fill="#FFD58A" opacity={0.25} filter="url(#blur24)" />
      </g>
      <ellipse cx={x} cy={y - 4} rx={34} ry={8} fill="#1F2E4C" stroke="#3E5A88" strokeWidth={2} />
      <line x1={x} y1={y - 8} x2={x + 30} y2={y - 120} stroke="#2F4570" strokeWidth={8} strokeLinecap="round" />
      <line x1={x + 30} y1={y - 120} x2={x + 92} y2={y - 172} stroke="#2F4570" strokeWidth={7} strokeLinecap="round" />
      <circle cx={x + 30} cy={y - 120} r={7} fill="#4C6A9E" />
      <g transform={`translate(${x + 92},${y - 172}) rotate(35)`}>
        <path d="M-30,-6 L30,-6 L44,30 L-44,30Z" fill="#2B3F66" stroke="#5576AE" strokeWidth={2} />
        <ellipse cx={0} cy={30} rx={40} ry={7} fill="#FFE2A6" opacity={on} />
      </g>
    </g>
  );
};

export const Books: React.FC<{x: number; y: number}> = ({x, y}) => {
  const cols = ['#5A3B2E', '#2E4A6E', '#6E5A2A', '#3B2E5A', '#2E5A4A'];
  let yy = y;
  return (
    <g>
      {cols.map((c, i) => {
        const h = 16 + (i % 2) * 6;
        const w = 110 - i * 7 + (i % 2) * 10;
        yy -= h;
        const off = ((i * 37) % 17) - 8;
        return (
          <g key={i}>
            <rect x={x + off} y={yy} width={w} height={h} rx={3} fill={c} stroke="#0A0F1A" strokeWidth={1.5} />
            <rect x={x + off + 6} y={yy + 3} width={w - 18} height={2} fill="#F3D9A0" opacity={0.35} />
          </g>
        );
      })}
    </g>
  );
};

// Mug avec vapeur animée
export const Mug: React.FC<{x: number; y: number}> = ({x, y}) => {
  const f = useF();
  return (
    <g>
      <rect x={x - 20} y={y - 44} width={40} height={44} rx={6} fill="#C9D3E6" />
      <path d={`M${x + 20},${y - 34} q18,4 0,22`} stroke="#C9D3E6" strokeWidth={6} fill="none" />
      <rect x={x - 16} y={y - 40} width={8} height={34} rx={3} fill="#fff" opacity={0.4} />
      {[0, 1, 2].map((i) => {
        const t = ((f + i * 20) % 60) / 60;
        return (
          <path
            key={i}
            d={`M${x - 8 + i * 8},${y - 50 - t * 70} q${8 + Math.sin(f / 10 + i) * 6},-14 0,-28 q-8,-14 0,-28`}
            stroke="#E8EEFF"
            strokeWidth={4}
            fill="none"
            strokeLinecap="round"
            opacity={(1 - t) * t * 2.2}
            filter="url(#blur2)"
          />
        );
      })}
    </g>
  );
};

// Carnet ouvert vu de 3/4, page qui tourne (flip 0..1)
export const Notebook: React.FC<{x: number; y: number; flip?: number; lines?: number}> = ({x, y, flip = 0, lines = 1}) => {
  const fw = Math.cos(flip * Math.PI) * 60;
  return (
    <g>
      <path d={`M${x - 64},${y} L${x + 64},${y} L${x + 58},${y - 12} L${x - 58},${y - 12}Z`} fill="#E9E2CF" stroke="#8C836A" strokeWidth={1.5} />
      <line x1={x} y1={y} x2={x} y2={y - 12} stroke="#8C836A" strokeWidth={1.5} />
      {new Array(4).fill(0).map((_, i) => (
        <line key={i} x1={x - 52} y1={y - 3 - i * 2.4} x2={x - 52 + 44 * Math.min(1, Math.max(0, lines * 4 - i))} y2={y - 3 - i * 2.4} stroke="#2E4A6E" strokeWidth={1} />
      ))}
      {flip > 0 && flip < 1 && (
        <path d={`M${x},${y} L${x + fw},${y - 4 - Math.sin(flip * Math.PI) * 26} L${x + fw * 0.95},${y - 16 - Math.sin(flip * Math.PI) * 26} L${x},${y - 12}Z`} fill="#F5EFDD" stroke="#8C836A" strokeWidth={1.5} />
      )}
    </g>
  );
};

export const Chair: React.FC<{x: number; seat: number; floor: number; facing?: 1 | -1}> = ({x, seat, floor, facing = 1}) => (
  <g transform={`translate(${x},0) scale(${facing},1)`}>
    <rect x={-50} y={seat} width={110} height={16} rx={6} fill="#22355A" stroke="#3E5A88" strokeWidth={2} />
    <rect x={-56} y={seat - 160} width={16} height={176} rx={6} fill="#1B2A44" stroke="#3E5A88" strokeWidth={2} />
    <rect x={-44} y={seat + 16} width={10} height={floor - seat - 16} fill="#14203A" />
    <rect x={46} y={seat + 16} width={10} height={floor - seat - 16} fill="#14203A" />
  </g>
);

// Bocal en verre avec pièces (level 0..1)
export const Jar: React.FC<{x: number; y: number; level: number; coins: number; h?: number; w?: number}> = ({x, y, level, coins, h = 200, w = 130}) => {
  return (
    <g>
      <ellipse cx={x} cy={y + 2} rx={w * 0.7} ry={12} fill="url(#shadow)" />
      <clipPath id="jarClip">
        <path d={`M${x - w / 2},${y - h + 30} Q${x - w / 2},${y} ${x - w / 2 + 14},${y} L${x + w / 2 - 14},${y} Q${x + w / 2},${y} ${x + w / 2},${y - h + 30}Z`} />
      </clipPath>
      <g clipPath="url(#jarClip)">
        {new Array(coins).fill(0).map((_, i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          return <ellipse key={i} cx={x - w * 0.35 + col * (w * 0.17) + (row % 2) * 8} cy={y - 10 - row * 9} rx={13} ry={5} fill={C.gold} stroke="#FFF0B0" strokeWidth={1.2} />;
        })}
        <rect x={x - w / 2} y={y - level * (h - 40)} width={w} height={h} fill="#FFD873" opacity={0.08} />
      </g>
      <path d={`M${x - w / 2},${y - h + 30} Q${x - w / 2},${y} ${x - w / 2 + 14},${y} L${x + w / 2 - 14},${y} Q${x + w / 2},${y} ${x + w / 2},${y - h + 30}`} fill="#9FC0FF" fillOpacity={0.08} stroke="#BFD4FF" strokeWidth={3} strokeOpacity={0.7} />
      <rect x={x - w / 2 - 4} y={y - h + 14} width={w + 8} height={18} rx={5} fill="#2B3F66" stroke="#5576AE" strokeWidth={2} />
      <path d={`M${x - w / 2 + 12},${y - h + 50} L${x - w / 2 + 12},${y - 30}`} stroke="#fff" strokeWidth={6} opacity={0.25} strokeLinecap="round" />
      <path d={`M${x + w / 2 - 16},${y - h + 60} L${x + w / 2 - 16},${y - 80}`} stroke="#fff" strokeWidth={3} opacity={0.15} strokeLinecap="round" />
    </g>
  );
};

export const Shelf: React.FC<{x: number; y: number; w: number}> = ({x, y, w}) => (
  <g>
    <rect x={x} y={y} width={w} height={12} fill="#24365A" />
    <rect x={x} y={y} width={w} height={2} fill="#6F8FC4" opacity={0.6} />
    {[0, 1, 2, 3, 4, 5].map((i) => (
      <rect key={i} x={x + 10 + i * 22} y={y - 50 - (i % 3) * 8} width={18} height={50 + (i % 3) * 8} fill={['#3B2E5A', '#2E4A6E', '#5A3B2E'][i % 3]} opacity={0.8} />
    ))}
    <path d={`M${x + w - 60},${y} q10,-40 30,-50 q-6,30 10,50Z`} fill="#2E5A4A" />
  </g>
);
