"use client";

//three js imports
import { Canvas, useLoader } from "@react-three/fiber";
import { useSpring, config } from "@react-spring/three";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";


//react imports
import { useState } from "react";
import { Environment, Html, OrbitControls, PresentationControls } from "@react-three/drei";
import Particles from "./lib/components/Particles";
import Model from "./lib/components/Model";
import Name from "./lib/components/Name";
import Nav from "./lib/components/Nav";
import BgGrid from "./lib/components/BgGrid";


function Scene(){
  const [active, setActive] = useState(false);
  const [colourMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, ["Ground068_1K-JPG_Color.jpg", "Ground068_1K-JPG_Displacement.jpg", "Ground068_1K-JPG_NormalDX.jpg", "Ground068_1K-JPG_Roughness.jpg", "Ground068_1K-JPG_AmbientOcclusion.jpg" ]);

  const { scale } = useSpring({ scale: active ? 1.1 : 1, config: config.wobbly });


 


  // return(
  //   <>
  //     <ambientLight intensity={0.4} color={"white"}  />
  //     <directionalLight position={[2,2,2]} color="white" />
  //     <hemisphereLight intensity={0.4} color={"white"} />
  //     <animated.mesh rotation={[0, 0, 0]} position={[0, 0, 1]} scale={scale} onClick={() => { setActive(!active); }} >
  //       <sphereGeometry args={[1, 100, 100]} />
  //       <meshStandardMaterial displacementScale={0} map={colourMap} displacementMap={displacementMap} normalMap={normalMap} roughnessMap={roughnessMap} aoMap={aoMap} />
  //     </animated.mesh>
  //   </>
  // )
}



export default function Home() {
  const [colour, setColour] = useState(0);
  const colours = ["#57f14a", "white", "#3ae9bf"];


  return (
    <>
      <div id="canvas-container">
        <Canvas shadows camera={{ position: [0, 0, 10], fov: 25 }}>
          {/* <OrbitControls /> */}
          <ambientLight intensity={0.8} color="white" />
          <directionalLight color="white" position={[0, 1, 5]} castShadow />
          <pointLight
            color="white"
            position={[0, 0, 10]}
            castShadow
            shadow-mapSize-width={2000}
            shadow-mapSize-height={3000}
          />
          <group position={[0, 0, 0]}>
            <PresentationControls
              global
              config={{ mass: 2, tension: 500 }}
              snap={{ mass: 4, tension: 1500 }}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <Model />
            </PresentationControls>
          </group>

          <mesh
            receiveShadow
            position={[0, -1.8, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[100, 100, 1, 1]} />
            <shadowMaterial transparent opacity={0.5} />
          </mesh>

          <Particles
            amount={1000}
            size={0.02}
            color={colours[Math.floor(Math.random() * 3)]}
            spread={10}
            type="cube"
          />
          {/* <Particles amount={3000} size={0.05} color="green" spread={6} type="sphere" /> */}
        </Canvas>
      </div>
      <div className="bg-glow w-[3000px] h-[2000px] rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />

      <Name
        className="absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 "
      />
      <Nav />
      <BgGrid />
    </>
  );
}
