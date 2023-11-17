import { roboto } from "@/app/fonts/fonts";
import { useLayoutEffect } from "react";
import gsap from "gsap";

export default function Name({ className }: { className?: string }) {
  useLayoutEffect(() => {
    gsap.fromTo(
      ".name",
      {
        y: -10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 4,
        ease: "power4.out",
      }
    );
  });
  return (
    <div className={`${className} w-fit flex flex-col`}>
      <p
        className={`name text-5xl md:text-9xl 2xl:text-[200px] font-black uppercase whitespace-nowrap`}
      >
        Harry Webb
      </p>
      <p className=" w-full text-right">Software Engineer</p>
    </div>
  );
}
