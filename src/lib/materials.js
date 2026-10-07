import * as THREE from 'three';
import { rng } from './util.js';

// Palette de la série : couleurs vives mais harmonieuses, identiques dans tous les plans.
export const PALETTE = {
  leoSkin: 0xf3c6a1,
  leoHair: 0x5b3820,
  leoSweat: 0xffc533,
  leoSweatDark: 0xf0a919,
  leoPants: 0x3f6fd8,
  leoShoes: 0xe8383a,
  leoBag: 0x48b04e,
  leoBagDark: 0x2f8a3b,
  leoIris: '#7b4a26',

  mayaSkin: 0xe0a77f,
  mayaHair: 0x4a2a18,
  mayaJacket: 0x8b55d6,
  mayaJacketLight: 0xb994f2,
  mayaPants: 0xf2e7d3,
  mayaShoes: 0xfbfbfb,
  mayaShoesAccent: 0xc9b6f6,
  mayaBag: 0xff8fbd,
  mayaBagDark: 0xe2679b,
  mayaTie: 0xffd23f,
  mayaIris: '#3f8a63',

  biFur: 0x48bce2,
  biFurDeep: 0x2b8fc4,
  biBelly: 0xfff1d8,
  biFace: 0xe3f7fc,
  biBeak: 0xffa53a,
  biIris: '#ffc928',

  ball: 0xe62f2b,
  ballSeam: 0xa8151a,

  white: 0xfdfcf8,
  sole: 0xf6f3ee,
  blush: '#ff7f8e',
  mouthIn: '#6d1f2a',
  tongue: '#ff7d8c',
  line: '#4a2318',
};

export function mat(color, opts = {}) {
  return new THREE.MeshStandardMaterial({ color, roughness: 0.62, metalness: 0, ...opts });
}
// Tissu : léger « sheen » pour un rendu doux et feutré.
export function fabric(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({
    color, roughness: 0.78, metalness: 0, sheen: 0.6, sheenRoughness: 0.6,
    sheenColor: new THREE.Color(color).lerp(new THREE.Color(0xffffff), 0.45), ...opts,
  });
}
export function skin(color) {
  return new THREE.MeshPhysicalMaterial({
    color, roughness: 0.55, metalness: 0, sheen: 0.35, sheenRoughness: 0.5,
    sheenColor: new THREE.Color(0xffd8c8),
  });
}
export function glossy(color, opts = {}) {
  return new THREE.MeshPhysicalMaterial({ color, roughness: 0.32, clearcoat: 0.7, clearcoatRoughness: 0.25, ...opts });
}

export function canvas(w, h) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  return c;
}

// Texture d'œil (projection équirectangulaire, 1024x512 = 2,84 px par degré).
// L'iris est centré sur l'axe avant de l'œil ; les reflets sont des objets 3D séparés.
export function eyeTexture(iris, { irisDeg = 40, pupilDeg = 19 } = {}) {
  const c = canvas(1024, 512), g = c.getContext('2d');
  const k = 1024 / 360;
  g.fillStyle = '#fbfaf6'; g.fillRect(0, 0, 1024, 512);
  const cx = 512, cy = 256;
  const ir = irisDeg * k, pr = pupilDeg * k;
  const base = new THREE.Color(iris);
  const light = base.clone().lerp(new THREE.Color(0xffffff), 0.5);
  const dark = base.clone().lerp(new THREE.Color(0x000000), 0.5);
  const grad = g.createRadialGradient(cx, cy + ir * 0.25, ir * 0.1, cx, cy, ir);
  grad.addColorStop(0, '#' + light.getHexString());
  grad.addColorStop(0.6, '#' + base.getHexString());
  grad.addColorStop(1, '#' + dark.getHexString());
  g.fillStyle = grad; g.beginPath(); g.arc(cx, cy, ir, 0, Math.PI * 2); g.fill();
  g.strokeStyle = 'rgba(255,255,255,0.13)'; g.lineWidth = 3;
  for (let i = 0; i < 36; i++) {
    const a = (i / 36) * Math.PI * 2;
    g.beginPath(); g.moveTo(cx + Math.cos(a) * pr * 1.1, cy + Math.sin(a) * pr * 1.1);
    g.lineTo(cx + Math.cos(a) * ir * 0.88, cy + Math.sin(a) * ir * 0.88); g.stroke();
  }
  g.lineWidth = 9; g.strokeStyle = 'rgba(25,15,15,0.6)';
  g.beginPath(); g.arc(cx, cy, ir - 3, 0, Math.PI * 2); g.stroke();
  g.fillStyle = '#100a0a'; g.beginPath(); g.arc(cx, cy, pr, 0, Math.PI * 2); g.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

// Tache d'ombre douce posée au sol sous les personnages.
let _blob;
export function blobTexture() {
  if (_blob) return _blob;
  const c = canvas(128, 128), g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 4, 64, 64, 64);
  gr.addColorStop(0, 'rgba(20,30,40,0.55)');
  gr.addColorStop(0.5, 'rgba(20,30,40,0.25)');
  gr.addColorStop(1, 'rgba(20,30,40,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  _blob = new THREE.CanvasTexture(c);
  return _blob;
}

let _soft;
export function softTexture() {
  if (_soft) return _soft;
  const c = canvas(128, 128), g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.4, 'rgba(255,255,255,0.6)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  _soft = new THREE.CanvasTexture(c);
  return _soft;
}

let _star;
export function starTexture() {
  if (_star) return _star;
  const c = canvas(128, 128), g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 30);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr; g.fillRect(0, 0, 128, 128);
  g.fillStyle = 'rgba(255,255,255,0.95)';
  g.beginPath();
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2, r = i % 2 ? 9 : 62;
    g.lineTo(64 + Math.cos(a) * r, 64 + Math.sin(a) * r);
  }
  g.closePath(); g.fill();
  _star = new THREE.CanvasTexture(c);
  return _star;
}

// Pavés de la place du village.
export function cobbleTexture() {
  const c = canvas(1024, 1024), g = c.getContext('2d');
  const r = rng(77);
  g.fillStyle = '#b89c78'; g.fillRect(0, 0, 1024, 1024);
  const cols = ['#e2c69c', '#d9b98c', '#e8d0a8', '#d2ae80', '#dfc297', '#ecd5b0'];
  for (let y = 0; y < 1024; y += 44) {
    const off = (y / 44) % 2 ? 26 : 0;
    for (let x = -60; x < 1100; x += 52) {
      const w = 44 + r() * 10, h = 36 + r() * 6;
      g.fillStyle = cols[Math.floor(r() * cols.length)];
      const px = x + off + r() * 4, py = y + 3 + r() * 3;
      g.beginPath();
      g.roundRect(px, py, w, h, 14);
      g.fill();
      g.fillStyle = 'rgba(255,255,255,0.14)';
      g.beginPath(); g.roundRect(px + 4, py + 3, w - 14, h * 0.4, 8); g.fill();
      g.fillStyle = 'rgba(120,80,40,0.10)';
      g.beginPath(); g.roundRect(px + 6, py + h * 0.6, w - 10, h * 0.35, 8); g.fill();
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 2;
  return t;
}

// Herbe : dégradé et petites touches de couleur.
export function grassTexture(base = '#7ccf5e') {
  const c = canvas(512, 512), g = c.getContext('2d');
  const r = rng(31);
  g.fillStyle = base; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 2600; i++) {
    const x = r() * 512, y = r() * 512, s = 2 + r() * 7;
    const l = r();
    g.fillStyle = l < 0.5 ? 'rgba(60,140,50,0.22)' : 'rgba(190,240,120,0.2)';
    g.beginPath(); g.ellipse(x, y, s, s * 0.6, r() * 3, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 2;
  return t;
}

export function dirtTexture() {
  const c = canvas(256, 256), g = c.getContext('2d');
  const r = rng(5);
  g.fillStyle = '#e2c08d'; g.fillRect(0, 0, 256, 256);
  for (let i = 0; i < 500; i++) {
    g.fillStyle = r() < 0.5 ? 'rgba(170,120,70,0.18)' : 'rgba(255,240,210,0.2)';
    g.beginPath(); g.arc(r() * 256, r() * 256, 1 + r() * 4, 0, Math.PI * 2); g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
