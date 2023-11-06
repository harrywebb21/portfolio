"use client";
import { roboto } from "@/app/fonts/fonts";
import { useLayoutEffect, useState } from "react";
export default function Clock() {
  let time = new Date().toLocaleTimeString("en-US", {
    timeZone: "Europe/London",
  });
  const [ctime, setCtime] = useState(time);
  useLayoutEffect(() => {
    const UpdateTime = () => {
      time = new Date().toLocaleTimeString();

      setCtime(time);
    };
    setInterval(UpdateTime, 1000);
  });

  return (
    <>
      <div className="flex gap-4 items-center ">
        <h1
          className={`${roboto.className} text-base sm:text-4xl text-neutral-900 font-bold bg-transparent tabular-nums whitespace-nowrap`}
        >
          {ctime}
        </h1>
        <span className="scramble text-green-400 whitespace-nowrap">
          LDN, UK
        </span>
      </div>
    </>
  );
}
