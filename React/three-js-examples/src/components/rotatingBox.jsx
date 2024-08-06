import React, { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export default function RotatingBox() {
  useEffect(() => {
    // Create scene
    const scene = new THREE.Scene();

    // Create red cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "red" });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Set up camera
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 3;
    scene.add(camera);

    // Create renderer
    const canvas = document.querySelector(".webgl");
    const renderer = new THREE.WebGLRenderer({ canvas });
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

    // Mouse move handler
    const cursor = { x: 0, y: 0 };
    const handleMouseMove = (e) => {
      cursor.x = -(e.clientX / sizes.width - 0.5);
      cursor.y = e.clientY / sizes.height - 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Orbit controls
    const orbit = new OrbitControls(camera, canvas);
    orbit.enableDamping = true;

    // Animation loop
    const clock = new THREE.Clock();
    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      orbit.update();
      camera.lookAt(mesh.position);
      mesh.rotation.y = elapsedTime * 0.1 * Math.PI * 2;
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
