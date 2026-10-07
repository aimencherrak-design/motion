import * as THREE from 'three';
import { createHuman, applyHuman, defaultPose } from './characters/human.js';
import { createBibou, applyBibou, defaultBibouPose, BR } from './characters/bibou.js';
import { createBall, applyBall, BALL_R } from './characters/ball.js';
import { createLighting } from './world/lighting.js';
import { createSky } from './world/sky.js';
import { createVillage } from './world/village.js';
import { createMeadow } from './world/meadow.js';
import { createClearing } from './world/clearing.js';
import { createFX } from './fx/fx.js';
import { SHOTS, TIMELINE, DURATION } from './shots/index.js';
import { noise1, clamp } from './lib/util.js';

// Moteur de l'épisode : à partir d'un temps t (secondes), construit et rend l'image correspondante.
export class Episode {
  constructor(canvas, width, height, opts = {}) {
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: opts.antialias ?? true, preserveDrawingBuffer: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(1);
    this.renderer.setSize(width, height, false);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(35, width / height, 0.05, 900);
    this.scene.add(this.camera);
    this.lights = createLighting(this.renderer, this.scene);
    this.sky = createSky(this.scene);
    this.sets = { village: createVillage(), meadow: createMeadow(), clearing: createClearing() };
    for (const k in this.sets) this.scene.add(this.sets[k].group);
    this.fogs = {
      village: new THREE.Fog(0xe4f2ff, 45, 260),
      meadow: new THREE.Fog(0xe4f2ff, 40, 230),
      clearing: new THREE.Fog(0xdff0dc, 22, 95),
    };
    this.leo = createHuman('leo');
    this.maya = createHuman('maya');
    this.bibou = createBibou();
    this.ball = createBall();
    for (const r of [this.leo, this.maya, this.bibou, this.ball]) { this.scene.add(r.root, r.blob); this.lights.useEnv(r.root); }
    this.fx = createFX(this.scene);
    // voile noir pour les fondus
    this.fade = new THREE.Mesh(new THREE.PlaneGeometry(10, 10), new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthTest: false, depthWrite: false, fog: false }));
    this.fade.position.z = -0.3;
    this.fade.renderOrder = 999;
    this.camera.add(this.fade);
    this.duration = DURATION;
    this.timeline = TIMELINE;
    this._v = new THREE.Vector3();
  }

  resize(w, h) {
    this.renderer.setSize(w, h, false);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  shotAt(T) {
    const tl = this.timeline;
    let i = 0;
    while (i < tl.length - 1 && T >= tl[i + 1].start) i++;
    return tl[i];
  }

  renderAt(T) {
    T = clamp(T, 0, this.duration - 1e-4);
    const entry = this.shotAt(T);
    const shot = entry.shot;
    const t = T - entry.start;
    const cam = this.camera;
    const S = {
      T, t, shot, dur: shot.dur,
      leo: defaultPose(), maya: defaultPose(), bib: defaultBibouPose(),
      ball: { x: 0, y: BALL_R, z: 0, rx: 0, ry: 0, rz: 0, sq: 1, ground: 0, visible: true },
      vis: { leo: true, maya: true, bib: true, ball: true },
      attach: null,
      set: this.sets[shot.set],
      fx: this.fx,
      sky: this.sky,
      fadeA: 0,
      wind: 1,
      light: { ...(shot.light || {}) },
      _cam: { pos: [0, 2, 8], look: [0, 1, 0], fov: 35, roll: 0, shake: 0, shakeF: 14 },
      cam(pos, look, fov = 35, roll = 0) { Object.assign(this._cam, { pos, look, fov, roll }); },
      shake(a, f = 14) { this._cam.shake += a; this._cam.shakeF = f; },
      hold(who, mode = 'hands') { this.attach = { who, mode }; },
      fade(a) { this.fadeA = a; },
    };
    S.leo.ry = 0; S.maya.ry = 0;
    for (const k in this.sets) this.sets[k].group.visible = k === shot.set;
    this.scene.fog = this.fogs[shot.set];
    this.fogs.village.color.set(shot.sky === 'golden' ? 0xffdcb8 : 0xe4f2ff);
    this.sky.setTime(shot.sky || 'day');
    this.sky.birds.visible = false;
    this.fx.begin();

    shot.run(S, t);

    // caméra
    const c = S._cam;
    cam.position.set(...c.pos);
    const look = this._v.set(...c.look);
    if (c.shake) {
      const f = c.shakeF;
      cam.position.x += noise1(T * f) * c.shake * 0.05;
      cam.position.y += noise1(T * f + 50) * c.shake * 0.05;
      look.x += noise1(T * f + 100) * c.shake * 0.05;
      look.y += noise1(T * f + 150) * c.shake * 0.05;
    }
    // très léger mouvement « caméra portée » pour donner de la vie
    cam.position.y += noise1(T * 0.7 + 7) * 0.008;
    cam.lookAt(look);
    cam.rotateZ(c.roll);
    cam.fov = c.fov;
    cam.updateProjectionMatrix();

    // personnages
    this.leo.root.visible = this.leo.blob.visible = S.vis.leo;
    this.maya.root.visible = this.maya.blob.visible = S.vis.maya;
    this.bibou.root.visible = this.bibou.blob.visible = S.vis.bib;
    applyHuman(this.leo, S.leo);
    applyHuman(this.maya, S.maya);
    applyBibou(this.bibou, S.bib, T);
    this.leo.root.updateMatrixWorld(true);
    this.maya.root.updateMatrixWorld(true);
    this.bibou.root.updateMatrixWorld(true);
    if (S.attach) this.resolveAttach(S);
    S.ball.visible = S.ball.visible && S.vis.ball;
    applyBall(this.ball, S.ball);

    const L = S.light;
    this.lights.setup(L);
    if (shot.sky === 'golden') {
      this.sky.uniforms.sunDir.value.set(...(L.sunDir || [0.55, 0.3, 0.6])).normalize();
    } else {
      this.sky.uniforms.sunDir.value.set(...(L.sunDir || [0.55, 0.85, 0.6])).normalize();
    }
    this.sets[shot.set].update(T, S.wind);
    this.sky.update(T, cam);
    this.fx.end();
    this.fade.material.opacity = S.fadeA;
    this.fade.visible = S.fadeA > 0.001;
    this.renderer.render(this.scene, cam);
    return { shot: shot.id, t };
  }

  // Le ballon suit les mains d'un personnage ou les ailes de Bibou.
  resolveAttach(S) {
    const a = S.attach;
    const v = new THREE.Vector3();
    if (a.who === 'bib') {
      const B = S.bib;
      const fwd = new THREE.Vector3(Math.sin(B.ry), 0, Math.cos(B.ry));
      this.bibou.center.getWorldPosition(v);
      const off = a.mode === 'above' ? new THREE.Vector3(0, BR + BALL_R * 0.9, 0) : fwd.multiplyScalar(BR + BALL_R * 0.55).add(new THREE.Vector3(0, -0.02, 0));
      v.add(off);
    } else {
      const rig = a.who === 'leo' ? this.leo : this.maya;
      const l = new THREE.Vector3(), r = new THREE.Vector3();
      rig.arms.L.hand.getWorldPosition(l);
      rig.arms.R.hand.getWorldPosition(r);
      v.copy(l).add(r).multiplyScalar(0.5);
      const P = S[a.who];
      const fwd = new THREE.Vector3(Math.sin(P.ry), 0, Math.cos(P.ry));
      if (a.mode === 'hands') v.addScaledVector(fwd, 0.07);
      if (a.mode === 'right') { v.copy(r).addScaledVector(fwd, 0.05); v.y += 0.02; }
    }
    S.ball.x = v.x; S.ball.y = v.y - S.ball.ground; S.ball.z = v.z;
  }
}
