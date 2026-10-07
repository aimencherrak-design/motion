import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { PALETTE, mat, blobTexture } from '../lib/materials.js';
import { makeEye, setEye, freshFace } from './face.js';
import { clamp, lerp, rng } from '../lib/util.js';

// Bibou : boule de plumes duveteuse (mi-hibou, mi-pompon), minuscule et très expressive.
export const BR = 0.16; // rayon du corps

function furGeometry() {
  let g = new THREE.IcosahedronGeometry(BR, 40);
  g.deleteAttribute('normal');
  g.deleteAttribute('uv');
  g = mergeVertices(g);
  const pos = g.attributes.position;
  const r = rng(2024);
  // centres des touffes de duvet répartis sur la sphère
  const tufts = [];
  for (let i = 0; i < 340; i++) {
    const v = new THREE.Vector3(r() * 2 - 1, r() * 2 - 1, r() * 2 - 1).normalize();
    tufts.push([v, 0.005 + r() * 0.007]);
  }
  const colors = new Float32Array(pos.count * 3);
  const cFur = new THREE.Color(PALETTE.biFur), cDeep = new THREE.Color(PALETTE.biFurDeep);
  const cBelly = new THREE.Color(PALETTE.biBelly), cFace = new THREE.Color(PALETTE.biFace);
  const v = new THREE.Vector3();
  const eyeL = new THREE.Vector3(0.36, 0.22, 0.9).normalize();
  const eyeR = new THREE.Vector3(-0.36, 0.22, 0.9).normalize();
  const bellyDir = new THREE.Vector3(0, -0.5, 0.87).normalize();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i).normalize();
    // déplacement : touffes pointues + léger bruit
    let best = 0;
    for (const [c, h] of tufts) {
      const d = v.dot(c);
      if (d > 0.975) {
        const x = (d - 0.975) / 0.025;
        best = Math.max(best, h * x * x * (3 - 2 * x));
      }
    }
    const fine = 0.0025 * Math.sin(v.x * 41 + v.y * 13) * Math.sin(v.y * 37 + v.z * 17) * Math.sin(v.z * 29 + v.x * 11);
    // le ventre et le visage restent plus lisses
    const front = clamp((Math.max(v.dot(eyeL), v.dot(eyeR)) - 0.85) / 0.1);
    const k = 1 - 0.85 * front;
    const rr = BR + (best + fine) * k;
    pos.setXYZ(i, v.x * rr, v.y * rr, v.z * rr);
    // couleurs : dos plus profond, ventre crème, disque facial clair
    const col = cFur.clone().lerp(cDeep, clamp((-v.z * 0.5 + v.y * 0.5) * 0.7 + 0.15));
    const belly = clamp((v.dot(bellyDir) - 0.8) / 0.1);
    col.lerp(cBelly, belly);
    const fd = Math.max(v.dot(eyeL), v.dot(eyeR));
    col.lerp(cFace, clamp((fd - 0.92) / 0.05));
    col.lerp(new THREE.Color(0xc8f2ff), clamp(best * 50) * 0.35 * (1 - belly));
    colors[i * 3] = col.r; colors[i * 3 + 1] = col.g; colors[i * 3 + 2] = col.b;
  }
  g.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  g.computeVertexNormals();
  return g;
}

function featherGeo(len, w, bend) {
  const pts = [];
  for (let i = 0; i <= 12; i++) {
    const u = i / 12;
    pts.push(new THREE.Vector2(w * Math.pow(Math.max(0, 1 - Math.pow(u, 2)), 0.7) + 0.0005, u * len));
  }
  const g = new THREE.LatheGeometry(pts, 12);
  const p = g.attributes.position;
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i) / len;
    p.setZ(i, p.getZ(i) + bend * len * y * y);
  }
  g.computeVertexNormals();
  return g;
}

export function createBibou() {
  const furMat = new THREE.MeshPhysicalMaterial({
    vertexColors: true, roughness: 0.85, sheen: 0.75, sheenRoughness: 0.45,
    sheenColor: new THREE.Color(0xd8f6ff),
  });
  const lidMat = new THREE.MeshPhysicalMaterial({ color: PALETTE.biFace, roughness: 0.8, sheen: 0.8, sheenColor: new THREE.Color(0xffffff) });
  const beakMat = new THREE.MeshPhysicalMaterial({ color: PALETTE.biBeak, roughness: 0.4, clearcoat: 0.5 });
  const tuftMat = new THREE.MeshPhysicalMaterial({ color: PALETTE.biFur, roughness: 0.85, sheen: 1, sheenRoughness: 0.5, sheenColor: new THREE.Color(0xd8f6ff) });
  const wingMat = new THREE.MeshPhysicalMaterial({ color: PALETTE.biFur, roughness: 0.8, sheen: 1, sheenColor: new THREE.Color(0xe0f8ff) });

  const root = new THREE.Group();
  root.name = 'bibou';
  const squash = new THREE.Group();
  root.add(squash);
  const center = new THREE.Group();
  center.position.y = BR;
  squash.add(center);
  const tumble = new THREE.Group();
  center.add(tumble);

  const fur = new THREE.Mesh(furGeometry(), furMat);
  fur.castShadow = true; fur.receiveShadow = true;
  tumble.add(fur);

  // yeux immenses
  const eyes = {};
  const ER = 0.064;
  for (const s of [1, -1]) {
    const e = makeEye({ r: ER, iris: PALETTE.biIris, lidMat, side: s, lashColor: 0x1d5a78, irisDeg: 48, pupilDeg: 28, lashLine: false });
    const dir = new THREE.Vector3(0.36 * s, 0.22, 0.9).normalize();
    e.socket.position.copy(dir).multiplyScalar(BR - ER * 0.42);
    e.socket.rotation.y = 0.2 * s;
    e.socket.rotation.x = -0.1;
    tumble.add(e.socket);
    eyes[s > 0 ? 'L' : 'R'] = e;
  }

  // bec en deux parties (s'ouvre pour les petits cris)
  const beak = new THREE.Group();
  beak.position.set(0, 0.0, BR - 0.006);
  tumble.add(beak);
  const upper = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.04, 16), beakMat);
  upper.rotation.x = Math.PI / 2 + 0.5;
  upper.position.set(0, 0.002, 0.012);
  upper.castShadow = true;
  beak.add(upper);
  const lowerPiv = new THREE.Group();
  lowerPiv.position.set(0, -0.006, 0.0);
  beak.add(lowerPiv);
  const lower = new THREE.Mesh(new THREE.ConeGeometry(0.016, 0.026, 14), beakMat);
  lower.rotation.x = Math.PI / 2 + 0.9;
  lower.position.set(0, -0.006, 0.01);
  lowerPiv.add(lower);
  const mouthIn = new THREE.Mesh(new THREE.SphereGeometry(0.014, 12, 8), mat(0x7a2430));
  mouthIn.visible = false;
  mouthIn.position.set(0, -0.008, 0.004);
  beak.add(mouthIn);

  // joues roses
  const cheekMat = new THREE.MeshBasicMaterial({ color: 0xff8fa0, transparent: true, opacity: 0.55, depthWrite: false });
  const cheeks = [];
  for (const s of [1, -1]) {
    const c = new THREE.Mesh(new THREE.CircleGeometry(0.022, 20), cheekMat);
    const d = new THREE.Vector3(0.55 * s, -0.12, 0.83).normalize();
    c.position.copy(d).multiplyScalar(BR + 0.004);
    c.lookAt(d.clone().multiplyScalar(1));
    c.lookAt(c.position.clone().multiplyScalar(2));
    c.scale.set(1.3, 0.8, 1);
    tumble.add(c);
    cheeks.push(c);
  }

  // aigrettes sur la tête (oreilles de hibou)
  const tufts = [];
  for (const s of [1, -1]) {
    const piv = new THREE.Group();
    const d = new THREE.Vector3(0.45 * s, 0.86, 0.15).normalize();
    piv.position.copy(d).multiplyScalar(BR * 0.92);
    tumble.add(piv);
    const f1 = new THREE.Mesh(featherGeo(0.07, 0.034, 0.55), tuftMat);
    f1.castShadow = true;
    piv.add(f1);
    const f2 = new THREE.Mesh(featherGeo(0.045, 0.026, 0.7), tuftMat);
    f2.rotation.z = -0.5 * s;
    f2.position.x = 0.012 * s;
    piv.add(f2);
    tufts.push({ piv, s });
  }
  // petite mèche sur le front
  const crest = new THREE.Mesh(featherGeo(0.045, 0.018, 1.0), tuftMat);
  crest.position.set(0, BR * 0.97, 0.03);
  crest.rotation.x = 0.3;
  tumble.add(crest);
  // queue
  const tail = new THREE.Group();
  tail.position.set(0, -0.05, -BR * 0.95);
  tumble.add(tail);
  for (let i = -1; i <= 1; i++) {
    const f = new THREE.Mesh(featherGeo(0.06, 0.022, 0.4), tuftMat);
    f.rotation.set(-2.0, 0, i * 0.4);
    tail.add(f);
  }

  // ailes
  const wings = {};
  for (const s of [1, -1]) {
    const piv = new THREE.Group();
    piv.position.set(0.14 * s, 0.015, 0.0);
    tumble.add(piv);
    const flap = new THREE.Group();
    piv.add(flap);
    const w = new THREE.Mesh(new THREE.SphereGeometry(0.072, 24, 16), wingMat);
    w.scale.set(0.38, 1, 0.8);
    w.position.set(0.014 * s, -0.055, 0.01);
    w.castShadow = true;
    flap.add(w);
    for (let i = 0; i < 3; i++) {
      const f = new THREE.Mesh(new THREE.SphereGeometry(0.022, 12, 8), wingMat);
      f.scale.set(0.5, 1.4, 0.8);
      f.position.set(0.012 * s, -0.11 + i * 0.004, -0.03 + i * 0.03);
      f.rotation.x = 0.3 - i * 0.3;
      flap.add(f);
    }
    wings[s > 0 ? 'L' : 'R'] = { piv, flap, s };
  }

  // pattes
  const feet = {};
  for (const s of [1, -1]) {
    const f = new THREE.Group();
    f.position.set(0.055 * s, -BR + 0.008, 0.05);
    tumble.add(f);
    for (let i = -1; i <= 1; i++) {
      const toe = new THREE.Mesh(new THREE.CapsuleGeometry(0.009, 0.024, 4, 8), beakMat);
      toe.rotation.x = Math.PI / 2;
      toe.rotation.y = i * 0.45;
      toe.position.set(i * 0.011, -0.004, 0.012);
      toe.castShadow = true;
      f.add(toe);
    }
    feet[s > 0 ? 'L' : 'R'] = f;
  }

  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2;
  blob.renderOrder = 1;

  const rig = { kind: 'bibou', root, squash, center, tumble, fur, eyes, beak, lowerPiv, cheeks, cheekMat, tufts, wings, feet, tail, blob, crest, mouthIn };
  rig.pose = defaultBibouPose();
  return rig;
}

export function defaultBibouPose() {
  return {
    x: 0, y: 0, z: 0, ry: 0, ground: 0,
    sq: 1, rx: 0, rz: 0, lean: 0, puff: 0, scale: 1,
    wL: 0.15, wR: 0.15, wfL: 0, wfR: 0, flap: 0, flapT: 0,
    fL: 0, fR: 0, tufts: 0, beak: 0, tremble: 0, tail: 0,
    face: { ...freshFace(), bl: 0.3 },
  };
}

export function applyBibou(rig, P, t = 0) {
  rig.root.position.set(P.x, P.y + P.ground, P.z);
  rig.root.rotation.y = P.ry;
  rig.root.scale.setScalar(P.scale);
  const sq = P.sq * (1 + P.puff * 0.08);
  const sxz = (1 / Math.sqrt(P.sq)) * (1 + P.puff * 0.22);
  rig.squash.scale.set(sxz, sq, sxz);
  rig.center.position.y = BR;
  const tr = P.tremble ? Math.sin(t * 80) * 0.02 * P.tremble : 0;
  rig.tumble.rotation.set(P.rx - P.lean - P.puff * 0.25, tr * 3, P.rz + tr, 'YXZ');

  for (const k of ['L', 'R']) {
    const w = rig.wings[k];
    const base = k === 'L' ? P.wL : P.wR;
    const fwd = k === 'L' ? P.wfL : P.wfR;
    const flap = P.flap * (0.5 + 0.5 * Math.sin(P.flapT * Math.PI * 2)) * 1.5;
    w.flap.rotation.set(-fwd, 0, (base + flap) * w.s, 'ZXY');
    const f = rig.feet[k];
    const lift = k === 'L' ? P.fL : P.fR;
    f.position.y = -BR + 0.008 + lift * 0.03;
    f.rotation.x = -lift * 0.6;
  }
  for (const tf of rig.tufts) {
    tf.piv.rotation.z = (-0.25 - P.tufts * 0.35) * tf.s;
    tf.piv.rotation.x = P.tufts < 0 ? -P.tufts * 0.9 : -P.tufts * 0.1;
  }
  rig.tail.rotation.x = P.tail * 0.5;
  rig.lowerPiv.rotation.x = P.beak * 0.7;
  rig.mouthIn.visible = P.beak > 0.05;
  rig.beak.scale.setScalar(1 + P.beak * 0.15);

  const f = P.face;
  for (const k of ['L', 'R']) {
    setEye(rig.eyes[k], { eo: f.eo * (k === 'L' ? f.eoL ?? 1 : f.eoR ?? 1), lo: f.lo, tilt: f.tilt, lx: f.lx, ly: f.ly, es: f.es });
  }
  rig.cheekMat.opacity = 0.35 + 0.5 * clamp(f.bl || 0);

  const h = Math.max(0, P.y);
  const sc = 0.42 * (1 - clamp(h / 2.5) * 0.6) * sxz;
  rig.blob.position.set(P.x, P.ground + 0.013, P.z);
  rig.blob.scale.set(sc, sc, sc);
  rig.blob.material.opacity = 1 - clamp(h / 2.5) * 0.85;
}
