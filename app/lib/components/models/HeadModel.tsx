import {
  MeshTransmissionMaterial,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { animated } from "@react-spring/three";

export default function Model(props: any) {
  const { nodes, animations } = useGLTF(`/glb/crashtest.glb`);

  const { ref } = useAnimations(animations);
  const modelRef = useRef(null) as any;

  return (
    <>
      <animated.group {...props} ref={ref} castShadow dispose={null}>
        <primitive
          object={nodes.Scene}
          ref={modelRef}
          scale={[0.75, 0.75, 0.75]}
          receiveShadow
          castShadow
        />
      </animated.group>
    </>
  );
}
