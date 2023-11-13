"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { roboto } from "@/app/fonts/fonts";

export default function Availability() {
  useLayoutEffect(() => {
    gsap.to(".logo", {
      duration: 10,
      rotate: 360,
      repeat: Infinity,
      ease: "linear",
    });
  }, []);
  return (
    <>
      <div className="flex items-center gap-5 2xl:gap-10">
        <img
          className="logo w-[50px] 2xl:w-[100px]"
          src="/h_bubble_outline.svg"
          alt=""
        />
        <p
          className={`${roboto.className} text-2xl 2xl:text-5xl font-normal uppercase`}
        >
          available for work
        </p>
      </div>
    </>
  );
}
