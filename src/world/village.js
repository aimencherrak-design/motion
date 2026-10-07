import * as THREE from 'three';
import { mat, cobbleTexture, grassTexture, glossy } from '../lib/materials.js';
import { rng, TAU } from '../lib/util.js';
import { house, tree, bush, lampPost, bench, bunting, animateBunting, grassField, flowerField, shade, blobGeo, rock, fence } from './props.js';

// Le village de Méli-Mélo : place pavée, fontaine, maisons rondes et colline au nord.
export const VILLAGE = {
  fountain: [-4.2, 0, -3.2],
  play: [1.5, 0, 1.0],
  hillTop: [0, 9, -58],
};

export function createVillage() {
  const g = new THREE.Group();
  g.name = 'village';
  const R = rng(11);

  // sol herbeux + place pavée
  const gt = grassTexture('#86cf62');
  gt.repeat.set(40, 40);
  const ground = shade(new THREE.Mesh(new THREE.CircleGeometry(160, 64), new THREE.MeshStandardMaterial({ map: gt, roughness: 0.95 })), false, true);
  ground.rotation.x = -Math.PI / 2;
  g.add(ground);
  const ct = cobbleTexture();
  ct.repeat.set(4, 4);
  const plaza = shade(new THREE.Mesh(new THREE.CircleGeometry(10, 64), new THREE.MeshStandardMaterial({ map: ct, roughness: 0.85 })), false, true);
  plaza.rotation.x = -Math.PI / 2;
  plaza.position.y = 0.01;
  g.add(plaza);
  const curb = shade(new THREE.Mesh(new THREE.TorusGeometry(10, 0.12, 8, 96), mat(0xe8d6b8)));
  curb.rotation.x = Math.PI / 2;
  curb.position.y = 0.03;
  curb.scale.z = 0.4;
  g.add(curb);
  // chemins de terre qui partent de la place
  const pathM = new THREE.MeshStandardMaterial({ color: 0xe6cf9f, roughness: 0.95 });
  for (const a of [-Math.PI / 2, 0.35, 2.4, -2.6]) {
    const p = shade(new THREE.Mesh(new THREE.PlaneGeometry(2.6, 40), pathM), false, true);
    p.rotation.x = -Math.PI / 2;
    p.rotation.z = -a + Math.PI / 2;
    p.position.set(Math.cos(a) * 29, 0.006, Math.sin(a) * 29);
    g.add(p);
  }

  // fontaine
  const F = new THREE.Group();
  F.position.set(...VILLAGE.fountain);
  g.add(F);
  const stone = mat(0xece1cf, { roughness: 0.75 });
  const basinProf = [[0, 0], [1.55, 0], [1.6, 0.1], [1.6, 0.5], [1.5, 0.58], [1.38, 0.55], [1.34, 0.2], [0, 0.2]].map(([x, y]) => new THREE.Vector2(x, y));
  F.add(shade(new THREE.Mesh(new THREE.LatheGeometry(basinProf, 48), stone)));
  const waterM = new THREE.MeshPhysicalMaterial({ color: 0x5fd0e8, roughness: 0.06, transmission: 0, transparent: true, opacity: 0.88, clearcoat: 1, emissive: 0x1b6f88, emissiveIntensity: 0.25 });
  const water = new THREE.Mesh(new THREE.CircleGeometry(1.36, 48), waterM);
  water.rotation.x = -Math.PI / 2;
  water.position.y = 0.45;
  F.add(water);
  const colProf = [[0.32, 0], [0.22, 0.15], [0.16, 0.5], [0.18, 0.9], [0.0, 0.9]].map(([x, y]) => new THREE.Vector2(x, y));
  const col = shade(new THREE.Mesh(new THREE.LatheGeometry(colProf, 24), stone));
  col.position.y = 0.4;
  F.add(col);
  const bowlProf = [[0, 0], [0.25, 0.02], [0.6, 0.22], [0.66, 0.3], [0.58, 0.31], [0.0, 0.18]].map(([x, y]) => new THREE.Vector2(x, y));
  const bowl = shade(new THREE.Mesh(new THREE.LatheGeometry(bowlProf, 32), stone));
  bowl.position.y = 1.28;
  F.add(bowl);
  const bowlWater = new THREE.Mesh(new THREE.CircleGeometry(0.56, 32), waterM);
  bowlWater.rotation.x = -Math.PI / 2;
  bowlWater.position.y = 1.56;
  F.add(bowlWater);
  const topBall = shade(new THREE.Mesh(new THREE.SphereGeometry(0.16, 20, 14), glossy(0x48bce2)));
  topBall.position.y = 1.75;
  F.add(topBall);
  // gouttes d'eau animées
  const dropGeo = new THREE.SphereGeometry(0.035, 8, 6);
  const dropM = new THREE.MeshStandardMaterial({ color: 0xbff0ff, emissive: 0x6fcbe0, emissiveIntensity: 0.4, roughness: 0.1 });
  const drops = new THREE.InstancedMesh(dropGeo, dropM, 96);
  F.add(drops);
  const ripples = [];
  for (let i = 0; i < 3; i++) {
    const rp = new THREE.Mesh(new THREE.RingGeometry(0.9, 0.95, 48), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.4, depthWrite: false }));
    rp.rotation.x = -Math.PI / 2;
    rp.position.y = 0.455;
    F.add(rp);
    ripples.push(rp);
  }

  // maisons en anneau, portes vers la place ; ouverture au nord (chemin vers la colline)
  const walls = [0xffe2b8, 0xffc9c2, 0xcdf2d8, 0xd6e8ff, 0xfff1a8, 0xf3d6ff, 0xffd8a8];
  const roofs = [0xe85d4a, 0x3fa7d6, 0x8b55d6, 0xff8a3d, 0x2fae8a, 0xe8487a, 0x4a6fe0];
  const houses = [];
  const slots = 11;
  for (let i = 0; i < slots; i++) {
    const a = -Math.PI / 2 + ((i + 0.5) / slots) * TAU;
    // laisser libre la direction nord (-z) : a proche de -PI/2
    const da = Math.atan2(Math.sin(a + Math.PI / 2), Math.cos(a + Math.PI / 2));
    if (Math.abs(da) < 0.35) continue;
    const d = 15 + R() * 2.5;
    const hs = house({ r: 1.7 + R() * 0.6, h: 2.1 + R() * 0.8, wall: walls[i % walls.length], roof: roofs[(i * 3) % roofs.length], seed: 20 + i, dome: i % 4 === 2 });
    hs.position.set(Math.cos(a) * d, 0, Math.sin(a) * d);
    hs.rotation.y = Math.atan2(-hs.position.x, -hs.position.z);
    g.add(hs);
    houses.push(hs);
  }
  // seconde rangée de maisons plus loin (profondeur)
  for (let i = 0; i < 9; i++) {
    const a = -Math.PI / 2 + ((i + 0.1) / 9) * TAU;
    const da = Math.atan2(Math.sin(a + Math.PI / 2), Math.cos(a + Math.PI / 2));
    if (Math.abs(da) < 0.3) continue;
    const d = 25 + R() * 4;
    const hs = house({ r: 1.8 + R() * 0.6, h: 2.3 + R() * 1.0, wall: walls[(i + 3) % walls.length], roof: roofs[(i * 5 + 1) % roofs.length], seed: 60 + i, dome: i % 3 === 1 });
    hs.position.set(Math.cos(a) * d, 0, Math.sin(a) * d);
    hs.rotation.y = Math.atan2(-hs.position.x, -hs.position.z);
    g.add(hs);
  }

  // arbres, buissons, lampadaires, bancs
  for (let i = 0; i < 18; i++) {
    const a = R() * TAU, d = 11.5 + R() * 18;
    const p = [Math.cos(a) * d, Math.sin(a) * d];
    if (houses.some((h) => Math.hypot(h.position.x - p[0], h.position.z - p[1]) < 3.4)) continue;
    if (Math.abs(p[0]) < 2.2 && p[1] < -9) continue;
    const far = Math.hypot(p[0], p[1]) > 18;
    const t = tree({ h: 3 + R() * 1.5, r: 1.1 + R() * 0.5, seed: 100 + i, kind: R() < 0.3 ? 'lolly' : 'round', lod: far ? 2 : 3, cast: !far });
    t.position.set(p[0], 0, p[1]);
    g.add(t);
  }
  for (let i = 0; i < 16; i++) {
    const a = R() * TAU, d = 10.6 + R() * 3;
    const b = bush({ r: 0.45 + R() * 0.3, seed: 200 + i, flowers: [0xff8fbd, 0xffd23f, 0xffffff, null][i % 4] });
    b.position.set(Math.cos(a) * d, 0, Math.sin(a) * d);
    g.add(b);
  }
  const lamps = [[7, 6.5], [-7.5, 5.5], [8, -5], [-8.5, -5.5]];
  for (const [x, z] of lamps) {
    const l = lampPost();
    l.position.set(x, 0, z);
    g.add(l);
  }
  const b1 = bench(); b1.position.set(-7.8, 0, 1.5); b1.rotation.y = Math.PI / 2; g.add(b1);
  const b2 = bench(); b2.position.set(6.5, 0, -7.0); b2.rotation.y = -0.7; g.add(b2);

  const bunts = [
    bunting([7, 2.7, 6.5], [-7.5, 2.7, 5.5], 0.8, 1),
    bunting([7, 2.7, 6.5], [8, 2.7, -5], 0.7, 3),
    bunting([-7.5, 2.7, 5.5], [-8.5, 2.7, -5.5], 0.7, 4),
  ];
  bunts.forEach((b) => g.add(b));

  // herbes et fleurs autour de la place
  g.add(grassField({ count: 1400, seed: 3, area: (r) => { const a = r() * TAU, d = 10.4 + r() * 22; return [Math.cos(a) * d, Math.sin(a) * d]; } }));
  g.add(flowerField({ count: 500, seed: 4, area: (r) => { const a = r() * TAU, d = 10.5 + r() * 20; return [Math.cos(a) * d, Math.sin(a) * d]; } }));

  // la colline au nord, et des collines lointaines
  const hillM = new THREE.MeshStandardMaterial({ color: 0x79c95a, roughness: 0.95 });
  const hill = shade(new THREE.Mesh(blobGeo(1, 7, 0.02, 4), hillM), false, true);
  hill.scale.set(48, 14, 22);
  hill.position.set(0, -4, -62);
  g.add(hill);
  for (let i = 0; i < 9; i++) {
    const t = tree({ h: 3.5, r: 1.5, seed: 300 + i, kind: i % 3 ? 'round' : 'lolly', lod: 2, cast: false });
    const x = -26 + i * 6.5 + R() * 2;
    t.position.set(x, 8.6 - Math.pow(x / 34, 2) * 9, -60 + R() * 3);
    t.scale.setScalar(1.2);
    g.add(t);
  }
  const farM = [0x8fcf7a, 0x9fd6a0, 0xa9d8c8].map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 1 }));
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * TAU + 0.3;
    const h = shade(new THREE.Mesh(blobGeo(1, 40 + i, 0.03, 3), farM[i % 3]), false, false);
    h.scale.set(60 + R() * 30, 18 + R() * 16, 40);
    h.position.set(Math.cos(a) * 140, -6, Math.sin(a) * 140);
    g.add(h);
  }

  const v = { group: g, drops, ripples, bunts, water, F };
  v.update = (t, wind = 1) => {
    const o = new THREE.Object3D();
    for (let i = 0; i < 96; i++) {
      const stream = i % 8, k = Math.floor(i / 8);
      const a = (stream / 8) * TAU;
      const u = ((t * 0.9 + k / 12) % 1);
      const r = 0.6 + u * 0.75;
      const y = 1.55 + 0.25 * u - 1.35 * u * u;
      o.position.set(Math.cos(a) * r, y, Math.sin(a) * r);
      o.scale.setScalar(0.7 + 0.5 * (1 - u));
      o.updateMatrix();
      drops.setMatrixAt(i, o.matrix);
    }
    drops.instanceMatrix.needsUpdate = true;
    ripples.forEach((rp, i) => {
      const u = (t * 0.4 + i / 3) % 1;
      rp.scale.setScalar(0.6 + u * 0.6);
      rp.material.opacity = 0.35 * (1 - u);
    });
    bunts.forEach((b) => animateBunting(b, t, wind));
  };
  return v;
}
