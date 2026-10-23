import React from 'react';
import {C, FLOOR} from '../constants';
import {Dust, Layer, Panel, Reflect, Shadow, Sparks} from '../fx/fx';
import {clamp, ease, prog, track} from '../lib/anim';
import {thousands} from '../lib/fmt';
import {useF} from '../lib/frame';
import {Stickman, solve, toWorld} from '../rig/Stickman';
import {P, SLOUCH_PHONE, UPRIGHT, add, poseTrack} from '../rig/poses';
import {Floodlight, Skyline, Tower} from '../sets/outdoor';
import {FONT} from '../ui/ui';
import {SceneProps, Stage, drift, slideOf} from './common';
import {screenColor} from './Age20';

export const DEBTS = [70, 125, 180];
export const COUNT_FROM = 30;
export const COUNT_TO = 220;
const SC = 0.86;

const Debts: React.FC<{f: number}> = ({f}) => {
  const n = DEBTS.filter((t) => f >= t).length;
  const bend = 14 + n * 7;
  let pose = SLOUCH_PHONE(bend);
  // chaque mensualité qui tombe l'écrase un peu plus (squash puis reprise)
  DEBTS.forEach((t) => {
    const k = f >= t && f < t + 14 ? Math.sin(((f - t) / 14) * Math.PI) : 0;
    pose = add(pose, {y: k * 18, kL: k * 14, kR: k * 14, s3: k * 6, nk: k * 6});
  });
  const J = solve(pose);
  const sho = toWorld(J.p3, {pose, x: 270, floor: FLOOR, scale: SC});
  const ch = <Stickman id="sc28" pose={pose} x={270} floor={FLOOR} scale={SC} look="gray" acc={{phone: true, cap: true}} screen={screenColor(f)} />;
  return (
    <>
      <Stage seed="s28" beamX={270} charNode={ch} reflId="s28" />
      {DEBTS.map((t, i) => {
        if (f < t - 12) return null;
        const p = clamp((f - t + 12) / 12);
        const restY = sho[1] - 6 - i * 40;
        const y = -100 + (restY + 100) * p * p;
        const rot = (i % 2 ? 6 : -5) + (1 - p) * 20;
        return (
          <g key={i} transform={`translate(${sho[0] - 30 + (i - 1) * 8},${y}) rotate(${rot})`}>
            <rect x={-100} y={-20} width={200} height={40} rx={6} fill="#2A1416" stroke={C.red} strokeWidth={3} />
            <text x={0} y={9} textAnchor="middle" fontFamily={FONT} fontWeight={700} fontSize={20} letterSpacing="2" fill="#F0B4AE">+ MENSUALITÉ</text>
          </g>
        );
      })}
    </>
  );
};

const Rise: React.FC<{f: number}> = ({f}) => {
  const floors = track(f, [[COUNT_FROM, 0], [COUNT_TO, 12, ease.inOut]]);
  const pose = poseTrack(f, [
    [0, UPRIGHT(0.8)],
    [90, P({hd: -8}, UPRIGHT(1))],
    // regarde sa montre
    [150, P({aR: 60, eR: 110, wR: -20, nk: 10, hd: 18}, UPRIGHT(1))],
    [175, P({aR: 60, eR: 110, wR: -20, nk: 10, hd: 18}, UPRIGHT(1))],
    [195, P({hd: -14, nk: -6}, UPRIGHT(1.1))],
    [270, P({hd: -16, nk: -8}, UPRIGHT(1.15))],
  ]);
  const wrist = toWorld(solve(pose).armR.wr, {pose, x: 250, floor: FLOOR, scale: SC, facing: -1});
  const tw = (f % 40) / 40;
  const ch = <Stickman id="b28" pose={pose} x={250} floor={FLOOR} scale={SC} facing={-1} look="gold" glow={1.15} acc={{watch: true, gloves: false}} />;
  return (
    <>
      <Layer depth={0.2}>
        <rect x={-300} y={-300} width={1200} height={2600} fill="#070B15" />
        <ellipse cx={270} cy={1100} rx={500} ry={300} fill={C.night1} filter="url(#blur40)" />
        <Skyline seed="t28" base={1300} minH={140} maxH={380} color="#0C1426" lit={0.25} />
      </Layer>
      <Layer depth={0.6}>
        <rect x={-300} y={1300} width={1200} height={900} fill="#0B0F19" />
        <Tower x={20} floor={1300} w={250} floors={floors} maxFloors={12} seed="tw28" fh={52} />
        <Floodlight x={470} floor={1300} h={420} aimX={140} o={0.8} />
      </Layer>
      <Layer depth={1}>
        <rect x={-300} y={FLOOR - 4} width={1200} height={600} fill="url(#floorGloss)" />
        <Shadow x={250} y={FLOOR + 4} w={100} />
        <Reflect floor={FLOOR + 4} id="r28" o={0.2}>
          {ch}
        </Reflect>
        {ch}
        {/* scintillement de la montre */}
        <g transform={`translate(${wrist[0]},${wrist[1]}) scale(${Math.sin(tw * Math.PI) * 1.4})`} opacity={Math.sin(tw * Math.PI)}>
          <path d="M0,-18 L3,-3 L18,0 L3,3 L0,18 L-3,3 L-18,0 L-3,-3Z" fill="#FFF6D0" filter="url(#glowSoft)" />
        </g>
        <Sparks seed="sp28" x={150} y={1300 - floors * 52} from={COUNT_FROM} to={COUNT_TO} n={40} spread={110} />
        <Dust seed="d28" n={30} y={400} h={1000} color="#FFE7A0" rise speed={0.3} opacity={0.5} />
      </Layer>
    </>
  );
};

export const Age28: React.FC<SceneProps> = (props) => {
  const f = useF();
  const slide = slideOf(props);
  const d = drift(f, props.dur, 12, 0, 1.0, 1.05);
  const camL = {x: d.x, y: -10, z: d.z};
  const camR = {x: -d.x, y: -10 - prog(f, 40, 230) * 40, z: d.z};
  const v = 42000 * ease.inOut(clamp((f - COUNT_FROM) / (COUNT_TO - COUNT_FROM)));
  const pulse = f > COUNT_FROM && f < COUNT_TO ? (1 - (v % 1000) / 1000) * 0.05 : 0;
  const done = f >= COUNT_TO ? Math.max(0, 1 - (f - COUNT_TO) / 14) * 0.15 : 0;
  const blink = Math.sin(f / 5) > 0 ? 1 : 0.45;
  const lab = (o: number) => ({fontFamily: FONT, fontSize: 26, fontWeight: 500, letterSpacing: '0.3em', opacity: o});
  return (
    <>
      <Panel side="left" slide={slide} cam={camL} svg={<Debts f={f} />}>
        <div style={{position: 'absolute', top: 395, width: 540, textAlign: 'center', color: '#C9CED6', opacity: clamp(f / 10)}}>
          <div style={lab(0.8)}>ÉPARGNE</div>
          <div style={{fontFamily: FONT, fontSize: 96, fontWeight: 600, color: C.red, opacity: blink, textShadow: `0 0 30px ${C.red}`}}>0 €</div>
        </div>
      </Panel>
      <Panel side="right" slide={slide} cam={camR} svg={<Rise f={f} />}>
        <div style={{position: 'absolute', top: 395, width: 400, textAlign: 'center', color: C.goldLight, opacity: clamp((f - 10) / 10)}}>
          <div style={lab(0.85)}>ÉPARGNE</div>
          <div style={{fontFamily: FONT, fontSize: 70, fontWeight: 600, whiteSpace: 'nowrap', transform: `scale(${1 + pulse + done})`, textShadow: '0 0 24px rgba(212,175,55,0.6), 0 0 60px rgba(212,175,55,0.4)', fontVariantNumeric: 'tabular-nums'}}>
            {thousands(Math.floor(v / 100) * 100)} €
          </div>
        </div>
      </Panel>
    </>
  );
};
