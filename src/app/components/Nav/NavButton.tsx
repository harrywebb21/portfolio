"use client";
import { motion, useAnimation } from "framer-motion";
import { useState } from "react";

export default function NavButton() {
  const [isHovered, setIsHovered] = useState(false);

  const controls = useAnimation();

  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.9,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const buttonHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <motion.button
        className="bg-blue-500 border-2 border-white rounded-full p-2"
        variants={buttonVariants}
        animate={controls}
        whileHover="hover"
        whileTap="tap"
        onMouseEnter={buttonHover}
        onMouseLeave={buttonHover}
      >
        CLICK ME
      </motion.button>
    </>
  );
}
