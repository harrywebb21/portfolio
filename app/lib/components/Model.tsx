import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { animated } from "@react-spring/three";


function mouseOver(){
  console.log("mouse over");

}


export default function Model(props: any) {
  const { nodes, animations } = useGLTF(`/glb/hbubble.glb`);
  const { ref } = useAnimations(animations);
  const modelRef = useRef(null) as any;

  useFrame((state, delta) => {
    modelRef.current.rotation.z += delta;
    modelRef.current.rotation.x += delta;
  });




  return (
    <>
      <animated.group {...props} ref={ref} castShadow dispose={null}>
        <primitive
          ref={modelRef}
          object={nodes.Scene}
          args={[0, 0, 0]}
          scale={[1, 1, 1]}
          castShadow
          
        />
      </animated.group>
    </>
  );
}
