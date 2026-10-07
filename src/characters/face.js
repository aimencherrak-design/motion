import * as THREE from 'three';
import { clamp, lerp, DEG } from '../lib/util.js';
import { canvas, eyeTexture, PALETTE } from '../lib/materials.js';

// ---------------------------------------------------------------------------
// Yeux : globe texturé qui pivote pour regarder, paupières en coques sphériques,
// reflets fixes (ils ne tournent pas avec l'œil, comme dans les dessins animés).
// ---------------------------------------------------------------------------
const eyeGeoCache = new Map();
function eyeGeo(r) {
  if (!eyeGeoCache.has(r)) {
    const g = new THREE.SphereGeometry(r, 40, 28);
    g.rotateY(-Math.PI / 2); // l'iris (centre de la texture) regarde vers +z
    eyeGeoCache.set(r, g);
  }
  return eyeGeoCache.get(r);
}

export function makeEye({ r, iris, lidMat, lashColor = 0x2a1810, side = 1, irisDeg, pupilDeg, lash = false, lashLine = true }) {
  const socket = new THREE.Group();
  const look = new THREE.Group();
  socket.add(look);
  const tex = eyeTexture(iris, { irisDeg, pupilDeg });
  const ballMat = new THREE.MeshPhysicalMaterial({ map: tex, roughness: 0.18, clearcoat: 1, clearcoatRoughness: 0.08 });
  const ball = new THREE.Mesh(eyeGeo(r), ballMat);
  ball.castShadow = false;
  ball.receiveShadow = true;
  look.add(ball);

  const tilt = new THREE.Group();
  socket.add(tilt);
  const upPivot = new THREE.Group();
  const lowPivot = new THREE.Group();
  tilt.add(upPivot, lowPivot);
  const lidR = r * 1.03;
  const up = new THREE.Mesh(new THREE.SphereGeometry(lidR, 36, 16, 0, Math.PI * 2, 0, Math.PI / 2), lidMat);
  up.material.side = THREE.DoubleSide;
  upPivot.add(up);
  const lashMat = new THREE.MeshStandardMaterial({ color: lashColor, roughness: 0.6 });
  const lashLine_ = lashLine;
  const lashLineMesh = new THREE.Mesh(new THREE.TorusGeometry(lidR, r * 0.05, 8, 32, Math.PI), lashMat);
  lashLineMesh.rotation.x = Math.PI / 2;
  if (lashLine_) upPivot.add(lashLineMesh);
  if (lash) {
    // deux petits cils sur le coin extérieur
    for (let i = 0; i < 2; i++) {
      const c = new THREE.Mesh(new THREE.CapsuleGeometry(r * 0.07, r * 0.28, 4, 6), lashMat);
      const a = (0.42 + i * 0.25) * side;
      c.position.set(Math.sin(a) * lidR, 0, Math.cos(a) * lidR);
      c.rotation.z = -side * (0.9 + i * 0.3);
      c.rotation.x = 0.4;
      upPivot.add(c);
    }
  }
  const low = new THREE.Mesh(new THREE.SphereGeometry(lidR * 0.995, 36, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), lidMat);
  lowPivot.add(low);

  const hlMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const hl1 = new THREE.Mesh(new THREE.SphereGeometry(r * 0.2, 12, 8), hlMat);
  const hl2 = new THREE.Mesh(new THREE.SphereGeometry(r * 0.1, 10, 6), hlMat);
  const place = (m, ex, ey) => {
    const v = new THREE.Vector3(Math.sin(ex * DEG), Math.sin(ey * DEG), 1).normalize().multiplyScalar(r * 1.0);
    m.position.copy(v);
    m.lookAt(v.clone().multiplyScalar(2));
    m.scale.set(1, 1, 0.35);
  };
  place(hl1, -20, 22);
  place(hl2, 18, -16);
  socket.add(hl1, hl2);

  const state = { socket, look, upPivot, lowPivot, tilt, hl1, hl2, side, ballMat, tex, r, oval: 1 };
  return state;
}

// eo : ouverture (0 fermé, 1 normal, >1 écarquillé) ; lo : paupière basse relevée (sourire) ;
// tilt : + déterminé/fâché, − triste ; lx/ly : direction du regard ; es : taille de l'œil.
export function setEye(e, { eo = 1, lo = 0, tilt = 0, lx = 0, ly = 0, es = 1 }) {
  const elevUp = eo <= 1 ? lerp(-75, 42, clamp(eo, 0, 1)) : 42 + (eo - 1) * 70;
  const elevLow = lerp(-62, -4, clamp(lo, 0, 1));
  const eUp = Math.max(elevUp, elevLow + 2);
  e.upPivot.rotation.x = -eUp * DEG;
  e.lowPivot.rotation.x = -elevLow * DEG;
  e.tilt.rotation.z = tilt * 0.45 * e.side;
  e.look.rotation.y = clamp(lx, -1.3, 1.3) * 0.5;
  e.look.rotation.x = -clamp(ly, -1.3, 1.3) * 0.38;
  e.socket.scale.set(es, es * e.oval, es);
  e.lowPivot.visible = lo > 0.25 || eo < 0.35;
  const vis1 = clamp((eUp - 24) / 10) * clamp((16 - elevLow) / 10);
  const vis2 = clamp((eUp + 12) / 10) * clamp((-12 - elevLow) / 6);
  e.hl1.visible = vis1 > 0.05;
  e.hl1.scale.set(vis1, vis1, 0.35 * vis1);
  e.hl2.visible = vis2 > 0.05;
  e.hl2.scale.set(vis2, vis2, 0.35 * vis2);
}

// ---------------------------------------------------------------------------
// Bouche et joues dessinées dans une texture plaquée sur le visage.
// ---------------------------------------------------------------------------
export class FaceDecal {
  constructor({ R, freckles = false, skinColor }) {
    this.R = R;
    this.W = 512; this.H = 448;
    this.phiStart = (90 - 50) * DEG; this.phiLen = 100 * DEG;
    this.thStart = 62 * DEG; this.thLen = 78 * DEG;
    this.c = canvas(this.W, this.H);
    this.g = this.c.getContext('2d');
    this.tex = new THREE.CanvasTexture(this.c);
    this.tex.colorSpace = THREE.SRGBColorSpace;
    this.tex.anisotropy = 4;
    const geo = new THREE.SphereGeometry(R * 1.004, 40, 32, this.phiStart, this.phiLen, this.thStart, this.thLen);
    this.mesh = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({
      map: this.tex, transparent: true, roughness: 0.6, depthWrite: false,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    }));
    this.mesh.renderOrder = 2;
    this.freckles = freckles;
    this.key = '';
  }
  uv(x, y) {
    const R = this.R;
    const th = Math.acos(clamp(y / R, -1, 1));
    const st = Math.sin(th);
    const phi = Math.acos(clamp(-x / (R * st), -1, 1));
    return [((phi - this.phiStart) / this.phiLen) * this.W, ((th - this.thStart) / this.thLen) * this.H];
  }
  update(f, mouthY) {
    const key = [f.sm, f.op, f.wd, f.rd, f.th, f.gr, f.tg, f.wv, f.sk, f.bl, f.pout].map((v) => (v || 0).toFixed(3)).join(',');
    if (key === this.key) return;
    this.key = key;
    const g = this.g, W = this.W, H = this.H;
    g.clearRect(0, 0, W, H);
    // joues roses
    const bl = 0.28 + 0.6 * clamp(f.bl || 0);
    for (const sx of [-1, 1]) {
      const [px, py] = this.uv(sx * 0.15, mouthY + 0.045);
      const gr = g.createRadialGradient(px, py, 2, px, py, 46);
      gr.addColorStop(0, `rgba(255,120,140,${0.55 * bl})`);
      gr.addColorStop(1, 'rgba(255,120,140,0)');
      g.fillStyle = gr;
      g.beginPath(); g.ellipse(px, py, 50, 36, 0, 0, Math.PI * 2); g.fill();
    }
    if (this.freckles) {
      g.fillStyle = 'rgba(170,95,60,0.55)';
      for (const sx of [-1, 1]) {
        const [px, py] = this.uv(sx * 0.105, mouthY + 0.06);
        for (const [dx, dy] of [[-10, -4], [4, -9], [12, 4], [-2, 7]]) {
          g.beginPath(); g.arc(px + dx * sx, py + dy, 3.2, 0, Math.PI * 2); g.fill();
        }
      }
    }
    drawMouth(g, this.uv(0, mouthY), f);
    this.tex.needsUpdate = true;
  }
}

function quad(p0, c, p1, u) {
  const a = (1 - u) * (1 - u), b = 2 * u * (1 - u), d = u * u;
  return [a * p0[0] + b * c[0] + d * p1[0], a * p0[1] + b * c[1] + d * p1[1]];
}

// Dessine une bouche expressive à partir de quelques paramètres simples.
export function drawMouth(g, [cx, cy], f, scale = 1) {
  const sm = f.sm || 0, op = clamp(f.op || 0), wd = f.wd ?? 1, rd = clamp(f.rd || 0);
  const th = clamp(f.th || 0), gr = clamp(f.gr || 0), tg = f.tg ?? 0.6, wv = f.wv || 0, sk = f.sk || 0;
  const S = scale;
  const hw = 56 * S * wd * (1 - 0.45 * rd) * (1 + 0.12 * Math.max(0, sm));
  const cornerUp = sm * 20 * S;
  const L = [cx - hw, cy - cornerUp - sk * 9 * S];
  const Rr = [cx + hw, cy - cornerUp + sk * 9 * S];
  const N = 28;
  const upperMid = cy + sm * 6 * S - op * (8 + 14 * rd) * S;
  const lowerMid = cy + sm * 9 * S + op * (52 + 10 * rd) * S + (1 - op) * 0;
  const cU = [cx, 2 * upperMid - (L[1] + Rr[1]) / 2];
  const cL = [cx, 2 * lowerMid - (L[1] + Rr[1]) / 2];
  const ry = Math.max(4, (lowerMid - upperMid) / 2);
  const ecy = (upperMid + lowerMid) / 2;
  const pts = [];
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const s = quad(L, cU, Rr, u);
    const a = Math.PI + u * Math.PI;
    const e = [cx + hw * Math.cos(a), ecy + ry * Math.sin(a)];
    const w = wv * Math.sin(u * Math.PI * 3) * 6 * S * (op < 0.08 ? 1 : 0.4);
    pts.push([lerp(s[0], e[0], rd), lerp(s[1], e[1], rd) + w]);
  }
  g.lineCap = 'round'; g.lineJoin = 'round';
  if (op < 0.07) {
    g.strokeStyle = PALETTE.line;
    g.lineWidth = 7 * S;
    g.beginPath();
    pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])));
    g.stroke();
    // petites fossettes aux coins quand le sourire est grand
    if (sm > 0.6) {
      g.lineWidth = 4 * S;
      for (const [p, d] of [[L, -1], [Rr, 1]]) {
        g.beginPath(); g.moveTo(p[0] + d * 3 * S, p[1] - 6 * S); g.lineTo(p[0] + d * 6 * S, p[1] + 5 * S); g.stroke();
      }
    }
    return;
  }
  for (let i = 0; i <= N; i++) {
    const u = 1 - i / N;
    const s = quad(L, cL, Rr, u);
    const a = u * Math.PI;
    const e = [cx + hw * Math.cos(a), ecy + ry * Math.sin(a)];
    pts.push([lerp(s[0], e[0], rd), lerp(s[1], e[1], rd)]);
  }
  const path = () => {
    g.beginPath();
    pts.forEach((p, i) => (i ? g.lineTo(p[0], p[1]) : g.moveTo(p[0], p[1])));
    g.closePath();
  };
  path();
  g.fillStyle = PALETTE.mouthIn; g.fill();
  g.save(); path(); g.clip();
  const top = Math.min(...pts.map((p) => p[1]));
  const bot = Math.max(...pts.map((p) => p[1]));
  if (tg > 0 && gr < 0.5) {
    g.fillStyle = PALETTE.tongue;
    g.beginPath(); g.ellipse(cx + sk * 6, bot + 4 * S, hw * 0.62, (14 + 18 * op) * S * tg, 0, 0, Math.PI * 2); g.fill();
  }
  if (th > 0) {
    g.fillStyle = '#ffffff';
    g.fillRect(cx - hw * 1.2, top - 10, hw * 2.4, 10 + (6 + 12 * th) * S);
  }
  if (gr > 0) {
    g.globalAlpha = gr;
    g.fillStyle = '#ffffff';
    g.fillRect(cx - hw * 1.2, top - 10, hw * 2.4, bot - top + 20);
    g.strokeStyle = 'rgba(150,120,120,0.8)'; g.lineWidth = 3 * S;
    g.beginPath(); g.moveTo(cx - hw, (top + bot) / 2); g.lineTo(cx + hw, (top + bot) / 2); g.stroke();
    for (let i = -2; i <= 2; i++) {
      g.beginPath(); g.moveTo(cx + i * hw * 0.33, top); g.lineTo(cx + i * hw * 0.33, bot); g.stroke();
    }
    g.globalAlpha = 1;
  }
  g.restore();
  path();
  g.strokeStyle = PALETTE.line; g.lineWidth = 6 * S; g.stroke();
}

export { EXPR, expr, freshFace } from './expressions.js';
