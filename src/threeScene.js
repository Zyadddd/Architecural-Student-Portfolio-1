import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function createThreeScene(containerSelector, objPath) {
  // Target container for the 3D model
  const container = document.querySelector(containerSelector);

  // Initialize scene, camera, and renderer
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x000000, 0)

  const camera = new THREE.PerspectiveCamera(
    75,
    container.clientWidth / container.clientHeight,
    0.1,
    1000
  );
  camera.position.set(2, 2, 5);

  const renderer = new THREE.WebGLRenderer({ antialias: true },{ alpha: true });
  renderer.setClearColor( 0x000000, 0 ); // the default
  renderer.setSize(container.clientWidth, container.clientHeight);
  container.appendChild(renderer.domElement);
  

  // Add lighting
  const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(5, 5, 5);
  scene.add(directionalLight);

  const ambientLight = new THREE.AmbientLight(0x404040, 1);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
  pointLight.position.set(2, 5, 5);
  scene.add(pointLight);

  // Add OrbitControls
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true; // Smooth rotation
  controls.dampingFactor = 0.05;
  controls.target.set(0, 0, 0);
  controls.update();

  // Load OBJ file
  const objLoader = new OBJLoader();

  objLoader.load(
    objPath,
    (object) => {
      object.traverse((child) => {
        if (child.isMesh) {
          child.geometry.computeVertexNormals();
          child.material = new THREE.MeshNormalMaterial({
            color: 0x000000, // Default material color
            wireframe: false, // toggle wireframe
            transparent: false, // toggle transparency
            opacity: 0.5, // change level of transparency
          });
        }
      });

      object.position.set(0, 0, 0);
      object.scale.set(1, 1, 1);

      scene.add(object);
    },
    (xhr) => {
      console.log(`Loading: ${(xhr.loaded / xhr.total) * 100}% loaded`);
    },
    (error) => {
      console.error("An error occurred while loading the model:", error);
    }
  );

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  }
  animate();

  // Handle window resize
  window.addEventListener("resize", () => {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  return { scene, camera, renderer };
}
