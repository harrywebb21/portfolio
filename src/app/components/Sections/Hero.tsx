"use client";
import { squadaOne } from "@/app/fonts/fonts";
import { motion } from "framer-motion";

export default function Hero() {
  const draw = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,

      transition: {
        duration: 5,
        ease: "easeOut",
      },
    },
  };
  return (
    <>
      <div className="w-full h-fit relative">
        <div className="w-full flex items-center">
          <p
            className={`${squadaOne.className} text-[128px] sm:text-[300px] xl:text-[450px] uppercase text-neutral-900 leading-none`}
          >
            harry
          </p>
        </div>
        <motion.svg
          className="w-full h-full absolute top-0 left-0"
          width="1920"
          height="731"
          viewBox="0 0 1920 731"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            variants={draw}
            initial="hidden"
            animate="visible"
            d="M-64 484.207C175.333 500.707 804.419 514.912 914.019 368.112C1051.02 184.612 494.605 26.2073 147.105 126.707C-200.395 227.207 866.347 805.281 1069.85 708.281C1273.35 611.281 1235.41 382.281 1402.41 255.5C1536.01 154.076 1811.91 48.9065 1928.5 11"
            stroke="url(#paint0_linear_76_1543)"
            stroke-width="22"
          />
          <defs>
            <linearGradient
              id="paint0_linear_76_1543"
              x1="932.25"
              y1="11"
              x2="932.25"
              y2="719.207"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.114583" stop-color="#3A96CA" />
              <stop offset="0.260417" stop-color="#114E64" />
              <stop offset="0.364583" stop-color="#5EBA9C" />
              <stop offset="0.484375" stop-color="white" />
              <stop offset="0.578125" stop-color="#51F3D6" />
              <stop offset="0.651042" stop-color="#6FF39E" />
              <stop offset="0.807292" stop-color="#2B834A" />
              <stop offset="0.953125" stop-color="#98F351" />
            </linearGradient>
          </defs>
        </motion.svg>

        <div className="w-full flex items-center justify-end ">
          <p
            className={`${squadaOne.className} text-[128px] sm:text-[300px] xl:text-[450px] uppercase text-neutral-900 leading-none`}
          >
            webb
          </p>
        </div>
      </div>
    </>
  );
}
