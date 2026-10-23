import React from 'react';
import {C, FLOOR} from '../constants';
import {Panel} from '../fx/fx';
import {ease, prog, track} from '../lib/anim';
import {useF} from '../lib/frame';
import {Stickman} from '../rig/Stickman';
import {P, SLOUCH_PHONE, UPRIGHT, mix} from '../rig/poses';
import {FONT, KText, Spell} from '../ui/ui';
import {SceneProps, Stage, drift, slideOf} from './common';
import {screenColor} from './Age20';

export const QUESTION_AT = 78;

export const Fin: React.FC<SceneProps> = (props) => {
  const f = useF();
  const slide = slideOf(props);
  const cam = drift(f, props.dur, 6, 0, 1.03, 1.0);
  // ils tournent lentement la tête vers la caméra
  const turn = prog(f, 40, 90, ease.inOut);
  const poseL = mix(SLOUCH_PHONE(34), P({...SLOUCH_PHONE(26), nk: 4, hd: 0}), turn);
  const poseR = mix(UPRIGHT(1.15), P({hd: 0, nk: 0}, UPRIGHT(1.15)), turn);
  const left = <Stickman id="fnL" pose={poseL} x={270} floor={FLOOR} look="gray" acc={{phone: true, cap: true, chain: true}} screen={screenColor(f)} headTurn={turn} phoneLight={1 - turn * 0.4} />;
  const right = <Stickman id="fnR" pose={poseR} x={240} floor={FLOOR} facing={-1} look="gold" glow={1.3} acc={{coat: true, watch: true}} headTurn={turn} coatWind={0.6} />;
  const pulse = 1 + Math.max(0, Math.sin((f - QUESTION_AT) / 9)) * 0.03 * (f > QUESTION_AT ? 1 : 0);
  const qp = ease.back(Math.min(1, Math.max(0, (f - QUESTION_AT) / 14)));
  return (
    <>
      <Panel side="left" slide={slide} cam={cam} svg={<Stage seed="fnl" beamX={270} charNode={left} reflId="fnl" />}>
        <Spell text="LE SCROLLEUR" at={10} x={0} y={690} w={540} size={28} color="#B9C2D0" />
      </Panel>
      <Panel side="right" slide={slide} cam={cam} svg={<Stage seed="fnr" beamX={240} gold charNode={right} reflId="fnr" />}>
        <Spell text="LE BÂTISSEUR" at={16} x={0} y={690} w={480} size={28} color={C.goldLight} glow="rgba(212,175,55,0.6)" />
      </Panel>
      <div style={{position: 'absolute', inset: 0, transform: `translateX(${slide}px)`}}>
        <KText words={[{t: 'MÊMES', at: 8}, {t: '24', at: 14, color: C.goldLight}, {t: 'HEURES.', at: 20}]} x={120} y={330} w={800} size={46} weight={500} out={QUESTION_AT - 6} />
        {f >= QUESTION_AT && (
          <div
            style={{
              position: 'absolute', left: 100, top: 380, width: 840, textAlign: 'center', fontFamily: FONT, fontWeight: 700, fontSize: 72, lineHeight: 1.08,
              color: C.goldLight, letterSpacing: `${0.04 + track(f, [[QUESTION_AT, 0], [QUESTION_AT + 40, 1]]) * 0.06}em`,
              transform: `scale(${(0.85 + qp * 0.15) * pulse})`, opacity: Math.min(1, (f - QUESTION_AT) / 6),
              textShadow: `0 0 ${20 + (pulse - 1) * 600}px rgba(212,175,55,0.7), 0 0 70px rgba(212,175,55,0.35)`,
            }}
          >
            TU ES LEQUEL
            <br />
            DES DEUX ?
          </div>
        )}
      </div>
    </>
  );
};
