import {useF} from '../lib/frame';
import React, {createContext, useContext} from 'react';
import {AbsoluteFill, Img, random, staticFile} from 'remotion';
import {C, H, HALF} from '../constants';

// ---- Caméra & parallaxe ----------------------------------------------------

export type Cam = {x: number; y: number; z: number};
const CamCtx = createContext<Cam>({x: 0, y: 0, z: 1});

// Couche de parallaxe : depth 0.2 = très loin, 1 = plan des persos, 1.4 = avant-plan
export const Layer: React.FC<{depth: number; children: React.ReactNode; blur?: number}> = ({depth, children, blur}) => {
  const c = useContext(CamCtx);
  const z = 1 + (c.z - 1) * depth;
  return (
    <g
      transform={`translate(${HALF / 2},${H / 2}) scale(${z}) translate(${-HALF / 2 - c.x * depth},${-H / 2 - c.y * depth})`}
      filter={blur ? `url(#blur${blur})` : undefined}
    >
      {children}
    </g>
  );
};

// Demi-écran : clip, glissement de transition, caméra
export const Panel: React.FC<{
  side: 'left' | 'right';
  slide: number;
  cam: Cam;
  bg?: string;
  svg: React.ReactNode;
  children?: React.ReactNode;
}> = ({side, slide, cam, bg = C.bg, svg, children}) => {
  const blur = Math.min(18, Math.abs(slide) > 1 && Math.abs(slide) < HALF - 1 ? 14 : 0);
  return (
    <div style={{position: 'absolute', left: side === 'left' ? 0 : HALF, top: 0, width: HALF, height: H, overflow: 'hidden'}}>
      <div style={{position: 'absolute', inset: 0, transform: `translateX(${slide}px)`, filter: blur ? `blur(${blur * 0.25}px)` : undefined}}>
        <svg width={HALF} height={H} viewBox={`0 0 ${HALF} ${H}`} style={{position: 'absolute', inset: 0, background: bg}}>
          <CamCtx.Provider value={cam}>{svg}</CamCtx.Provider>
        </svg>
        {children}
      </div>
    </div>
  );
};

// ---- Particules de poussière ----------------------------------------------

export const Dust: React.FC<{
  seed: string;
  n?: number;
  x?: number; y?: number; w?: number; h?: number;
  color?: string;
  size?: number;
  speed?: number;
  rise?: boolean;
  opacity?: number;
  lit?: (x: number, y: number) => number;
}> = ({seed, n = 40, x = 0, y = 300, w = HALF, h = 1300, color = '#DCE6FF', size = 2.4, speed = 0.25, rise = false, opacity = 0.7, lit}) => {
  const f = useF();
  return (
    <g>
      {new Array(n).fill(0).map((_, i) => {
        const r1 = random(`${seed}a${i}`);
        const r2 = random(`${seed}b${i}`);
        const r3 = random(`${seed}c${i}`);
        const r4 = random(`${seed}d${i}`);
        const v = speed * (0.4 + r3);
        let py = y + ((r2 * h + (rise ? -f * v * 3 : f * v) + h * 10) % h);
        let px = x + r1 * w + Math.sin(f / (40 + r4 * 60) + r1 * 9) * 14;
        const tw = 0.5 + 0.5 * Math.sin(f / (8 + r3 * 14) + r4 * 20);
        const s = size * (0.4 + r4 * 1.2);
        const boost = lit ? lit(px, py) : 1;
        return <circle key={i} cx={px} cy={py} r={s} fill={color} opacity={opacity * (0.25 + tw * 0.75) * boost * (0.4 + r1 * 0.6)} />;
      })}
    </g>
  );
};

// ---- Lumière ---------------------------------------------------------------

export const Beam: React.FC<{x: number; top?: number; bottom: number; wTop?: number; wBot?: number; gold?: boolean; o?: number}> = ({
  x, top = -50, bottom, wTop = 70, wBot = 260, gold, o = 1,
}) => {
  const f = useF();
  const flick = 0.92 + Math.sin(f / 11) * 0.04 + Math.sin(f / 3.7) * 0.02;
  return (
    <g opacity={o * flick} style={{mixBlendMode: 'screen'}}>
      <path d={`M${x - wTop / 2},${top} L${x + wTop / 2},${top} L${x + wBot / 2},${bottom} L${x - wBot / 2},${bottom}Z`} fill={`url(#${gold ? 'beamGold' : 'beam'})`} filter="url(#blur14)" />
      <path d={`M${x - wTop / 5},${top} L${x + wTop / 5},${top} L${x + wBot / 5},${bottom} L${x - wBot / 5},${bottom}Z`} fill={`url(#${gold ? 'beamGold' : 'beam'})`} filter="url(#blur8)" />
      <ellipse cx={x} cy={bottom} rx={wBot * 0.75} ry={46} fill={`url(#${gold ? 'poolGold' : 'pool'})`} />
    </g>
  );
};

export const Shadow: React.FC<{x: number; y: number; w?: number; o?: number}> = ({x, y, w = 150, o = 0.8}) => (
  <ellipse cx={x} cy={y} rx={w} ry={w * 0.14} fill="url(#shadow)" opacity={o} />
);

// Brume basse qui dérive
export const Mist: React.FC<{y: number; seed: string; color?: string; o?: number}> = ({y, seed, color = '#2A3F66', o = 0.45}) => {
  const f = useF();
  return (
    <g filter="url(#blur40)" opacity={o}>
      {new Array(6).fill(0).map((_, i) => {
        const r = random(`${seed}${i}`);
        const cx = ((r * 900 + f * (0.4 + r * 0.6)) % 900) - 180;
        return <ellipse key={i} cx={cx} cy={y + (r - 0.5) * 80} rx={220 + r * 120} ry={50 + r * 30} fill={color} />;
      })}
    </g>
  );
};

// Sol brillant avec horizon
export const GlossFloor: React.FC<{y: number; horizon?: number}> = ({y, horizon = 0}) => (
  <g>
    <rect x={-300} y={y - horizon} width={1200} height={2000} fill="url(#floorGloss)" />
    <rect x={-300} y={y - horizon} width={1200} height={2} fill={C.edge} opacity={0.35} />
  </g>
);

// Reflet au sol d'un groupe (miroir sous la ligne de sol)
export const Reflect: React.FC<{floor: number; id: string; o?: number; children: React.ReactNode}> = ({floor, id, o = 0.28, children}) => (
  <g>
    <mask id={`m-${id}`} maskUnits="userSpaceOnUse" x={-400} y={floor} width={1400} height={700}>
      <rect x={-400} y={floor} width={1400} height={520} fill="url(#reflFade)" />
    </mask>
    <g mask={`url(#m-${id})`} opacity={o}>
      <g transform={`translate(0,${floor * 2}) scale(1,-1)`} filter="url(#blur2)">
        {children}
      </g>
    </g>
  </g>
);

// ---- Post-traitement plein écran ------------------------------------------

export const Vignette: React.FC = () => (
  <AbsoluteFill
    style={{
      background: 'radial-gradient(ellipse 75% 60% at 50% 48%, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)',
      pointerEvents: 'none',
    }}
  />
);

export const Grain: React.FC = () => {
  const f = useF();
  const i = Math.floor(f / 2) % 6;
  return (
    <AbsoluteFill style={{mixBlendMode: 'overlay', opacity: 0.16}}>
      <Img src={staticFile(`grain/g${i}.png`)} style={{width: '100%', height: '100%'}} />
    </AbsoluteFill>
  );
};

// Légère aberration chromatique sur les bords (franges colorées)
export const Fringe: React.FC = () => (
  <AbsoluteFill
    style={{
      boxShadow: 'inset 6px 0 24px rgba(255,40,60,0.05), inset -6px 0 24px rgba(40,120,255,0.06)',
      pointerEvents: 'none',
    }}
  />
);

export const Flash: React.FC<{at: number; len?: number; o?: number; color?: string}> = ({at, len = 10, o = 0.35, color = '#FFF6DC'}) => {
  const f = useF();
  const t = f - at;
  if (t < 0 || t > len) return null;
  return <AbsoluteFill style={{background: color, opacity: o * Math.pow(1 - t / len, 2), mixBlendMode: 'screen'}} />;
};

// Étincelles dorées qui se détachent d'un point pendant un effort
export const Sparks: React.FC<{seed: string; x: number; y: number; from: number; to: number; n?: number; spread?: number; color?: string}> = ({
  seed, x, y, from, to, n = 18, spread = 60, color = '#FFE08A',
}) => {
  const f = useF();
  return (
    <g style={{mixBlendMode: 'screen'}}>
      {new Array(n).fill(0).map((_, i) => {
        const born = from + random(`${seed}t${i}`) * (to - from);
        const life = 26 + random(`${seed}l${i}`) * 24;
        const t = (f - born) / life;
        if (t < 0 || t > 1) return null;
        const dx = (random(`${seed}x${i}`) - 0.5) * spread * 2;
        const px = x + dx * 0.5 + dx * t + Math.sin(t * 6 + i) * 6;
        const py = y + (random(`${seed}y${i}`) - 0.5) * spread - t * (60 + random(`${seed}v${i}`) * 80);
        return <circle key={i} cx={px} cy={py} r={2 + (1 - t) * 3} fill={color} opacity={(1 - t) * 0.9} filter="url(#blur2)" />;
      })}
    </g>
  );
};
