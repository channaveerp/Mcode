import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function MoveWithScroll() {
  const [boxCount, setBoxCount] = useState(1);
  const count = useRef(null);
  count.current = boxCount;
  const ref = useRef(null);
  //   const isInView = useOnScreen(ref);

  const loadBox = () => {
    const scene = new THREE.Scene();

    const loader = new GLTFLoader();

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const point = new THREE.PointLight(0xffffff, 2);
    scene.add(point);
    point.position.x = -5;
    point.position.z = 3;

    //scene.add(mesh)

    const sizes = {
      width: 500,
      height: 700,
    };
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 8;
    camera.position.y = 2;
    camera.position.x = -9;
    scene.add(camera);

    //renderer
    const canvas = document.querySelector(".webgl-box");
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });

    renderer.setSize(sizes.width, sizes.height);

    // const orbit = new OrbitControls(camera, canvas)
    // orbit.enableDamping = true;

    let model;
    let animations;
    loader.load(
      "/src/assets/rifle_awp.glb",
      (gltf) => {
        model = gltf.scene;
        animations = gltf.animations;

        scene.add(model);

        let currentIndex = 0;
        const mixer = new THREE.AnimationMixer(model);
        animations.forEach((clip, index) => {
          const action = mixer.clipAction(clip);

          action.play();
          currentIndex = index;
        });

        let direction = 0;
        let animationStatus = true;

        const handleScroll = () => {
          const scrollY = window.scrollY;

          if ((mixer.time > 1.49 || mixer.time < 0) && animationStatus) {
            animationStatus = false;
          }
          if (mixer.time < 0 && animationStatus) {
            animationStatus = false;
          }

          const div = document.querySelector(".section1");

          // calculating if div is on view port
          const divVisible =
            div.offsetHeight - (div.offsetTop - scrollY) >
              div.offsetHeight / 2 &&
            div.offsetTop + div.offsetHeight / 2 > scrollY;

          console.log(
            "divRef",
            div.offsetHeight,
            div.offsetTop,
            scrollY,
            divVisible
          );

          if (scrollY - direction > 0 && animationStatus && divVisible) {
            mixer.update(0.015);
          }
          if (scrollY - direction < 0 && mixer.time > 0.02 && divVisible) {
            mixer.update(-0.015);
          } else {
            animationStatus = true;
          }

          direction = scrollY;
        };
        window.addEventListener("scroll", handleScroll);

        const tick = () => {
          // orbit.update()

          renderer.render(scene, camera);
          window.requestAnimationFrame(tick);
        };

        tick();
      },
      undefined,
      function (error) {
        console.error("webgl", error);
      }
    );
  };

  useEffect(() => {
    loadBox();
  }, []);
  return (
    <div className='section1'>
      <canvas className='webgl-box'></canvas>
    </div>
  );
}
