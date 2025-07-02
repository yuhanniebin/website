import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, OrbitControls } from '@react-three/drei';

// This component is the rotating 3D shape
function RotatingShape() {
  // useRef allows us to access the 3D object directly
  const meshRef = useRef();

  // useFrame is a hook that runs on every rendered frame
  useFrame((state, delta) => {
    // Rotate the shape on its x and y axes
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Icosahedron ref={meshRef} args={[2, 0]}>
      {/* This is the pink material for the shape */}
      <meshStandardMaterial color="#f472b6" roughness={0.5} />
    </Icosahedron>
  );
}

// This is the main component that sets up the 3D scene
export default function PlaygroundScene() {
  return (
    <Canvas>
      {/* Ambient light to softly illuminate the whole scene */}
      <ambientLight intensity={1.5} />
      {/* Directional light to create highlights and shadows */}
      <directionalLight position={[5, 5, 5]} intensity={1} />
      
      <RotatingShape />

      {/* This allows users to drag and rotate the object as well, for fun! */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}