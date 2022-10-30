import './style.css'

import * as THREE from 'three';

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

