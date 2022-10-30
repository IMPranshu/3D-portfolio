import './style.css'

import * as THREE from 'three';

// This will allow us to move around the scene using our mouse
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// To start with 3D web dev we will always need 3 things:
// 1. Scene - It acts like a container that holds all of the ojects
// 2. Camera - In order to see te objects inside the the conatiner/scene we need a camera.
// there are multiple option for this but the most commonly use is the perspective camera. This camera mimics what human eyeballs would see.
// 3. Renderer - Havign the camera we need this to render out the actual graphics on the screen/ make the magic happen


const scene = new THREE.Scene();

// here first arg is Field Of View(amount of the world that is visible. max is 360 degree)
// second arg is the aspect ration that is based out the user's browser window.
// last 2 arg are for the "View Frustrum"
// here 0.1 and 1000 represent that we can see everything from the camera lens
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/ window.innerHeight, 0.1, 1000);

// here the renderer needs to know which element has to be used
// in our case it is the canvas
const renderer = new THREE.WebGL1Renderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);

// to make it fullscreen we have to set the same parameter as we did int he camera
renderer.setSize(window.innerWidth, window.innerHeight);
// this moves the camera from middle along the Z-axis
camera.position.setZ(30);
// drawing onto the screen
renderer.render(scene, camera);

// now we will create an object and put it on the screen
// there are 3 basic steps when creatign an object:
// 1. Geometry: {x,y,z} conrdinates that define the object
// 2. Material: It is like a wrapping paper for the object. Maybe of dofferent colour and texture
// 3. Mesh: Combining the geometry and the material and then we add it to the scene.
const geometry = new THREE.OctahedronGeometry(12, 0);
// Usually materials require a light source. "MeshBasic" material requires no light source
const material = new THREE.MeshStandardMaterial({color: 0xFF6347});
const octahedron = new THREE.Mesh(geometry, material);

scene.add(octahedron);

// It will act as if we have added a light bulb to the scene
const pointLight = new THREE.PointLight(0xFFFFFF)
pointLight.position.set(50,50,50)

// Ambient light as as a flood light in the room which lights up everything
// const ambientLight = new THREE.AmbientLight(0xFFFFFF)

scene.add(pointLight)

// this helps us to see the position of the light in our scene.
const lightHelper = new THREE.PointLightHelper(pointLight);
// this helps us to see the axis on the screen
const gridHelper = new THREE.GridHelper(200,50);
scene.add(lightHelper, gridHelper)

// we have to render the screen everytime we add something tot he screen
// renderer.render(scene,camera);

// To skip this part we use "Game Loop"

function animate(){
  requestAnimationFrame(animate);
  octahedron.rotation.x += 0.005;
  octahedron.rotation.y += 0.002;
  octahedron.rotation.x += 0.001;

  renderer.render(scene, camera);
}

animate()