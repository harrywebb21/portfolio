import { Canvas } from "@react-three/fiber";

export default function MyCanvas({ children }: { children: React.ReactNode }) {
  return (
    <div id="canvas-container">
      <Canvas
        className="touch-none"
        shadows
        camera={{ position: [0, 0, 10], fov: 25 }}
      >
        <ambientLight intensity={0.8} color="white" />
        <directionalLight color="white" position={[0, 1, 5]} castShadow />
        <pointLight
          color="white"
          position={[0, 0, 10]}
          castShadow
          shadow-mapSize-width={2000}
          shadow-mapSize-height={3000}
        />
        {children}
      </Canvas>
    </div>
  );
}
