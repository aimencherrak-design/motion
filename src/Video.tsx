import React from 'react';
import {AbsoluteFill, Audio, Sequence, staticFile, useCurrentFrame} from 'remotion';
import {C, SCENES, TOTAL, TRANS} from './constants';
import {Defs} from './fx/Defs';
import {Fringe, Grain, Vignette} from './fx/fx';
import {clamp, ease, track} from './lib/anim';
import {OffCtx} from './lib/frame';
import {Hook} from './scenes/Hook';
import {Age20} from './scenes/Age20';
import {Age22} from './scenes/Age22';
import {Age24} from './scenes/Age24';
import {Age26} from './scenes/Age26';
import {Age28} from './scenes/Age28';
import {Age30} from './scenes/Age30';
import {Fin} from './scenes/Fin';
import {SceneProps} from './scenes/common';
import {AgeCounter, Divider} from './ui/ui';
import sfx from './sfx.json';
import voice from './voice.json';

const LIST: [keyof typeof SCENES, React.FC<SceneProps>][] = [
  ['hook', Hook],
  ['age20', Age20],
  ['age22', Age22],
  ['age24', Age24],
  ['age26', Age26],
  ['age28', Age28],
  ['age30', Age30],
  ['fin', Fin],
];

const SceneWrap: React.FC<{Comp: React.FC<SceneProps>; dur: number; first: boolean; last: boolean}> = ({Comp, dur, first, last}) => {
  const g = useCurrentFrame();
  const off = first ? 0 : TRANS;
  const f = g - off;
  const slideIn = first ? 1 : ease.inOut(clamp((f + TRANS) / (2 * TRANS)));
  const slideOut = last ? 0 : ease.inOut(clamp((f - dur + TRANS) / (2 * TRANS)));
  return (
    <OffCtx.Provider value={off}>
      <AbsoluteFill>
        <Comp dur={dur} slideIn={slideIn} slideOut={slideOut} />
      </AbsoluteFill>
    </OffCtx.Provider>
  );
};

const AGES: [number, number][] = [
  [SCENES.age20.from - 6, 16],
  [SCENES.age20.from + 14, 20],
  [SCENES.age22.from - 6, 20],
  [SCENES.age22.from + 10, 22],
  [SCENES.age24.from - 6, 22],
  [SCENES.age24.from + 10, 24],
  [SCENES.age26.from - 6, 24],
  [SCENES.age26.from + 10, 26],
  [SCENES.age28.from - 6, 26],
  [SCENES.age28.from + 10, 28],
  [SCENES.age30.from - 6, 28],
  [SCENES.age30.from + 10, 30],
];

export const Episode01: React.FC = () => {
  const g = useCurrentFrame();
  const age = track(g, AGES.map(([fr, v]) => [fr, v, ease.inOut]));
  const age2 = track(g + 1, AGES.map(([fr, v]) => [fr, v, ease.inOut]));
  const ageO = clamp((g - SCENES.age20.from + 8) / 10) * (1 - clamp((g - SCENES.fin.from + 4) / 10));
  return (
    <AbsoluteFill style={{background: C.bg}}>
      <Defs />
      {LIST.map(([key, Comp], i) => {
        const s = SCENES[key];
        const first = i === 0;
        const last = i === LIST.length - 1;
        const from = first ? 0 : s.from - TRANS;
        const len = s.dur + (first ? 0 : TRANS) + (last ? 0 : TRANS);
        return (
          <Sequence key={key} from={from} durationInFrames={len} name={key}>
            <SceneWrap Comp={Comp} dur={s.dur} first={first} last={last} />
          </Sequence>
        );
      })}
      <Divider />
      {ageO > 0 && <AgeCounter value={age} speed={age2 - age} o={ageO} />}
      <Vignette />
      <Fringe />
      <Grain />
      {voice.enabled && <Audio src={staticFile('voice.mp3')} volume={1} />}
      {sfx.map((s, i) => (
        <Sequence key={i} from={s.frame} durationInFrames={Math.min(TOTAL - s.frame, 400)} name={`sfx:${s.file}`}>
          <Audio src={staticFile(`sfx/${s.file}`)} volume={s.vol} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};
