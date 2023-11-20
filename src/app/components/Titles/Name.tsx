import { useLayoutEffect } from "react";
import { gsap } from "gsap";

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
      <div className=" flex gap-8">
        <p
          className={`name firstname opacity-0 text-5xl md:text-9xl 2xl:text-[200px] font-black uppercase whitespace-nowrap`}
        >
          Harry
        </p>
        <p
          className={`name surname opacity-0 text-5xl md:text-9xl 2xl:text-[200px] font-black uppercase whitespace-nowrap`}
        >
          Webb
        </p>
      </div>
      <p className=" w-full text-right">Software Engineer</p>
    </div>
  );
}
