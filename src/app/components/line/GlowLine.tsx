"use client";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function GlowLine() {
  const target = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      target.current,
      {
        opacity: 0.25,
      },
      {
        opacity: 1,
        duration: 3,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      }
    );
  });

  return (
    <>
      <div ref={target} className="glowline w-full  h-[1px] hidden sm:block" />
    </>
  );
}
