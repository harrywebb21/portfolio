"use client";

//react imports
import { PresentationControls } from "@react-three/drei";
import Particles from "./lib/components/Particles";
import Model from "./lib/components/Model";
import Nav from "./lib/components/Nav";
import BgGrid from "./lib/components/BgGrid";
import MyCanvas from "./lib/components/MyCanvas";
import Marquee from "react-fast-marquee";
import CrashMarquee from "./lib/components/Marquee";
import { Suspense } from "react";

export default function Home() {
  const colours = ["#9c7b2b", "white"];
  return (
    <>
      <div className="h-dvh w-dvw relative overflow-hidden">
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
            amount={100}
            size={0.09}
            color={colours[Math.floor(Math.random() * 3)]}
            spread={10}
            shape="cube"
          />
        </MyCanvas>
        <div className="bg-glow w-[3000px] h-[2000px] rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
        {/* <Name className="absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 " /> */}
        <Nav />
        <BgGrid />
        <div className=" bg-white w-64 aspect-square rounded-full absolute top-32 right-32 p-2  -z-10 shadow-lg pointer-events-none hidden sm:flex">
          <div className=" w-full h-full rounded-full grid grid-cols-2">
            <div className="bg-yellow-500 w-full h-full rounded-tl-full" />
            <div className="bg-black w-full h-full rounded-tr-full" />
            <div className="bg-black w-full h-full rounded-bl-full" />
            <div className="bg-yellow-500 w-full h-full rounded-br-full" />
          </div>
        </div>
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-32 right-12 -z-10 rotate-6 w-32 h-32 pointer-events-none hidden sm:block"
        >
          <g clip-path="url(#clip0_608_108)">
            <path
              d="M91.1362 78.25L54.7631 15.25C52.6462 11.5833 47.3538 11.5833 45.2369 15.25L8.86379 78.25C6.74684 81.9167 9.39303 86.5 13.6269 86.5H86.3731C90.607 86.5 93.2532 81.9167 91.1362 78.25Z"
              fill="#EAB308"
              stroke="white"
              stroke-width="3"
            />
            <path
              d="M55.2955 40.0909L54.4091 64.0909H46.6364L45.75 40.0909H55.2955ZM50.5227 75.5455C49.2045 75.5455 48.0739 75.0852 47.1307 74.1648C46.1989 73.233 45.7386 72.1023 45.75 70.7727C45.7386 69.4773 46.1989 68.3693 47.1307 67.4489C48.0739 66.5284 49.2045 66.0682 50.5227 66.0682C51.7727 66.0682 52.875 66.5284 53.8295 67.4489C54.7955 68.3693 55.2841 69.4773 55.2955 70.7727C55.2841 71.6591 55.0511 72.4659 54.5966 73.1932C54.1534 73.9091 53.5739 74.483 52.858 74.9148C52.142 75.3352 51.3636 75.5455 50.5227 75.5455Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_608_108">
              <rect width="100" height="100" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="700"
          height="700"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute -bottom-32 -left-32 rotate-12 -z-20  pointer-events-none hidden sm:block"
        >
          <g clip-path="url(#clip0_608_108)">
            <path
              d="M91.1362 78.25L54.7631 15.25C52.6462 11.5833 47.3538 11.5833 45.2369 15.25L8.86379 78.25C6.74684 81.9167 9.39303 86.5 13.6269 86.5H86.3731C90.607 86.5 93.2532 81.9167 91.1362 78.25Z"
              fill="#EAB308"
              stroke="white"
              stroke-width="3"
            />
            <path
              d="M55.2955 40.0909L54.4091 64.0909H46.6364L45.75 40.0909H55.2955ZM50.5227 75.5455C49.2045 75.5455 48.0739 75.0852 47.1307 74.1648C46.1989 73.233 45.7386 72.1023 45.75 70.7727C45.7386 69.4773 46.1989 68.3693 47.1307 67.4489C48.0739 66.5284 49.2045 66.0682 50.5227 66.0682C51.7727 66.0682 52.875 66.5284 53.8295 67.4489C54.7955 68.3693 55.2841 69.4773 55.2955 70.7727C55.2841 71.6591 55.0511 72.4659 54.5966 73.1932C54.1534 73.9091 53.5739 74.483 52.858 74.9148C52.142 75.3352 51.3636 75.5455 50.5227 75.5455Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0_608_108">
              <rect width="100" height="100" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <div className="absolute top-1/2 -left-12 -z-10 w-full bg-white p-1 rotate-45 hidden sm:block">
          <CrashMarquee />
        </div>
      </div>
    </>
  );
}
