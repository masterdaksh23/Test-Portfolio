"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function TunnelGrid() {
  const gridFloorRef = useRef<THREE.GridHelper>(null);
  const gridCeilRef = useRef<THREE.GridHelper>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (gridFloorRef.current) {
      gridFloorRef.current.position.z = (t * 1.5) % 4 - 2;
    }
    if (gridCeilRef.current) {
      gridCeilRef.current.position.z = (t * 1.5) % 4 - 2;
    }
  });

  return (
    <group>
      {/* Floor Grid */}
      <gridHelper
        ref={gridFloorRef}
        args={[40, 40, "#FFE600", "#00E5FF"]}
        position={[0, -18, -10]}
      >
        <lineBasicMaterial
          attach="material"
          color="#00E5FF"
          transparent
          opacity={0.12}
        />
      </gridHelper>

      {/* Ceiling Subtle Grid */}
      <gridHelper
        ref={gridCeilRef}
        args={[40, 40, "#00E5FF", "#FFE600"]}
        position={[0, 10, -10]}
      >
        <lineBasicMaterial
          attach="material"
          color="#FFE600"
          transparent
          opacity={0.06}
        />
      </gridHelper>

      {/* Glowing Tunnel Guide Lines */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array([
                -6, -6, 5, -6, -30, -30,
                6, -6, 5, 6, -30, -30,
                -6, 6, 5, -6, 2, -30,
                6, 6, 5, 6, 2, -30,
              ]),
              3,
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial color="#00E5FF" transparent opacity={0.2} />
      </line>
    </group>
  );
}

