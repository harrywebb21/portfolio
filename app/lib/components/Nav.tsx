"use client";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <div className="flex flex-col items-start w-full ">
      <a href="/about">
        <motion.p
          drag
          whileDrag={{ scale: 1.25, color: "rgba(235, 182, 17, 1)" }}
          dragConstraints={{ top: 0, bottom: 0, left: 10, right: 0 }}
          whileHover={{ color: "rgba(13, 13, 13, 1)" }}
          className="nav-text text-2xl text-neutral-200 hover:cursor-pointer flex items-center justify-end"
        >
          ABOUT
        </motion.p>
      </a>

      <motion.a
        href="/work"
        drag
        whileDrag={{ scale: 1.25, color: "rgba(235, 182, 17, 1)" }}
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 10 }}
      >
        <motion.p
          drag
          whileDrag={{ scale: 1.25, color: "rgba(235, 182, 17, 1)" }}
          dragConstraints={{ top: 0, bottom: 0, left: 0, right: 10 }}
          whileHover={{ color: "rgba(13, 13, 13, 1)" }}
          className="nav-text text-2xl text-neutral-200 hover:cursor-pointer"
        >
          WORK
        </motion.p>
      </motion.a>
    </div>
  );
}
