import { animated, useSpring } from "@react-spring/three";
import { Object3DNode, extend, useFrame, useLoader } from "@react-three/fiber";
import { config } from "@react-spring/core";
import { useRef, useState } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { TextGeometry } from "three/examples/jsm/Addons.js";


extend({TextGeometry});
declare module "@react-three/fiber" {
    interface ThreeElements {
        textGeometry: Object3DNode<TextGeometry, typeof TextGeometry>;
    }
}


export default function Cube(){

    const colors = ["red", "lime", "blue", "yellow", "orange", "purple"]
    const cube = useRef(null);
    const [active, setActive] = useState(false);
    const [hovered, setHovered] = useState(false);

   
    const model = useLoader(GLTFLoader, "/glb/3D_FINAL-2.glb");
    
    useFrame((state, delta) => {
        if(!active){
            cube.current.rotation.y += delta;
            cube.current.rotation.x += delta;
        } else {
           
        }
    });


    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
      }

    const { scale } = useSpring({ scale: active ? 3 : 1, config: config.wobbly });
    const { position } = useSpring({ position: active ? [0, -1, 0] : [0, -2, .4], config: config.wobbly });

    return(<>
        <animated.mesh ref={cube} position={[0, 0, 0]} scale={scale} rotation={[0, 3, 0]} castShadow onClick={()=>{setActive(!active)}} onPointerOver={() => { setHovered(true);  }} onPointerOut={() => { setHovered(false) ;  }}>
            {/* <Particles amount={2000} size={active ? .08: .03} color={hovered ? colors[getRandomInt(colors.length)] : "green"} spread={active ? 10 : 2} /> */}
            <boxGeometry args={[2, 2, 1]}   />
            <meshToonMaterial color={hovered ? colors[getRandomInt(colors.length)] : "pink"} transparent wireframe />
        </animated.mesh>
       
    </>
    )

}