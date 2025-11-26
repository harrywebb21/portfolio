"use client";
import * as THREE from "three";
import React, { use } from "react";
import {
  Html,
  MeshReflectorMaterial,
  MeshTransmissionMaterial,
  useGLTF,
} from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useSpring, animated, a } from "@react-spring/three";
import { ThreeElements, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

type MeshProps = ThreeElements["mesh"];
type GroupProps = ThreeElements["group"];

type GLTFResult = GLTF & {
  nodes: {
    start001: THREE.Mesh;
    select001: THREE.Mesh;
    D_pad001: THREE.Mesh;
    B001: THREE.Mesh;
    A001: THREE.Mesh;
    Cylinder004: THREE.Mesh;
    Cylinder004_1: THREE.Mesh;
    Screen001: THREE.Mesh;
    Cube003: THREE.Mesh;
    Screen_clear: THREE.Mesh;
    D_pad: THREE.Mesh;
    B: THREE.Mesh;
    A: THREE.Mesh;
    select: THREE.Mesh;
    start: THREE.Mesh;
    headphone_port: THREE.Mesh;
    headphone_logo: THREE.Mesh;
    Cylinder: THREE.Mesh;
    Screen: THREE.Mesh;
    Cube: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cylinder003: THREE.Mesh;
    Cube005: THREE.Mesh;
    Sphere: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube007: THREE.Mesh;
    Cube007_1: THREE.Mesh;
    Cube007_2: THREE.Mesh;
    Cube007_3: THREE.Mesh;
    Cube007_4: THREE.Mesh;
    Cylinder002: THREE.Mesh;
  };
  materials: {
    ["Material.001"]: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
  };
};

export function GBConsole(props: GroupProps) {
  const [buttonAPosition, setButtonAPosition] = React.useState<
    [number, number, number]
  >([3.899, -0.046, 2.754]);

  const [buttonBPosition, setButtonBPosition] = React.useState<
    [number, number, number]
  >([2.131, -0.056, 3.539]);

  const [buttonSelectPosition, setButtonSelectPosition] = React.useState<
    [number, number, number]
  >([-1.921, 0.96, 6.081]);

  const [buttonStartPosition, setButtonStartPosition] = React.useState<
    [number, number, number]
  >([-0.083, 0.96, 6.081]);
  const [buttonDPadPosition, setButtonDPadPosition] = React.useState<
    [number, number, number]
  >([-3.202, 0, 3.279]);

  const [buttonDPadRotation, setButtonDPadRotation] = React.useState<
    [number, number, number]
  >([0, 0, 0]);

  const [consoleRotation, setConsoleRotation] = React.useState<
    [number, number, number]
  >([1.25, 0, 0]);

  const [power, setPower] = React.useState(false);
  const buttonASpring = useSpring({
    buttonAPosition,
    config: { mass: 1, tension: 100, friction: 20 },
  });

  const buttonBSpring = useSpring({
    buttonBPosition,
    config: { mass: 1, tension: 100, friction: 20 },
  });

  const buttonSelectSpring = useSpring({
    buttonSelectPosition,
    config: { mass: 1, tension: 100, friction: 20 },
  });

  const buttonStartSpring = useSpring({
    buttonStartPosition,
    config: { mass: 1, tension: 100, friction: 20 },
  });
  const buttonDPadSpring = useSpring({
    buttonDPadPosition,
    config: { mass: 1, tension: 100, friction: 20 },
    rotation: buttonDPadRotation,
  });

  const turnConsoleOver = useSpring({
    rotation: consoleRotation,
    config: { mass: 1, tension: 100, friction: 20 },
  });

  const { nodes, materials } = useLoader(GLTFLoader, "/glb/gameboy.glb");
  return (
    <animated.group
      {...props}
      dispose={null}
      scale={0.2}
      rotation={
        turnConsoleOver.rotation.to((x, y, z) => [x, y, z]) as unknown as [
          number,
          number,
          number
        ]
      }
    >
      <animated.mesh
        onPointerUp={() => {
          setButtonStartPosition([-0.083, 0.96, 6.081]);
        }}
        onPointerDown={() => {
          setButtonStartPosition([-0.083, 0.46, 6.081]);
          setPower(!power);
        }}
        castShadow
        receiveShadow
        geometry={(nodes.start001 as THREE.Mesh).geometry}
        material={materials["Material.001"]}
        position={buttonStartSpring.buttonStartPosition}
        scale={[0.186, 0.378, 0.186]}
      />
      <animated.mesh
        onPointerDown={() => {
          setButtonSelectPosition([-1.921, 0.46, 6.081]);
        }}
        onPointerUp={() => {
          setButtonSelectPosition([-1.921, 0.96, 6.081]);
        }}
        castShadow
        receiveShadow
        geometry={(nodes.select001 as THREE.Mesh).geometry}
        material={materials["Material.001"]}
        position={buttonSelectSpring.buttonSelectPosition}
        scale={[0.186, 0.378, 0.186]}
      />
      {/* DOWN */}
      <mesh
        position={[-3.202, 1, 4.279]}
        onPointerDown={() => {
          setButtonDPadPosition([-3.202, -0.5, 3.279]);
          setButtonDPadRotation([0.1, 0, 0]);
        }}
        onPointerUp={() => {
          setButtonDPadPosition([-3.202, 0, 3.279]);
          setButtonDPadRotation([0, 0, 0]);
        }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="white" opacity={0} transparent />
      </mesh>
      {/* UP */}
      <mesh
        position={[-3.202, 1, 2.279]}
        onPointerDown={() => {
          setButtonDPadPosition([-3.202, -0.5, 3.279]);
          setButtonDPadRotation([-0.1, 0, 0]);
        }}
        onPointerUp={() => {
          setButtonDPadPosition([-3.202, 0, 3.279]);
          setButtonDPadRotation([0, 0, 0]);
        }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="white" opacity={0} transparent />
      </mesh>
      {/* LEFT */}
      <mesh
        position={[-4.202, 1, 3.279]}
        onPointerDown={() => {
          setButtonDPadPosition([-3.202, -0.5, 3.279]);
          setButtonDPadRotation([-0.05, 0, 0.1]);
        }}
        onPointerUp={() => {
          setButtonDPadPosition([-3.202, 0, 3.279]);
          setButtonDPadRotation([0, 0, 0]);
        }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="white" opacity={0} transparent />
      </mesh>
      {/* RIGHT */}
      <mesh
        position={[-2.202, 1, 3.279]}
        onPointerDown={() => {
          setButtonDPadPosition([-3.202, -0.5, 3.279]);
          setButtonDPadRotation([-0.05, 0, -0.1]);
        }}
        onPointerUp={() => {
          setButtonDPadPosition([-3.202, 0, 3.279]);
          setButtonDPadRotation([0, 0, 0]);
        }}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="white" opacity={0} transparent />
      </mesh>
      <animated.mesh
        castShadow
        receiveShadow
        geometry={(nodes.D_pad001 as THREE.Mesh).geometry}
        material={materials["Material.001"]}
        position={buttonDPadSpring.buttonDPadPosition}
        rotation={
          buttonDPadSpring.rotation.to((x, y, z) => [x, y, z]) as unknown as [
            number,
            number,
            number
          ]
        }
        scale={0.484}
      />
      <animated.mesh
        onPointerDown={() => {
          setButtonBPosition([2.131, -0.556, 3.539]);
        }}
        onPointerUp={() => {
          setButtonBPosition([2.131, -0.056, 3.539]);
        }}
        castShadow
        receiveShadow
        geometry={(nodes.B001 as THREE.Mesh).geometry}
        material={materials["Material.001"]}
        position={buttonBSpring.buttonBPosition}
        scale={0.64}
      />
      <animated.mesh
        onPointerDown={() => {
          setButtonAPosition([3.899, -0.546, 2.754]);
        }}
        onPointerUp={() => {
          setButtonAPosition([3.899, -0.046, 2.754]);
        }}
        castShadow
        receiveShadow
        geometry={(nodes.A001 as THREE.Mesh).geometry}
        material={materials["Material.001"]}
        position={buttonASpring.buttonAPosition}
        scale={0.64}
      />
      <group
        position={[-0.32, 0.252, 8.716]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.252, 0.086, 0.252]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Cylinder004 as THREE.Mesh).geometry}
          material={materials.Material}
        >
          <meshStandardMaterial color="white" roughness={0} metalness={0.6} />
          {/* <MeshTransmissionMaterial
            attach="material"
            thickness={3}
            roughness={0.51}
            color="white"
            ior={2}
            attenuationDistance={0.2}
            distortionScale={0.3}
            temporalDistortion={1}
          /> */}
        </mesh>
        <mesh
          castShadow
          receiveShadow
          material={materials["Material.001"]}
          geometry={(nodes.Cylinder004_1 as THREE.Mesh).geometry}
        >
          <MeshReflectorMaterial
            attach="material"
            roughness={0.51}
            color="black"
          />
        </mesh>
      </group>
      {/* display */}
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={(nodes.Screen001 as THREE.Mesh).geometry}
          material={materials["Material.001"]}
          position={[0, -0.116, -3.898]}
        >
          <Html
            position={[1.7, 1.06, 0]}
            rotation={[-1.575, 0, 0]}
            transform
            occlude
          >
            {power ? (
              <div className="w-64 h-56 bg-black flex items-center justify-center overflow-hidden">
                <img src="/me-gb.gif" alt="" className=" mt-4" />
                {/* <p className="text-black text-2xl font-bold absolute bottom-4 bg-white p-2 rounded">
                  Hello, World!
                </p> */}
                <div className="absolute top-0 left-0 mix-blend-multiply">
                  <div className="gameboy-screen gameboy-screen-power-on h-56 w-64" />
                </div>
              </div>
            ) : null}
          </Html>
        </mesh>
      </group>
      {/* battery cover */}
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Cube003 as THREE.Mesh).geometry}
        material={materials.Material}
        position={[0.165, -1.871, 5.801]}
      >
        <meshStandardMaterial color="white" roughness={0} metalness={0.6} />
        {/* <MeshTransmissionMaterial
          attach="material"
          thickness={3}
          roughness={0.1}
          color="green"
          ior={2}
          attenuationDistance={0.2}
          distortionScale={0.3}
          temporalDistortion={1}
        /> */}
      </mesh>
      {/* Screen glass */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Screen_clear as THREE.Mesh).geometry}
        material={materials["Material.009"]}
        position={[0, 0.862, -3.898]}
        scale={[1, 0.145, 1]}
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
      </mesh> */}
    </animated.group>
  );
}

useGLTF.preload("/glb/gameboy.glb");
