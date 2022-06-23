<template>
  <div class="container bg-light-dark senca p-0">

    <app-header/>
    <router-view/>
    <app-footer/>
  </div>

</template>

<script>
import * as THREE from 'three';

let mouseX = 0, mouseY = 0;

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;
let renderer = 0;

let camera = 0;
let scene = 0;
let material = 0;

function onWindowResize() {

  windowHalfX = window.innerWidth / 2;
  windowHalfY = window.innerHeight / 2;

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

}

function onPointerMove(event) {

  if (event.isPrimary === false) return;

  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;

}

function animate() {
  requestAnimationFrame(animate);

  const time = Date.now() * 0.00005;

  camera.position.x += (mouseX - camera.position.x) * 0.05;
  camera.position.y += (-mouseY - camera.position.y) * 0.05;

  camera.lookAt(scene.position);

  const h = (360 * (1.0 + time) % 360) / 360;
  material.color.setHSL(h, 0.5, 0.5);

  renderer.render(scene, camera);
}

export default {
  data: () => {
    return {}
  },
  methods: {

    init: () => {
      camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 2, 2000);
      camera.position.z = 500;

      scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0xffffff, 0.001);

      const geometry = new THREE.BufferGeometry();
      const vertices = [];

      // PICTURE WAS LOADED ON WIKIMEDIA AND USED IN THREE.JS
      const sprite = new THREE.TextureLoader().load('https://upload.wikimedia.org/wikipedia/commons/b/ba/Daniloejezernik.png');


      for (let i = 0; i < 1000; i++) {

        const x = 2000 * Math.random() - 1000;
        const y = 2000 * Math.random() - 1000;
        const z = 2000 * Math.random() - 1000;

        vertices.push(x, y, z);

      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

      material = new THREE.PointsMaterial({
        size: 35,
        sizeAttenuation: true,
        map: sprite,
        alphaTest: 0.5,
        transparent: true
      });
      material.color.setHSL(1.0, 0.3, 0.7);

      const particles = new THREE.Points(geometry, material);
      scene.add(particles);

      //
      renderer = new THREE.WebGLRenderer({alpha: true});
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      //
      document.body.addEventListener('pointermove', onPointerMove);

      //
      window.addEventListener('resize', onWindowResize);
    }
  }, mounted() {
    this.init();
    animate();
  }
}
</script>

<style>
.senca {
  -webkit-box-shadow: 0px 0px 100px 1px black;
  -moz-box-shadow: 0px 0px 100px 1px black;
  box-shadow: 0px 0px 100px 1px black;
}

@media screen and (max-width: 600px) {
  .senca {
    box-shadow: none;
  }
}

</style>
