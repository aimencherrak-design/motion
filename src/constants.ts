export const W = 1080;
export const H = 1920;
export const FPS = 30;
export const HALF = W / 2;

// Zones sûres TikTok
export const SAFE = {top: 220, bottom: 420, right: 140};

export const C = {
  bg: '#0A0A0F',
  night1: '#0F1A2E',
  night2: '#1B2A44',
  edge: '#3A5276',
  gold: '#D4AF37',
  goldLight: '#F2D675',
  goldDeep: '#8A6A1F',
  gray: '#6B6B6B',
  grayDark: '#4F4F4F',
  phone: '#4A7BD0',
  text: '#F5F5F5',
  red: '#B3413B',
  amber: '#F3B65A',
};

// Découpage de l'épisode (frames)
export const SCENES = {
  hook: {from: 0, dur: 90},
  age20: {from: 90, dur: 240},
  age22: {from: 330, dur: 240},
  age24: {from: 570, dur: 270},
  age26: {from: 840, dur: 270},
  age28: {from: 1110, dur: 270},
  age30: {from: 1380, dur: 270},
  fin: {from: 1650, dur: 180},
} as const;

export const TOTAL = 1830; // 61 s
export const TRANS = 8; // demi-durée d'une transition (frames)

// Sol commun : pieds des persos au premier plan
export const FLOOR = 1400;
