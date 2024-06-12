"use client";

import Model from "@/app/lib/components/HeadModel";
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
    scale: hovered ? [1.625, 1.625, 1.625] : [1.5, 1.5, 1.5],
    config: config.wobbly,
  });

  const router = useRouter();

  return (
    <>
      <MyCanvas>
        <group
          position={[0, 0, 0]}
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
