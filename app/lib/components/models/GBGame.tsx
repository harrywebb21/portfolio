import { MeshTransmissionMaterial, useTexture } from "@react-three/drei";

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { animated } from "@react-spring/three";
import { ThreeElements } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Cube: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube007_1: THREE.Mesh;
    Cube007_2: THREE.Mesh;
    Cube007_3: THREE.Mesh;
    Cube007_4: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
  };
};

export default function GBGame({
  props,
  imgSrc,
}: {
  props?: ThreeElements["group"];
  imgSrc: string;
}) {
  const { nodes, materials } = useGLTF(
    "/glb/gb_cartridge.glb"
  ) as unknown as GLTFResult;
  return (
    <animated.group
      {...props}
      dispose={null}
      rotation={[1.5, 0, 0]}
      scale={1.5}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube as THREE.Mesh).geometry}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.55109978, 1.80145276, 0.13214031]}
      >
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0.3}
          clearcoat={0.215}
          clearcoatRoughness={2}
          color="white"
          // iridescence={2}

          emissiveIntensity={0.25}
          ior={1}
          attenuationColor="white"
          attenuationDistance={0.2}
          distortionScale={1}
          temporalDistortion={0.1}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0, -0.12460394, 0]}
        scale={[-0.06701986, -0.01861215, -0.06701986]}
      />
      <mesh
        position={[0, 0.125, 0.25]}
        scale={[2.2, 2, 2.2]}
        rotation={[-1.575, 0, 0]}
      >
        <planeGeometry />
        <meshStandardMaterial
          attach="material"
          map={new THREE.TextureLoader().load(imgSrc)}
          metalness={1}
          roughness={0.3}
        />
      </mesh>
      <group
        position={[0.71512032, -0.01508898, 0.17997585]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-0.02612262, -0.01195732, -0.02510264]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials["Material.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_1.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_2.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_3.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_4.geometry}
          material={materials["Material.005"]}
        />
      </group>
    </animated.group>
  );
}

useGLTF.preload("/glb/gb_cartridge.glb");
