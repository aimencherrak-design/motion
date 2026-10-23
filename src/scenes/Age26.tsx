import React from 'react';
import {random} from 'remotion';
import {C, FLOOR} from '../constants';
import {Dust, Layer, Panel, Reflect, Shadow, Sparks} from '../fx/fx';
import {clamp, ease, prog, track} from '../lib/anim';
import {useF} from '../lib/frame';
import {Stickman, solve, toWorld} from '../rig/Stickman';
import {P, STAND, run} from '../rig/poses';
import {Clouds, Roof, Skyline, Sky} from '../sets/outdoor';
import {NightWindow, Wall} from '../sets/room';
import {FONT, Stat} from '../ui/ui';
import {SceneProps, drift, slideOf} from './common';

export const RINGS: [number, number][] = [[0, 52], [86, 136], [170, 220]]; // [début sonnerie, tape snooze]
const TIMES = ['7:00', '7:10', '7:20', '7:30'];

const Bedroom: React.FC<{f: number}> = ({f}) => {
  const bedTop = 1250;
  const ringing = RINGS.findIndex(([a, b]) => f >= a && f < b);
  const taps = RINGS.filter(([, b]) => f >= b).length;
  const shakeA = ringing >= 0 ? Math.sin(f * 2.6) * 7 : 0;
  // bras qui sort de la couette : extension 0..1
  const ext = Math.max(
    ...RINGS.map(([, b]) => track(f, [[b - 16, 0], [b - 4, 1, ease.out], [b, 1.05], [b + 8, 0.9], [b + 22, 0, ease.inOut]])),
  );
  const tapK = Math.max(...RINGS.map(([, b]) => (f >= b && f < b + 4 ? 1 : 0)));
  const sx = 300;
  const sy = 1215;
  const ex = sx + 70 * ext;
  const ey = sy - 50 * ext;
  const hx = ex + 70 * ext;
  const hy = ey - 22 * ext + tapK * 8;
  const wob = Math.sin(f / 6) * (ringing >= 0 ? 4 : 1.2);
  const clockX = 450;
  const clockY = 1150;
  return (
    <>
      <Layer depth={0.3}>
        <Wall floor={1330} tint="#1E3360" tintX={200} tintO={0.4} />
        <NightWindow x={60} y={520} w={220} h={320} seed="bed" moon sky={['#060B18', '#0E1A34']} />
        <path d="M60,860 L280,860 L460,1330 L-120,1330Z" fill="#9FB8FF" opacity={0.06} filter="url(#blur14)" />
      </Layer>
      <Layer depth={0.9}>
        {/* lit */}
        <rect x={-60} y={980} width={36} height={360} rx={8} fill="#1B2A44" stroke="#3A5276" strokeWidth={2} />
        <rect x={-40} y={bedTop} width={420} height={60} rx={10} fill="#16233D" stroke="#2C4268" strokeWidth={2} />
        <rect x={-30} y={bedTop + 60} width={14} height={30} fill="#0E1626" />
        <rect x={350} y={bedTop + 60} width={14} height={30} fill="#0E1626" />
        <ellipse cx={30} cy={bedTop - 26} rx={70} ry={30} fill="#3A4E72" stroke="#6F8FC4" strokeWidth={2} />
        {/* couette en boule qui respire */}
        <path
          d={`M-20,${bedTop + 4} C-10,${bedTop - 90 - wob} 90,${bedTop - 130 - wob} 170,${bedTop - 110 - wob * 0.6} C250,${bedTop - 96 + wob} 330,${bedTop - 120} 380,${bedTop - 40} L392,${bedTop + 40} L-24,${bedTop + 40}Z`}
          fill="#2E4470"
          stroke="#6F8FC4"
          strokeWidth={2.5}
        />
        {[0, 1, 2].map((i) => (
          <path key={i} d={`M${40 + i * 100},${bedTop - 80 - wob} q30,40 10,110`} stroke="#4D6A9E" strokeWidth={3} fill="none" opacity={0.7} />
        ))}
        {/* table de chevet + réveil */}
        <rect x={400} y={clockY + 30} width={140} height={160} rx={6} fill="#1B2A44" stroke="#3A5276" strokeWidth={2} />
        <rect x={414} y={clockY + 80} width={112} height={8} rx={4} fill="#3A5276" />
        <g transform={`rotate(${shakeA} ${clockX} ${clockY + 30})`}>
          <rect x={clockX - 50} y={clockY - 26} width={100} height={56} rx={14} fill="#0E1118" stroke="#3A4E72" strokeWidth={3} />
          <text x={clockX} y={clockY + 14} textAnchor="middle" fontFamily={FONT} fontWeight={600} fontSize={34} fill="#FF4A3D" style={{filter: 'drop-shadow(0 0 8px #FF4A3D)'}}>
            {TIMES[taps]}
          </text>
          <rect x={clockX - 20} y={clockY - 34} width={40} height={8} rx={4} fill={tapK ? '#FF4A3D' : '#3A4E72'} />
        </g>
        <ellipse cx={clockX} cy={clockY} rx={120} ry={90} fill="#FF4A3D" opacity={0.12 + (ringing >= 0 ? 0.08 * Math.abs(Math.sin(f * 0.5)) : 0)} filter="url(#blur24)" />
        {ringing >= 0 &&
          [0, 1].map((i) => {
            const t = ((f * 2 + i * 15) % 30) / 30;
            return (
              <g key={i} opacity={1 - t}>
                <path d={`M${clockX - 66 - t * 30},${clockY - 30} q-14,30 0,60`} stroke="#F5F5F5" strokeWidth={3} fill="none" />
                <path d={`M${clockX + 66 + t * 30},${clockY - 30} q14,30 0,60`} stroke="#F5F5F5" strokeWidth={3} fill="none" />
              </g>
            );
          })}
        {/* bras qui sort de la couette */}
        {ext > 0.02 && (
          <g>
            <line x1={sx} y1={sy} x2={ex} y2={ey} stroke={C.grayDark} strokeWidth={22} strokeLinecap="round" />
            <line x1={ex} y1={ey} x2={hx} y2={hy} stroke={C.grayDark} strokeWidth={18} strokeLinecap="round" />
            <line x1={sx} y1={sy} x2={ex} y2={ey} stroke={C.gray} strokeWidth={17} strokeLinecap="round" />
            <line x1={ex} y1={ey} x2={hx} y2={hy} stroke={C.gray} strokeWidth={13} strokeLinecap="round" />
            <ellipse cx={hx + 6} cy={hy + 2} rx={14} ry={11} fill={C.gray} stroke={C.grayDark} strokeWidth={3} />
          </g>
        )}
        <path d={`M250,${bedTop - 40} C280,${bedTop - 120} 330,${bedTop - 110} 370,${bedTop - 40}`} fill="#2E4470" stroke="#6F8FC4" strokeWidth={2.5} />
      </Layer>
      <Layer depth={1}>
        <Dust seed="d26" n={20} y={600} h={700} color="#9FB8FF" opacity={0.4} />
      </Layer>
      <Layer depth={1.5} blur={24}>
        <rect x={-100} y={1560} width={760} height={300} fill="#0E1626" />
      </Layer>
    </>
  );
};

const JUMP = 150;
const Rooftop: React.FC<{f: number; dur: number}> = ({f, dur}) => {
  const SC = 0.74;
  const t = f / dur;
  const sky = track(f, [[0, 0.15], [dur, 1]]);
  const speed = 9;
  let pose = run(f / 19, P({}, STAND));
  // saut de l'obstacle
  const jp = clamp((f - JUMP + 8) / 22);
  const jumpY = jp > 0 && jp < 1 ? -Math.sin(jp * Math.PI) * 120 : 0;
  if (jp > 0 && jp < 1) pose = {...pose, lR: 70, kR: 100, lL: -20, kL: 80, aR: 120, aL: 60, eR: 40, eL: 40};
  pose = {...pose, y: pose.y + jumpY / SC};
  const obsX = 200 + (JUMP - f) * speed;
  const head = toWorld(solve(pose).head, {pose, x: 210, floor: FLOOR, scale: SC});
  const ch = <Stickman id="b26" pose={pose} x={210} floor={FLOOR} scale={SC} look="gold" glow={1} acc={{gloves: true}} />;
  return (
    <>
      <Layer depth={0.1}>
        <Sky t={sky} id="26" />
        <ellipse cx={420} cy={1180} rx={500} ry={200} fill="#FFC86A" opacity={sky * 0.35} filter="url(#blur40)" />
        <circle cx={400} cy={1180 - sky * 120} r={160} fill="url(#sunGlow)" opacity={sky} />
      </Layer>
      <Layer depth={0.3}>
        <g transform={`translate(${(f * 0.6) % 400},0)`}>
          <Skyline seed="r1" x0={-700} w={1600} base={1260} minH={240} maxH={560} color="#101A30" lit={0.3 * (1 - sky)} n={20} />
        </g>
        <Clouds seed="c26" y={700} speed={0.4} color={sky > 0.5 ? '#E8A86A' : '#2A3F66'} o={0.35} />
      </Layer>
      <Layer depth={0.6}>
        <g transform={`translate(${(f * 2.5) % 600},0)`}>
          <Skyline seed="r2" x0={-900} w={1800} base={1320} minH={120} maxH={300} color="#0C1426" lit={0.4 * (1 - sky)} n={24} edge={sky > 0.4 ? '#C98A4A' : '#2C4268'} />
        </g>
      </Layer>
      <Layer depth={1}>
        <g transform={`translate(${(f * speed) % 40},0)`}>
          <Roof floor={FLOOR + 6} tint={sky > 0.5 ? '#3A2E2A' : '#1B2A44'} />
        </g>
        {/* obstacle : bouche d'aération */}
        <g transform={`translate(${obsX},0)`}>
          <rect x={-40} y={FLOOR - 64} width={80} height={70} rx={4} fill="#22314F" stroke="#C98A4A" strokeOpacity={sky} strokeWidth={2} />
          {[0, 1, 2, 3].map((i) => <rect key={i} x={-30} y={FLOOR - 52 + i * 14} width={60} height={5} fill="#0B1222" />)}
        </g>
        <Shadow x={210} y={FLOOR + 8} w={90 * (1 - Math.abs(jumpY) / 300)} />
        {ch}
        {/* buée de respiration */}
        {new Array(8).fill(0).map((_, i) => {
          const born = i * 19 + 4 + Math.floor(f / 152) * 152;
          const tt = (f - born) / 30;
          if (tt < 0 || tt > 1) return null;
          return <circle key={i} cx={head[0] - 10 + 50 - tt * 120} cy={head[1] + 20 - tt * 20} r={10 + tt * 26} fill="#EAF0FF" opacity={(1 - tt) * 0.35} filter="url(#blur8)" />;
        })}
        <Sparks seed="sp26" x={210} y={FLOOR - 220} from={0} to={dur} n={40} spread={70} />
        {/* lignes de vent */}
        {new Array(6).fill(0).map((_, i) => {
          const y = 700 + random(`wl${i}`) * 700;
          const x = 600 - ((f * 22 + random(`wx${i}`) * 900) % 900);
          return <line key={i} x1={x} y1={y} x2={x + 90} y2={y} stroke="#FFF2D0" strokeWidth={2} opacity={0.18} />;
        })}
      </Layer>
      <Layer depth={1.5} blur={14}>
        <g transform={`translate(${(f * 14) % 300},0)`}>
          {[-300, 0, 300].map((x) => <rect key={x} x={x - 150} y={1500} width={20} height={300} fill="#070A12" />)}
        </g>
      </Layer>
      {t < -1 && null}
    </>
  );
};

export const Age26: React.FC<SceneProps> = (props) => {
  const f = useF();
  const slide = slideOf(props);
  const d = drift(f, props.dur, 12, 0, 1.08, 1.12);
  const camL = {x: d.x, y: -30, z: d.z};
  const camR = {x: -d.x, y: -10, z: 1.04};
  const taps = RINGS.filter(([, b]) => f >= b).length;
  const lastTap = Math.max(-99, ...RINGS.map(([, b]) => b).filter((b) => f >= b));
  return (
    <>
      <Panel side="left" slide={slide} cam={camL} svg={<Bedroom f={f} />}>
        {taps > 0 && <Stat big={`SNOOZE ×${taps}`} label="ENCORE 10 MINUTES" at={RINGS[0][1]} x={20} y={410} w={500} color="#C9CED6" bigSize={66} pulse={Math.max(0, 1 - (f - lastTap) / 8) * 0.12} />}
      </Panel>
      <Panel side="right" slide={slide} cam={camR} svg={<Rooftop f={f} dur={props.dur} />}>
        <Stat big="6:00" label="DÉJÀ DEHORS" at={30} x={0} y={410} w={400} color={C.goldLight} glow="rgba(212,175,55,0.5)" />
      </Panel>
    </>
  );
};
