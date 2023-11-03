import { useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function SpinningStar() {
  const [ref, animate] = useAnimate();

  useEffect(() => {
    animate(ref.current, {
      rotate: 360,
      transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear",
      },
    });
  });

  return (
    <svg
      ref={ref}
      width="59"
      height="56"
      viewBox="0 0 59 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.8125 48.25L21 31.25L0.6875 25.625L4.75 13.8125L24.625 22L23.125 0H36.4375L34.8125 22.4375L54.25 14.4375L58.25 26.375L37.625 32L51.3125 48.5625L40.5625 55.9375L29.0625 37.5625L17.5625 55.3125L6.8125 48.25Z"
        fill="white"
      />
    </svg>
  );
}
