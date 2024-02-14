import { useFrame } from "@react-three/fiber";
import { useRef } from "react";



type ParticlesProps = {
  amount: number;
  size: number;
  color: string;
  spread: number;
  onClick?: () => void;
  shape: "cube" | "sphere";
};

export default function Particles({
  amount,
  size,
  color,
  spread,
  onClick,
  shape
}: ParticlesProps) {
  const particles = useRef(null) as any;

  useFrame(() => {
    particles.current.rotation.y += 0.001;
    particles.current.rotation.x += 0.001;
  });

  const verticesAmount = amount;
  const positionArray = new Float32Array(verticesAmount * 3);

  if (shape === "cube") {
    for (let i = 0; i < verticesAmount * 3; i++) {
      positionArray[i] = (Math.random() - 0.5) * spread;
    }
  } else if (shape === "sphere") {
    const radius = 1;
    for (let i = 0; i < verticesAmount; i++) {
      const i3 = i * 3;
      const phi = Math.acos(-1 + (2 * i) / verticesAmount);
      const theta = Math.sqrt(verticesAmount * Math.PI) * phi;
      positionArray[i3] = radius * Math.cos(theta) * Math.sin(phi) * spread;
      positionArray[i3 + 1] = radius * Math.sin(theta) * Math.sin(phi) * spread;
      positionArray[i3 + 2] = radius * Math.cos(phi) * spread;
    }
  }

  return (
    <points ref={particles} onClick={onClick}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positionArray.length}
          array={positionArray}
          itemSize={3}

        />
      </bufferGeometry>
      <pointsMaterial
        args={[
          {
            color: color,
            size: size,
            sizeAttenuation: true,
            
            alphaTest: 0.1,
            

          },
        ]}
        // depthTest={false}
      />
    </points>
  );
}