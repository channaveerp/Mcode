import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import glbFIle from "../assets/prism.glb";

const MoveWithCursorOne = () => {
  useEffect(() => {
    const loadBox = () => {
      const scene = new THREE.Scene();
      const loader = new GLTFLoader();

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);

      const point = new THREE.PointLight(0xffffff, 2);
      scene.add(point);
      point.position.x = -5;
      point.position.z = 3;

      const sizes = {
        width: 500,
        height: 700,
      };
      const camera = new THREE.PerspectiveCamera(
        75,
        sizes.width / sizes.height,
        0.1,
        1000
      );
      // camera.position.z = 8;
      // camera.position.y = 2;
      // camera.position.x = -9;
      camera.position.z = 1;
      camera.position.y = 10;
      camera.position.x = 10;
      scene.add(camera);

      const canvas = document.querySelector(".webgl");
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
      renderer.setSize(sizes.width, sizes.height);

      const controls = new OrbitControls(camera, canvas);
      controls.enableDamping = true;
      controls.dampingFactor = 0.25;
      controls.screenSpacePanning = false;
      controls.maxPolarAngle = Math.PI / 2;

      let model;
      let animations;
      loader.load(
        glbFIle,
        (gltf) => {
          model = gltf.scene;
          animations = gltf.animations;

          scene.add(model);

          const mixer = new THREE.AnimationMixer(model);
          animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.play();
          });

          const mouseMoveHandler = (event) => {
            const mouseX = (event.clientX / sizes.width) * 2 - 1;
            const mouseY = -(event.clientY / sizes.height) * 2 + 1;

            // Calculate rotation angles based on mouse position
            const rotationX = mouseY * Math.PI;
            const rotationY = mouseX * Math.PI;

            // Apply rotation to the object
            model.rotation.x = rotationX;
            model.rotation.y = rotationY;
          };

          window.addEventListener("mousemove", mouseMoveHandler);

          const tick = () => {
            controls.update();
            renderer.render(scene, camera);
            window.requestAnimationFrame(tick);
          };

          tick();
        },
        (xhr) => {
          // Loading progress
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        (error) => {
          // Loading error
          console.error("Failed to load model:", error);
        },
        undefined,
        function (error) {
          console.error("webgl", error);
        }
      );
    };

    loadBox();
  }, []);

  return (
    <div className='webgl-box'>
      <canvas className='webgl'></canvas>
    </div>
  );
};

export default MoveWithCursorOne;
