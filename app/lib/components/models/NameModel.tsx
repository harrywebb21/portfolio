"use client";
import { animated } from "@react-spring/three";
import {
  Environment,
  MeshTransmissionMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function NameModel(props: any) {
  const { nodes, animations } = useGLTF(`/glb/name-straight.glb`);
  const { ref } = useAnimations(animations);
  const modelRef = useRef(null) as any;
  const modelRef2 = useRef(null) as any;

  let time = 0; // Step 1: Define a time variable

  useFrame((state, delta) => {
    time += delta; // Step 2: Increment time by delta
    const rotation = Math.sin(time) * 3; // Step 3: Calculate rotation in degrees
    const rotationInRadians = (rotation * Math.PI) / 180; // Step 4: Convert degrees to radians
    modelRef.current.rotation.z = rotationInRadians; // Step 5: Apply rotation to modelRef
    modelRef2.current.rotation.z = rotationInRadians; // Apply rotation to modelRef2
  });

  return (
    <animated.group {...props} ref={ref} castShadow dispose={null}>
      {/* <Environment preset="warehouse" /> */}
      <mesh
        geometry={(nodes.Harry as any).geometry}
        ref={modelRef}
        scale={[1, 1, 1]}
        receiveShadow
        rotation={[1.6, 0, 0]}
      >
        <MeshTransmissionMaterial
          attach="material"
          thickness={0.1}
          roughness={0.01}
          color="white"
          ior={1.5}
          attenuationColor="white"
          attenuationDistance={0.5}
          distortionScale={0}
          temporalDistortion={1}
        />
      </mesh>
      <mesh
        geometry={(nodes.Harry as any).geometry}
        ref={modelRef2}
        scale={[1, 0.1, 1]}
        receiveShadow
        rotation={[1.6, 0, 0]}
        position={[0, 0, -0.05]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          roughness={0.1}
          metalness={1}
        />
      </mesh>
    </animated.group>
  );
}
