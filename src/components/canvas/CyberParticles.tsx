"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface CyberParticlesProps {
  count?: number;
}

export function CyberParticles({ count = 500 }: CyberParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    const colorCyan = new THREE.Color("#00E5FF");
    const colorYellow = new THREE.Color("#FFE600");
    const colorWhite = new THREE.Color("#FFFFFF");

    for (let i = 0; i < count; i++) {
      // Spread across a tunnel corridor
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 40 - 15;
      const z = (Math.random() - 0.5) * 25 - 5;

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      const choice = Math.random();
      const chosenColor =
        choice < 0.5 ? colorCyan : choice < 0.85 ? colorYellow : colorWhite;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;
    }

    return [pos, col];
  }, [count]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.z += delta * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.065}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

