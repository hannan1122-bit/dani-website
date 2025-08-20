// src/app/RotatingModel.tsx
"use client";

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, TorusKnot } from '@react-three/drei';
import { Mesh } from 'three';

const RotatingTorusKnot = () => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    meshRef.current.rotation.x += delta * 0.6;
    meshRef.current.rotation.y += delta * 1.0;
  });

  return (
    <TorusKnot ref={meshRef} args={[2, 0.6, 300, 64]} scale={1.2} castShadow receiveShadow>
      <meshStandardMaterial
        color="#0077ff"     // bright blue
        metalness={0.9}     // shiny metallic
        roughness={0.2}     // smooth reflections
      />
    </TorusKnot>
  );
};

const RotatingModel = () => {
  return (
    <Canvas className="w-full h-full" shadows camera={{ position: [0, 0, 11], fov: 50 }}>
      {/* Ambient & main directional light */}
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />

      {/* Supporting white light */}
      <pointLight position={[-5, -5, -5]} intensity={0.6} />

      {/* Stronger bluish glow */}
      <pointLight 
        position={[0, -4, 0]} 
        intensity={2.5}   // 🔥 slightly stronger glow
        distance={22} 
        color="#1e40af"   // deep bluish glow
        castShadow
      />

      <RotatingTorusKnot />

      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default RotatingModel;
