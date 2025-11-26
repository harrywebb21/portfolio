"use client";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import LoadingBar from "./LoadingBar";
import { Preload } from "@react-three/drei";
import { Suspense } from "react";

export default function MyCanvas({ children, ...props }: any) {
  return (
    <Canvas
      {...props}
      className={`touch-none ${props.className || ""}`}
      gl={{
        powerPreference: "high-performance",
        toneMapping: THREE.NoToneMapping,
        antialias: false,
        depth: true,
        alpha: true,
        preserveDrawingBuffer: true,
      }}
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={1} position={[0, 0, 0]} color="white" />
        <directionalLight
          color="white"
          position={[0, 0, -1]}
          intensity={1}
          rotation={[2, 2, 2]}
          castShadow
        />

        <directionalLight
          color="white"
          position={[0, 1, 5]}
          intensity={1}
          castShadow
        />

        <directionalLight
          color="white"
          position={[1, 0.5, 5]}
          intensity={1}
          castShadow
        />

        <directionalLight
          color="white"
          position={[-1, 0.5, 5]}
          intensity={1}
          castShadow
        />
        <pointLight
          color="white"
          position={[0, 0, 10]}
          castShadow
          shadow-mapSize-width={2000}
          shadow-mapSize-height={3000}
        />

        {children}
        <Preload all />
      </Suspense>
    </Canvas>
  );
}
