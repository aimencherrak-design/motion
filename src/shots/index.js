// Liste ordonnée des plans de l'épisode « Le Ballon Perdu ».
import { partA } from './partA.js';
import { partB } from './partB.js';
import { partC } from './partC.js';
import { partD } from './partD.js';
import { partE } from './partE.js';
import { partF } from './partF.js';

export const SHOTS = [...partA, ...partB, ...partC, ...partD, ...partE, ...partF];

export const TIMELINE = [];
let acc = 0;
for (const shot of SHOTS) {
  TIMELINE.push({ start: acc, shot });
  acc += shot.dur;
}
export const DURATION = acc;
