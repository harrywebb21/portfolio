"use client";
import {
  MeshTransmissionMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import React, { use, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { animated } from "@react-spring/three";

export default function CrashTest(props: any) {
  const { nodes, animations } = useGLTF(`/glb/crashtest.glb`);
  const { nodes: nodes2, materials: materials2 } = useGLTF(`/glb/name.glb`);
  const { nodes: role } = useGLTF(`/glb/role-round.glb`);

  const { ref } = useAnimations(animations);
  const modelRef = useRef(null) as any;
  const modelRef2 = useRef(null) as any;
  const modelRef3 = useRef(null) as any;

  console.log("nodes2", materials2);
  useFrame((state, delta) => {
    // modelRef.current.rotation.z += delta;
    // modelRef.current.rotation.x += delta;
    modelRef2.current.rotation.z += delta;
    // modelRef2.current.rotation.y += delta / 16;
    // modelRef3.current.rotation.z -= delta;
    // modelRef3.current.rotation.x -= delta / 32;
  });

  return (
    <>
      <animated.group {...props} ref={ref} castShadow dispose={null}>
        <primitive
          object={nodes.Scene}
          ref={modelRef}
          scale={[1, 1, 1]}
          position={[0, -0.2, 0]}
          rotation={[0.3, 0.6, 0]}
          receiveShadow
          castShadow
        />

        {/* <mesh
          ref={modelRef2}
          geometry={(nodes2.Harry as any).geometry}
          scale={[3, 3, 2.5]}
          position={[0, 0, 0]}
          rotation={[1.3, 0, 0]}
          receiveShadow
          castShadow
        >
          <MeshTransmissionMaterial
            attach="material"
            thickness={0.5}
            roughness={0.1}
            color="black"
            ior={2}
            attenuationColor="white"
            attenuationDistance={0.2}
            distortionScale={0.3}
            temporalDistortion={1}
          />
        </mesh> */}
        <mesh
          ref={modelRef2}
          geometry={(nodes2.Harry as any).geometry}
          scale={[2, 2, 1.5]}
          position={[0, 0, 0]}
          rotation={[1.7, 0, 0]}
          receiveShadow
          castShadow
        >
          <MeshTransmissionMaterial
            attach="material"
            thickness={3}
            roughness={0.1}
            color="white"
            ior={2}
            attenuationColor="white"
            attenuationDistance={0.2}
            distortionScale={0.3}
            temporalDistortion={1}
          />
        </mesh>
      </animated.group>
    </>
  );
}
useGLTF.preload(`/glb/crashtest.glb`);
useGLTF.preload(`/glb/name.glb`);
useGLTF.preload(`/glb/role-round.glb`);
