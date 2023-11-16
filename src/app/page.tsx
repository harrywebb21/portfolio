"use client";
// import Hero from "./components/Sections/Hero";
// import Marquee from "./components/Sections/Marquee";
// import Me from "./components/Sections/Me";
import Name from "./components/Titles/Name";
import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Home() {
  useLayoutEffect(() => {
    gsap.to(".marquee", {
      x: "-50%",
      duration: 300,
      ease: "linear",
      repeat: Infinity,
      yoyo: true,
    });
  });

  return (
    <>
      <div className="p-3">
        <Name />
      </div>
      <div className="flex flex-col gap-16 items-center justify-center h-screen overflow-hidden">
        {/* <Hero />
      <Me />
    <Marquee /> */}
        <p className="text-3xl md:text-5xl font-black">
          🚧 WORK IN PROGRESS 🚧
        </p>
        <p className="marquee bg-yellow-500 w-fit text-3xl whitespace-nowrap font-black">
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
        </p>
      </div>
    </>
  );
}
