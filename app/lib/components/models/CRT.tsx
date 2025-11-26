"use client";
import {
  Environment,
  Float,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  OrbitControls,
  useEnvironment,
  useGLTF,
} from "@react-three/drei";
import React from "react";
import { animated } from "@react-spring/three";
import * as THREE from "three";
import { EffectComposer } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Model from "./HeadModel";

export default function CRTModel(props: any) {
  const { nodes, materials } = useGLTF(`/glb/crt_monitor_.fbx.glb`);
  const envMap = useEnvironment({ files: "/green-flames.hdr" });
  console.log("nodes", nodes);

  return (
    <animated.group
      {...props}
      castShadow
      dispose={null}
      position={[0, -4, -2]}
      rotation={[0, -1.5, 0]}
      scale={[2.5, 2.5, 2.5]}
    >
      {/* <Holofoil
        geometry={(nodes.Curve001 as THREE.Mesh).geometry}
        scale={[1.15, 1, 1]}
      /> */}
      {/* <EffectComposer>
        <Scanline opacity={0.2} blendFunction={BlendFunction.OVERLAY} />
      </EffectComposer> */}

      <Environment preset="warehouse" blur={2} backgroundBlurriness={10} />
      <ambientLight intensity={0.5} />
      <Float>
        <group>
          <OrbitControls />
          <mesh rotation={[0, 1.65, 0]} position={[4, 0, 0]}>
            <planeGeometry args={[2, 2]} />
            <meshStandardMaterial
              color="white"
              roughness={0.1}
              metalness={0.1}
            />
          </mesh>
          <mesh
            geometry={(nodes.Cubo_DefaultMaterial_0 as THREE.Mesh).geometry}
            scale={[1.3, 1.2, 1.2]}
            material={materials.DefaultMaterial}
            receiveShadow
            castShadow
          >
            <meshStandardMaterial
              color="white"
              roughness={0.1}
              metalness={1}
              // envMap={envMap}
              // envMapIntensity={0.15}
            />
            {/* <MeshTransmissionMaterial
            attach="material"
            thickness={0.5}
            roughness={0.7}
            color="white"
            ior={1}
            attenuationDistance={0.5}
            distortionScale={2}
            temporalDistortion={2}
            transparent
            /> */}
            {/* <MeshRefractionMaterial envMap={envMap} /> */}
          </mesh>
        </group>
      </Float>
    </animated.group>
  );
}

// Preload the model
useGLTF.preload(`/glb/crt_monitor_.fbx.glb`);
