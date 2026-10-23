import React from 'react';
import {C, FLOOR} from '../constants';
import {Panel} from '../fx/fx';
import {ease, prog, track} from '../lib/anim';
import {useF} from '../lib/frame';
import {Stickman} from '../rig/Stickman';
import {P, STAND} from '../rig/poses';
import {KText, Spell} from '../ui/ui';
import {SceneProps, Stage, drift, slideOf} from './common';

// 0–3 s : même âge, même point de départ. Le perso de droite s'allume en or.
export const Hook: React.FC<SceneProps> = (props) => {
  const f = useF();
  const slide = slideOf(props);
  const cam = drift(f, props.dur, 6, 0, 1.0, 1.03);
  const reveal = prog(f, 42, 66, ease.inOut);
  const glow = prog(f, 50, 80);
  // léger redressement quand il s'allume (anticipation : petit affaissement d'abord)
  const lift = track(f, [[40, 0], [46, -1], [62, 1, ease.back]]);
  const poseL = P({hd: 4, nk: 4});
  const poseR = P({s3: -lift * 2, hd: -lift * 4, aL: -6 - lift * 4, aR: 6 + lift * 4}, STAND);

  const left = <Stickman id="hkL" pose={poseL} x={270} floor={FLOOR} look="gray" facing={1} acc={{}} />;
  const right = <Stickman id="hkR" pose={poseR} x={240} floor={FLOOR} look="gold" goldReveal={reveal} glow={glow} facing={-1} />;

  return (
    <>
      <Panel side="left" slide={slide} cam={cam} svg={<Stage seed="hkl" beamX={270} charNode={left} reflId="hkl" />}>
        <Spell text="LE SCROLLEUR" at={30} x={0} y={690} w={540} size={28} color="#B9C2D0" />
      </Panel>
      <Panel side="right" slide={slide} cam={cam} svg={<Stage seed="hkr" beamX={240} gold={reveal > 0.5} charNode={right} reflId="hkr" />}>
        <Spell text="LE BÂTISSEUR" at={36} x={0} y={690} w={480} size={28} color={reveal > 0.5 ? C.goldLight : '#B9C2D0'} glow={reveal > 0.5 ? 'rgba(212,175,55,0.6)' : undefined} />
      </Panel>
      <div style={{position: 'absolute', inset: 0, transform: `translateX(${slide}px)`}}>
        <KText
          words={[
            {t: 'MÊME', at: -20},
            {t: 'ÂGE.', at: -20},
            {t: '\n', at: 0},
            {t: 'MÊME', at: 22},
            {t: 'DÉPART.', at: 30, color: C.goldLight},
          ]}
          x={120}
          y={400}
          w={800}
          size={70}
          weight={600}
          lineHeight={1.1}
        />
      </div>
    </>
  );
};
