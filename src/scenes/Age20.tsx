import React from 'react';
import {interpolateColors} from 'remotion';
import {C} from '../constants';
import {Dust, Layer, Panel, Reflect} from '../fx/fx';
import {ease, track} from '../lib/anim';
import {useF} from '../lib/frame';
import {HIP_H, Stickman} from '../rig/Stickman';
import {DESK_SIT, P, Pose, SLUMP_SIT, add, poseTrack} from '../rig/poses';
import {Books, Can, Chair, Couch, Desk, DeskLamp, Mug, NightWindow, Notebook, Shelf, Wall, WallClock} from '../sets/room';
import {Stat} from '../ui/ui';
import {SceneProps, drift, slideOf} from './common';

const SC = 0.8;
const ROOM_FLOOR = 1290;

const SCREENS = ['#4A7BD0', '#7A5AD8', '#3FA7C9', '#C04A7A', '#4A7BD0', '#E07B3C', '#4A7BD0'];
export const screenColor = (fr: number) => {
  const f = fr + 220; // reste positif pendant les transitions
  const i = Math.floor(f / 22);
  const t = Math.min(1, (f % 22) / 5);
  return interpolateColors(t, [0, 1], [SCREENS[i % SCREENS.length], SCREENS[(i + 1) % SCREENS.length]]);
};

// Salon du Scrolleur — réutilisé à 30 ans (worn)
export const CouchRoom: React.FC<{f: number; dur: number; worn?: boolean; hunch?: number; reflId: string}> = ({f, dur, worn, hunch = 0, reflId}) => {
  const seatY = 1180;
  // scroll du pouce
  const scroll = Math.max(0, Math.sin((f / 22) * Math.PI * 2)) ** 3;
  const yawnAt = 150;
  let pose: Pose = add(SLUMP_SIT, {wR: -scroll * 22, eR: scroll * 6, s3: hunch * 8, nk: hunch * 8, s1: hunch * 4});
  pose = poseTrack(f, [
    [yawnAt - 8, pose],
    [yawnAt, add(pose, {hd: 6, nk: 4})], // anticipation
    [yawnAt + 14, add(pose, {hd: -38, nk: -26, s3: -10, aL: 150, eL: 30}), ease.out],
    [yawnAt + 30, add(pose, {hd: -34, nk: -22, s3: -8, aL: 158, eL: 26})],
    [yawnAt + 48, pose, ease.back],
  ]);
  const hour = 1 + (f / dur) * 2;
  const scr = screenColor(f);
  const ch = (
    <Stickman id={`sc20${reflId}`} pose={pose} x={190} floor={seatY + HIP_H * SC} scale={SC} look="gray" acc={{phone: true, hood: true}} screen={scr} />
  );
  return (
    <>
      <Layer depth={0.3}>
        <Wall floor={ROOM_FLOOR} tint={scr} tintX={290} tintO={0.22} />
        <NightWindow x={330} y={470} w={190} h={300} seed={`w20${reflId}`} />
      </Layer>
      <Layer depth={0.5}>
        <WallClock x={150} y={640} hour={hour} />
      </Layer>
      <Layer depth={0.85}>
        <Couch x={20} seatY={seatY} w={500} worn={worn} />
        <ellipse cx={300} cy={1010} rx={190} ry={170} fill={scr} opacity={0.18} filter="url(#blur40)" style={{mixBlendMode: 'screen'}} />
      </Layer>
      <Layer depth={1}>
        {ch}
        <ellipse cx={390} cy={ROOM_FLOOR + 30} rx={160} ry={30} fill="url(#poolBlue)" />
        {!worn && (
          <>
            <Can x={300} y={ROOM_FLOOR + 66} rot={88} />
            <Can x={440} y={ROOM_FLOOR + 60} col="#2E5A8A" />
            <Can x={360} y={ROOM_FLOOR + 92} rot={-74} col="#3A7A4A" />
          </>
        )}
        <Reflect floor={ROOM_FLOOR + 110} id={`r20${reflId}`} o={0.12}>
          <Couch x={20} seatY={seatY} w={500} worn={worn} />
        </Reflect>
        <Dust seed={`d20${reflId}`} n={30} y={500} h={900} color="#9FC0FF" lit={(x, y) => Math.max(0.2, 1.5 - Math.hypot(x - 300, y - 1000) / 260)} />
      </Layer>
      <Layer depth={1.5} blur={14}>
        <rect x={-60} y={1560} width={420} height={60} rx={12} fill="#141F35" />
        <rect x={-40} y={1620} width={18} height={200} fill="#0E1626" />
        <rect x={300} y={1620} width={18} height={200} fill="#0E1626" />
      </Layer>
    </>
  );
};

// Chambre du Bâtisseur
export const DeskRoom: React.FC<{f: number; tidy?: boolean; lampX?: number; reflId: string; pose: Pose; flip?: number; lines?: number; nearHand?: React.ReactNode; extra?: React.ReactNode; acc?: object}> = ({
  f, tidy, lampX = 40, reflId, pose, flip = 0, lines = 1, nearHand, extra, acc,
}) => {
  const top = 1110;
  const ch = (
    <Stickman id={`b20${reflId}`} pose={pose} x={320} floor={1158 + HIP_H * SC} scale={SC} facing={-1} look="gold" glow={0.9} acc={{backpack: false, ...acc}} nearHand={nearHand} />
  );
  return (
    <>
      <Layer depth={0.3}>
        <Wall floor={ROOM_FLOOR} tint="#F3B65A" tintX={140} tintO={0.16} />
        <NightWindow x={240} y={430} w={180} h={250} seed={`wb${reflId}`} moon />
        <Shelf x={30} y={700} w={170} />
      </Layer>
      <Layer depth={0.9}>
        <Chair x={340} seat={1162} floor={ROOM_FLOOR} facing={-1} />
        <Desk x={-20} top={top} w={250} floor={ROOM_FLOOR} />
        {!tidy && <Books x={-6} y={top} />}
        {!tidy && <Books x={10} y={top - 70} />}
        {!tidy && <Mug x={190} y={top} />}
        {!tidy && <Notebook x={140} y={top} flip={flip} lines={lines} />}
        {extra}
      </Layer>
      <Layer depth={1}>
        {ch}
        <DeskLamp x={lampX} y={top} aim={-20} />
        <Dust seed={`db${reflId}`} n={44} x={0} y={880} w={300} h={260} color="#FFD58A" size={2} speed={0.15} lit={(x, y) => Math.max(0.15, 1.6 - Math.hypot(x - 120, y - 1030) / 140)} />
        <Reflect floor={ROOM_FLOOR + 6} id={`rb${reflId}`} o={0.14}>
          {ch}
        </Reflect>
      </Layer>
      <Layer depth={1.5} blur={24}>
        <path d="M420,1500 q40,-160 120,-220 q-10,140 -40,240Z" fill="#163024" />
        <path d="M470,1540 q60,-120 140,-150 q-40,120 -90,170Z" fill="#11261C" />
      </Layer>
    </>
  );
};

export const Age20: React.FC<SceneProps> = (props) => {
  const f = useF();
  const slide = slideOf(props);
  const cam = {...drift(f, props.dur, 15, 0, 1.12, 1.16), y: -40};

  // Bâtisseur : écrit, tourne la page, se frotte les yeux, s'étire, reprend
  const write = (base: Pose) => add(base, {wR: Math.sin(f * 1.3) * 10, eR: Math.sin(f * 0.65) * 5, hd: Math.sin(f / 20) * 2});
  const w0 = write(P({aR: 22, eR: 68}, DESK_SIT));
  const pose = poseTrack(f, [
    [0, w0],
    [62, w0],
    [70, P({aL: 80, eL: 20, s3: w0.s3 + 2}, w0), ease.out],
    [82, P({aL: 50, eL: 70}, w0), ease.inOut],
    [94, w0],
    [112, w0],
    [118, add(w0, {s3: 4}), ease.in], // anticipation
    [128, P({aR: 26, eR: 140, wR: 10, nk: 24, hd: 28}, w0)],
    [134, P({aR: 26, eR: 132, wR: -6, nk: 24, hd: 28}, w0)],
    [140, P({aR: 26, eR: 140, wR: 14, nk: 24, hd: 28}, w0)],
    [150, w0],
    [160, add(w0, {s2: 4, s3: 6}), ease.in],
    [176, P({s1: -4, s2: -8, s3: -10, nk: -10, hd: -16, aL: 150, eL: 16, aR: 176, eR: 10, lL: 86, kL: 88, lR: 92, kR: 96}), ease.back],
    [192, P({s1: -4, s2: -10, s3: -12, nk: -12, hd: -18, aL: 156, eL: 10, aR: 180, eR: 6, lL: 86, kL: 88, lR: 92, kR: 96})],
    [212, w0, ease.inOut],
  ]);
  const flip = track(f, [[70, 0], [86, 1]]);
  const lines = track(f, [[0, 0.2], [62, 1], [86, 0], [240, 0.9]], );
  const pen = (
    <g>
      <line x1={0} y1={6} x2={0} y2={38} stroke="#F5F5F5" strokeWidth={4} strokeLinecap="round" />
    </g>
  );

  return (
    <>
      <Panel side="left" slide={slide} cam={cam} svg={<CouchRoom f={f} dur={props.dur} reflId="a" />}>
        <Stat big="3H" label="DE SCROLL" at={84} x={40} y={410} w={460} color="#AEB6C2" />
      </Panel>
      <Panel side="right" slide={slide} cam={cam} svg={<DeskRoom f={f} reflId="a" pose={pose} flip={flip} lines={lines} nearHand={f < 112 || f > 212 ? pen : null} acc={{backpack: true}} />}>
        <Stat big="1H" label="D'APPRENTISSAGE" at={152} x={0} y={410} w={400} color={C.goldLight} glow="rgba(212,175,55,0.55)" />
      </Panel>
    </>
  );
};
