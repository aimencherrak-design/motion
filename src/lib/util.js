// Petites fonctions mathématiques partagées par toute l'animation.
// Tout est déterministe : le même temps t produit toujours la même image.

export const clamp = (v, a = 0, b = 1) => (v < a ? a : v > b ? b : v);
export const lerp = (a, b, t) => a + (b - a) * t;
export const invLerp = (a, b, v) => clamp((v - a) / (b - a));
export const remap = (v, a, b, c, d) => lerp(c, d, invLerp(a, b, v));
export const smooth = (t) => t * t * (3 - 2 * t);
export const smoother = (t) => t * t * t * (t * (t * 6 - 15) + 10);
export const TAU = Math.PI * 2;
export const DEG = Math.PI / 180;

export const ease = {
  linear: (t) => t,
  in: (t) => t * t,
  out: (t) => 1 - (1 - t) * (1 - t),
  inOut: (t) => smooth(t),
  in3: (t) => t * t * t,
  out3: (t) => 1 - Math.pow(1 - t, 3),
  inOut3: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  outBack: (t) => {
    const c1 = 1.70158, c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  inBack: (t) => {
    const c1 = 1.70158, c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  outElastic: (t) => {
    if (t <= 0) return 0;
    if (t >= 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * (TAU / 3)) + 1;
  },
  outBounce: (t) => {
    const n1 = 7.5625, d1 = 2.75;
    if (t < 1 / d1) return n1 * t * t;
    if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
    if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
    return n1 * (t -= 2.625 / d1) * t + 0.984375;
  },
};

// Progression 0..1 d'un intervalle [a,b] avec une courbe d'accélération.
export const seg = (t, a, b, e = ease.inOut) => e(clamp((t - a) / (b - a)));
// Petite cloche 0 -> 1 -> 0 entre a et b.
export const bell = (t, a, b) => {
  const x = clamp((t - a) / (b - a));
  return Math.sin(x * Math.PI);
};
// Impulsion : monte vite puis redescend (rebond amorti).
export const pulse = (t, at, dur = 0.4) => {
  if (t < at || t > at + dur) return 0;
  const x = (t - at) / dur;
  return Math.sin(x * Math.PI) * (1 - x);
};
// Oscillation amortie (ressort) déclenchée à l'instant `at`.
export const spring = (t, at, freq = 4, decay = 5) => {
  if (t < at) return 0;
  const x = t - at;
  return Math.sin(x * freq * TAU) * Math.exp(-x * decay);
};

// Images clés : kf(t, [[t0, v0], [t1, v1, easeFn], ...]) — l'easing s'applique sur l'arrivée.
export function kf(t, keys) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i++) {
    const [t1, v1, e = ease.inOut] = keys[i];
    if (t <= t1) {
      const [t0, v0] = keys[i - 1];
      const p = e((t - t0) / (t1 - t0 || 1));
      if (Array.isArray(v0)) return v0.map((a, j) => lerp(a, v1[j], p));
      return lerp(v0, v1, p);
    }
  }
  return keys[keys.length - 1][1];
}

// Générateur pseudo-aléatoire reproductible.
export function rng(seed = 1) {
  let s = seed >>> 0 || 1;
  return () => {
    s ^= s << 13; s >>>= 0;
    s ^= s >> 17;
    s ^= s << 5; s >>>= 0;
    return s / 4294967296;
  };
}

// Bruit 1D lisse (value noise) pour les tremblements de caméra et les respirations.
const NOISE_TABLE = (() => {
  const r = rng(9137);
  return Array.from({ length: 512 }, () => r() * 2 - 1);
})();
export function noise1(x) {
  const i = Math.floor(x), f = x - i;
  const a = NOISE_TABLE[i & 511], b = NOISE_TABLE[(i + 1) & 511];
  return lerp(a, b, smooth(f));
}

// Clignements d'yeux pseudo-aléatoires : renvoie 0 (ouvert) .. 1 (fermé).
export function blink(t, seed = 0, every = 3.4) {
  const k = Math.floor((t + seed * 7.31) / every);
  const r = rng(1000 + k * 13 + seed * 101);
  r();
  const at = k * every - seed * 7.31 + r() * (every - 0.4);
  const x = (t - at) / 0.16;
  if (x < 0 || x > 1) return 0;
  return Math.sin(x * Math.PI);
}

// Trajectoire balistique entre deux points avec une hauteur d'arc.
export function arc(p0, p1, h, u) {
  return [
    lerp(p0[0], p1[0], u),
    lerp(p0[1], p1[1], u) + 4 * h * u * (1 - u),
    lerp(p0[2], p1[2], u),
  ];
}
