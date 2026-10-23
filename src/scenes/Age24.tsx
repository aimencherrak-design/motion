import React from 'react';
import {random} from 'remotion';
import {C, FLOOR} from '../constants';
import {Dust, Layer, Mist, Panel, Reflect, Shadow, Sparks} from '../fx/fx';
import {clamp, ease, prog, shake, track} from '../lib/anim';
import {useF} from '../lib/frame';
import {Stickman, solve, toWorld} from '../rig/Stickman';
import {FALLEN, P, POINT_LAUGH, Pose, STAND, add, poseTrack} from '../rig/poses';
import {Brick, Fence, Floodlight, Skyline, StreetLamp} from '../sets/outdoor';
import {Bubble, KText} from '../ui/ui';
import {SceneProps, drift, slideOf} from './common';

export const PLACE_TIMES = [14, 36, 58, 80, 102];
export const TREMBLE = 112;
export const COLLAPSE = 130;
export const LAND = 146;
export const RISE = 190;
export const LAST_BRICK = 258;

const SC = 0.78;
const BX = 330; // position du Bâtisseur
const WALL_X = 70;
const ROWS_PER_PLACE = 2;
const BW = 52;

type BrickT = {x: number; y: number; row: number};
const wallBricks = (): BrickT[] => {
  const out: BrickT[] = [];
  for (let r = 0; r < PLACE_TIMES.length * ROWS_PER_PLACE; r++) {
    for (let c = 0; c < 3; c++) out.push({x: WALL_X + c * (BW + 2) + (r % 2 ? BW / 2 : 0), y: FLOOR - 14 - r * 29, row: r});
  }
  return out;
};
const BRICKS = wallBricks();

const Site: React.FC<{f: number}> = ({f}) => {
  const placed = PLACE_TIMES.filter((t) => f >= t).length;
  const rowsVisible = placed * ROWS_PER_PLACE;
  // pose : se pencher sur la pile → soulever → poser → tapoter à la truelle
  const stand = P({s3: 4, aL: 10, aR: 14}, STAND);
  const bend = P({s1: 40, s2: 20, s3: 10, nk: -10, aR: 70, eR: 10, aL: 50, eL: 10, lL: -10, kL: 30, lR: 30, kR: 50, y: 30});
  const place = P({s1: 8, s2: 4, aR: 92, eR: 20, wR: 10, aL: 70, eL: 40, lR: 14, kR: 10});
  const tap = P({s1: 6, aR: 70, eR: 70, wR: 30, aL: 40, eL: 60});
  const kfs: [number, Pose, ((t: number) => number)?][] = [[0, stand]];
  PLACE_TIMES.forEach((t) => {
    kfs.push([t - 14, bend]);
    kfs.push([t - 4, place, ease.out]);
    kfs.push([t + 2, tap]);
    kfs.push([t + 5, P({wR: 0}, tap)]);
  });
  const KNEEL = P({y: 120, rot: 0, s1: 24, s2: 10, s3: 6, nk: -6, hd: -10, aR: 60, eR: 20, aL: 30, eL: 20, lR: 84, kR: 92, fR: 0, lL: -6, kL: 110, fL: 30});
  kfs.push([TREMBLE, stand]);
  kfs.push([COLLAPSE, P({s1: -8, s3: -6, hd: -20, aL: 70, eL: 60, aR: 80, eR: 60, x: 6})]);
  kfs.push([COLLAPSE + 8, P({s1: -24, s3: -10, hd: -10, aL: 120, eL: 40, aR: 130, eR: 30, x: 20, rot: -30, y: 60, lR: 30, kR: 40})]);
  kfs.push([LAND, P({...FALLEN, y: 262, x: 60}), ease.in]);
  kfs.push([LAND + 6, P({...FALLEN, y: 256, x: 60, aL: -60, aR: 80})]);
  kfs.push([RISE, P({...FALLEN, y: 262, x: 60, aL: -50, aR: 66})]);
  kfs.push([RISE + 16, P({...KNEEL, rot: -30, y: 170, x: 40})]);
  kfs.push([RISE + 34, KNEEL]);
  kfs.push([RISE + 48, P({s1: 10, s3: 4, aR: 30, eR: 40, aL: 20})]);
  // s'époussette
  kfs.push([RISE + 54, P({s1: 14, s3: 4, aR: 40, eR: 70, aL: 30, eL: 60})]);
  kfs.push([RISE + 58, P({s1: 14, s3: 4, aR: 20, eR: 60, aL: 50, eL: 70})]);
  kfs.push([RISE + 62, P({s1: 14, s3: 4, aR: 40, eR: 70, aL: 30, eL: 60})]);
  kfs.push([LAST_BRICK - 14, bend]);
  kfs.push([LAST_BRICK - 4, place, ease.out]);
  kfs.push([LAST_BRICK + 4, P({s3: -2, hd: -4, aR: 20, eR: 20, aL: -10})]);
  kfs.push([270, P({s3: -3, hd: -6, aR: 16, eR: 14, aL: -12})]);
  let pose = poseTrack(f, kfs);
  if (f >= TREMBLE && f < COLLAPSE) pose = add(pose, {hd: -8 * prog(f, TREMBLE, COLLAPSE)});
  const glow = track(f, [[LAND, 1], [LAND + 20, 0.25], [RISE + 30, 0.4], [LAST_BRICK, 0.6], [LAST_BRICK + 8, 1.5, ease.out], [270, 1.35]]);

  const shakeWall = f >= TREMBLE && f < COLLAPSE ? (Math.sin(f * 2.1) * 3 * prog(f, TREMBLE, COLLAPSE)) : 0;
  const bricks = BRICKS.filter((b) => b.row < rowsVisible || f >= COLLAPSE);
  const brickInHand = (f % 22 > 8 && f < 110) || (f > LAST_BRICK - 14 && f < LAST_BRICK - 4);
  const ch = (
    <Stickman id="b24" pose={pose} x={BX} floor={FLOOR} scale={SC} facing={-1} look="gold" glow={glow} acc={{gloves: true, backpack: false}}
      nearHand={brickInHand ? <g transform="rotate(90)"><Brick x={-16} y={-8} w={48} /></g> : f < 112 ? <rect x={-4} y={10} width={8} height={30} fill="#9AA6BC" /> : null} />
  );
  const hand = toWorld(solve(pose).armR.wr, {pose, x: BX, floor: FLOOR, scale: SC, facing: -1});

  return (
    <>
      <Layer depth={0.2}>
        <rect x={-300} y={-300} width={1200} height={2600} fill="#06090F" />
        <Skyline seed="ws1" base={1260} minH={160} maxH={420} color="#0C1426" lit={0.18} />
      </Layer>
      <Layer depth={0.5} blur={2}>
        <Fence y={1050} floor={1300} />
      </Layer>
      <Layer depth={0.85}>
        <rect x={-300} y={1300} width={1200} height={900} fill="#0B0F19" />
        {new Array(16).fill(0).map((_, i) => (
          <ellipse key={i} cx={-100 + random(`gr${i}`) * 800} cy={1320 + random(`gy${i}`) * 300} rx={12 + random(`gs${i}`) * 26} ry={4} fill="#1A2438" />
        ))}
        <Floodlight x={470} floor={1300} h={760} aimX={180} o={track(f, [[LAND, 1], [LAND + 10, 0.55], [RISE + 20, 0.7], [LAST_BRICK + 6, 1.1]])} />
      </Layer>
      <Layer depth={1}>
        <Shadow x={BX - 20} y={FLOOR + 4} w={100} />
        {/* briques : mur qui monte, tremble, s'effondre */}
        {bricks.map((b, i) => {
          if (f < COLLAPSE) {
            const appear = b.row >= rowsVisible - ROWS_PER_PLACE ? ease.back(clamp((f - PLACE_TIMES[Math.floor(b.row / ROWS_PER_PLACE)]) / 6)) : 1;
            return <Brick key={i} x={b.x + shakeWall * (b.row / 6)} y={b.y - (1 - appear) * 20} o={appear} />;
          }
          const t = Math.max(0, f - COLLAPSE - (10 - b.row) * 1.2);
          const vx = (random(`bx${i}`) - 0.25) * 9;
          const g = 1.4;
          const yLand = FLOOR - 14 - random(`bl${i}`) * 30;
          let y = b.y + 0.5 * g * t * t;
          let x = b.x + vx * t;
          let rot = (random(`br${i}`) - 0.5) * t * 14;
          if (y > yLand) {
            const tl = Math.sqrt((2 * (yLand - b.y)) / g);
            x = b.x + vx * tl + vx * 0.2 * Math.min(8, t - tl);
            y = yLand;
            rot = (random(`br${i}`) - 0.5) * tl * 14 + (random(`bq${i}`) - 0.5) * 30;
          }
          return <Brick key={i} x={x} y={y} rot={rot} />;
        })}
        {f >= LAST_BRICK && <Brick x={150} y={FLOOR - 70} o={1} />}
        {f >= LAST_BRICK && f < LAST_BRICK + 20 && <circle cx={150} cy={FLOOR - 70} r={20 + (f - LAST_BRICK) * 4} fill="none" stroke={C.goldLight} strokeWidth={3} opacity={1 - (f - LAST_BRICK) / 20} />}
        <Reflect floor={FLOOR + 4} id="r24" o={0.12}>
          {ch}
        </Reflect>
        {ch}
        {/* nuage de poussière */}
        {f >= COLLAPSE + 6 && (
          <g opacity={track(f, [[COLLAPSE + 6, 0], [COLLAPSE + 20, 0.8], [RISE + 20, 0.25], [270, 0.1]])} filter="url(#blur24)">
            {new Array(12).fill(0).map((_, i) => {
              const t = (f - COLLAPSE - 6) / 80;
              return <circle key={i} cx={140 + (random(`dc${i}`) - 0.3) * 380 * Math.min(1, t * 2)} cy={FLOOR - 60 - random(`dy${i}`) * 200 * Math.min(1, t * 1.5) + t * 40} r={50 + random(`ds${i}`) * 70} fill="#8090AA" />;
            })}
          </g>
        )}
        <Sparks seed="sp24a" x={hand[0]} y={hand[1]} from={10} to={105} n={22} />
        <Sparks seed="sp24b" x={BX - 20} y={FLOOR - 200} from={LAST_BRICK} to={LAST_BRICK + 12} n={30} spread={100} />
        <Dust seed="d24" n={40} y={500} h={900} color="#C9D3E6" speed={f > COLLAPSE ? 0.6 : 0.25} lit={(x) => Math.max(0.25, 1.4 - Math.abs(x - 200) / 260)} />
      </Layer>
      <Layer depth={1.5}>
        <Mist y={FLOOR + 160} seed="m24" o={0.35} />
      </Layer>
    </>
  );
};

const Watcher: React.FC<{f: number}> = ({f}) => {
  const laugh = f >= COLLAPSE + 6 && f < RISE + 10;
  const watch = P({s3: 6, nk: 4, hd: 4, aL: 4, aR: 40, eR: 100}, STAND);
  let pose = poseTrack(f, [
    [0, watch],
    [COLLAPSE, watch],
    [COLLAPSE + 8, POINT_LAUGH, ease.back],
    [RISE + 10, POINT_LAUGH],
    [RISE + 30, P({s3: 10, nk: 10, hd: 14, aR: 30, eR: 100, aL: 6}), ease.inOut],
  ]);
  if (laugh) {
    const k = Math.sin((f - COLLAPSE) * 1.4);
    pose = add(pose, {y: Math.abs(k) * -10, s2: 6 + k * 6, s3: k * 4, hd: k * 8, eL: k * 10});
  }
  const ch = <Stickman id="sc24" pose={pose} x={250} floor={FLOOR} scale={SC} look="gray" acc={{cap: true, chain: true, phone: !laugh && f < COLLAPSE}} />;
  return (
    <>
      <Layer depth={0.2}>
        <rect x={-300} y={-300} width={1200} height={2600} fill="#06090F" />
        <Skyline seed="ws2" base={1260} minH={160} maxH={420} color="#0C1426" lit={0.15} />
      </Layer>
      <Layer depth={0.5} blur={2}>
        <Fence y={1050} floor={1300} />
      </Layer>
      <Layer depth={0.85}>
        <rect x={-300} y={1300} width={1200} height={900} fill="#0B0F19" />
        <StreetLamp x={60} floor={1300} h={700} />
      </Layer>
      <Layer depth={1}>
        <Shadow x={250} y={FLOOR + 4} w={90} />
        <Reflect floor={FLOOR + 4} id="r24l" o={0.12}>
          {ch}
        </Reflect>
        {ch}
        <Dust seed="d24l" n={24} y={500} h={900} />
      </Layer>
      <Layer depth={1.5}>
        <Mist y={FLOOR + 160} seed="m24l" o={0.35} />
      </Layer>
    </>
  );
};

export const Age24: React.FC<SceneProps> = (props) => {
  const f = useF();
  const slide = slideOf(props);
  const sh = shake(f, COLLAPSE + 4, 22, 24);
  const sh2 = shake(f, LAND, 10, 12, 'l');
  const d = drift(f, props.dur, 12, 0, 1.06, 1.08);
  const zoom = track(f, [[RISE, 1.08], [270, 1.2]]);
  const camR = {x: d.x + sh.x + sh2.x + (zoom - 1.08) * 160, y: -20 + sh.y + sh2.y + (zoom - 1.08) * 300, z: f > RISE ? zoom : d.z};
  const camL = {x: -d.x + sh.x * 0.6, y: -20 + sh.y * 0.6, z: d.z};
  return (
    <>
      <Panel side="left" slide={slide} cam={camL} svg={<Watcher f={f} />}>
        <Bubble text="T'ES FOU" at={COLLAPSE + 14} x={150} y={600} out={RISE + 14} />
      </Panel>
      <Panel side="right" slide={slide} cam={camR} svg={<Site f={f} />}>
        <KText words={[{t: '1ER', at: COLLAPSE + 10}, {t: 'PROJET', at: COLLAPSE + 14}, {t: '\n', at: 0}, {t: 'ÉCHEC', at: COLLAPSE + 22, color: C.red}]} x={0} y={420} w={400} size={42} weight={600} color="#E8D6D4" out={RISE + 20} />
        <KText words={[{t: 'IL', at: RISE + 6}, {t: 'SE', at: RISE + 12}, {t: 'RELÈVE.', at: RISE + 18, color: C.goldLight}]} x={0} y={440} w={400} size={46} weight={600} glow="rgba(212,175,55,0.35)" />
      </Panel>
    </>
  );
};
