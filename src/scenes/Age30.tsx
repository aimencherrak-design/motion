import React from 'react';
import {C, FLOOR} from '../constants';
import {Dust, Layer, Panel, Sparks} from '../fx/fx';
import {clamp, ease, prog, track} from '../lib/anim';
import {useF} from '../lib/frame';
import {Stickman} from '../rig/Stickman';
import {P, UPRIGHT, poseTrack} from '../rig/poses';
import {Clouds, Skyline, Sky, Tower} from '../sets/outdoor';
import {FONT} from '../ui/ui';
import {SceneProps, drift, slideOf} from './common';
import {CouchRoom} from './Age20';

export const TEXT_AT = 150;

const Summit: React.FC<{f: number; dur: number}> = ({f, dur}) => {
  const SC = 0.86;
  const sunY = track(f, [[0, 1160], [dur, 960]]);
  const pose = poseTrack(f, [
    [0, UPRIGHT(1.1)],
    [100, P({hd: -6}, UPRIGHT(1.1))],
    // grande inspiration : torse qui s'ouvre, bras qui s'écartent
    [118, P({s3: -6, nk: -6, hd: -16, aL: -26, aR: 30, eL: 6, eR: 6}, UPRIGHT(1.2)), ease.inOut],
    [150, P({s3: -7, nk: -6, hd: -18, aL: -30, aR: 34, eL: 4, eR: 4}, UPRIGHT(1.2))],
    [175, P({hd: -8}, UPRIGHT(1.15)), ease.inOut],
    [dur, P({hd: -10}, UPRIGHT(1.15))],
  ]);
  const ch = <Stickman id="b30" pose={pose} x={300} floor={FLOOR} scale={SC} facing={-1} look="gold" glow={1.35} acc={{coat: true, watch: true}} coatWind={1.4} />;
  return (
    <>
      <Layer depth={0.05}>
        <Sky t={1} id="30" />
        <circle cx={170} cy={sunY} r={420} fill="url(#sunGlow)" opacity={0.75} />
        <circle cx={170} cy={sunY} r={70} fill="#FFF6D8" />
      </Layer>
      <Layer depth={0.15}>
        <Clouds seed="c30" y={760} speed={0.5} color="#F2B866" o={0.45} />
        <Clouds seed="c30b" y={560} speed={0.3} color="#C98A6A" o={0.3} />
      </Layer>
      <Layer depth={0.3}>
        <Skyline seed="s30a" base={1240} minH={160} maxH={360} color="#1B2A44" lit={0.05} n={14} edge="#F2C66A" />
      </Layer>
      <Layer depth={0.5}>
        <Skyline seed="s30b" base={1330} minH={100} maxH={240} color="#13203A" lit={0.08} n={14} edge="#E8A23A" />
      </Layer>
      <Layer depth={0.75}>
        <Skyline seed="s30c" base={1460} minH={60} maxH={160} color="#0C1426" lit={0.15} n={14} />
      </Layer>
      <Layer depth={1}>
        {/* sommet de son immeuble */}
        <g transform={`translate(0,${FLOOR + 12 + 12 * 52}) `}>
          <Tower x={150} floor={0} w={300} floors={12} maxFloors={12} seed="tw30" fh={52} />
        </g>
        <rect x={140} y={FLOOR} width={320} height={14} fill="#22314F" />
        <rect x={140} y={FLOOR} width={320} height={3} fill="#FFD873" opacity={0.8} />
        {ch}
        <Sparks seed="sp30" x={260} y={FLOOR - 120} from={0} to={dur} n={60} spread={200} />
        <Dust seed="d30" n={50} y={300} h={1200} color="#FFE7A0" rise speed={0.35} opacity={0.65} />
      </Layer>
    </>
  );
};

export const Age30: React.FC<SceneProps> = (props) => {
  const f = useF();
  const slide = slideOf(props);
  const d = drift(f, props.dur, 12, 0, 1.12, 1.16);
  const camL = {x: d.x, y: -40, z: d.z};
  // travelling vers le haut côté droit
  const camR = {x: -d.x * 0.5, y: track(f, [[0, 260], [props.dur, 0]], ), z: 1.02};
  const sweep = prog(f, TEXT_AT, TEXT_AT + 40, ease.inOut);
  return (
    <>
      <Panel side="left" slide={slide} cam={camL} svg={<CouchRoom f={f + 40} dur={props.dur} worn hunch={1} reflId="w" />}>
        <div style={{position: 'absolute', top: 420, width: 540, textAlign: 'center', fontFamily: FONT, fontSize: 30, fontWeight: 500, letterSpacing: '0.2em', color: '#9AA3B2', opacity: clamp((f - 30) / 12)}}>
          TOUJOURS LE MÊME
          <br />
          CANAPÉ
        </div>
      </Panel>
      <Panel side="right" slide={slide} cam={camR} svg={<Summit f={f} dur={props.dur} />}>
        <div
          style={{
            position: 'absolute', top: 400, left: 0, width: 400, textAlign: 'center', fontFamily: FONT, fontSize: 46, fontWeight: 600, lineHeight: 1.12,
            letterSpacing: `${0.06 + sweep * 0.08}em`,
            backgroundImage: `linear-gradient(100deg, #D4AF37 0%, #F5D877 ${sweep * 125 - 18}%, #FFF8DC ${sweep * 125 - 4}%, rgba(255,248,220,0) ${sweep * 125}%)`,
            WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent',
            filter: 'drop-shadow(0 0 16px rgba(255,200,90,0.55))',
          }}
        >
          LIBRE DE
          <br />
          SON TEMPS
        </div>
      </Panel>
    </>
  );
};
