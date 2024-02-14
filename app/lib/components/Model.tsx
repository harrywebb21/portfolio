import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { PrimitiveProps, useFrame } from "@react-three/fiber";

export default function Model(props: any, ) {
    
    const { nodes, animations } = useGLTF(`/glb/hbubble.glb`);
    const { ref} = useAnimations(animations);
    const modelRef = useRef(null) as any;
    
    useFrame((state, delta) => {
      
      modelRef.current.rotation.z += delta;
      modelRef.current.rotation.x += delta;
     
    });

    return (
      <>
        <group {...props} ref={ref} castShadow dispose={null}>
          <primitive
            ref={modelRef}
            object={nodes.Scene}
            args={[0, 0, 0]}
            scale={[1, 1, 1]}
            castShadow
          />
        </group>
       
      </>
    );
}


