"use client";
import { robotoFlex } from "@/app/fonts/fonts";
import { useState } from "react";

export default function Clock() {
  let time = new Date().toLocaleTimeString();
  const [ctime, setCtime] = useState(time);
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  setInterval(UpdateTime, 1000);
  return (
    <>
      <div className="flex gap-4 items-center ">
        <h1
          className={`${robotoFlex.className} text-4xl text-white font-bold bg-transparent tabular-nums`}
        >
          {ctime}
        </h1>
        <p className=" text-gray-500">LDN, UK</p>
      </div>
    </>
  );
}