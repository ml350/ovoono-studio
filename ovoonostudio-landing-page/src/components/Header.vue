<template>
  <header class="header">
    <div class="header-container">
      <div class="left-grid" style="width: 50%;">
        <h3>{{ title }}</h3>
        <h1>{{ subtitle }}</h1>
        <p>{{ paragraph }}</p>
        <div class="buttons">
          <a class="button" href="#Services">Services</a>
          <a class="button" href="mailto:bezmir@ovoono.studio">Contact Us</a>
        </div>
      </div>
      <div class="right-grid" style="width: 50%;">
        <canvas ref="canvas" style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"></canvas>
      </div>
    </div>
  </header>
</template>
<script> 
  import * as THREE from 'three';
  import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'; 
  import textureImage from '@/assets/logo/vecteezy_metal-brushed-texture-background-grey-metal_3685335.jpg'; // Replace 'your-texture.png' with the correct texture file name

  export default {
    name: 'HeaderSection',
    props: {
      title: String,
      subtitle: String,
      paragraph: String,
      modelUrl: {
        type: String,
        default: '/logo/OVOONO.obj'
      }
    },
    mounted() {
    
      if (window.innerWidth > 767) {
        // Create a Three.js scene
        const scene = new THREE.Scene();

        // Add a camera
        const camera = new THREE.PerspectiveCamera(
          45,
          this.$refs.canvas.clientWidth / this.$refs.canvas.clientHeight,
          1,
          1000
        );
        camera.position.set(0, 0.3, 2.5);

        // Add a light
        const light = new THREE.PointLight(0xffffff, 1, 200);
        light.position.set(0, 0, 5);
        scene.add(light);

        // Create a Three.js renderer and add it to the DOM
        const renderer = new THREE.WebGLRenderer({ canvas: this.$refs.canvas, alpha: true, antialias: true });
        renderer.setSize(this.$refs.canvas.clientWidth, this.$refs.canvas.clientHeight);

        // Load the texture
        const textureLoader = new THREE.TextureLoader();
        const texture = textureLoader.load(textureImage);
        const material = new THREE.MeshBasicMaterial({ map: texture });

        // Load the 3D model of the logo
        const loader = new OBJLoader();
        loader.load(
          // URL of the OBJ file
          this.modelUrl,

          // Called when the OBJ file is loaded
          (object) => {
            object.traverse((child) => {
              if (child instanceof THREE.Mesh) {
                child.material = material.clone(); // Clone the material for each mesh
              }
            });
            object.position.set(0, 0, 0);
            object.scale.set(1, 1, 1);
            scene.add(object);
          },

          // Called while the OBJ file is loading
          (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
          },

          // Called when there is an error loading the OBJ file
          (error) => {
            console.error('An error occurred while loading the OBJ file:', error);
          }
        );

        // Render the scene
        let objectRotationSpeed = 0.01;
        const render = () => {
          requestAnimationFrame(render);

          // Rotate the object
          if (scene.children.length > 0) {
            scene.children.forEach((child) => {
              if (child instanceof THREE.Object3D) {
                child.rotation.y += objectRotationSpeed;
              }
            });
          }

          renderer.render(scene, camera);
        };
        render();
      }
    } 
  };
</script>
