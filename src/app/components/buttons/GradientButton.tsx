"use client";

import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

export default function GradientButton({
  buttonName,
  className,
}: {
  buttonName: string;
  className?: string;
}) {
  const target = useRef(null);
  useLayoutEffect(() => {
    gsap.fromTo(
      target.current,
      {
        background:
          "linear-gradient(0deg, rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 0) 100%)",
      },
      {
        background:
          "linear-gradient(360deg, rgba(255, 255, 255, 1) 0%,rgba(255, 255, 255, 0) 100%)",
        duration: 6,
        ease: "linear",
        repeat: -1,
      }
    );
  });

  return (
    <>
      <div ref={target} className="button-gradient w-fit p-[1px] rounded-lg">
        <button className=" flex items-center justify-center bg-black w-fit p-2 px-3 rounded-lg ">
          <h1 className={`${className} text-4xl text-white bg-transparent`}>
            {buttonName}
          </h1>
        </button>
      </div>
    </>
  );
}
