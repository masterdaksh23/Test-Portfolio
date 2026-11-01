"use client";

import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface FloatingShapeProps {
  position?: [number, number, number];
  rotationSpeed?: [number, number, number];
  color?: string;
  wireframeColor?: string;
  scale?: number;
  geometryType?: "icosahedron" | "torusKnot" | "octahedron" | "box" | "ring" | "dodecahedron";
  floatSpeed?: number;
  floatAmplitude?: number;
}

export function FloatingShape({
  position = [0, 0, 0],
  rotationSpeed = [0.2, 0.3, 0.1],
  color = "#00E5FF",
  wireframeColor = "#FFE600",
  scale = 1,
  geometryType = "icosahedron",
  floatSpeed = 1.5,
  floatAmplitude = 0.15,
}: FloatingShapeProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);
  const initialY = position[1];

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();

    // Subtle floating along Y axis
    meshRef.current.position.y =
      initialY + Math.sin(t * floatSpeed + position[0]) * floatAmplitude;

    // Continuous rotation
    const mult = hovered ? 2.5 : 1;
    meshRef.current.rotation.x += delta * rotationSpeed[0] * mult;
    meshRef.current.rotation.y += delta * rotationSpeed[1] * mult;
    meshRef.current.rotation.z += delta * rotationSpeed[2] * mult;

    // Smooth hover scale
    const targetScale = hovered ? scale * 1.15 : scale;
    meshRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  const renderGeometry = () => {
    switch (geometryType) {
      case "torusKnot":
        return <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />;
      case "octahedron":
        return <octahedronGeometry args={[1, 0]} />;
      case "box":
        return <boxGeometry args={[1.2, 1.2, 1.2]} />;
      case "ring":
        return <torusGeometry args={[1.2, 0.05, 16, 64]} />;
      case "dodecahedron":
        return <dodecahedronGeometry args={[1, 0]} />;
      case "icosahedron":
      default:
        return <icosahedronGeometry args={[1, 0]} />;
    }
  };

  return (
    <group
      ref={meshRef}
      position={position}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Inner solid translucent mesh */}
      <mesh>
        {renderGeometry()}
        <meshStandardMaterial
          color={color}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.35}
          emissive={color}
          emissiveIntensity={hovered ? 0.8 : 0.25}
        />
      </mesh>

      {/* Outer wireframe shell */}
      <mesh scale={1.02}>
        {renderGeometry()}
        <meshBasicMaterial
          color={wireframeColor}
          wireframe
          transparent
          opacity={hovered ? 0.95 : 0.55}
        />
      </mesh>
    </group>
  );
}

