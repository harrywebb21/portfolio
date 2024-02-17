"use client";

//three js imports
import { Canvas } from "@react-three/fiber";

//react imports
import { useState } from "react";
import { PresentationControls } from "@react-three/drei";
import Particles from "./lib/components/Particles";
import Model from "./lib/components/Model";
import Name from "./lib/components/Name";
import Nav from "./lib/components/Nav";
import BgGrid from "./lib/components/BgGrid";
import MyCanvas from "./lib/components/MyCanvas";

export default function Home() {
  const [colour, setColour] = useState(0);
  const colours = ["#57f14a", "white", "#3ae9bf"];

  return (
    <>
      <MyCanvas>
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
          shape="cube"
        />
      </MyCanvas>
      <div className="bg-glow w-[3000px] h-[2000px] rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
      <Name className="absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 " />
      <Nav />
      <BgGrid />
    </>
  );
}
