"use client";
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { roboto } from "@/app/fonts/fonts";

export default function Availability() {
  const target = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      target.current,
      {
        opacity: 0.8,
        filter: "drop-shadow(0px 0px 0px rgba(0, 255, 0, 0))",
      },
      {
        opacity: 1,
        filter: "drop-shadow(0px 0px 10px rgba(0, 255, 0, 1))",
        duration: 2,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      }
    );
  });

  return (
    <>
      <div className="flex gap-3 w-fit items-center">
        <div
          ref={target}
          className="availability-status w-5 sm:w-7 aspect-square"
        ></div>
        <p
          className={`${roboto.className} uppercase text-neutral-900 sm:text-3xl whitespace-nowrap`}
        >
          {" "}
          available for work
        </p>
      </div>
    </>
  );
}
