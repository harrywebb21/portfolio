"use client";
import { useProgress } from "@react-three/drei";
import { motion } from "framer-motion";

export default function LoadingBar({ isLoading }: { isLoading?: boolean }) {
  const { progress } = useProgress();

  const loadingBar = {
    width: `${progress}%`,
    transition: {
      ease: "easeInOut",
    },
  };

  return (
    <motion.div
      animate={{
        opacity: isLoading ? 1 : 0,
        display: isLoading ? "flex" : "none",
      }}
      transition={{ duration: 0.5 }}
      initial={{ opacity: 0 }}
      className="flex w-full flex-col p-6 h-screen justify-center items-center bg-black absolute top-0 left-0 z-50 pointer-events-none overflow-none"
    >
      <div className=" w-1/2 flex justify-center gap-2">
        <div className="w-1/2  flex h-12 items-center  border p-1">
          <motion.div
            animate={loadingBar}
            className="h-full w-full flex items-center justify-center bg-white"
          >
            <h1 className="text-white-white bg-blend-difference">
              {progress}%
            </h1>
          </motion.div>
        </div>
        <svg
          width="55"
          height="50"
          viewBox="0 0 55 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.9987 10.8451C26.6659 9.71831 28.3341 9.71831 29.0013 10.8451L44.7652 37.4648C45.4324 38.5915 44.5983 40 43.2638 40H11.7362C10.4017 40 9.56759 38.5915 10.2348 37.4648L25.9987 10.8451Z"
            fill="#EAB308"
          />
          <path
            d="M29.795 21.0243L29.4109 31.1652H26.0422L25.6581 21.0243H29.795ZM27.7265 36.0051C27.1552 36.0051 26.6652 35.8107 26.2564 35.4217C25.8526 35.028 25.6531 34.5503 25.6581 33.9885C25.6531 33.4411 25.8526 32.973 26.2564 32.584C26.6652 32.1951 27.1552 32.0006 27.7265 32.0006C28.2683 32.0006 28.746 32.1951 29.1597 32.584C29.5783 32.973 29.7901 33.4411 29.795 33.9885C29.7901 34.363 29.6891 34.7039 29.4921 35.0112C29.3 35.3137 29.0489 35.5562 28.7386 35.7386C28.4283 35.9163 28.091 36.0051 27.7265 36.0051Z"
            fill="black"
          />
          <path
            d="M45.6256 36.9552L29.8618 10.3355C28.8073 8.55483 26.1927 8.55482 25.1382 10.3355L9.3744 36.9552C8.28975 38.7868 9.67179 41 11.7362 41H43.2638C45.3282 41 46.7103 38.7868 45.6256 36.9552Z"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
    </motion.div>
  );
}
