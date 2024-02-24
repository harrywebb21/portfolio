"use client";

import Model from "@/app/lib/components/Model";
import MyCanvas from "@/app/lib/components/MyCanvas";
import { useSpring } from "@react-spring/three";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { config } from "@react-spring/core";

export default function HomeNavButton() {
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  const { scale } = useSpring({
    scale: hovered ? [1.125, 1.125, 1.125] : [1, 1, 1],
    config: config.wobbly,
  });

  const router = useRouter();

  return (
    <>
      <MyCanvas className="!h-24 !w-24">
        <group
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          onClick={() => router.push("/")}
          onPointerOver={() => {
            setHovered(true);
          }}
          onPointerOut={() => {
            setHovered(false);
          }}
        >
          <Model scale={scale} className="hover:cursor-pointer" />
        </group>
      </MyCanvas>
    </>
  );
}
