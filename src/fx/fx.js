import * as THREE from 'three';
import { softTexture, starTexture, mat } from '../lib/materials.js';
import { rng, clamp, lerp } from '../lib/util.js';

// Effets sans état : chaque effet est recalculé à partir du temps écoulé depuis son déclenchement.
export function createFX(scene) {
  const group = new THREE.Group();
  scene.add(group);
  const mk = (tex, n, blending = THREE.NormalBlending) => {
    const arr = [];
    for (let i = 0; i < n; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, blending }));
      s.visible = false;
      group.add(s);
      arr.push(s);
    }
    return { arr, i: 0 };
  };
  const puffs = mk(softTexture(), 160);
  const stars = mk(starTexture(), 90, THREE.AdditiveBlending);
  // feuilles
  const leafShape = new THREE.Shape();
  leafShape.moveTo(0, -0.06); leafShape.quadraticCurveTo(0.05, 0, 0, 0.06); leafShape.quadraticCurveTo(-0.05, 0, 0, -0.06);
  const leafGeo = new THREE.ShapeGeometry(leafShape);
  const leafM = new THREE.MeshStandardMaterial({ side: THREE.DoubleSide, roughness: 0.7 });
  const leaves = new THREE.InstancedMesh(leafGeo, leafM, 120);
  leaves.castShadow = true;
  const lc = [0x5dbb4a, 0x7ccc4f, 0x4fae47, 0x9edc6a];
  const cc = new THREE.Color();
  for (let i = 0; i < 120; i++) leaves.setColorAt(i, cc.set(lc[i % 4]));
  group.add(leaves);
  // étoiles de vertige (3D)
  const starShape = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2, r = i % 2 ? 0.02 : 0.05;
    i ? starShape.lineTo(Math.cos(a) * r, Math.sin(a) * r) : starShape.moveTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  const starGeo = new THREE.ExtrudeGeometry(starShape, { depth: 0.015, bevelEnabled: true, bevelSize: 0.006, bevelThickness: 0.006, bevelSegments: 1 });
  starGeo.center();
  const dizzy = [];
  for (let i = 0; i < 5; i++) {
    const m = new THREE.Mesh(starGeo, new THREE.MeshStandardMaterial({ color: 0xffd23f, emissive: 0xffb000, emissiveIntensity: 0.5, roughness: 0.3 }));
    m.visible = false;
    group.add(m);
    dizzy.push(m);
  }
  // goutte de sueur
  const sweatGeo = new THREE.SphereGeometry(0.03, 12, 10);
  const sp = sweatGeo.attributes.position;
  for (let i = 0; i < sp.count; i++) {
    const y = sp.getY(i);
    if (y > 0) { const k = 1 - y / 0.03 * 0.75; sp.setX(i, sp.getX(i) * k); sp.setZ(i, sp.getZ(i) * k); sp.setY(i, y * 2.0); }
  }
  sweatGeo.computeVertexNormals();
  const sweat = new THREE.Mesh(sweatGeo, new THREE.MeshPhysicalMaterial({ color: 0x9fdcff, roughness: 0.05, clearcoat: 1, transparent: true, opacity: 0.85 }));
  sweat.visible = false;
  group.add(sweat);

  let leafN = 0;
  const o = new THREE.Object3D();
  const fx = {
    begin() {
      for (const p of [puffs, stars]) { p.arr.forEach((s) => (s.visible = false)); p.i = 0; }
      leafN = 0;
      dizzy.forEach((d) => (d.visible = false));
      sweat.visible = false;
    },
    end() {
      leaves.count = leafN;
      leaves.instanceMatrix.needsUpdate = true;
    },
    // nuage de poussière / herbe
    puff(at, t0, t, { n = 10, size = 0.35, spread = 0.6, life = 0.9, color = 0xf3ead8, up = 0.4, seed = 1, opacity = 0.75 } = {}) {
      const dt = t - t0;
      if (dt < 0 || dt > life) return;
      const R = rng(seed);
      const u = dt / life;
      for (let i = 0; i < n && puffs.i < puffs.arr.length; i++) {
        const s = puffs.arr[puffs.i++];
        const a = R() * Math.PI * 2, sp = (0.5 + R() * 0.5) * spread;
        const k = 1 - Math.pow(1 - u, 3);
        s.position.set(at[0] + Math.cos(a) * sp * k, at[1] + 0.05 + up * k * (0.5 + R()), at[2] + Math.sin(a) * sp * k);
        const sz = size * (0.6 + R() * 0.6) * (0.5 + u);
        s.scale.set(sz, sz, sz);
        s.material.color.set(color);
        s.material.opacity = opacity * (1 - u) * clamp(dt / 0.05);
        s.visible = true;
      }
    },
    // étincelles magiques / idée / héroïsme
    sparkle(at, t0, t, { n = 8, radius = 0.35, life = 1.0, size = 0.16, color = 0xfff2a8, seed = 2, rise = 0.2 } = {}) {
      const dt = t - t0;
      if (dt < 0 || dt > life) return;
      const R = rng(seed);
      const u = dt / life;
      for (let i = 0; i < n && stars.i < stars.arr.length; i++) {
        const s = stars.arr[stars.i++];
        const a = R() * Math.PI * 2, e = R() * 2 - 1, d = radius * (0.4 + 0.6 * R()) * (0.3 + 0.7 * Math.sqrt(u));
        s.position.set(at[0] + Math.cos(a) * d, at[1] + e * d * 0.7 + rise * u, at[2] + Math.sin(a) * d);
        const tw = 0.6 + 0.4 * Math.sin(dt * 20 + i);
        const sz = size * tw * Math.sin(Math.min(1, u * 1.2) * Math.PI);
        s.scale.set(sz, sz, sz);
        s.material.color.set(color);
        s.material.opacity = 1;
        s.visible = true;
      }
    },
    // feuilles qui tombent en virevoltant
    leaves(at, t0, t, { n = 12, spread = 0.8, life = 2.5, fall = 2.5, seed = 3, burst = 0.6 } = {}) {
      const dt = t - t0;
      if (dt < 0 || dt > life) return;
      const R = rng(seed);
      for (let i = 0; i < n && leafN < 120; i++) {
        const a = R() * Math.PI * 2, sp = spread * (0.3 + R() * 0.7);
        const ph = R() * 6;
        const k = 1 - Math.exp(-dt * 3);
        const y = at[1] + burst * k * (0.3 + R()) - Math.min(fall, dt * (0.6 + R() * 0.5));
        if (y < 0.02) continue;
        o.position.set(at[0] + Math.cos(a) * sp * k + Math.sin(dt * 3 + ph) * 0.15, y, at[2] + Math.sin(a) * sp * k + Math.cos(dt * 2.5 + ph) * 0.15);
        o.rotation.set(dt * 4 + ph, dt * 3 + ph * 2, Math.sin(dt * 5 + ph));
        const sc = 1.2 + R() * 0.8;
        o.scale.set(sc, sc, sc);
        o.updateMatrix();
        leaves.setMatrixAt(leafN++, o.matrix);
      }
    },
    // petites étoiles qui tournent autour de la tête (étourdi)
    dizzy(center, t, r = 0.22, amt = 1) {
      if (amt <= 0) return;
      dizzy.forEach((d, i) => {
        const a = t * 5 + (i / dizzy.length) * Math.PI * 2;
        d.position.set(center[0] + Math.cos(a) * r, center[1] + Math.sin(a * 2) * 0.03, center[2] + Math.sin(a) * r);
        d.rotation.set(0, -a, 0.3);
        d.scale.setScalar(amt);
        d.visible = true;
      });
    },
    sweat(at, t0, t, life = 1.2) {
      const dt = t - t0;
      if (dt < 0 || dt > life) return;
      sweat.visible = true;
      const u = dt / life;
      sweat.position.set(at[0], at[1] - u * 0.06, at[2]);
      sweat.scale.setScalar(Math.min(1, dt * 6) * (1 - Math.max(0, u - 0.8) * 5));
    },
  };
  return fx;
}
