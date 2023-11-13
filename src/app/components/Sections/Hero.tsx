"use client";
import { libre } from "@/app/fonts/fonts";
import { useLayoutEffect } from "react";
import gsap from "gsap";

import Availability from "../Titles/Availability";
import Name from "../Titles/Name";

const text = ["SOFTWARE ENGINEER"];

export default function Hero() {
  const tl = gsap.timeline();
  useLayoutEffect(() => {
    const targets = gsap.utils.toArray(".letter");
    tl.fromTo(
      targets,
      {
        y: -50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
      }
    );
  });

  return (
    <>
      <div className="p-8 flex flex-col items-start justify-between h-screen">
        <Name />
        <p
          className={`${libre.className} text-4xl md:text-[150px] 2xl:text-[200px] text-right w-full`}
        >
          <span className="letter inline-block">{text[0][0]}</span>
          <span className="letter inline-block">{text[0][1]}</span>
          <span className="letter inline-block">{text[0][2]}</span>
          <span className="letter inline-block">{text[0][3]}</span>
          <span className="letter inline-block">{text[0][4]}</span>
          <span className="letter inline-block">{text[0][5]}</span>
          <span className="letter inline-block">{text[0][6]}</span>
          <span className="letter inline-block">{text[0][7]}</span>
          <span className="letter inline-block">&nbsp;</span>
          <span className="letter inline-block">{text[0][9]}</span>
          <span className="letter inline-block">{text[0][10]}</span>
          <span className="letter inline-block">{text[0][11]}</span>
          <span className="letter inline-block">{text[0][12]}</span>
          <span className="letter inline-block">{text[0][13]}</span>
          <span className="letter inline-block">{text[0][14]}</span>
          <span className="letter inline-block">{text[0][15]}</span>
          <span className="letter inline-block">{text[0][16]}</span>
          <span className="letter inline-block">{text[0][17]}</span>
          <span className="letter inline-block">{text[0][18]}</span>
        </p>
        <Availability />
      </div>
    </>
  );
}
