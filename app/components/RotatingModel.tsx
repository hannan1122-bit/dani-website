// src/app/RotatingModel.tsx
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/PICTURES/MODEL.glb");
  const modelRef = useRef<THREE.Object3D>(null!);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01; // ✅ faster rotation
    }
  });

  return <primitive ref={modelRef} object={scene} scale={0.1} />;
}

useGLTF.preload("/PICTURES/MODEL.glb");

export default function RotatingModel() {
  return (
    <Canvas
      camera={{ position: [0.8, 0.4, 1.1], fov: 60, near: 0.1, far: 1000 }}
      style={{ height: "100%", width: "100%" }}
    >
      {/* ✅ Lights */}
      <ambientLight color="#4040ff" intensity={0.6} />
      <directionalLight color="lightblue" position={[5, 5, 10]} intensity={1.2} />
      <hemisphereLight color="blue" groundColor="#000020" intensity={0.8} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  );
}
