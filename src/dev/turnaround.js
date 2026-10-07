import * as THREE from 'three';
import { createHuman, applyHuman } from '../characters/human.js';
import { expr } from '../characters/face.js';
import { createBibou, applyBibou } from '../characters/bibou.js';
import { createBall, applyBall } from '../characters/ball.js';
import { createLighting } from '../world/lighting.js';

const W = window.innerWidth, H = window.innerHeight;
const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
renderer.setSize(W, H);
document.body.appendChild(renderer.domElement);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfe6ff);
const L = createLighting(renderer, scene);
L.setup({ focus: [0, 0.5, 0], size: 3 });
const ground = new THREE.Mesh(new THREE.CircleGeometry(10, 48), new THREE.MeshStandardMaterial({ color: 0x8fd16f }));
ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);

const leo = createHuman('leo');
const maya = createHuman('maya');
scene.add(leo.root, maya.root, leo.blob, maya.blob);
const bibou = createBibou();
const ball = createBall();
scene.add(bibou.root, bibou.blob, ball.root, ball.blob);
const cam = new THREE.PerspectiveCamera(30, W / H, 0.05, 100);

window.show = (mode) => {
  const L = leo.pose, M = maya.pose;
  L.x = -0.45; M.x = 0.45;
  L.ry = 0; M.ry = 0;
  if (mode === 'front') { cam.position.set(0, 0.95, 4.2); cam.lookAt(0, 0.75, 0); }
  if (mode === 'side') { L.ry = Math.PI / 2; M.ry = Math.PI / 2; cam.position.set(0, 0.95, 4.2); cam.lookAt(0, 0.75, 0); }
  if (mode === 'back') { L.ry = Math.PI; M.ry = Math.PI; cam.position.set(0, 0.95, 4.2); cam.lookAt(0, 0.75, 0); }
  if (mode === 'q') { L.ry = 0.6; M.ry = -0.6; cam.position.set(0, 1.0, 3.6); cam.lookAt(0, 0.8, 0); }
  if (mode === 'faceL') { cam.position.set(-0.45, 1.15, 1.3); cam.lookAt(-0.45, 1.12, 0); }
  if (mode === 'faceM') { cam.position.set(0.45, 1.15, 1.3); cam.lookAt(0.45, 1.12, 0); }
  const B = bibou.pose; B.x = 0; B.z = 0.5; B.ry = 0;
  if (mode === 'side') B.ry = Math.PI / 2;
  if (mode === 'back') B.ry = Math.PI;
  if (mode === 'q') B.ry = 0.5;
  if (mode === 'bib') { cam.position.set(0, 0.35, 1.6); cam.lookAt(0, 0.2, 0.5); }
  if (mode === 'bibq') { B.ry = 0.6; cam.position.set(0.3, 0.45, 1.5); cam.lookAt(0, 0.2, 0.5); }
  ball.pose.x = 0.25; ball.pose.z = 0.6; ball.pose.y = 0.13;
  applyHuman(leo, L); applyHuman(maya, M); applyBibou(bibou, B); applyBall(ball, ball.pose);
  renderer.render(scene, cam);
};
window.setExpr = (who, name) => { const P = ({ leo, maya, bibou })[who].pose; expr(P.face, name, 1); };
window.bib = (o) => Object.assign(bibou.pose, o);
window.ready = true;
