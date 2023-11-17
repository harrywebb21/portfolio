"use client";
import Name from "../../components/Titles/Name";
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
      <div className=" relative flex flex-col p-8 gap-16 items-center justify-center h-screen overflow-hidden">
        <div className="bg-glow w-[3000px] h-[2000px] rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40" />
        <Name className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        {/* <Hero />
      <Me />
    <Marquee /> */}
        {/* <p className="text-3xl md:text-5xl font-black">
          🚧 WORK IN PROGRESS 🚧
        </p>
        <p className="marquee bg-yellow-500 w-fit text-3xl whitespace-nowrap font-black">
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
          DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS! DO NOT CROSS!
        </p> */}
        <video playsInline autoPlay loop muted className="w-full h-full">
          <source src="/speeen.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
