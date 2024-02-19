"use client";

import Model from "@/app/lib/components/Model";
import MyCanvas from "@/app/lib/components/MyCanvas";
import { useSpring } from "@react-spring/three";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { config } from "@react-spring/core";
import { Html } from "@react-three/drei";





export default function About() {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
  },[hovered])
  const {scale} = useSpring({ scale: hovered ? [0.125, 0.125, 0.125] : [0.1, 0.1, 0.1], config: config.wobbly})

  const router = useRouter();
  return (
    <div>
      <MyCanvas className="!h-fit" >
        <group
          position={[0, 2, 0]}
          rotation={[0, 0, 0]}
          onClick={() => router.push("/")}
          onPointerOver={()=>{setHovered(true)}}
          onPointerOut={()=>{setHovered(false)}}
        >          
          
          <Model scale={scale} className=" hover:cursor-pointer"  />
        
        </group>
      </MyCanvas>

      <h1>Hi 👋🏼</h1>

    </div>
  );
}
