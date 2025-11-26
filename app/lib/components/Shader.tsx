import { shaderMaterial } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

// Define the shader material
const GlassDistortionMaterial = shaderMaterial(
  {
    time: 0,
    distortionStrength: 0.3,
    waveFrequency: 5.0,
    waveSpeed: 1.0,
    tDiffuse: null, // This will be our scene texture
  },
  // Vertex shader
  /*glsl*/ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  // Fragment shader
  /*glsl*/ `
    uniform float time;
    uniform float distortionStrength;
    uniform float waveFrequency;
    uniform float waveSpeed;
    uniform sampler2D tDiffuse;
    varying vec2 vUv;
    
    void main() {
      // Apply wavy distortion to UVs
      vec2 distortedUV = vUv;
      
      // Horizontal wave
      distortedUV.x += sin(distortedUV.y * waveFrequency + time * waveSpeed) * 0.01 * distortionStrength;
      
      // Vertical wave
      distortedUV.y += cos(distortedUV.x * waveFrequency * 1.5 + time * waveSpeed * 0.8) * 0.01 * distortionStrength;
      
      // Apply a subtle circular distortion
      vec2 center = vec2(0.5, 0.5);
      float dist = distance(vUv, center);
      vec2 dir = normalize(vUv - center);
      distortedUV += dir * sin(dist * 20.0 - time * 0.5) * 0.01 * distortionStrength;
      
      // Sample the texture with distorted coordinates
      vec4 color = texture2D(tDiffuse, distortedUV);
      
      // Add subtle glass-like refraction colors
      color.rgb += vec3(0.03, 0.03, 0.05) * sin(vUv.y * 30.0 + time) * distortionStrength;
      
      // Adjust transparency for glass effect
      color.a = 0.9;
      
      gl_FragColor = color;
    }
  `
);

// Extend so it's available in JSX
extend({ GlassDistortionMaterial });

// Declare the material type for TypeScript
// Augment React's JSX namespace so TypeScript recognizes the custom material element
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      glassDistortionMaterial: any;
    }
  }
}

export function HeroShader() {
  // Initialize ref with null to satisfy React useRef type requirements
  const materialRef = useRef<any>(null);
  const { gl, scene, camera } = useThree();
  const renderTargetRef = useRef<THREE.WebGLRenderTarget | null>(null);

  // Set up render target
  useEffect(() => {
    renderTargetRef.current = new THREE.WebGLRenderTarget(
      window.innerWidth,
      window.innerHeight,
      {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat,
      }
    );

    return () => {
      renderTargetRef.current?.dispose();
    };
  }, []);

  // Handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (renderTargetRef.current) {
        renderTargetRef.current.setSize(window.innerWidth, window.innerHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useFrame((state, delta) => {
    if (!materialRef.current || !renderTargetRef.current) return;

    // Update shader time
    materialRef.current.time += delta;

    // Hide this mesh temporarily to capture what's behind it
    const mesh = state.scene.getObjectByName("distortionMesh");
    if (mesh) mesh.visible = false;

    // Render the scene to our target
    gl.setRenderTarget(renderTargetRef.current);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // Show the mesh again
    if (mesh) mesh.visible = true;

    // Update the shader's texture
    materialRef.current.tDiffuse = renderTargetRef.current.texture;
  });

  return (
    <mesh name="distortionMesh" position={[0, 0, -1]}>
      <planeGeometry args={[50, 50]} />
      <glassDistortionMaterial
        ref={materialRef}
        transparent={true}
        distortionStrength={0.3}
        waveFrequency={5.0}
        waveSpeed={1.0}
      />
    </mesh>
  );
}
