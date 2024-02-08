"use client";
import { motion } from "framer-motion";
// import Hero from "./components/Sections/Hero";
// import Marquee from "./components/Sections/Marquee";
// import Me from "./components/Sections/Me";
import Name from "./components/Titles/Name";



export default function Home() {
  return (
    <>
      <div className="flex justify-between absolute z-20 w-screen">
        <div className="w-fit p-8">
          <motion.p
            drag
            whileDrag={{ scale: 1.25, color: "rgba(87, 241, 74, 1)" }}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            className="about text-2xl text-neutral-700 hover:cursor-pointer"
          >
            ABOUT
          </motion.p>
        </div>
        <div className="w-fit p-8 ">
          <motion.p
            drag
            whileDrag={{ scale: 1.25, color: "rgba(58, 233, 191, 1)" }}
            dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
            className="button text-2xl text-neutral-700 hover:cursor-pointer"
          >
            WORK
          </motion.p>
        </div>
      </div>
      <div className=" relative flex flex-col p-8 gap-16 items-center justify-center h-screen">
        <img
          className="absolute top-0 h-screen w-screen"
          src="grid2.png"
          alt=""
        />
        <div className="bg-glow w-[3000px] h-[2000px] rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 pointer-events-none" />
        <Name className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <video playsInline autoPlay loop muted className="w-full h-full">
          <source src="/speeen.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

