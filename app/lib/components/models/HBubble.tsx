"use client";
import {
  MeshTransmissionMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { animated } from "@react-spring/three";
import { Holofoil } from "../Holofoil";
import * as THREE from "three";

export default function Model(props: any) {
  const { nodes, animations } = useGLTF(`/glb/hbubble.glb`);
  const { ref } = useAnimations(animations);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * 0.5;
      ref.current.rotation.x += delta * 0.5;
    }
  });

  if (!nodes || !nodes.Curve001) {
    return null;
  }

  return (
    <animated.group {...props} ref={ref} castShadow dispose={null}>
      <Holofoil
        geometry={(nodes.Curve001 as THREE.Mesh).geometry}
        scale={[1.15, 1, 1]}
      />
      <mesh
        geometry={(nodes.Curve001 as THREE.Mesh).geometry}
        scale={[1.3, 1.2, 1.2]}
        receiveShadow
        castShadow
      >
        <MeshTransmissionMaterial
          attach="material"
          thickness={0.5}
          roughness={0.7}
          color="white"
          ior={1}
          attenuationDistance={0.5}
          distortionScale={2}
          temporalDistortion={2}
          transparent
        />
      </mesh>
      {/* <mesh
        geometry={(nodes.Curve001 as THREE.Mesh).geometry}
        scale={[1, 1, 1]}
        receiveShadow
        castShadow
      >
        <MeshTransmissionMaterial
          attach="material"
          thickness={0.1}
          roughness={0.1}
          color="red"
          ior={1.5}
          attenuationDistance={0.5}
          distortionScale={2}
          temporalDistortion={1}
          transparent
        />
      </mesh> */}
    </animated.group>
  );
}

// Preload the model
useGLTF.preload(`/glb/hbubble.glb`);
