import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function Model(props: any, ) {
    
    const { nodes, materials, animations } = useGLTF(`/glb/hbubble.glb`);
    console.log("nodes", nodes)
    const { ref, actions, names} = useAnimations(animations);
    const modelRef = useRef(null);

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


