import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function MoveWithCursor() {
  useEffect(() => {
    let scene, camera, renderer, orbitControls;

    // Create scene
    scene = new THREE.Scene();

    // Set up camera
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    // Create renderer
    const canvas = document.querySelector(".webgl");
    renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(sizes.width, sizes.height);

    // Resize handler
    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(window.devicePixelRatio);
    };
    window.addEventListener("resize", handleResize);

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(
      "../assets/rifle_awp.glb",
      (gltf) => {
        scene.add(gltf.scene);
      },
      (xhr) => {
        // Loading progress
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      undefined,
      (error) => {
        // Loading error
        console.error("Failed to load model:", error);
      }
    );

    // Orbit controls
    orbitControls = new OrbitControls(camera, canvas);
    orbitControls.enableDamping = true;

    // Mouse move handler
    const cursor = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      cursor.x = -(e.clientX / sizes.width - 0.5);
      cursor.y = e.clientY / sizes.height - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      orbitControls.update();
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
      window.requestAnimationFrame(tick);
    };
    tick();

    // Clean-up function
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Empty dependency array ensures that this effect runs only once after the initial render

  return (
    <div className='App'>
      <canvas className='webgl'></canvas>
    </div>
  );
}
