"use client";
/* eslint-disable @next/next/no-img-element */

import {
  Environment,
  Html,
  MeshTransmissionMaterial,
  PresentationControls,
  SpotLight,
  Stars,
} from "@react-three/drei";

//local imports
import MyCanvas from "./lib/components/MyCanvas";
import LoadingBar from "./lib/components/LoadingBar";
import Model from "./lib/components/models/HBubble";
import Name from "./lib/components/Name";
import Particles from "./lib/components/Particles";
import Availability from "./lib/components/Availability";
import CurrentTime from "./lib/components/CurrentTime";
import React from "react";

import Projects from "./lib/components/sections/Projects";
import Experience from "./lib/components/sections/Experience";
import { motion, useScroll, useSpring } from "framer-motion";
import Nav from "./lib/components/Nav";

export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeSection, setActiveSection] = React.useState<string>("home");

  setTimeout(() => {
    // Simulate a loading delay
    setIsLoading(false);
  }, 2000);

  const { scrollYProgress } = useScroll();
  const nameOpacity = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  const handleTabChange = (tab: string) => {
    setActiveSection(tab);
    console.log("Active section:", tab);
  };

  return (
    <>
      {<LoadingBar isLoading={isLoading} />}
      <div
        className={`${
          isLoading ? "overflow-y-hidden" : ""
        } w-full h-full shadow-md flex flex-col   `}
      >
        <div className="w-full  shadow-md flex flex-col ">
          <div className="w-full flex flex-col justify-start items-start h-dvh relative">
            <div className="absolute z-10 flex items-end justify-between bottom-0 p-4 w-full ">
              <Nav onTabChange={handleTabChange} />
              <div className="flex flex-col items-end justify-end gap-2">
                <Availability />
                <div className="flex gap-2">
                  <CurrentTime />
                  <p className="text-white">London, UK</p>
                </div>
              </div>
            </div>
            <div className=" w-full h-full flex fixed top-0 left-0 justify-center items-center ">
              <MyCanvas camera={{ position: [0, 0, 23], fov: 10 }}>
                <Environment preset="warehouse" />
                {/* <Environment
                  files={"/green-flames.hdr"}
                  background
                  blur={0.5}
                  backgroundIntensity={0.015}
                  environmentIntensity={0.2}
                /> */}

                <PresentationControls
                  global
                  snap={100}
                  damping={0.2}
                  polar={[-Math.PI / 36, Math.PI / 36]}
                  azimuth={[-Math.PI / 36, Math.PI / 36]}
                >
                  <Model scale={0.6} position={[0, 20, -20]} />
                  <Model scale={1} position={[20, 20, -20]} />
                  <Model scale={0.31} position={[0, -10, -10]} />
                  <Model scale={2} position={[-20, 20, 20]} />
                  <Model scale={1.6} position={[0, 0, -1]} />
                  <Particles
                    amount={10000}
                    size={0.3}
                    color={"white"}
                    spread={100}
                    shape={"cube"}
                  />
                </PresentationControls>
                <Html center>
                  <Name scrollOpacity={nameOpacity.get()} />
                </Html>
                <mesh position={[0, 0, 4]}>
                  <planeGeometry args={[30, 30]} />
                  <MeshTransmissionMaterial
                    attach="material"
                    thickness={0.5}
                    roughness={0.7}
                    color="white"
                    ior={1}
                    attenuationDistance={0.5}
                    distortionScale={2}
                    temporalDistortion={2}
                    transparent
                  />
                </mesh>
                <SpotLight
                  position={[10, 10, 10]}
                  angle={0.15}
                  penumbra={1}
                  intensity={2}
                  color={"white"}
                  castShadow
                />
                <Stars
                  radius={100}
                  depth={50}
                  count={5000}
                  factor={4}
                  saturation={0}
                  fade
                  speed={1}
                />
              </MyCanvas>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/6 hero-gradient " />
          </div>
        </div>
        {/* <div className="h-full flex flex-col justify-center items-center w-full ">
          <Experience />
          <Projects />
          <div className=" w-72 h-full flex justify-center items-center">
            <MyCanvas camera={{ position: [0, 0, 23], fov: 15 }}>
              <Environment
                files={"/green-flames.hdr"}
                blur={2}
                backgroundBlurriness={2}
              />
              <EffectComposer>
                <HueSaturation
                  saturation={0.6}
                  hue={2}
                  blendFunction={BlendFunction.OVERLAY}
                />
                <Float>
                  <GBConsole />
                </Float>
              </EffectComposer>
            </MyCanvas>
          </div>
        </div> */}
      </div>
    </>
  );
}
