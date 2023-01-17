import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let scene, camera, renderer, star;

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.5, 1000)
  renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
    antialias: true
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)
  // renderer.setClearColor( 0xffffff, 0);
  camera.position.setZ(30);

  renderer.render(scene, camera)

  // LIGHT
  const pointLight = new THREE.PointLight(0xffffff)
  pointLight.position.set(1, 1000, -2)

  const ambientLight = new THREE.AmbientLight(0xffffff)
  const lightHelper = new THREE.PointLightHelper(pointLight)
  scene.add(lightHelper)

  scene.add(pointLight, ambientLight)

  const controls = new OrbitControls(camera, renderer.domElement);

  // STARS
  function addStars() {
    const theGeometry = new THREE.SphereGeometry(14, 24, 24);
    const randomColor = THREE.MathUtils.randInt(0, 0xffffff)
    const material = new THREE.MeshStandardMaterial({ color: randomColor })
    star = new THREE.Mesh(theGeometry, material);
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(2000));
    star.position.set(x, y, z);
    scene.add(star)
  }
  Array(1000).fill().forEach(addStars)


  // Plane
    const planeGeo = new THREE.PlaneGeometry(10,10)
    const planeMat = new THREE.MeshBasicMaterial({color: 0xffffff, side: THREE.DoubleSide})
    const plane = new THREE.Mesh(planeGeo, planeMat)
    scene.add(plane)


  // MOVE CAMERA 
  const moveCamera = () => {
    const t = document.body.getBoundingClientRect().top;
    
  }
  document.body.onscroll = moveCamera
  


// LOOP RUNNING ANIMATIONS
const animation = () => {
  requestAnimationFrame(animation);
  controls.update();

  renderer.render(scene, camera);
}
animation()