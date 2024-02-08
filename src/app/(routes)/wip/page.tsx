"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";


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
      <p className="w-full text-center p-8 text-4xl font-black">HARRY WEBB</p>
      <div className="flex flex-col gap-8 items-center justify-center h-screen">
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
