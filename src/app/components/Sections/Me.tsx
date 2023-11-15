"use client";
import gsap from "gsap";
import { useLayoutEffect } from "react";

export default function Me() {
  const tl = gsap.timeline();
  useLayoutEffect(() => {
    tl.fromTo(
      ".wave",
      {
        rotate: 0,

        transformOrigin: "100% 100%",
      },
      {
        duration: 3,
        rotate: 30,
        repeat: Infinity,
        yoyo: true,
        ease: "linear",
      }
    );
  });
  return (
    <>
      <div className="flex flex-col p-8">
        <div className=" flex items-center justify-center w-full">
          <div className="relative w-full flex items-center justify-center">
            <div className="me-gradient relative">
              <img
                className="me rounded-full drop-shadow-2xl w-96"
                src="/me.png"
                alt=""
              />
              <div className=" absolute me-gradient w-96 h-36 bottom-0" />
            </div>
            <div className=" flex items-center justify-center">
              <p className="hey-prompt text-6xl font-black whitespace-normal">
                Hey, I&apos;m Harry
              </p>
              <p className="wave text-6xl">👋🏼</p>
            </div>
          </div>
        </div>
        <div className=" flex flex-col text-right items-end w-fit md:text-8xl 2xl:text-9xl font-black">
          <p className="w-fit">24</p>
          <p className="w-fit">UK</p>
          <p className="w-fit">STUDENT</p>
          <p className="w-fit">WHAT I KNOW</p>
          <p className="w-fit">UNIVERSITY OF WESTMINSTER</p>
        </div>
      </div>
    </>
  );
}
