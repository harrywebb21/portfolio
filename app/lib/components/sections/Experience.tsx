import BgGrid from "../BgGrid";
import localFont from "next/font/local";
import MyCanvas from "../MyCanvas";
import CRTModel from "../models/CRT";

const experienceFont = localFont({
  src: "/../../../fonts/Newake.otf",
  display: "swap",
});

export default function Experience() {
  return (
    <div className=" h-svh flex w-full flex-col gap-12  p-12 relative overflow-clip">
      <div className="absolute top-0 left-0 w-full h-1/6 hero-gradient rotate-180 -z-10 " />

      <BgGrid />
      <h1
        className={`${experienceFont.className} text-7xl text-white  tracking-wide `}
      >
        Work Experience
      </h1>
      <div className="flex">
        <img
          src="/agomi.jpg"
          alt=""
          className="h-20 aspect-square sm:h-32 rounded-l-lg transition-all duration-300 ease-in-out"
        />
        <div className="p-8 w-full flex  justify-between items-center gap-4 from-white/10 to-white/5 bg-gradient-to-r backdrop-blur-xl rounded-r-lg shadow-lg relative">
          <div className="flex flex-col">
            <a
              href="https://agomi.studio"
              className="text-white text-3xl font-black tracking-wider text-nowrap hover:underline transition-all duration-300 ease-in-out"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agomi Studio
            </a>
            <h2 className="text-white/80 text-lg">Software Engineer</h2>
          </div>
          <div className="flex flex-col gap-4 w-ful px-12">
            <div className="flex gap-2  ">
              <span className="text-white/80 text-lg">•</span>
              <p className="text-white/80 text-lg tracking-wide">
                Worked on a variety of projects, including web applications and
                mobile apps, using technologies like Next.js, React, React
                native (Expo), TypeScript, and Node.js.
              </p>
            </div>
            <div className="flex gap-2 ">
              <span className="text-white/80 text-lg">•</span>
              <p className="text-white/80 text-lg tracking-wide">
                Collaborated with designers and other developers to create
                user-friendly interfaces and ensure high-quality code.
              </p>
            </div>
          </div>
          <p className=" italic  text-5xl font-black  gradient-text  p-2">
            2024
          </p>
        </div>
      </div>
      {/* <div className="w-full h-full absolute top-0 left-0 -z-20">
        <MyCanvas>
          <CRTModel scale={[2, 2, 2]} />
        </MyCanvas>
      </div> */}
    </div>
  );
}
