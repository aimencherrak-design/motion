import * as THREE from 'three';
import { grassTexture, mat, softTexture, starTexture } from '../lib/materials.js';
import { rng, TAU, clamp } from '../lib/util.js';
import { tree, bush, rock, grassField, flowerField, shade, blobGeo, mushroom, tallTuft, animateTuft, leafMat } from './props.js';

// La clairière : grand arbre (ballon coincé), buisson, branche-levier, touffe d'herbe.
export const CLEAR = {
  tree: [0, 0, -2.6],
  ball: [2.15, 3.75, -1.9],
  climbBranchBase: [-0.32, 1.95, -2.25],
  bush: [3.55, 0, -2.1],
  pivot: [2.7, 0, 0.2],
  logLow: [1.95, 0.1, -0.95],
  logHigh: [3.45, 0.95, 1.35],
  stump: [4.0, 0, 0.95],
  tuft: [-1.75, 0, 2.95],
  // positions de jeu devant l'arbre
  leo: [-0.3, 0, 1.25],
  maya: [1.05, 0, 1.7],
  bib: [0.35, 0, 1.95],
};

function branch(points, r0, r1, m) {
  const c = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
  const g = new THREE.TubeGeometry(c, 20, 1, 10, false);
  // effilement du tube
  const p = g.attributes.position;
  const n = g.attributes.normal;
  const segs = 21, rad = 11;
  for (let i = 0; i < segs; i++) {
    const u = i / (segs - 1);
    const cp = c.getPoint(u);
    const r = r0 + (r1 - r0) * u;
    for (let j = 0; j < rad; j++) {
      const k = i * rad + j;
      p.setXYZ(k, cp.x + n.getX(k) * r, cp.y + n.getY(k) * r, cp.z + n.getZ(k) * r);
    }
  }
  g.computeVertexNormals();
  return shade(new THREE.Mesh(g, m));
}

export function createClearing() {
  const g = new THREE.Group();
  g.name = 'clearing';
  const R = rng(31);
  const gt = grassTexture('#86d064');
  gt.repeat.set(30, 30);
  const ground = shade(new THREE.Mesh(new THREE.CircleGeometry(80, 64), new THREE.MeshStandardMaterial({ map: gt, roughness: 0.95 })), false, true);
  ground.rotation.x = -Math.PI / 2;
  g.add(ground);

  // --- Le grand arbre ---
  const T = new THREE.Group();
  T.position.set(...CLEAR.tree);
  g.add(T);
  const bark = mat(0x8f5f3e, { roughness: 0.9 });
  const prof = [[0.75, 0], [0.55, 0.15], [0.42, 0.5], [0.36, 1.2], [0.33, 2.4], [0.3, 3.4], [0.2, 4.6], [0.0, 4.8]].map(([x, y]) => new THREE.Vector2(x, y));
  T.add(shade(new THREE.Mesh(new THREE.LatheGeometry(prof, 24), bark)));
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * TAU + 0.3;
    const rt = shade(new THREE.Mesh(new THREE.SphereGeometry(0.28, 14, 10), bark));
    rt.scale.set(2.2, 0.6, 0.9);
    rt.position.set(Math.cos(a) * 0.55, 0.06, Math.sin(a) * 0.55);
    rt.rotation.y = -a;
    T.add(rt);
  }
  // branches principales
  const toLocal = (p) => [p[0] - CLEAR.tree[0], p[1], p[2] - CLEAR.tree[2]];
  T.add(branch([[0, 2.9, 0], [0.9, 3.4, 0.3], [1.7, 3.6, 0.55], [2.5, 3.9, 0.8]], 0.16, 0.05, bark));
  T.add(branch([[0, 3.3, 0], [-1, 4.1, 0.2], [-1.9, 4.6, 0.3]], 0.15, 0.05, bark));
  T.add(branch([[0, 3.8, 0], [0.3, 4.6, -0.9], [0.4, 5.2, -1.6]], 0.14, 0.05, bark));
  T.add(branch([[0, 4.2, 0], [0.8, 5.0, 0.5], [1.2, 5.5, 0.9]], 0.12, 0.04, bark));
  // fourche qui retient le ballon
  const fork = branch([toLocal([1.6, 3.55, -2.05]), toLocal([2.0, 3.75, -1.6]), toLocal([2.25, 4.0, -1.35])], 0.05, 0.025, bark);
  T.add(fork);
  // branche basse (Leo y grimpe ; elle craque)
  const low = new THREE.Group();
  low.position.set(...toLocal(CLEAR.climbBranchBase));
  T.add(low);
  low.add(branch([[0, 0, 0], [-0.6, 0.2, 0.4], [-1.2, 0.5, 0.75]], 0.12, 0.05, bark));
  const lowLeaves = shade(new THREE.Mesh(blobGeo(0.42, 77, 0.1), leafMat(0x5dbb4a)));
  lowLeaves.position.set(-1.35, 0.7, 0.85);
  low.add(lowLeaves);
  // feuillage
  const cols = [0x5dbb4a, 0x4fae47, 0x7ccc4f, 0x68c25a, 0x3f9f4a];
  const canopy = new THREE.Group();
  T.add(canopy);
  const blobs = [[0, 5.6, 0, 1.9], [-1.6, 4.9, 0.3, 1.3], [1.3, 5.3, -0.4, 1.4], [0.4, 6.5, -0.2, 1.4], [-0.6, 5.2, -1.4, 1.4], [0.9, 4.9, 1.0, 1.1], [-1.2, 6.0, 1.0, 1.0], [1.3, 5.0, 1.3, 0.8], [-2.1, 4.5, -0.4, 0.7]];
  blobs.forEach(([x, y, z, r], i) => {
    const b = shade(new THREE.Mesh(blobGeo(r, 900 + i, 0.09), leafMat(cols[i % cols.length])));
    b.position.set(x, y, z);
    canopy.add(b);
  });
  // petites pommes décoratives
  for (let i = 0; i < 10; i++) {
    const f = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 8), mat(0xffb03b, { roughness: 0.4 }));
    const [x, y, z, r] = blobs[i % blobs.length];
    const d = new THREE.Vector3(R() * 2 - 1, R() * 0.5 - 0.7, R() * 2 - 1).normalize();
    f.position.set(x + d.x * r, y + d.y * r, z + d.z * r);
    canopy.add(f);
  }

  // --- buisson (Bibou s'y écrase) ---
  const bsh = bush({ r: 0.9, seed: 66, color: 0x4fa648, flowers: 0xff8fbd });
  bsh.position.set(...CLEAR.bush);
  g.add(bsh);

  // --- levier : grosse branche posée sur un rocher ---
  const pivotRock = rock({ r: 0.42, seed: 3, sy: 0.85, color: 0xb9b3c6 });
  pivotRock.position.set(...CLEAR.pivot);
  g.add(pivotRock);
  const lever = new THREE.Group();
  lever.position.set(CLEAR.pivot[0], 0.62, CLEAR.pivot[2]);
  g.add(lever);
  const lowV = new THREE.Vector3(...CLEAR.logLow), highV = new THREE.Vector3(...CLEAR.logHigh);
  const dirV = highV.clone().sub(lowV);
  const len = dirV.length() + 0.4;
  const yaw = Math.atan2(-(highV.z - lowV.z), highV.x - lowV.x);
  lever.rotation.y = yaw;
  const tilt = new THREE.Group();
  lever.add(tilt);
  const logM = mat(0xa0704a, { roughness: 0.85 });
  const log = shade(new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, len, 14), logM));
  log.rotation.z = Math.PI / 2;
  log.position.x = -0.0;
  tilt.add(log);
  for (const sx of [-1, 1]) {
    const endc = new THREE.Mesh(new THREE.CircleGeometry(0.11, 14), mat(0xe8c99a));
    endc.position.x = sx * len / 2;
    endc.rotation.y = sx * Math.PI / 2;
    tilt.add(endc);
  }
  const twig = branch([[0.3, 0, 0], [0.5, 0.25, 0.1], [0.65, 0.42, 0.05]], 0.035, 0.012, logM);
  tilt.add(twig);
  const pivotX = 0; // le levier pivote au centre ; extrémités à ±len/2
  const restTilt = Math.asin(clamp((highV.y - lowV.y) / (len - 0.4)));

  const stump = shade(new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.34, 0.5, 18), mat(0x9a6a45, { roughness: 0.9 })));
  stump.position.set(CLEAR.stump[0], 0.25, CLEAR.stump[2]);
  g.add(stump);
  const stumpTop = new THREE.Mesh(new THREE.CircleGeometry(0.28, 18), mat(0xe8c99a));
  stumpTop.rotation.x = -Math.PI / 2;
  stumpTop.position.set(CLEAR.stump[0], 0.505, CLEAR.stump[2]);
  g.add(stumpTop);

  // --- touffe d'herbe haute ---
  const tuft = tallTuft({ r: 1.25, h: 1.0, count: 260 });
  tuft.position.set(...CLEAR.tuft);
  g.add(tuft);

  // --- forêt tout autour ---
  for (let i = 0; i < 40; i++) {
    const a = (i / 40) * TAU + R() * 0.1;
    const d = 11 + R() * 9;
    const t = tree({ h: 4.5 + R() * 2.5, r: 1.5 + R() * 0.7, seed: 1000 + i, kind: R() < 0.3 ? 'pine' : 'round', colors: [0x3f9f4a, 0x4fae47, 0x358a45, 0x5dbb4a, 0x2f7f40], lod: 2, cast: false });
    t.position.set(Math.cos(a) * d, 0, Math.sin(a) * d - 2);
    g.add(t);
  }
  for (let i = 0; i < 26; i++) {
    const a = (i / 26) * TAU + R() * 0.2;
    const d = 26 + R() * 10;
    const t = tree({ h: 7 + R() * 3, r: 2.4, seed: 1100 + i, kind: 'round', colors: [0x358a45, 0x2f7f40, 0x3f9f4a], lod: 1, cast: false });
    t.position.set(Math.cos(a) * d, 0, Math.sin(a) * d);
    g.add(t);
  }
  for (let i = 0; i < 14; i++) {
    const a = R() * TAU, d = 7.5 + R() * 3.5;
    const b = bush({ r: 0.5 + R() * 0.35, seed: 1200 + i, color: [0x4fa648, 0x5dbb4a, 0x3f9f4a][i % 3], flowers: [0xffd23f, null, 0xffffff][i % 3] });
    b.position.set(Math.cos(a) * d, 0, Math.sin(a) * d - 2);
    if (b.position.z > 2.5 && Math.abs(b.position.x) < 5) continue;
    g.add(b);
  }
  for (let i = 0; i < 9; i++) {
    const a = R() * TAU, d = 0.9 + R() * 0.6;
    const m = mushroom(0.7 + R() * 0.6, i);
    m.position.set(CLEAR.tree[0] + Math.cos(a) * d, 0, CLEAR.tree[2] + Math.sin(a) * d);
    g.add(m);
  }
  g.add(grassField({ count: 1500, seed: 9, h: 0.24, area: (r) => { const a = r() * TAU, d = 1 + Math.sqrt(r()) * 14; const x = Math.cos(a) * d, z = Math.sin(a) * d - 1; return Math.hypot(x - CLEAR.tuft[0], z - CLEAR.tuft[2]) < 1.4 ? null : [x, z]; } }));
  g.add(flowerField({ count: 600, seed: 10, area: (r) => { const a = r() * TAU, d = 1.5 + Math.sqrt(r()) * 12; return [Math.cos(a) * d, Math.sin(a) * d - 1]; } }));

  // rayons de lumière et pollen magique
  const rayTex = (() => {
    const c = document.createElement('canvas'); c.width = 64; c.height = 256;
    const x = c.getContext('2d');
    const gr = x.createLinearGradient(0, 0, 0, 256);
    gr.addColorStop(0, 'rgba(255,250,220,0.0)'); gr.addColorStop(0.25, 'rgba(255,250,220,0.55)'); gr.addColorStop(1, 'rgba(255,250,220,0)');
    x.fillStyle = gr; x.fillRect(0, 0, 64, 256);
    const gh = x.createLinearGradient(0, 0, 64, 0);
    gh.addColorStop(0, 'rgba(0,0,0,1)'); gh.addColorStop(0.5, 'rgba(0,0,0,0)'); gh.addColorStop(1, 'rgba(0,0,0,1)');
    x.globalCompositeOperation = 'destination-out'; x.fillStyle = gh; x.fillRect(0, 0, 64, 256);
    return new THREE.CanvasTexture(c);
  })();
  const rays = [];
  for (let i = 0; i < 5; i++) {
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.4 + R(), 16), new THREE.MeshBasicMaterial({ map: rayTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.35, side: THREE.DoubleSide, fog: false }));
    m.position.set(-4 + i * 2.2, 6, -3 + R() * 3);
    m.rotation.set(0, R() * 0.6, 0.45);
    g.add(m);
    rays.push({ m, ph: R() * 6 });
  }
  const NP = 140;
  const pg = new THREE.BufferGeometry();
  const pp = new Float32Array(NP * 3);
  pg.setAttribute('position', new THREE.BufferAttribute(pp, 3));
  const pollen = new THREE.Points(pg, new THREE.PointsMaterial({ map: softTexture(), color: 0xfff3b0, size: 0.09, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.9 }));
  const pseed = Array.from({ length: NP }, () => [R() * 12 - 6, R() * 5, R() * 9 - 5, R() * 6]);
  g.add(pollen);

  const c = { group: g, tree: T, low, lever, tilt, log, len, restTilt, bush: bsh, tuft, rays, pollen, canopy };
  // état animé de la clairière
  c.state = { lever: 0, creak: 0, bushShake: 0, tuftWobble: 0, tuftPart: 0, canopyShake: 0 };
  c.update = (t) => {
    const s = c.state;
    // lever : 0 = repos (extrémité de Bibou au sol), 1 = renversé (extrémité de Bibou en l'air)
    tilt.rotation.z = restTilt - s.lever * 2 * restTilt;
    low.rotation.z = -s.creak * 0.12;
    low.rotation.x = Math.sin(t * 40) * 0.02 * s.creak;
    bsh.rotation.z = Math.sin(t * 30) * 0.06 * s.bushShake;
    bsh.scale.set(1 + 0.05 * s.bushShake * Math.sin(t * 25), 1 - 0.04 * s.bushShake, 1);
    canopy.rotation.z = Math.sin(t * 22) * 0.01 * s.canopyShake;
    animateTuft(tuft, t, s.tuftWobble, s.tuftPart);
    rays.forEach(({ m, ph }) => { m.material.opacity = 0.18 + 0.1 * Math.sin(t * 0.6 + ph); });
    for (let i = 0; i < NP; i++) {
      const [x, y, z, ph] = pseed[i];
      pp[i * 3] = x + Math.sin(t * 0.3 + ph) * 0.6;
      pp[i * 3 + 1] = 0.3 + ((y + t * 0.15 + ph) % 5);
      pp[i * 3 + 2] = z + Math.cos(t * 0.25 + ph) * 0.6;
    }
    pg.attributes.position.needsUpdate = true;
  };
  // position monde d'une extrémité du levier (side = -1 côté bas/Bibou, +1 côté haut)
  c.leverEnd = (side) => {
    const v = new THREE.Vector3(side * c.len * 0.5 * (side < 0 ? 1 : 1), 0.13, 0);
    return tilt.localToWorld(v);
  };
  return c;
}
