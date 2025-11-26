import localFont from "next/font/local";
import BgGrid from "../BgGrid";
import MyCanvas from "../MyCanvas";
import GBGame from "../models/GBGame";
import { Environment, Float, OrbitControls } from "@react-three/drei";
import { GBConsole } from "../models/GBConsole";

const font = localFont({
  src: "/../../../fonts/Newake.otf",
  display: "swap",
});

export default function Projects() {
  return (
    <div className="h-full flex w-full flex-col gap-12 p-12 relative overflow-clip">
      <div className="absolute top-0 left-0 w-full h-1/6 hero-gradient rotate-180 -z-10" />
      <BgGrid />
      <h1 className={`${font.className} text-7xl text-white  tracking-wide `}>
        Chosen Projects
      </h1>
      <div className="flex w-full justify-center items-center">
        <div className="h-96 w-full flex gap-8 relative">
          <div className="absolute top-0 left-0 w-full h-1/6 hero-gradient rotate-180 z-10" />
          <div className="absolute bottom-0 left-0 w-full h-1/6 hero-gradient  z-10" />
          <MyCanvas>
            <Environment preset="warehouse" backgroundBlurriness={2} />
            <Float>
              <OrbitControls enableZoom={false} />
              <GBGame imgSrc={"moodsify.jpg"} />
            </Float>
          </MyCanvas>
        </div>
        <div className="h-96 w-full flex gap-8 relative">
          <div className="absolute top-0 left-0 w-full h-1/6 hero-gradient rotate-180 z-10" />
          <div className="absolute bottom-0 left-0 w-full h-1/6 hero-gradient  z-10" />
          <MyCanvas>
            <Environment preset="warehouse" backgroundBlurriness={2} />
            <Float>
              <OrbitControls enableZoom={false} />
              <GBGame imgSrc={"meshed.jpg"} />
            </Float>
          </MyCanvas>
        </div>
        <div className="h-96 w-full flex  gap-8 relative">
          <div className="absolute top-0 left-0 w-full h-1/6 hero-gradient rotate-180 z-10" />
          <div className="absolute bottom-0 left-0 w-full h-1/6 hero-gradient  z-10" />
          <MyCanvas>
            <Environment preset="warehouse" backgroundBlurriness={2} />
            <Float>
              <GBConsole />
            </Float>
          </MyCanvas>
        </div>
      </div>
    </div>
  );
}
