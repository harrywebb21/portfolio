"use client";
import SpinningLuke from "../components/random/SpinningLuke";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";

export default function Page() {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".background",
      {
        filter: "hue-rotate(0deg)",
        ease: "linear",
        yoyo: true,
      },
      {
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
      <div className="w-screen h-screen overflow-hidden relative bg-lime-500 background">
        <div className="flex">
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
        </div>
        <div className="flex -translate-x-72">
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
        </div>
        <div className="flex">
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
          <SpinningLuke />
        </div>
        <div className="absolute top-56 ">
          <div className="flex scale-100">
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
          </div>
          <div className="flex -translate-x-72">
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
          </div>
          <div className="flex">
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
          </div>
        </div>
        <div className="absolute -top-10 ">
          <div className="flex scale-100">
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
          </div>
          <div className="flex -translate-x-72">
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
          </div>
          <div className="flex">
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
            <SpinningLuke />
          </div>
        </div>
      </div>
    </>
  );
}
