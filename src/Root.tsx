import React from 'react';
import {Composition} from 'remotion';
import {Episode01} from './Video';
import {FPS, H, TOTAL, W} from './constants';

export const Root: React.FC = () => (
  <Composition id="Episode01" component={Episode01} durationInFrames={TOTAL} fps={FPS} width={W} height={H} />
);
