import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export default function Name({ className, onClick }: { className?: string, onClick?: React.MouseEventHandler } ) {
  let count = 0;
  useLayoutEffect(() => {
    gsap.fromTo(
      ".title",
      {
        y: 10,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      ".name",
      {
        y: -30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power4.out",
      }
    );
  });
  return (
    <div className={`${className} w-fit flex flex-col items-end`}>
      <div className=" flex gap-8 pointer-events-none" onClick={onClick}>
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
      <div className="title w-fit text-right text-white opacity-0 flex gap-2 hover:cursor-pointer" onClick={() => {
          const tl = gsap.timeline();
          if (count === 0) {
            gsap.to(".engineer", {
              rotation: 10,
              duration: 1,
              transformOrigin: "0% 100%",
              ease: "power4.out",
            });
          };
          if (count === 1) {
            gsap.to(".engineer", {
              rotation: 20,
              duration: 1,
              transformOrigin: "0% 100%",
              ease: "power4.out",
            });
            
          };
          if (count === 2) {
            gsap.to(".engineer", {
              rotation: 30,
              duration: 1,
              transformOrigin: "0% 100%",
              ease: "power4.out",
            });
          };
          if (count === 3) {
            gsap.to(".engineer", {
              rotation: 40,
              duration: 1,
              transformOrigin: "0% 100%",
              ease: "power4.out",
            });
          };
          
          if (count === 4) {
            tl.to(".engineer", {
              rotation: 120,
              duration: 0.4,
              transformOrigin: "0% 100%",
              repeat: 5,
              yoyo: true,
            }).to(".engineer", {
              y: 1000,
              rotate: 360,
              duration: 3,
              transformOrigin: "0% 100%",
              ease: "power4.out",
            }).to(".engineer", {
              y: 0,
              rotate: 0,
              opacity: 0,
              duration: 0.01,
              delay: 5,
              transformOrigin: "0% 100%",
              ease: "power4.out",
            }).to(".engineer", {
              opacity: 1,
              duration: 1,
              ease: "power4.out",
            });
            count = 0;
            onclick = null;
          };
          count++;
          if (count > 4) {
            count = 0;
          }
            }}>
        <p
          className=" "
        
        >
          Software
        </p>
        <p className="engineer">Engineer</p>
      </div>
    </div>
  );
}
