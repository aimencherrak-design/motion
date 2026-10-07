import * as THREE from 'three';
import { grassTexture, dirtTexture, mat } from '../lib/materials.js';
import { rng, TAU } from '../lib/util.js';
import { tree, bush, rock, fence, grassField, flowerField, shade, blobGeo } from './props.js';

// La prairie derrière la colline : chemin de terre, gros rocher, lisière de la forêt.
export const MEADOW = {
  pathZ: (x) => 1.6 * Math.sin(x / 11),
  rock: [12, 0, -2.6],
  rockTop: 1.42,
  ballTree: [46, 0, -16],
};

export function createMeadow() {
  const g = new THREE.Group();
  g.name = 'meadow';
  const R = rng(21);
  const gt = grassTexture('#79c957');
  gt.repeat.set(36, 36);
  const ground = shade(new THREE.Mesh(new THREE.CircleGeometry(150, 64), new THREE.MeshStandardMaterial({ map: gt, roughness: 0.95 })), false, true);
  ground.rotation.x = -Math.PI / 2;
  ground.position.x = 10;
  g.add(ground);

  // chemin sinueux
  const dt = dirtTexture();
  dt.repeat.set(30, 1);
  const pts = [];
  for (let x = -40; x <= 60; x += 2) pts.push(new THREE.Vector3(x, 0, MEADOW.pathZ(x)));
  const curve = new THREE.CatmullRomCurve3(pts);
  const N = 200, W = 1.2;
  const pos = [], uv = [], idx = [];
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const p = curve.getPoint(u), tg = curve.getTangent(u);
    const nx = -tg.z, nz = tg.x;
    const w = W * (1 + 0.15 * Math.sin(u * 37));
    pos.push(p.x + nx * w, 0.012, p.z + nz * w, p.x - nx * w, 0.012, p.z - nz * w);
    uv.push(u * 30, 0, u * 30, 1);
    if (i < N) idx.push(i * 2, i * 2 + 1, i * 2 + 2, i * 2 + 1, i * 2 + 3, i * 2 + 2);
  }
  const pg = new THREE.BufferGeometry();
  pg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  pg.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  pg.setIndex(idx);
  pg.computeVertexNormals();
  const path = shade(new THREE.Mesh(pg, new THREE.MeshStandardMaterial({ map: dt, roughness: 1 })), false, true);
  g.add(path);

  // gros rocher (Leo y grimpe)
  const rk = rock({ r: 1.25, seed: 5, sy: 0.95, color: 0xa79fbd });
  rk.position.set(...MEADOW.rock);
  g.add(rk);
  const moss = shade(new THREE.Mesh(blobGeo(0.75, 15, 0.15), new THREE.MeshStandardMaterial({ color: 0x6fbf4f, roughness: 0.95 })));
  moss.scale.set(1.15, 0.28, 1.0);
  moss.position.set(MEADOW.rock[0] - 0.1, 1.24, MEADOW.rock[2] + 0.05);
  g.add(moss);
  for (let i = 0; i < 5; i++) {
    const f = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), mat([0xffd23f, 0xffffff, 0xff8fbd][i % 3]));
    f.position.set(MEADOW.rock[0] - 0.6 + i * 0.28, 1.33 + (i % 2) * 0.03, MEADOW.rock[2] + 0.35 - (i % 3) * 0.3);
    g.add(f);
  }
  const rk2 = rock({ r: 0.55, seed: 9, color: 0xc4bdd4 });
  rk2.position.set(MEADOW.rock[0] + 1.3, 0, MEADOW.rock[2] - 0.7);
  g.add(rk2);
  for (let i = 0; i < 10; i++) {
    const s = rock({ r: 0.15 + R() * 0.25, seed: 30 + i, color: 0xc8c2d6 });
    const x = -20 + R() * 60;
    s.position.set(x, 0, MEADOW.pathZ(x) + (R() < 0.5 ? -1 : 1) * (1.7 + R() * 2));
    g.add(s);
  }

  // clôture le long du chemin
  g.add(fence([-14, 0, 2.6], [-2, 0, 3.0], 6));
  g.add(fence([20, 0, 3.6], [32, 0, 3.2], 6));

  // arbres en bord de chemin et lisière de forêt
  const trees = [];
  // garder dégagée la ligne de vue entre le rocher et l'arbre du ballon
  const A = [MEADOW.rock[0], MEADOW.rock[2]], Bq = [MEADOW.ballTree[0], MEADOW.ballTree[2]];
  const clearLine = (x, z) => {
    const dx = Bq[0] - A[0], dz = Bq[1] - A[1];
    const u = Math.max(0, Math.min(1, ((x - A[0]) * dx + (z - A[1]) * dz) / (dx * dx + dz * dz)));
    return Math.hypot(x - (A[0] + u * dx), z - (A[1] + u * dz)) > 4 || u > 0.97;
  };
  for (let i = 0; i < 26; i++) {
    const x = -30 + i * 3.6 + R() * 2;
    const side = i % 2 ? 1 : -1;
    const z = MEADOW.pathZ(x) + side * (5 + R() * 9);
    const near = Math.abs(side) * 0 + 1;
    const t = tree({ h: 3 + R() * 1.6, r: 1.1 + R() * 0.5, seed: 400 + i, kind: R() < 0.25 ? 'lolly' : 'round', lod: 2 + near * 0 });
    if (!clearLine(x, z)) continue;
    t.position.set(x, 0, z);
    g.add(t);
    trees.push(t);
  }
  for (let i = 0; i < 34; i++) {
    const x = 20 + i * 2.2 + R() * 1.5;
    const z = -18 - R() * 10;
    const t = tree({ h: 4 + R() * 2, r: 1.4 + R() * 0.6, seed: 500 + i, kind: R() < 0.3 ? 'pine' : 'round', colors: [0x3f9f4a, 0x4fae47, 0x358a45, 0x5dbb4a, 0x2f7f40], lod: 2, cast: false });
    if (!clearLine(x, z)) continue;
    t.position.set(x, 0, z);
    g.add(t);
  }
  // l'arbre derrière lequel le ballon apparaît
  const bt = tree({ h: 5, r: 1.8, seed: 777, kind: 'round', colors: [0x4fae47, 0x5dbb4a, 0x3f9f4a] });
  bt.position.set(...MEADOW.ballTree);
  g.add(bt);

  for (let i = 0; i < 18; i++) {
    const x = -25 + R() * 70;
    const b = bush({ r: 0.4 + R() * 0.4, seed: 600 + i, flowers: [0xffd23f, 0xff8fbd, null, 0xffffff][i % 4] });
    b.position.set(x, 0, MEADOW.pathZ(x) + (R() < 0.5 ? -1 : 1) * (2 + R() * 4));
    if (!clearLine(b.position.x, b.position.z)) continue;
    g.add(b);
  }
  g.add(grassField({ count: 2600, seed: 7, h: 0.28, area: (r) => { const x = -30 + r() * 80, z = -25 + r() * 40; return Math.abs(z - MEADOW.pathZ(x)) < 1.5 ? null : [x, z]; } }));
  g.add(flowerField({ count: 900, seed: 8, area: (r) => { const x = -30 + r() * 80, z = -25 + r() * 40; return Math.abs(z - MEADOW.pathZ(x)) < 1.6 ? null : [x, z]; } }));

  // collines au loin
  const farM = [0x8fcf7a, 0x9fd6a0, 0xa9d8c8].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 1 }));
  for (let i = 0; i < 9; i++) {
    const a = (i / 9) * TAU;
    const h = shade(new THREE.Mesh(blobGeo(1, 70 + i, 0.03, 3), farM[i % 3]), false, false);
    h.scale.set(55 + R() * 30, 16 + R() * 14, 40);
    h.position.set(10 + Math.cos(a) * 130, -6, Math.sin(a) * 130);
    g.add(h);
  }
  const m = { group: g, ballTree: bt };
  m.update = () => {};
  return m;
}
