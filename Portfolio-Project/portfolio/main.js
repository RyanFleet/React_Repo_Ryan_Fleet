import './style.css'

import * as THREE from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { ACESFilmicToneMapping, Color, DirectionalLight, MeshStandardMaterial, PCFSoftShadowMap, sRGBEncoding } from 'three';

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.5, 1000)
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true
})
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.toneMapping = ACESFilmicToneMapping;
renderer.shadowMap.enabled = true
renderer.shadowMap.type = PCFSoftShadowMap


camera.position.setZ(15);
camera.position.setY(20);
// camera.position.setX(-15);
renderer.render(scene, camera)

const gridHelper = new THREE.GridHelper(100, 20);
scene.add(gridHelper)


// LIGHT
const sunlight = new THREE.DirectionalLight(new Color('#FFFFFF') ,3.5)
const lightHelper = new THREE.DirectionalLightHelper(sunlight)
sunlight.position.set(10,20,10)
sunlight.castShadow = true
sunlight.shadow.camera.near = 0.5
sunlight.shadow.camera.far = 100
sunlight.shadow.camera.left = -10
sunlight.shadow.camera.bottom = -10
sunlight.shadow.camera.top = 10
sunlight.shadow.camera.right = 10

scene.add(lightHelper)
scene.add(sunlight)




// CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0,0,0)
controls.dampingFactor = 0.05
controls.enableDamping = true





// STARS
function addStars() {
  const theGeometry = new THREE.SphereGeometry(5, 25, 25);
  const randomColor = THREE.MathUtils.randInt(0, 0xffffff)
  const material = new THREE.MeshPhysicalMaterial({ 
    color: randomColor ,
    sheen: 1,
    sheenRoughness: 0.75,
    sheenColor: new Color('#ff8a00').convertSRGBToLinear(),
  })
  const star = new THREE.Mesh(theGeometry, material);
  const [x, y, z] = Array(5).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star)
}
Array(10).fill().forEach(addStars)


// Plane
// const brickTexture = new THREE.TextureLoader().load('/textures/brick_texture.jpeg');
// const brickNormalMap = new THREE.TextureLoader().load('/normalMaps/brick_normalMap.jpeg');
const planeGeo = new THREE.PlaneGeometry(20, 20)
const planeMat = new THREE.MeshStandardMaterial({ visible: false })
const plane = new THREE.Mesh(planeGeo, planeMat)
scene.add(plane)
plane.rotateX(- Math.PI / 2);


// BUILDING //
const building1 = new THREE.Mesh(
  new THREE.BoxGeometry(4,10,4),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(building1);
building1.position.set(2,2,2)
building1.position.setY(4)

// corner boxes
const cornerBox1 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5,7,1.5),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(cornerBox1);
cornerBox1.position.set(0.4,0.5,3.6)
cornerBox1.position.setY(2.5)

const cornerBox2 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5,7,1.5),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(cornerBox2);
cornerBox2.position.set(3.6,0.5,3.6)
cornerBox2.position.setY(2.5)

const cornerBox3 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5,7,1.5),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(cornerBox3);
cornerBox3.position.set(3.6,0.5,0.4)
cornerBox3.position.setY(2.5)

const cornerBox4 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5,7,1.5),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(cornerBox4);
cornerBox4.position.set(0.4,0.5,0.4)
cornerBox4.position.setY(2.5)

// Auning
const auning = new THREE.Mesh(
  new THREE.BoxGeometry(3,0.25,8),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(auning);
auning.position.set(2,2,5)

// Pillars
const pillar1 = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.2, 0.2, 2, 32 ),
  new THREE.MeshBasicMaterial( {color: 0xffffff} )
)
scene.add(pillar1);
pillar1.position.set(3,1,8.5)

const pillar2 = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.2, 0.2, 2, 32 ),
  new THREE.MeshBasicMaterial( {color: 0xffffff} )
)
scene.add(pillar2);
pillar2.position.set(1,1,8.5)

const pillar3 = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.2, 0.2, 2, 32 ),
  new THREE.MeshBasicMaterial( {color: 0xffffff} )
)
scene.add(pillar3);
pillar3.position.set(1,1,7)

const pillar4 = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.2, 0.2, 2, 32 ),
  new THREE.MeshBasicMaterial( {color: 0xffffff} )
)
scene.add(pillar4);
pillar4.position.set(1,1,5.5)

const pillar5 = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.2, 0.2, 2, 32 ),
  new THREE.MeshBasicMaterial( {color: 0xffffff} )
)
scene.add(pillar5);
pillar5.position.set(3,1,7)

const pillar6 = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.2, 0.2, 2, 32 ),
  new THREE.MeshBasicMaterial( {color: 0xffffff} )
)
scene.add(pillar6);
pillar6.position.set(3,1,5.5)



// ROOF
const roofBox1 = new THREE.Mesh(
  new THREE.BoxGeometry(3.5,1,3.5),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(roofBox1);
roofBox1.position.set(2,9,2)

const roofBox2 = new THREE.Mesh(
  new THREE.BoxGeometry(3,1,3),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(roofBox2);
roofBox2.position.set(2,9.5,2)

const roofBox3 = new THREE.Mesh(
  new THREE.BoxGeometry(2.5,1,2.5),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(roofBox3);
roofBox3.position.set(2,10,2)

const roofBox4 = new THREE.Mesh(
  new THREE.BoxGeometry(2,1,2),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(roofBox4);
roofBox4.position.set(2,10.5,2)

const roofBox5 = new THREE.Mesh(
  new THREE.BoxGeometry(1.5,1,1.5),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(roofBox5);
roofBox5.position.set(2,11,2)

const roofBox6 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshMatcapMaterial({color: 0xffffff})
);
scene.add(roofBox6);
roofBox6.position.set(2,11.5,2)

const satBottom1 = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.4, 0.4, 0.2, 32 ),
  new THREE.MeshBasicMaterial( {color: 0x00ffff} )
)
scene.add(satBottom1);
satBottom1.position.set(2,12,2)

const satBottom2 = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.3, 0.3, 0.4, 32 ),
  new THREE.MeshBasicMaterial( {color: 0xff00ff} )
)
scene.add(satBottom2);
satBottom2.position.set(2,12,2)

const satBottom3 = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.2, 0.2, 0.6, 32 ),
  new THREE.MeshBasicMaterial( {color: 0x00ff00} )
)
scene.add(satBottom3);
satBottom3.position.set(2,12,2)

const sat = new THREE.Mesh(
  new THREE.CylinderGeometry( 0.05, 0.05, 3, 32 ),
  new THREE.MeshBasicMaterial( {color: 0xffff00} )
)
scene.add(sat);
sat.position.set(2,12,2)

// WINDOWS 
const window1 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window1)
window1.position.set(0.5,8,2)

const window2 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window2)
window2.position.set(1,8,2)

const window3 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window3)
window3.position.set(1.5,8,2)

const window4 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window4)
window4.position.set(2,8,2)

const window5 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window5)
window5.position.set(2.5,8,2)

const window6 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window6)
window6.position.set(3,8,2)

const window7 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window7)
window7.position.set(3.5,8,2)

const window8 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window8)
window8.position.set(0.5,7,2)

const window9 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window9)
window9.position.set(1,7,2)

const window10 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window10)
window10.position.set(1.5,7,2)

const window11= new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window11)
window11.position.set(2,7,2)

const window12 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window12)
window12.position.set(2.5,7,2)

const window13 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window13)
window13.position.set(3,7,2)

const window14 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window14)
window14.position.set(3.5,7,2)

const window15 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window15)
window15.position.set(1.5,6,2)

const window16 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window16)
window16.position.set(2,6,2)

const window17 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window17)
window17.position.set(2.5,6,2)

const window18 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window18)
window18.position.set(1.5,5,2)

const window19 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window19)
window19.position.set(2,5,2)

const window20 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window20)
window20.position.set(2.5,5,2)

const window21 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window21)
window21.position.set(1.5,4,2)

const window22 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window22)
window22.position.set(2,4,2)

const window23 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window23)
window23.position.set(2.5,4,2)

const window24 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window24)
window24.position.set(1.5,3,2)

const window25 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window25)
window25.position.set(2,3,2)

const window26 = new THREE.Mesh(
  new THREE.BoxGeometry(0.3,0.6,4.2),
  new THREE.MeshBasicMaterial({color: 0x000000})
)
scene.add(window26)
window26.position.set(2.5,3,2)


// BUILDING //^^



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