"use client";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef } from "react";

export default function SpinningLuke({ className }: { className?: string }) {
  const target = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      target.current,
      {
        rotate: 0,
        filter: "hue-rotate(0deg)",
        ease: "linear",
        yoyo: true,
      },
      {
        rotate: 360,
        filter: "hue-rotate(360deg)",
        duration: 5,
        ease: "linear",
        repeat: -1,
        yoyo: true,
      }
    );
  });
  return (
    <>
      <img
        ref={target}
        className=" w-1/4 aspect-square object-cover border border-red-500"
        src="IMG_1890.jpeg"
        alt=""
      />
    </>
  );
}
