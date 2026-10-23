import React from 'react';
import {C, FLOOR} from '../constants';
import {Dust, Flash, Layer, Mist, Panel, Reflect, Shadow} from '../fx/fx';
import {clamp, ease, prog, shake, track} from '../lib/anim';
import {useF} from '../lib/frame';
import {HIP_H, Stickman, solve, toWorld} from '../rig/Stickman';
import {thousands} from '../lib/fmt';
import {DESK_SIT, P, STAND, add, mix, poseTrack, walk} from '../rig/poses';
import {Car, Skyline, StreetLamp} from '../sets/outdoor';
import {Jar} from '../sets/room';
import {FONT, KText, Stat} from '../ui/ui';
import {SceneProps, drift, slideOf} from './common';
import {DeskRoom} from './Age20';

export const STAMP_AT = 160;
export const COIN_TIMES = [24, 50, 76, 102, 128, 154, 180];
const COIN_FALL = 12;

const Parking: React.FC<{f: number}> = ({f}) => {
  const SC = 0.72;
  const carFloor = 1300;
  // marche devant la voiture en faisant tourner les clés, puis photo, puis sursaut
  const walkT = f / 30;
  const wx = track(f, [[0, 60], [70, 230]]);
  const walking = f < 70;
  const base = P({s3: 4, nk: 4});
  const photo = P({aR: 100, eR: 64, wR: -30, aL: 30, eL: 90, hd: -6, nk: -4, s3: -2});
  let pose = walking ? walk(walkT, 0.9, base) : base;
  pose = poseTrack(f, [
    [70, walking ? pose : base],
    [86, mix(base, P({aR: 50, eR: 100}), 0.6)],
    [100, photo, ease.back],
    [130, photo],
    [142, base],
    [STAMP_AT - 2, base],
    [STAMP_AT + 4, add(P({s1: -10, s2: -8, s3: -8, hd: -14, aL: 60, eL: 80, aR: 70, eR: 90, lR: 20, kR: 30}), {x: -40, y: -26}), ease.out],
    [STAMP_AT + 30, add(P({s1: -4, s3: 4, hd: 10, nk: 10, aL: 20, eL: 40, aR: 30, eR: 60}), {x: -40})],
    [240, add(P({s1: 0, s3: 8, hd: 16, nk: 14, aL: 10, eL: 30, aR: 20, eR: 50}), {x: -40})],
  ]);
  if (walking) pose = walk(walkT, 0.9, base);
  const spin = f < 90;
  const keys = (
    <g transform={spin ? `rotate(${f * 24})` : undefined}>
      <circle cx={0} cy={26} r={9} fill="none" stroke="#D7DCE4" strokeWidth={3} />
      <rect x={-4} y={34} width={8} height={22} rx={2} fill="#C9D3E6" />
      <rect x={-8} y={50} width={16} height={12} rx={3} fill="#22314F" />
    </g>
  );
  const phone = (
    <g>
      <rect x={-12} y={8} width={24} height={40} rx={5} fill="#0E1118" stroke="#3A4E72" strokeWidth={2} />
      <rect x={-9} y={11} width={18} height={33} rx={3} fill={C.phone} />
    </g>
  );
  const lights = Math.max(prog(f, 62, 64, ease.linear) * (1 - prog(f, 70, 72, ease.linear)), prog(f, 76, 78, ease.linear) * (1 - prog(f, 86, 90, ease.linear)));
  const shine = ((f % 120) / 120);
  // tampon qui tombe
  const sp = prog(f, STAMP_AT - 10, STAMP_AT, ease.in);
  const stampY = -500 + sp * (carFloor - 150 + 500);
  const stampS = 1.4 - sp * 0.62;
  const dent = prog(f, STAMP_AT, STAMP_AT + 4);
  const ch = (
    <Stickman id="sc22" pose={pose} x={wx} floor={FLOOR + 30} scale={SC} look="gray" acc={{hood: false, cap: true, chain: true}} nearHand={f < 90 ? keys : f < 142 ? phone : null} />
  );
  return (
    <>
      <Layer depth={0.2}>
        <rect x={-300} y={-300} width={1200} height={2600} fill="#070B14" />
        <ellipse cx={270} cy={1000} rx={500} ry={300} fill={C.night1} opacity={0.8} filter="url(#blur40)" />
        <Skyline seed="pk1" base={1180} minH={200} maxH={520} color="#0D1628" lit={0.25} />
      </Layer>
      <Layer depth={0.45} blur={2}>
        <Skyline seed="pk2" base={1240} minH={120} maxH={300} color="#111D35" lit={0.3} edge="#2C4268" />
      </Layer>
      <Layer depth={0.8}>
        <rect x={-300} y={carFloor - 20} width={1200} height={900} fill="#0B111D" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={-120 + i * 220} y={carFloor + 40} width={120} height={8} fill="#C9D3E6" opacity={0.18} transform={`skewX(-40)`} />
        ))}
        <StreetLamp x={40} floor={carFloor} />
        <Reflect floor={carFloor} id="car22" o={0.18}>
          <Car x={-30} floor={carFloor} lights={lights} shine={shine} dent={dent} />
        </Reflect>
        <Car x={-30} floor={carFloor} lights={lights} shine={shine} dent={dent} />
        {/* tampon CRÉDIT 48 MOIS */}
        {f > STAMP_AT - 12 && (
          <g transform={`translate(430,${stampY}) rotate(${-8 + sp * 0}) scale(${stampS})`}>
            <rect x={-130} y={-70} width={260} height={84} rx={8} fill="#0A0F1A" opacity={0.0} />
            <rect x={-124} y={-66} width={248} height={76} rx={10} fill="none" stroke={C.red} strokeWidth={7} />
            <text x={0} y={-36} textAnchor="middle" fontFamily={FONT} fontWeight={700} fontSize={30} fill={C.red} letterSpacing="2">CRÉDIT</text>
            <text x={0} y={-2} textAnchor="middle" fontFamily={FONT} fontWeight={700} fontSize={30} fill={C.red} letterSpacing="2">48 MOIS</text>
          </g>
        )}
        {f >= STAMP_AT && f < STAMP_AT + 30 && (
          <g opacity={1 - (f - STAMP_AT) / 30}>
            {new Array(10).fill(0).map((_, i) => {
              const t = (f - STAMP_AT) / 30;
              const a = (i / 10) * Math.PI - Math.PI;
              return <circle key={i} cx={430 + Math.cos(a) * (40 + t * 160)} cy={carFloor - 150 + Math.sin(a) * (10 + t * 70)} r={10 + t * 30} fill="#9AA6BC" opacity={0.3} filter="url(#blur8)" />;
            })}
          </g>
        )}
      </Layer>
      <Layer depth={1}>
        <Shadow x={wx} y={FLOOR + 34} w={90} />
        {ch}
        <Dust seed="d22" n={26} y={400} h={1000} />
      </Layer>
      <Layer depth={1.5}>
        <Mist y={FLOOR + 200} seed="m22" o={0.3} />
      </Layer>
    </>
  );
};

const Coins: React.FC<{f: number; jarX: number; dropY: number}> = ({f, jarX, dropY}) => {
  // le Bâtisseur glisse les pièces une à une dans le bocal
  const top = 1110;
  const landed = COIN_TIMES.filter((t) => f >= t + COIN_FALL).length;
  return (
    <>
      <Jar x={jarX} y={top} level={landed / 7} coins={4 + landed * 3} h={150} w={116} />
      {COIN_TIMES.map((t, i) => {
        const p = clamp((f - t) / COIN_FALL);
        if (f < t || p >= 1) return null;
        const y = dropY + p * p * (top - 20 - landed * 6 - dropY);
        return <ellipse key={i} cx={jarX + Math.sin(i) * 10} cy={y} rx={13 * Math.abs(Math.cos(f * 0.8 + i))} ry={13} fill={C.gold} stroke="#FFF0B0" strokeWidth={2} />;
      })}
      {/* petite pile de pièces sur le bureau */}
      {new Array(Math.max(0, 7 - COIN_TIMES.filter((t) => f >= t - 10).length)).fill(0).map((_, i) => (
        <ellipse key={i} cx={200} cy={top - 4 - i * 6} rx={14} ry={5} fill={C.gold} stroke="#FFF0B0" strokeWidth={1.2} />
      ))}
    </>
  );
};

export const Age22: React.FC<SceneProps> = (props) => {
  const f = useF();
  const slide = slideOf(props);
  const sh = shake(f, STAMP_AT, 18, 20);
  const d = drift(f, props.dur, 15, 0, 1.06, 1.1);
  const camL = {x: d.x + sh.x, y: -20 + sh.y, z: d.z};
  const camR = {...drift(f, props.dur, -15, 0, 1.12, 1.16), y: -40};

  // cycle : prendre une pièce sur la pile → la lâcher au-dessus du bocal
  const sit = P({aR: 22, eR: 68}, DESK_SIT);
  const reachPile = P({aR: 30, eR: 74, wR: 10, hd: 22}, sit);
  const overJar = P({aR: 84, eR: 10, wR: 40, s3: 16, nk: 8, hd: 6}, sit);
  const hand = toWorld(solve(overJar).armR.wr, {pose: overJar, x: 320, floor: 1158 + HIP_H * 0.8, scale: 0.8, facing: -1});
  const kfs: [number, typeof sit, ((t: number) => number)?][] = [[0, sit]];
  COIN_TIMES.forEach((t) => {
    kfs.push([t - 14, reachPile]);
    kfs.push([t - 2, overJar, ease.out]);
    kfs.push([t + 4, P({wR: 10}, overJar)]);
  });
  kfs.push([200, sit]);
  kfs.push([212, add(sit, {hd: 14, nk: 6})]);
  kfs.push([220, add(sit, {hd: -4})]);
  kfs.push([228, add(sit, {hd: 12, nk: 4})]);
  kfs.push([240, sit]);
  const pose = poseTrack(f, kfs);
  const landed = COIN_TIMES.filter((t) => f >= t + COIN_FALL).length;
  const lastLand = Math.max(-99, ...COIN_TIMES.map((t) => t + COIN_FALL).filter((t) => f >= t));
  const pulse = Math.max(0, 1 - (f - lastLand) / 8) * 0.08;

  return (
    <>
      <Panel side="left" slide={slide} cam={camL} svg={<Parking f={f} />}>
        <KText words={[{t: 'AVOIR', at: 20}, {t: "L'AIR", at: 26}, {t: 'RICHE', at: 32, color: '#C9D3E6'}]} x={20} y={430} w={500} size={46} weight={600} color="#AEB6C2" out={STAMP_AT - 14} />
      </Panel>
      <Panel side="right" slide={slide} cam={camR} svg={<DeskRoom f={f} tidy reflId="b" pose={pose} extra={<Coins f={f} jarX={hand[0] - 6} dropY={hand[1] + 14} />} lampX={-70} acc={{backpack: true}} lines={0} />}>
        <Stat big={`+${thousands(landed * 200)} €`} label="+200 € / MOIS" at={COIN_TIMES[0] + COIN_FALL} x={0} y={410} w={400} color={C.goldLight} glow="rgba(212,175,55,0.55)" bigSize={80} pulse={pulse} />
      </Panel>
      <Flash at={120} len={6} o={0.25} color="#FFFFFF" />
    </>
  );
};
