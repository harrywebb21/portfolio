"use client";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { roboto } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

export default function Availability({ className }: { className?: string }) {
  const tl = gsap.timeline();

  const draw = {
    hidden: {
      opacity: 0.5,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 10,
        ease: "linear",
        repeat: Infinity,
      },
    },
  };

  useLayoutEffect(() => {
    tl.fromTo(
      ".available",
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 4,
        ease: "power4.out",
      }
    ).to(".logo", {
      duration: 10,
      rotate: 360,
      repeat: Infinity,
      ease: "linear",
    });
  });
  return (
    <>
      <div className="flex items-center gap-5 2xl:gap-10">
        <motion.svg
          animate={{
            rotate: -360,
            transition: {
              duration: 10,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          whileHover={{
            rotate: 360,
            transition: {
              duration: 5,
              ease: "linear",
              repeat: Infinity,
            },
          }}
          width="50"
          height="50"
          viewBox="0 0 545 572"
          fill="none"
        >
          <motion.path
            animate="visible"
            initial="hidden"
            variants={draw}
            d="M100.405 330.816L22.7215 427.395C-8.97405 466.8 0.174511 524.941 42.4399 552.708C81.8895 578.626 134.87 567.757 160.929 528.4L189.499 485.251C229.332 425.091 318.563 427.928 354.494 490.497L373.687 523.918C399.76 569.322 459.021 582.83 502.195 553.21C541.395 526.317 552.801 473.508 528.194 432.834L459.353 319.044C440.308 287.564 440.713 248.018 460.399 216.934L515.419 130.061C538.503 93.6132 528.272 45.4035 492.375 21.4722C450.036 -6.75407 392.446 11.5544 374.18 59.0482L341.118 145.008L338.705 149.352C311.467 198.38 241.021 198.567 213.525 149.683C211.773 146.569 210.256 143.329 208.988 139.989L177.301 56.5593C159.42 9.47985 103.545 -10.277 60.0444 15.0983C15.9461 40.8224 6.08504 100.294 39.5211 138.874L98.1229 206.492C128.838 241.932 129.799 294.272 100.405 330.816Z"
            stroke="white"
            stroke-width="20"
          />
        </motion.svg>
        <p
          className={`${roboto.className} available  text-2xl 2xl:text-5xl font-normal uppercase`}
        >
          available for work
        </p>
      </div>
    </>
  );
}
