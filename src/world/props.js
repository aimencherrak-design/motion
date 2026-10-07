import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { mat, fabric, PALETTE } from '../lib/materials.js';
import { rng, clamp, lerp } from '../lib/util.js';

// Bibliothèque d'éléments de décor (arbres, maisons, rochers, fleurs...).
// Formes arrondies, couleurs franches, géométrie légère pour un rendu rapide.

export function shade(m, cast = true, recv = true) {
  m.castShadow = cast;
  m.receiveShadow = recv;
  return m;
}

// Sphère « organique » bosselée (feuillages, buissons, rochers).
export function blobGeo(r, seed = 1, amp = 0.12, detail = 3, freq = 2.2) {
  let g = new THREE.IcosahedronGeometry(r, detail);
  g.deleteAttribute('normal');
  g.deleteAttribute('uv');
  g = mergeVertices(g);
  const p = g.attributes.position;
  const rr = rng(seed);
  const ph = [rr() * 6, rr() * 6, rr() * 6, rr() * 6];
  const v = new THREE.Vector3();
  for (let i = 0; i < p.count; i++) {
    v.fromBufferAttribute(p, i).normalize();
    const n = Math.sin(v.x * freq * 3 + ph[0]) * Math.sin(v.y * freq * 2.6 + ph[1]) * Math.sin(v.z * freq * 3.3 + ph[2])
      + 0.5 * Math.sin(v.x * freq * 7 + ph[3]) * Math.sin(v.z * freq * 6.1 + ph[0]);
    const k = 1 + amp * n;
    p.setXYZ(i, v.x * r * k, v.y * r * k, v.z * r * k);
  }
  g.computeVertexNormals();
  return g;
}

const leafCols = [0x5dbb4a, 0x4fae47, 0x7ccc4f, 0x68c25a, 0x3f9f4a];
export function leafMat(c) {
  return new THREE.MeshStandardMaterial({ color: c, roughness: 0.8 });
}
const _leafMats = leafCols.map(leafMat);
const _trunkMat = mat(0x9a6a45, { roughness: 0.85 });

export function tree({ h = 3, r = 1.3, seed = 1, kind = 'round', trunkMat = _trunkMat, colors, lod = 3, cast = true } = {}) {
  const g = new THREE.Group();
  const R = rng(seed);
  const trunkH = h * 0.55;
  const prof = [[0.2, 0], [0.16, 0.08], [0.12, 0.3], [0.1, trunkH], [0.0, trunkH]].map(([x, y]) => new THREE.Vector2(x * (r / 1.3), y));
  const trunk = shade(new THREE.Mesh(new THREE.LatheGeometry(prof, lod < 3 ? 7 : 12), trunkMat), cast);
  g.add(trunk);
  const mats = colors ? colors.map(leafMat) : _leafMats;
  if (kind === 'round') {
    const n = 4 + Math.floor(R() * 3);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + R();
      const rr = r * (0.55 + R() * 0.25);
      const b = shade(new THREE.Mesh(blobGeo(rr, seed * 13 + i, 0.08, lod), mats[Math.floor(R() * mats.length)]), cast);
      b.position.set(Math.cos(a) * r * 0.45, h * 0.62 + R() * r * 0.4, Math.sin(a) * r * 0.45);
      g.add(b);
    }
    const top = shade(new THREE.Mesh(blobGeo(r * 0.75, seed * 7, 0.08, lod), mats[Math.floor(R() * mats.length)]), cast);
    top.position.y = h * 0.62 + r * 0.55;
    g.add(top);
  } else if (kind === 'lolly') {
    const b = shade(new THREE.Mesh(blobGeo(r, seed * 3, 0.06, lod), mats[Math.floor(R() * mats.length)]), cast);
    b.position.y = h * 0.7;
    g.add(b);
  } else if (kind === 'pine') {
    for (let i = 0; i < 3; i++) {
      const c = shade(new THREE.Mesh(new THREE.ConeGeometry(r * (1 - i * 0.25), h * 0.45, lod < 3 ? 8 : 14), mats[4 - (i % 2)]), cast);
      c.position.y = h * (0.45 + i * 0.2);
      g.add(c);
    }
  }
  return g;
}

export function bush({ r = 0.6, seed = 1, color = 0x4fa648, flowers = 0 } = {}) {
  const g = new THREE.Group();
  const R = rng(seed);
  const m = leafMat(color);
  const n = 4;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + R();
    const b = shade(new THREE.Mesh(blobGeo(r * (0.55 + R() * 0.2), seed * 5 + i, 0.1), m));
    b.position.set(Math.cos(a) * r * 0.42, r * 0.45, Math.sin(a) * r * 0.42);
    g.add(b);
  }
  const top = shade(new THREE.Mesh(blobGeo(r * 0.6, seed * 9, 0.1), m));
  top.position.y = r * 0.75;
  g.add(top);
  if (flowers) {
    const fm = mat(flowers, { roughness: 0.5 });
    for (let i = 0; i < 9; i++) {
      const f = new THREE.Mesh(new THREE.SphereGeometry(r * 0.07, 8, 6), fm);
      const d = new THREE.Vector3(R() * 2 - 1, R() * 0.9 + 0.2, R() * 2 - 1).normalize();
      f.position.copy(d).multiplyScalar(r * 0.95).add(new THREE.Vector3(0, r * 0.5, 0));
      g.add(f);
    }
  }
  return g;
}

export function rock({ r = 0.6, seed = 1, color = 0xb9b3c6, sy = 0.75 } = {}) {
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.9, vertexColors: true });
  const geo = blobGeo(r, seed, 0.13, 3, 1.6);
  const p = geo.attributes.position;
  const cols = new Float32Array(p.count * 3);
  const R = rng(seed * 7);
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i) / r;
    const k = 0.78 + 0.22 * Math.max(0, y) + (R() - 0.5) * 0.06;
    cols[i * 3] = k; cols[i * 3 + 1] = k; cols[i * 3 + 2] = k * 1.02;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(cols, 3));
  const k = shade(new THREE.Mesh(geo, m));
  k.scale.set(1, sy, 0.9);
  k.position.y = r * sy * 0.55;
  const g = new THREE.Group();
  g.add(k);
  return g;
}

// Maison ronde de Méli-Mélo.
const DOOR_COLS = [0x8a5a3b, 0x3d6fd8, 0xe8383a, 0x2f9e6a, 0x7b4ab8];
export function house({ r = 1.8, h = 2.3, wall = 0xffe2b8, roof = 0xe85d4a, seed = 1, dome = false, door = null } = {}) {
  const R = rng(seed);
  const g = new THREE.Group();
  const wm = fabric(wall, { roughness: 0.9, sheen: 0.2 });
  const walls = shade(new THREE.Mesh(new THREE.CylinderGeometry(r, r * 1.05, h, 40), wm));
  walls.position.y = h / 2;
  g.add(walls);
  const trim = shade(new THREE.Mesh(new THREE.TorusGeometry(r * 1.05, 0.09, 8, 48), mat(0xd9c9b0)));
  trim.rotation.x = Math.PI / 2;
  trim.position.y = 0.08;
  g.add(trim);
  const rm = mat(roof, { roughness: 0.6 });
  if (dome) {
    const d = shade(new THREE.Mesh(new THREE.SphereGeometry(r * 1.18, 40, 20, 0, Math.PI * 2, 0, Math.PI / 2), rm));
    d.scale.y = 0.85;
    d.position.y = h;
    g.add(d);
  } else {
    const rh = h * 0.95 + R() * 0.5;
    const pts = [];
    for (let i = 0; i <= 16; i++) {
      const u = i / 16;
      const rad = r * 1.3 * Math.pow(1 - u, 1.25) + 0.02;
      pts.push(new THREE.Vector2(rad, u * rh));
    }
    const c = shade(new THREE.Mesh(new THREE.LatheGeometry(pts, 40), rm));
    c.position.y = h - 0.05;
    c.rotation.z = (R() - 0.5) * 0.12;
    g.add(c);
    const tip = shade(new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 8), mat(0xffd23f, { roughness: 0.4 })));
    tip.position.set(0, h + rh - 0.02, 0);
    c.add(tip);
    tip.position.set(0, rh, 0);
  }
  const eave = shade(new THREE.Mesh(new THREE.TorusGeometry(r * (dome ? 1.16 : 1.28), 0.08, 8, 48), mat(new THREE.Color(roof).multiplyScalar(0.8).getHex())));
  eave.rotation.x = Math.PI / 2;
  eave.position.y = h - 0.02;
  g.add(eave);

  // Porte arrondie face à +z (la maison est tournée vers la place).
  const ds = new THREE.Shape();
  const dw = 0.42, dh = 0.95;
  ds.moveTo(-dw, 0); ds.lineTo(-dw, dh); ds.absarc(0, dh, dw, Math.PI, 0, true); ds.lineTo(dw, 0); ds.closePath();
  const dg = new THREE.ExtrudeGeometry(ds, { depth: 0.08, bevelEnabled: true, bevelSize: 0.03, bevelThickness: 0.03, bevelSegments: 2, curveSegments: 16 });
  const dcol = door ?? DOOR_COLS[Math.floor(R() * DOOR_COLS.length)];
  const doorM = shade(new THREE.Mesh(dg, mat(dcol, { roughness: 0.55 })));
  doorM.position.set(0, 0.02, r * 1.0 - 0.02);
  g.add(doorM);
  const knob = new THREE.Mesh(new THREE.SphereGeometry(0.05, 10, 8), mat(0xffd23f, { metalness: 0.3, roughness: 0.3 }));
  knob.position.set(0.25, 0.7, r + 0.1);
  g.add(knob);
  const step = shade(new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.65, 0.1, 24, 1, false, 0, Math.PI), mat(0xd9c9b0)));
  step.position.set(0, 0.05, r * 1.02);
  step.rotation.y = -Math.PI / 2;
  g.add(step);

  // Fenêtres rondes
  const frameM = mat(0xffffff, { roughness: 0.5 });
  const glassM = new THREE.MeshPhysicalMaterial({ color: 0x9fd6ff, roughness: 0.08, metalness: 0, emissive: 0x2a5a80, emissiveIntensity: 0.25, clearcoat: 1 });
  const wins = 2 + Math.floor(R() * 2);
  for (let i = 0; i < wins; i++) {
    const a = (i % 2 ? 1 : -1) * (0.75 + Math.floor(i / 2) * 0.9) + (R() - 0.5) * 0.2;
    const wy = h * (0.5 + R() * 0.15);
    const wr = 0.3;
    const w = new THREE.Group();
    w.position.set(Math.sin(a) * r * 1.0, wy, Math.cos(a) * r * 1.0);
    w.rotation.y = a;
    const fr = shade(new THREE.Mesh(new THREE.TorusGeometry(wr, 0.06, 8, 24), frameM), false);
    const gl = new THREE.Mesh(new THREE.CircleGeometry(wr, 24), glassM);
    gl.position.z = -0.01;
    const bar1 = new THREE.Mesh(new THREE.BoxGeometry(wr * 2, 0.035, 0.03), frameM);
    const bar2 = new THREE.Mesh(new THREE.BoxGeometry(0.035, wr * 2, 0.03), frameM);
    w.add(fr, gl, bar1, bar2);
    if (R() < 0.6) {
      const box = shade(new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.16, 0.2), mat(0xa86b45)));
      box.position.set(0, -wr - 0.12, 0.08);
      w.add(box);
      const fc = [0xff6f91, 0xffd23f, 0xffffff, 0xc77dff][Math.floor(R() * 4)];
      for (let k = 0; k < 5; k++) {
        const fl = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), mat(k % 2 ? fc : 0x5dbb4a));
        fl.position.set(-0.28 + k * 0.14, -wr - 0.02, 0.1);
        w.add(fl);
      }
    }
    g.add(w);
  }
  if (!dome && R() < 0.7) {
    const ch = shade(new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.18, 0.7, 14), mat(0xc98a6b)));
    ch.position.set(r * 0.5, h + 0.55, -r * 0.3);
    g.add(ch);
    const cc = shade(new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.22, 0.08, 14), mat(0x9a6050)));
    cc.position.set(r * 0.5, h + 0.92, -r * 0.3);
    g.add(cc);
  }
  return g;
}

export function lampPost(h = 2.6) {
  const g = new THREE.Group();
  const pm = mat(0x2f6f7a, { roughness: 0.45, metalness: 0.2 });
  const pole = shade(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.07, h, 10), pm));
  pole.position.y = h / 2;
  const base = shade(new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.18, 0.2, 12), pm));
  base.position.y = 0.1;
  const lamp = new THREE.Mesh(new THREE.SphereGeometry(0.18, 16, 12), new THREE.MeshStandardMaterial({ color: 0xfff1c0, emissive: 0xffd27a, emissiveIntensity: 0.6, roughness: 0.3 }));
  lamp.position.y = h + 0.12;
  const capM = shade(new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.18, 12), pm));
  capM.position.y = h + 0.34;
  g.add(pole, base, lamp, capM);
  return g;
}

export function bench() {
  const g = new THREE.Group();
  const wm = mat(0xc98a52, { roughness: 0.7 });
  const lm = mat(0x3c5a6a, { roughness: 0.5 });
  for (let i = 0; i < 3; i++) {
    const s = shade(new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.05, 0.13), wm));
    s.position.set(0, 0.45, -0.16 + i * 0.16);
    g.add(s);
  }
  for (let i = 0; i < 2; i++) {
    const s = shade(new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.12, 0.04), wm));
    s.position.set(0, 0.68 + i * 0.16, -0.27);
    g.add(s);
  }
  for (const x of [-0.65, 0.65]) {
    const l = shade(new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.45, 0.4), lm));
    l.position.set(x, 0.225, -0.05);
    g.add(l);
  }
  return g;
}

// Guirlande de fanions entre deux points.
export function bunting(a, b, sag = 0.6, seed = 3) {
  const g = new THREE.Group();
  const R = rng(seed);
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
  const pts = [];
  const N = 24;
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    pts.push(A.clone().lerp(B, u).add(new THREE.Vector3(0, -sag * 4 * u * (1 - u), 0)));
  }
  const curve = new THREE.CatmullRomCurve3(pts);
  const rope = new THREE.Mesh(new THREE.TubeGeometry(curve, 40, 0.012, 5), mat(0xffffff));
  g.add(rope);
  const cols = [0xff5d5d, 0xffc533, 0x48bce2, 0x8b55d6, 0x5dbb4a, 0xff8fbd];
  const len = A.distanceTo(B);
  const n = Math.floor(len / 0.45);
  const flags = [];
  const tri = new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-0.16, 0, 0), new THREE.Vector3(0.16, 0, 0), new THREE.Vector3(0, -0.36, 0)]);
  tri.computeVertexNormals();
  for (let i = 1; i < n; i++) {
    const u = i / n;
    const p = curve.getPoint(u);
    const f = new THREE.Mesh(tri, new THREE.MeshStandardMaterial({ color: cols[i % cols.length], side: THREE.DoubleSide, roughness: 0.7 }));
    f.position.copy(p);
    const tan = curve.getTangent(u);
    f.rotation.y = Math.atan2(-tan.z, tan.x);
    f.castShadow = true;
    g.add(f);
    flags.push({ f, ph: R() * 6 });
  }
  g.userData.flags = flags;
  return g;
}
export function animateBunting(bt, t, wind = 1) {
  for (const { f, ph } of bt.userData.flags) f.rotation.x = Math.sin(t * 3 + ph) * 0.18 * wind + 0.1 * wind;
}

// Brins d'herbe et fleurs instanciés pour peupler le sol sans alourdir le rendu.
export function grassField({ count = 800, area = (R) => [R() * 20 - 10, R() * 20 - 10], seed = 5, colors = [0x6cc254, 0x58b046, 0x8bd462], h = 0.22 } = {}) {
  const R = rng(seed);
  const blade = new THREE.ConeGeometry(0.035, 1, 4);
  blade.translate(0, 0.5, 0);
  const g = new THREE.Group();
  const m = new THREE.MeshStandardMaterial({ roughness: 0.85 });
  const inst = new THREE.InstancedMesh(blade, m, count * 3);
  const o = new THREE.Object3D();
  const c = new THREE.Color();
  let k = 0;
  for (let i = 0; i < count; i++) {
    const p = area(R);
    if (!p) continue;
    const [x, z] = p;
    for (let j = 0; j < 3; j++) {
      o.position.set(x + (R() - 0.5) * 0.08, 0, z + (R() - 0.5) * 0.08);
      o.rotation.set((R() - 0.5) * 0.6, R() * 6, (R() - 0.5) * 0.6);
      o.scale.set(1, h * (0.6 + R() * 0.8), 1);
      o.updateMatrix();
      inst.setMatrixAt(k, o.matrix);
      inst.setColorAt(k, c.set(colors[Math.floor(R() * colors.length)]));
      k++;
    }
  }
  inst.count = k;
  inst.receiveShadow = true;
  g.add(inst);
  return g;
}

export function flowerField({ count = 200, area, seed = 8, colors = [0xffffff, 0xffd23f, 0xff8fbd, 0xc79bff, 0xff6f61] } = {}) {
  const R = rng(seed);
  const head = new THREE.IcosahedronGeometry(0.05, 0);
  const stem = new THREE.CylinderGeometry(0.008, 0.008, 1, 4);
  stem.translate(0, 0.5, 0);
  const g = new THREE.Group();
  const hi = new THREE.InstancedMesh(head, new THREE.MeshStandardMaterial({ roughness: 0.5 }), count);
  const si = new THREE.InstancedMesh(stem, mat(0x4f9f3f), count);
  const o = new THREE.Object3D();
  const c = new THREE.Color();
  let k = 0;
  for (let i = 0; i < count; i++) {
    const p = area(R);
    if (!p) continue;
    const [x, z] = p;
    const hh = 0.12 + R() * 0.16;
    o.position.set(x, 0, z); o.rotation.set(0, 0, 0); o.scale.set(1, hh, 1); o.updateMatrix();
    si.setMatrixAt(k, o.matrix);
    o.position.set(x, hh, z); o.scale.set(1, 0.7, 1); o.updateMatrix();
    hi.setMatrixAt(k, o.matrix);
    hi.setColorAt(k, c.set(colors[Math.floor(R() * colors.length)]));
    k++;
  }
  hi.count = si.count = k;
  hi.castShadow = true;
  g.add(hi, si);
  return g;
}

export function fence(a, b, posts = 6) {
  const g = new THREE.Group();
  const wm = mat(0xd9a66b, { roughness: 0.8 });
  const A = new THREE.Vector3(...a), B = new THREE.Vector3(...b);
  for (let i = 0; i <= posts; i++) {
    const p = A.clone().lerp(B, i / posts);
    const post = shade(new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.8, 8), wm));
    post.position.set(p.x, 0.4, p.z);
    const capm = shade(new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), wm));
    capm.position.set(p.x, 0.82, p.z);
    g.add(post, capm);
  }
  const len = A.distanceTo(B);
  for (const y of [0.35, 0.62]) {
    const rail = shade(new THREE.Mesh(new THREE.BoxGeometry(len, 0.07, 0.04), wm));
    rail.position.set((A.x + B.x) / 2, y, (A.z + B.z) / 2);
    rail.rotation.y = -Math.atan2(B.z - A.z, B.x - A.x);
    g.add(rail);
  }
  return g;
}

export function mushroom(s = 1, seed = 1) {
  const g = new THREE.Group();
  const stem = shade(new THREE.Mesh(new THREE.CylinderGeometry(0.05 * s, 0.07 * s, 0.18 * s, 10), mat(0xfff3dc)));
  stem.position.y = 0.09 * s;
  const capm = shade(new THREE.Mesh(new THREE.SphereGeometry(0.13 * s, 16, 10, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xe8483a, { roughness: 0.4 })));
  capm.position.y = 0.16 * s;
  capm.scale.y = 0.75;
  g.add(stem, capm);
  const R = rng(seed);
  for (let i = 0; i < 5; i++) {
    const d = new THREE.Mesh(new THREE.SphereGeometry(0.022 * s, 8, 6), mat(0xffffff));
    const a = R() * 6, e = 0.3 + R() * 0.9;
    d.position.set(Math.cos(a) * Math.sin(e) * 0.13 * s, 0.16 * s + Math.cos(e) * 0.1 * s, Math.sin(a) * Math.sin(e) * 0.13 * s);
    g.add(d);
  }
  return g;
}

// Grande touffe d'herbe haute (pour la chute finale dans la clairière).
export function tallTuft({ r = 1.1, h = 0.95, count = 240, seed = 12 } = {}) {
  const R = rng(seed);
  const g = new THREE.Group();
  const blade = new THREE.ConeGeometry(0.05, 1, 5, 4);
  blade.translate(0, 0.5, 0);
  const p = blade.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i);
    p.setZ(i, p.getZ(i) + 0.25 * y * y);
  }
  blade.computeVertexNormals();
  const m = new THREE.MeshStandardMaterial({ roughness: 0.8 });
  const inst = new THREE.InstancedMesh(blade, m, count);
  const c = new THREE.Color();
  const cols = [0x6cc254, 0x58b046, 0x8bd462, 0x4f9f3f, 0x9edc6a];
  const data = [];
  for (let i = 0; i < count; i++) {
    const a = R() * Math.PI * 2, d = Math.sqrt(R()) * r;
    const hh = h * (1 - 0.55 * (d / r)) * (0.7 + R() * 0.5);
    data.push({ x: Math.cos(a) * d, z: Math.sin(a) * d, ry: R() * 6, lean: 0.15 + (d / r) * 0.5, dir: a, hh, ph: R() * 6 });
    inst.setColorAt(i, c.set(cols[Math.floor(R() * cols.length)]));
  }
  inst.castShadow = true;
  inst.receiveShadow = true;
  g.add(inst);
  g.userData = { inst, data };
  return g;
}
// wobble : agitation (0..1) ; part : creusement au centre (personnages tombés dedans)
export function animateTuft(tf, t, wobble = 0, part = 0, wind = 0.3) {
  const o = new THREE.Object3D();
  const { inst, data } = tf.userData;
  data.forEach((d, i) => {
    const sw = Math.sin(t * 2.2 + d.ph) * 0.06 * wind + Math.sin(t * 17 + d.ph) * 0.25 * wobble;
    const dist = Math.hypot(d.x, d.z);
    const out = part * Math.max(0, 1 - dist / 1.2) * 0.9;
    o.position.set(d.x, 0, d.z);
    o.rotation.set(0, 0, 0);
    o.rotateY(-d.dir + Math.PI / 2);
    o.rotateX(d.lean + sw + out);
    o.rotateY(d.ry);
    o.scale.set(1, d.hh * (1 - part * 0.25), 1);
    o.updateMatrix();
    inst.setMatrixAt(i, o.matrix);
  });
  inst.instanceMatrix.needsUpdate = true;
}

export function cloud(seed = 1, s = 1) {
  const g = new THREE.Group();
  const R = rng(seed);
  const m = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xdde9f5, emissiveIntensity: 0.55, roughness: 1, fog: false });
  const n = 5 + Math.floor(R() * 3);
  for (let i = 0; i < n; i++) {
    const b = new THREE.Mesh(new THREE.SphereGeometry((1.4 + R() * 1.4) * s, 20, 14), m);
    b.position.set((i - n / 2) * 1.5 * s + R() * 0.5, R() * 0.9 * s, (R() - 0.5) * 1.5 * s);
    b.scale.y = 0.8;
    g.add(b);
  }
  return g;
}

export function bird() {
  const g = new THREE.Group();
  const m = mat(0x5a6b8a, { roughness: 0.6 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.12, 10, 8), m);
  body.scale.set(0.8, 0.8, 1.4);
  g.add(body);
  const wings = [];
  for (const s of [1, -1]) {
    const piv = new THREE.Group();
    const w = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.02, 0.14), m);
    w.position.x = 0.16 * s;
    piv.add(w);
    g.add(piv);
    wings.push({ piv, s });
  }
  g.userData.wings = wings;
  return g;
}
export function flapBird(b, t, ph = 0) {
  for (const { piv, s } of b.userData.wings) piv.rotation.z = Math.sin(t * 14 + ph) * 0.7 * s;
}
