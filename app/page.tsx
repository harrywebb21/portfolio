"use client";
/* eslint-disable @next/next/no-img-element */
//react imports
import { Suspense } from "react";

//three imports
import {
  Environment,
  Float,
  PresentationControls,
  Resize,
  SpotLight,
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
import { GBConsole } from "./lib/components/models/GBConsole";

export default function Home() {
  return (
    <>
      <div className="w-full h-full shadow-md flex flex-col ">
        <div className="w-full flex flex-col justify-start items-start h-full relative">
          <Suspense
            fallback={
              <div className="flex w-full h-full items-center justify-center">
                <div className="flex w-full h-fit gap-8 p-4">
                  <LoadingBar />
                </div>
              </div>
            }
          >
            <div className=" absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-50 h-fit flex items-center  ">
              <Name />
            </div>
            {/* <div className="absolute z-10 flex flex-col items-start bottom-2 right-2  p-4 rounded-xl">
              <Availability />
              <div className="flex gap-2">
                <CurrentTime />
                <p className="text-white">London, UK</p>
              </div>
            </div> */}
            <div className=" w-full h-full flex">
              <MyCanvas camera={{ position: [0, 0, 23], fov: 10 }}>
                <Environment preset="warehouse" />
                <PresentationControls
                  global
                  snap={1500}
                  damping={0.2}
                  rotation={[0, 0, 0]}
                  polar={[-Math.PI / 36, Math.PI / 36]}
                  azimuth={[-Math.PI / 36, Math.PI / 36]}
                >
                  <Resize height width>
                    <Model />
                  </Resize>
                  <SpotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                    color={"white"}
                    castShadow
                  />
                </PresentationControls>
                <Particles
                  amount={10000}
                  size={0.1}
                  color={"white"}
                  spread={100}
                  shape={"cube"}
                />
              </MyCanvas>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1/6 hero-gradient " />
          </Suspense>
        </div>
      </div>
      <div className=" w-1/3 h-full">
        {/* <Suspense fallback={nul}>
          <MyCanvas camera={{ position: [0, 0, 23], fov: 15 }}>
            <Float>
              <GBConsole />
            </Float>
          </MyCanvas>
        </Suspense> */}
      </div>
    </>
  );
}
