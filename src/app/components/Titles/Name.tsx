import { roboto } from "@/app/fonts/fonts";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";

export default function Name({ className }: { className?: string }) {
  gsap.registerPlugin(TextPlugin);
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
    <div className={`${className} name  w-fit`}>
      <p
        className={`${roboto.className} text-2xl 2xl:text-5xl font-thin uppercase`}
      >
        Harry Webb
      </p>
    </div>
  );
}
