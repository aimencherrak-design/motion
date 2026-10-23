import React from 'react';
import {C, FLOOR} from '../constants';
import {Beam, Dust, GlossFloor, Layer, Mist, Reflect, Shadow} from '../fx/fx';
import {useF} from '../lib/frame';

export type SceneProps = {dur: number; slideIn: number; slideOut: number};

// Glissement latéral (px) à partir des progressions d'entrée/sortie
export const slideOf = (p: SceneProps) => (1 - p.slideIn) * 540 - p.slideOut * 540;

// Caméra : dérive lente + zoom 1.00 → 1.04
export const drift = (f: number, dur: number, dx = 15, dy = 0, z0 = 1, z1 = 1.04) => ({
  x: (f / dur - 0.5) * dx * 2,
  y: (f / dur - 0.5) * dy * 2,
  z: z0 + (z1 - z0) * Math.min(1, Math.max(0, f / dur)),
});

// Décor « scène nue » de l'accroche et de la fin : sol noir brillant, brume, faisceau
export const Stage: React.FC<{seed: string; beamX: number; gold?: boolean; charNode: React.ReactNode; reflId: string}> = ({seed, beamX, gold, charNode, reflId}) => {
  const f = useF();
  return (
    <>
      <Layer depth={0.2}>
        <rect x={-300} y={-200} width={1200} height={2400} fill={C.bg} />
        <ellipse cx={270} cy={FLOOR - 140} rx={520} ry={260} fill={C.night1} opacity={0.55} filter="url(#blur40)" />
        {/* piliers lointains */}
        {[-60, 120, 420, 600].map((x, i) => (
          <rect key={i} x={x} y={360} width={46} height={FLOOR - 400} fill={C.night2} opacity={0.18 + (i % 2) * 0.08} filter="url(#blur14)" />
        ))}
        <rect x={-300} y={FLOOR - 92} width={1200} height={3} fill="#5A77A8" opacity={0.18} filter="url(#blur4)" />
      </Layer>
      <Layer depth={0.6}>
        <GlossFloor y={FLOOR} horizon={90} />
        <Mist y={FLOOR - 40} seed={`${seed}m1`} o={0.32} />
      </Layer>
      <Layer depth={1}>
        <Beam x={beamX} bottom={FLOOR + 10} gold={gold} />
        <Shadow x={beamX} y={FLOOR + 6} w={140} />
        <Reflect floor={FLOOR + 4} id={reflId}>
          {charNode}
        </Reflect>
        {charNode}
        <Dust seed={`${seed}d`} n={36} y={260} h={1200} lit={(x) => Math.max(0.25, 1.6 - Math.abs(x - beamX) / 90)} />
      </Layer>
      <Layer depth={1.45}>
        <Mist y={FLOOR + 160} seed={`${seed}m2`} o={0.38} color="#1E2F52" />
        <Dust seed={`${seed}fg`} n={7} y={500} h={1100} size={7} opacity={0.35} speed={0.6} />
      </Layer>
      {f < -999 && null}
    </>
  );
};
