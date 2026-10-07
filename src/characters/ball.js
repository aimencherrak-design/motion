import * as THREE from 'three';
import { PALETTE, blobTexture } from '../lib/materials.js';

// Le ballon rouge : toujours le même rouge, avec deux coutures pour lire sa rotation.
export const BALL_R = 0.13;

export function createBall() {
  const root = new THREE.Group();
  const spin = new THREE.Group();
  root.add(spin);
  const m = new THREE.MeshPhysicalMaterial({ color: PALETTE.ball, roughness: 0.32, clearcoat: 0.8, clearcoatRoughness: 0.2 });
  const ball = new THREE.Mesh(new THREE.SphereGeometry(BALL_R, 48, 32), m);
  ball.castShadow = true; ball.receiveShadow = true;
  spin.add(ball);
  const seamMat = new THREE.MeshStandardMaterial({ color: PALETTE.ballSeam, roughness: 0.5 });
  for (const rot of [[0, 0, 0], [Math.PI / 2, 0, 0], [0, Math.PI / 2, 0]]) {
    const s = new THREE.Mesh(new THREE.TorusGeometry(BALL_R * 1.001, 0.0035, 6, 64), seamMat);
    s.rotation.set(...rot);
    spin.add(s);
  }
  const blob = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: blobTexture(), transparent: true, depthWrite: false }));
  blob.rotation.x = -Math.PI / 2;
  blob.renderOrder = 1;
  const rig = { root, spin, blob, pose: { x: 0, y: BALL_R, z: 0, rx: 0, ry: 0, rz: 0, sq: 1, ground: 0, visible: true } };
  return rig;
}

export function applyBall(rig, P) {
  rig.root.visible = P.visible;
  rig.blob.visible = P.visible;
  rig.root.position.set(P.x, P.y + P.ground, P.z);
  rig.spin.rotation.set(P.rx, P.ry, P.rz);
  rig.root.scale.set(1 / Math.sqrt(P.sq), P.sq, 1 / Math.sqrt(P.sq));
  const h = Math.max(0, P.y - BALL_R);
  const k = Math.max(0, 1 - h / 3);
  rig.blob.position.set(P.x, P.ground + 0.014, P.z);
  rig.blob.scale.setScalar(0.4 * (0.5 + 0.5 * k));
  rig.blob.material.opacity = k;
}
