import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js';
import { PALETTE, fabric, skin, mat, blobTexture } from '../lib/materials.js';
import { makeEye, setEye, FaceDecal, freshFace } from './face.js';
import { clamp, lerp, rng, DEG } from '../lib/util.js';

// Proportions communes aux deux enfants (unités : mètres).
const LEG_T = 0.2, LEG_S = 0.2, HIP_H = 0.47, R_HEAD = 0.25;
const ARM_U = 0.17, ARM_F = 0.15;

function shadowed(m, cast = true) {
  m.castShadow = cast;
  m.receiveShadow = true;
  return m;
}
function cap(r, len, material, seg = 18) {
  return shadowed(new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 8, seg), material));
}
function sph(r, material, ws = 32, hs = 22) {
  return shadowed(new THREE.Mesh(new THREE.SphereGeometry(r, ws, hs), material));
}

// Mèche de cheveux : petite goutte effilée et légèrement courbée.
function tuftGeo(len = 0.11, w = 0.05, bend = 0.25) {
  const pts = [];
  for (let i = 0; i <= 14; i++) {
    const u = i / 14;
    pts.push(new THREE.Vector2(w * Math.pow(Math.max(0, 1 - Math.pow(u, 2.2)), 0.75) + 0.0005, u * len));
  }
  const g = new THREE.LatheGeometry(pts, 14);
  const pos = g.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    const y = pos.getY(i) / len;
    pos.setZ(i, pos.getZ(i) + bend * len * y * y);
  }
  g.computeVertexNormals();
  return g;
}

// Silhouette du haut (sweat / veste) par révolution d'un profil.
function torsoGeo() {
  const prof = [
    [0.0, -0.01], [0.17, -0.01], [0.185, 0.02], [0.2, 0.1], [0.198, 0.2], [0.185, 0.28],
    [0.16, 0.34], [0.12, 0.38], [0.075, 0.405], [0.0, 0.41],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const g = new THREE.LatheGeometry(prof, 40);
  g.scale(1, 1, 0.78);
  g.computeVertexNormals();
  return g;
}

export function createHuman(kind) {
  const isLeo = kind === 'leo';
  const C = isLeo
    ? { skin: PALETTE.leoSkin, hair: PALETTE.leoHair, top: PALETTE.leoSweat, topDark: PALETTE.leoSweatDark, pants: PALETTE.leoPants, shoe: PALETTE.leoShoes, bag: PALETTE.leoBag, bagDark: PALETTE.leoBagDark, iris: PALETTE.leoIris }
    : { skin: PALETTE.mayaSkin, hair: PALETTE.mayaHair, top: PALETTE.mayaJacket, topDark: PALETTE.mayaJacketLight, pants: PALETTE.mayaPants, shoe: PALETTE.mayaShoes, bag: PALETTE.mayaBag, bagDark: PALETTE.mayaBagDark, iris: PALETTE.mayaIris };

  const mSkin = skin(C.skin);
  const mHair = new THREE.MeshPhysicalMaterial({ color: C.hair, roughness: 0.55, sheen: 0.5, sheenRoughness: 0.45, sheenColor: new THREE.Color(C.hair).lerp(new THREE.Color(0xffd0a0), 0.35) });
  const mTop = fabric(C.top);
  const mTopDark = fabric(C.topDark);
  const mPants = fabric(C.pants);
  const mShoe = new THREE.MeshPhysicalMaterial({ color: C.shoe, roughness: 0.45, clearcoat: 0.3 });
  const mSole = mat(PALETTE.sole, { roughness: 0.7 });
  const mBag = fabric(C.bag);
  const mBagDark = fabric(C.bagDark);
  const mWhite = mat(0xffffff, { roughness: 0.6 });

  const root = new THREE.Group();
  root.name = kind;
  const body = new THREE.Group(); // pivot au sol pour les chutes et inclinaisons globales
  root.add(body);
  const hips = new THREE.Group();
  hips.position.y = HIP_H;
  body.add(hips);

  const pelvis = sph(0.15, mPants);
  pelvis.scale.set(1, 0.42, 0.78);
  pelvis.position.y = 0.01;
  hips.add(pelvis);

  // Jambes
  const legs = {};
  for (const s of [1, -1]) {
    const leg = new THREE.Group();
    leg.position.set(0.085 * s, -0.02, 0);
    hips.add(leg);
    const thigh = cap(0.068, LEG_T - 0.02, mPants);
    thigh.position.y = -LEG_T / 2;
    leg.add(thigh);
    const knee = new THREE.Group();
    knee.position.y = -LEG_T;
    leg.add(knee);
    const shin = cap(0.062, LEG_S - 0.03, mPants);
    shin.position.y = -LEG_S / 2;
    knee.add(shin);
    const cuff = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.074, 0.05, 20), mPants));
    cuff.position.y = -LEG_S + 0.04;
    knee.add(cuff);
    const foot = new THREE.Group();
    foot.position.y = -LEG_S;
    knee.add(foot);
    // Basket : tige, semelle, bout et lacets
    const shoe = sph(0.07, mShoe);
    shoe.scale.set(1.08, 0.82, 1.6);
    shoe.position.set(0, -0.028, 0.035);
    foot.add(shoe);
    const sole = sph(0.072, mSole);
    sole.scale.set(1.12, 0.32, 1.68);
    sole.position.set(0, -0.06, 0.035);
    foot.add(sole);
    const toe = sph(0.05, isLeo ? mSole : mat(PALETTE.mayaShoesAccent));
    toe.scale.set(1.3, 0.7, 1);
    toe.position.set(0, -0.045, 0.12);
    foot.add(toe);
    for (let i = 0; i < 3; i++) {
      const lace = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.008, 0.012), isLeo ? mWhite : mat(PALETTE.mayaShoesAccent)), false);
      lace.position.set(0, 0.022 - i * 0.006, 0.03 + i * 0.028);
      lace.rotation.x = -0.5;
      foot.add(lace);
    }
    legs[s > 0 ? 'L' : 'R'] = { leg, knee, foot };
  }

  // Buste
  const spine = new THREE.Group();
  spine.position.y = 0.0;
  hips.add(spine);
  const torso = shadowed(new THREE.Mesh(torsoGeo(), mTop));
  spine.add(torso);
  const hem = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.026, 10, 40), mTopDark));
  hem.rotation.x = Math.PI / 2;
  hem.scale.set(1, 0.78, 1);
  hem.position.y = 0.0;
  spine.add(hem);
  if (isLeo) {
    const pocket = shadowed(new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.09, 0.03, 3, 0.02), mTopDark));
    pocket.position.set(0, 0.09, 0.148);
    pocket.rotation.x = -0.08;
    spine.add(pocket);
    const hood = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.1, 0.045, 12, 30), mTop));
    hood.position.set(0, 0.39, -0.05);
    hood.rotation.x = Math.PI / 2 - 0.5;
    spine.add(hood);
    for (const s of [1, -1]) {
      const str = cap(0.009, 0.1, mWhite, 8);
      str.position.set(0.035 * s, 0.31, 0.135);
      str.rotation.x = -0.25;
      spine.add(str);
      const tip = sph(0.014, mWhite, 10, 8);
      tip.position.set(0.035 * s, 0.25, 0.15);
      spine.add(tip);
    }
  } else {
    const zip = shadowed(new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.36, 0.02), mTopDark));
    zip.position.set(0, 0.2, 0.152);
    zip.rotation.x = -0.05;
    spine.add(zip);
    const pull = shadowed(new THREE.Mesh(new RoundedBoxGeometry(0.022, 0.04, 0.012, 2, 0.005), mat(0xf5f5f5)));
    pull.position.set(0, 0.33, 0.16);
    spine.add(pull);
    const collar = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.085, 0.11, 0.07, 30, 1, true), mTopDark));
    collar.material = mTopDark.clone();
    collar.material.side = THREE.DoubleSide;
    collar.position.y = 0.41;
    spine.add(collar);
    for (const s of [1, -1]) {
      const pk = shadowed(new THREE.Mesh(new RoundedBoxGeometry(0.075, 0.05, 0.02, 2, 0.01), mTopDark));
      pk.position.set(0.1 * s, 0.1, 0.14);
      pk.rotation.y = 0.45 * s;
      spine.add(pk);
    }
  }

  // Sac à dos
  const bag = shadowed(new THREE.Mesh(new RoundedBoxGeometry(0.25, 0.27, 0.12, 4, 0.05), mBag));
  bag.position.set(0, 0.2, -0.19);
  spine.add(bag);
  const bagPocket = shadowed(new THREE.Mesh(new RoundedBoxGeometry(0.17, 0.11, 0.05, 3, 0.02), mBagDark));
  bagPocket.position.set(0, 0.14, -0.255);
  spine.add(bagPocket);
  const flap = shadowed(new THREE.Mesh(new RoundedBoxGeometry(0.24, 0.07, 0.13, 3, 0.03), mBagDark));
  flap.position.set(0, 0.31, -0.19);
  spine.add(flap);
  for (const s of [1, -1]) {
    const strap = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.11, 0.016, 8, 24, Math.PI), mBagDark));
    strap.position.set(0.095 * s, 0.3, -0.03);
    strap.rotation.y = Math.PI / 2;
    strap.scale.set(1.05, 0.95, 1);
    spine.add(strap);
  }

  // Bras
  const arms = {};
  for (const s of [1, -1]) {
    const sh = new THREE.Group();
    sh.position.set(0.178 * s, 0.33, 0);
    spine.add(sh);
    const ball = sph(0.06, mTop);
    sh.add(ball);
    const upper = cap(0.058, ARM_U - 0.04, mTop);
    upper.position.y = -ARM_U / 2;
    sh.add(upper);
    const elbow = new THREE.Group();
    elbow.position.y = -ARM_U;
    sh.add(elbow);
    const fore = cap(0.054, ARM_F - 0.04, mTop);
    fore.position.y = -ARM_F / 2;
    elbow.add(fore);
    const cuff = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.048, 0.016, 8, 20), mTopDark));
    cuff.rotation.x = Math.PI / 2;
    cuff.position.y = -ARM_F + 0.01;
    elbow.add(cuff);
    const hand = new THREE.Group();
    hand.position.y = -ARM_F - 0.035;
    elbow.add(hand);
    const palm = sph(0.05, mSkin, 20, 14);
    palm.scale.set(0.95, 1.05, 0.78);
    hand.add(palm);
    const thumb = sph(0.021, mSkin, 12, 8);
    thumb.scale.set(1, 1.5, 1);
    thumb.position.set(0, 0.0, 0.04);
    thumb.rotation.x = 0.5;
    hand.add(thumb);
    const finger = cap(0.016, 0.05, mSkin, 10);
    finger.position.set(0, -0.075, 0.012);
    hand.add(finger);
    arms[s > 0 ? 'L' : 'R'] = { sh, elbow, hand, finger, thumb };
  }

  // Cou et tête
  const neck = new THREE.Group();
  neck.position.y = 0.4;
  spine.add(neck);
  const neckMesh = shadowed(new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.065, 0.08, 16), mSkin));
  neckMesh.position.y = 0.02;
  neck.add(neckMesh);
  const head = new THREE.Group();
  head.position.y = 0.045 + R_HEAD * 0.86;
  neck.add(head);
  const skull = sph(R_HEAD, mSkin, 56, 40);
  head.add(skull);
  for (const s of [1, -1]) {
    const ear = sph(0.055, mSkin, 18, 12);
    ear.scale.set(0.55, 1, 0.8);
    ear.position.set(0.245 * s, -0.02, -0.01);
    head.add(ear);
  }
  const nose = sph(0.032, skin(new THREE.Color(C.skin).lerp(new THREE.Color(0xff9a8a), 0.25).getHex()), 18, 12);
  nose.scale.set(1.1, 0.85, 0.9);
  nose.position.set(0, -0.045, R_HEAD - 0.005);
  head.add(nose);

  const decal = new FaceDecal({ R: R_HEAD, freckles: isLeo });
  head.add(decal.mesh);

  const eyes = {};
  const ER = 0.088;
  for (const s of [1, -1]) {
    const e = makeEye({ r: ER, iris: C.iris, lidMat: mSkin, side: s, lash: !isLeo, lashColor: 0x2b1a12, irisDeg: 44, pupilDeg: 22 });
    e.oval = 1.12;
    const ex = 0.087 * s, ey = 0.02;
    const ez = Math.sqrt(R_HEAD * R_HEAD - ex * ex - ey * ey) - ER * 0.74;
    e.socket.position.set(ex, ey, ez);
    e.socket.rotation.y = 0.06 * s;
    head.add(e.socket);
    eyes[s > 0 ? 'L' : 'R'] = e;
  }

  // Sourcils (arcs) posés sur la surface du crâne.
  const brows = {};
  const mBrow = mat(new THREE.Color(C.hair).multiplyScalar(0.8).getHex(), { roughness: 0.7 });
  for (const s of [1, -1]) {
    const g = new THREE.Group();
    const b = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.055, 0.0135, 8, 16, 1.5), mBrow), false);
    b.rotation.z = Math.PI / 2 - 0.75;
    b.position.y = -0.045;
    g.add(b);
    head.add(g);
    brows[s > 0 ? 'L' : 'R'] = g;
  }

  // Cheveux
  const hair = new THREE.Group();
  head.add(hair);
  const hairCap = shadowed(new THREE.Mesh(new THREE.SphereGeometry(R_HEAD * 1.045, 48, 24, 0, Math.PI * 2, 0, Math.PI * 0.42), mHair));
  hairCap.rotation.x = -0.46;
  hair.add(hairCap);
  const hairBack = shadowed(new THREE.Mesh(new THREE.SphereGeometry(R_HEAD * 1.035, 48, 24, 0, Math.PI * 2, 0, Math.PI * 0.5), mHair));
  hairBack.rotation.x = -1.3;
  hair.add(hairBack);
  const tufts = [];
  // dir : point d'attache ; len/w : taille ; spin : orientation de la courbure ; bend : courbure ; tip : inclinaison
  const addTuft = (dir, len, w, spin, bend = 0.6, tip = 0) => {
    const t = shadowed(new THREE.Mesh(tuftGeo(len, w, bend), mHair));
    const d = new THREE.Vector3(...dir).normalize();
    t.position.copy(d).multiplyScalar(R_HEAD * 0.97);
    t.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d);
    t.rotateY(spin);
    t.rotateX(tip);
    hair.add(t);
    tufts.push(t);
    return t;
  };
  const pigtails = [];
  if (isLeo) {
    const r = rng(42);
    // mèches souples, un peu en bataille
    const spots = [
      [0, 1, 0.15], [0.4, 0.92, 0.2], [-0.4, 0.92, 0.15], [0.18, 0.9, -0.35], [-0.22, 0.88, -0.4],
      [0.6, 0.7, -0.15], [-0.62, 0.68, -0.1], [0.05, 0.62, -0.78], [0.45, 0.5, -0.7], [-0.45, 0.5, -0.7],
      [0.05, 0.98, 0.45], [0.7, 0.55, 0.2], [-0.7, 0.55, 0.2],
    ];
    for (const [x, y, z] of spots) addTuft([x, y, z], 0.1 + r() * 0.04, 0.065, Math.atan2(x, z) + Math.PI + (r() - 0.5) * 1.4, 0.7 + r() * 0.4, 0.5 + r() * 0.3);
    // frange qui retombe sur le front
    addTuft([0.28, 0.78, 0.55], 0.1, 0.06, 0.4, 0.9, 1.1);
    addTuft([0.0, 0.82, 0.58], 0.11, 0.065, -0.2, 0.9, 1.15);
    addTuft([-0.3, 0.76, 0.56], 0.1, 0.06, -0.6, 0.9, 1.1);
    // épi rebelle sur le sommet
    addTuft([0.12, 1, -0.05], 0.13, 0.04, 2.6, 1.2, 0.2);
  } else {
    // frange arrondie
    const bangs = [[-0.36, 0.74, 0.56], [-0.12, 0.8, 0.58], [0.12, 0.8, 0.58], [0.36, 0.74, 0.56]];
    bangs.forEach((d, i) => addTuft(d, 0.1, 0.07, (i - 1.5) * 0.3, 1.0, 1.15));
    for (const s of [1, -1]) {
      addTuft([0.85 * s, 0.25, 0.2], 0.12, 0.065, s * 0.3, 0.6, 1.4);
      const piv = new THREE.Group();
      piv.position.set(0.19 * s, -0.01, -0.15);
      hair.add(piv);
      const tie = shadowed(new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.015, 10, 20), mat(PALETTE.mayaTie, { roughness: 0.4 })));
      tie.rotation.set(0.3, Math.PI / 2 - 0.4 * s, 0);
      piv.add(tie);
      const tail = new THREE.Group();
      piv.add(tail);
      const bunch = sph(0.062, mHair, 24, 16);
      bunch.scale.set(0.9, 1.5, 0.9);
      bunch.position.y = -0.085;
      tail.add(bunch);
      const curl = shadowed(new THREE.Mesh(tuftGeo(0.07, 0.04, 1.2), mHair));
      curl.rotation.z = Math.PI;
      curl.position.y = -0.17;
      tail.add(curl);
      pigtails.push({ piv, tail, s });
    }
  }

  // Ombre douce au sol
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2;
  blob.renderOrder = 1;

  const rig = { kind, root, body, hips, spine, neck, head, legs, arms, eyes, brows, decal, hair, pigtails, blob, tufts };
  rig.pose = defaultPose();
  return rig;
}

export function defaultPose() {
  return {
    x: 0, y: 0, z: 0, ry: 0, ground: 0,
    bob: 0, fall: 0, fallSide: 0,
    lean: 0, side: 0, twist: 0, crouch: 0,
    headYaw: 0, headUp: 0, headTilt: 0,
    aL: { f: 0, o: 0.12, t: 0, b: 0.15 }, aR: { f: 0, o: 0.12, t: 0, b: 0.15 },
    hL: { point: 0 }, hR: { point: 0 },
    lL: { f: 0, o: 0, k: 0, a: 0 }, lR: { f: 0, o: 0, k: 0, a: 0 },
    squash: 1, hairBounce: 0, scale: 1,
    face: freshFace(),
  };
}

export function applyHuman(rig, P) {
  rig.root.position.set(P.x, P.y + P.ground, P.z);
  rig.root.rotation.y = P.ry;
  rig.root.scale.setScalar(P.scale);
  // chute vers l'arrière (fall > 0) ou vers l'avant (fall < 0), pivot aux pieds
  rig.body.rotation.x = -P.fall;
  rig.body.rotation.z = P.fallSide;

  // accroupissement : genoux pliés, pieds restent au sol
  const c = clamp(P.crouch, -0.2, 1.4);
  const hipF = c * 0.75, knee = c * 1.5;
  const drop = LEG_T + LEG_S - (LEG_T * Math.cos(hipF) + LEG_S * Math.cos(knee - hipF));
  rig.hips.position.y = HIP_H + P.bob - drop;
  rig.hips.rotation.x = c * 0.25;
  rig.spine.rotation.set(P.lean, P.twist, P.side);
  rig.spine.scale.set(1 / Math.sqrt(P.squash), P.squash, 1 / Math.sqrt(P.squash));

  for (const k of ['L', 'R']) {
    const s = k === 'L' ? 1 : -1;
    const lp = P['l' + k];
    const g = rig.legs[k];
    g.leg.rotation.set(-(lp.f + hipF) - c * 0.25, 0, lp.o * s);
    g.knee.rotation.x = lp.k + knee;
    g.foot.rotation.x = -(lp.k + knee) + (lp.f + hipF) + c * 0.25 + lp.a;

    const ap = P['a' + k];
    const a = rig.arms[k];
    a.sh.rotation.set(-ap.f, ap.t * s, ap.o * s, 'ZXY');
    a.elbow.rotation.x = -ap.b;
    const hp = P['h' + k];
    a.finger.visible = hp.point > 0.02;
    a.finger.scale.set(1, hp.point, 1);
    a.finger.position.set(0, -0.045 - 0.032 * hp.point, 0.012);
  }

  rig.head.rotation.set(-P.headUp, P.headYaw, P.headTilt, 'YXZ');

  // visage
  const f = P.face;
  for (const k of ['L', 'R']) {
    setEye(rig.eyes[k], { eo: f.eo * (k === 'L' ? f.eoL ?? 1 : f.eoR ?? 1), lo: f.lo, tilt: f.tilt, lx: f.lx, ly: f.ly, es: f.es });
  }
  const R = R_HEAD + 0.012;
  for (const k of ['L', 'R']) {
    const s = k === 'L' ? 1 : -1;
    const raise = k === 'L' ? f.bL : f.bR;
    const ang = k === 'L' ? f.baL : f.baR;
    const bx = 0.095 * s, by = 0.142 + raise * 0.026;
    const bz = Math.sqrt(Math.max(0.001, R * R - bx * bx - by * by));
    const g = rig.brows[k];
    g.position.set(bx, by, bz);
    g.rotation.set(-Math.asin(by / R) * 0.9, Math.asin(bx / R) * 0.9, -ang * 0.42 * s, 'YXZ');
  }
  rig.decal.update(f, -0.115);

  // couettes : petit balancement secondaire
  for (const p of rig.pigtails) {
    p.tail.rotation.z = (0.75 + P.hairBounce * 0.3) * p.s;
    p.tail.rotation.x = 0.35 + P.hairBounce * 0.25;
  }

  // ombre de contact
  const h = Math.max(0, P.y);
  const sc = 0.75 * (1 - clamp(h / 3) * 0.6);
  rig.blob.position.set(P.x, P.ground + 0.012, P.z);
  rig.blob.scale.set(sc, sc, sc);
  rig.blob.material.opacity = 1 - clamp(h / 3) * 0.8;
}

export { R_HEAD, HIP_H };
