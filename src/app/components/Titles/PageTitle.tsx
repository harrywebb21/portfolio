"use client";
import { robotoFlex } from "@/app/fonts/fonts";
import { motion } from "framer-motion";
import Link from "next/link";
import Clock from "../clock/Clock";

export default function PageTitle() {
  return (
    <>
      <div className="bg-transparent flex gap-4 items-center p-1">
        <motion.svg
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
            transition: {
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            },
          }}
          whileHover={{
            rotate: [0, 360],
            transition: {
              repeat: 1,
              duration: 1,
              ease: "linear",
            },
          }}
          width="55"
          height="57"
          viewBox="0 0 55 57"
          fill="none"
        >
          <path
            d="M4.60871 55.2768C0.53016 52.5973 -0.35267 46.9868 2.70591 43.1842L10.4742 33.5263C13.5045 29.7589 13.4055 24.363 10.239 20.7094L4.37881 13.9476C1.15828 10.2316 2.10809 4.50337 6.35561 2.02566V2.02566C10.5455 -0.418469 15.9273 1.48449 17.6496 6.01913L20.8183 14.3621C20.9505 14.7101 21.1085 15.0477 21.291 15.3721V15.3721C24.1557 20.465 31.495 20.4455 34.3327 15.3376L34.5843 14.8848L37.898 6.2692C39.6556 1.6992 45.1971 -0.062494 49.2711 2.65352V2.65352C52.7252 4.95627 53.7096 9.59515 51.4885 13.1023L45.9865 21.7896C43.957 24.9941 43.9152 29.071 45.8786 32.3164L52.7627 43.6954C55.1411 47.6267 54.0387 52.731 50.2498 55.3303V55.3303C46.0768 58.1932 40.3489 56.8876 37.8288 52.4991L35.9096 49.157C32.2054 42.7066 23.0062 42.4141 18.8997 48.6161L16.0427 52.9311C13.5281 56.7289 8.41555 57.7778 4.60871 55.2768V55.2768Z"
            fill="white"
          />
        </motion.svg>
        <div className="flex flex-col w-full ">
          <h1
            className={`${robotoFlex.className} text-white text-6xl whitespace-nowrap`}
          >
            HARRY WEBB
          </h1>
          <Clock />
        </div>
      </div>
    </>
  );
}
