import * as THREE from 'three';
import { cloud, bird, flapBird } from './props.js';
import { rng } from '../lib/util.js';

// Ciel dégradé qui suit la caméra, avec halo du soleil, nuages et oiseaux.
export function createSky(scene) {
  const uniforms = {
    top: { value: new THREE.Color(0x5fb2f2) },
    mid: { value: new THREE.Color(0xa8dbff) },
    hor: { value: new THREE.Color(0xfff1d9) },
    sunDir: { value: new THREE.Vector3(0.5, 0.5, -0.7).normalize() },
    sunCol: { value: new THREE.Color(0xfff3d0) },
  };
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(450, 48, 24),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false, uniforms,
      vertexShader: 'varying vec3 vD; void main(){ vD = normalize(position); vec4 p = projectionMatrix*modelViewMatrix*vec4(position,1.0); gl_Position = p.xyww; }',
      fragmentShader: `uniform vec3 top; uniform vec3 mid; uniform vec3 hor; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vD;
        void main(){
          float h = clamp(vD.y, -0.2, 1.0);
          vec3 c = mix(hor, mid, smoothstep(-0.02, 0.18, h));
          c = mix(c, top, smoothstep(0.18, 0.75, h));
          float s = max(dot(normalize(vD), normalize(sunDir)), 0.0);
          c += sunCol * (pow(s, 600.0) * 1.6 + pow(s, 24.0) * 0.28 + pow(s, 4.0) * 0.08);
          gl_FragColor = vec4(c, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,
    }),
  );
  dome.renderOrder = -10;
  dome.frustumCulled = false;
  scene.add(dome);

  const clouds = new THREE.Group();
  scene.add(clouds);
  const R = rng(99);
  const cl = [];
  for (let i = 0; i < 14; i++) {
    const c = cloud(i + 3, 1.2 + R() * 1.4);
    const a = (i / 14) * Math.PI * 2 + R() * 0.3;
    const d = 140 + R() * 90;
    c.position.set(Math.cos(a) * d, 38 + R() * 40, Math.sin(a) * d);
    c.lookAt(0, c.position.y, 0);
    clouds.add(c);
    cl.push({ c, a, d, sp: 0.002 + R() * 0.002 });
  }

  const birds = new THREE.Group();
  scene.add(birds);
  const bl = [];
  for (let i = 0; i < 5; i++) {
    const b = bird();
    birds.add(b);
    bl.push({ b, off: [(i % 3) * 1.4 - 1.4, (i % 2) * 0.6, Math.floor(i / 2) * 1.2], ph: i * 1.3 });
  }
  birds.visible = false;

  const sky = { dome, uniforms, clouds, birds, cl, bl };
  sky.update = (t, camera) => {
    dome.position.copy(camera.position);
    clouds.position.set(camera.position.x, 0, camera.position.z);
    for (const o of cl) {
      const a = o.a + t * o.sp;
      o.c.position.x = Math.cos(a) * o.d;
      o.c.position.z = Math.sin(a) * o.d;
    }
  };
  // vol d'oiseaux : origin -> direction, pendant [t0, t1]
  sky.flyBirds = (t, t0, t1, from, to) => {
    if (t < t0 || t > t1) { birds.visible = false; return; }
    birds.visible = true;
    const u = (t - t0) / (t1 - t0);
    const p = new THREE.Vector3(...from).lerp(new THREE.Vector3(...to), u);
    birds.position.copy(p);
    birds.lookAt(new THREE.Vector3(...to));
    bl.forEach((o, i) => {
      o.b.position.set(o.off[0], o.off[1] + Math.sin(t * 2 + i) * 0.2, o.off[2]);
      flapBird(o.b, t, o.ph);
    });
  };
  sky.setTime = (mode) => {
    if (mode === 'golden') {
      uniforms.top.value.set(0x5f8fdc); uniforms.mid.value.set(0xf5b48e); uniforms.hor.value.set(0xffc97e); uniforms.sunCol.value.set(0xffb066);
    } else {
      uniforms.top.value.set(0x5fb2f2); uniforms.mid.value.set(0xa8dbff); uniforms.hor.value.set(0xfff1d9); uniforms.sunCol.value.set(0xfff3d0);
    }
  };
  return sky;
}
