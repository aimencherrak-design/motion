import * as THREE from 'three';

// Éclairage commun : soleil chaud avec ombres douces, ciel bleu en remplissage,
// lumière de contour froide et carte d'environnement générée (reflets doux).
export function createLighting(renderer, scene) {
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.08;
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const hemi = new THREE.HemisphereLight(0xd6eeff, 0x9cbf73, 1.05);
  scene.add(hemi);

  const sun = new THREE.DirectionalLight(0xfff0d6, 2.7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.bias = -0.00035;
  sun.shadow.normalBias = 0.025;
  sun.shadow.radius = 4;
  scene.add(sun, sun.target);

  const rim = new THREE.DirectionalLight(0xd2ecff, 1.1);
  scene.add(rim, rim.target);

  // Environnement : petit ciel dégradé rendu une fois dans une PMREM.
  const envScene = new THREE.Scene();
  const envGeo = new THREE.SphereGeometry(10, 32, 16);
  const envMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {},
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }',
    fragmentShader: `varying vec3 vP;
      void main(){
        float h = vP.y;
        vec3 sky = mix(vec3(1.0,0.95,0.86), vec3(0.45,0.72,1.0), smoothstep(0.0,0.7,h));
        vec3 gnd = mix(vec3(0.62,0.78,0.42), vec3(0.95,0.9,0.78), smoothstep(-0.5,0.0,h));
        vec3 c = h > 0.0 ? sky : gnd;
        float sunv = pow(max(dot(vP, normalize(vec3(0.5,0.6,0.6))),0.0), 64.0);
        c += vec3(4.0,3.6,3.0)*sunv;
        gl_FragColor = vec4(c,1.0);
      }`,
  });
  envScene.add(new THREE.Mesh(envGeo, envMat));
  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = pmrem.fromScene(envScene, 0.02).texture;
  // Pour garder un rendu rapide, la carte d'environnement n'éclaire que les personnages et le ballon
  // (voir Episode) ; le décor est éclairé par le ciel (hémisphère), le soleil et la lumière de contour.
  scene.environment = null;
  const envMats = new Set();

  const L = { hemi, sun, rim, env, envMats };
  L.useEnv = (root) => root.traverse((o) => { const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : []; for (const m of ms) if ('envMap' in m && !m.isShaderMaterial && !m.isMeshBasicMaterial) { m.envMap = env; envMats.add(m); } });
  // focus : centre de l'action (pour la carte d'ombres) ; size : demi-largeur couverte.
  L.setup = ({ focus = [0, 0, 0], size = 8, sunDir = [0.55, 0.85, 0.6], sunColor = 0xfff0d6, sunI = 2.7, hemiI = 1.25, hemiSky = 0xd6eeff, hemiGround = 0x9cbf73, rimColor = 0xd2ecff, rimI = 1.1, rimDir = [-0.6, 0.5, -0.7], envI = 0.55, exposure = 1.08 } = {}) => {
    const f = new THREE.Vector3(...focus);
    const d = new THREE.Vector3(...sunDir).normalize();
    sun.position.copy(f).addScaledVector(d, 40);
    sun.target.position.copy(f);
    sun.color.set(sunColor);
    sun.intensity = sunI;
    const sc = sun.shadow.camera;
    if (sc.right !== size) {
      sc.left = -size; sc.right = size; sc.top = size; sc.bottom = -size;
      sc.near = 1; sc.far = 100;
      sc.updateProjectionMatrix();
    }
    hemi.intensity = hemiI;
    hemi.color.set(hemiSky);
    hemi.groundColor.set(hemiGround);
    rim.color.set(rimColor);
    rim.intensity = rimI;
    rim.position.copy(f).addScaledVector(new THREE.Vector3(...rimDir).normalize(), 30);
    rim.target.position.copy(f);
    for (const m of envMats) m.envMapIntensity = envI;
    renderer.toneMappingExposure = exposure;
  };
  return L;
}
