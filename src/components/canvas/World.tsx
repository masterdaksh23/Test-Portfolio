"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { FloatingShape } from "./FloatingShape";
import { CyberParticles } from "./CyberParticles";
import { TunnelGrid } from "./TunnelGrid";

export function World() {
  const heroCoreRef = useRef<THREE.Group>(null);
  const heroRingsRef = useRef<THREE.Group>(null);
  const lightYellowRef = useRef<THREE.PointLight>(null);
  const lightCyanRef = useRef<THREE.PointLight>(null);

  // About Me Section ref
  const aboutCubeRef = useRef<THREE.Group>(null);

  // Hackathon Section ref
  const ctfShieldRef = useRef<THREE.Group>(null);

  // Projects Section refs
  const agroGlobeRef = useRef<THREE.Mesh>(null);
  const cityRadarRef = useRef<THREE.Group>(null);

  // Certifications Section ref
  const certTorusRef = useRef<THREE.Group>(null);

  // Contact Portal ref
  const portalRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();

    // 1. Hero Core Animations
    if (heroCoreRef.current) {
      heroCoreRef.current.rotation.y += delta * 0.4;
      heroCoreRef.current.rotation.x = Math.sin(t * 0.5) * 0.15;
    }
    if (heroRingsRef.current) {
      heroRingsRef.current.rotation.z += delta * 0.25;
      heroRingsRef.current.rotation.x += delta * 0.15;
    }

    // 2. Dynamic Orbiting Lights
    if (lightYellowRef.current) {
      lightYellowRef.current.position.x = Math.sin(t * 0.8) * 4;
      lightYellowRef.current.position.z = Math.cos(t * 0.8) * 4;
      lightYellowRef.current.position.y = Math.sin(t * 0.4) * 2;
    }
    if (lightCyanRef.current) {
      lightCyanRef.current.position.x = -Math.sin(t * 0.7) * 4.5;
      lightCyanRef.current.position.z = -Math.cos(t * 0.7) * 4.5;
      lightCyanRef.current.position.y = -Math.cos(t * 0.5) * 2.5;
    }

    // 3. About Section Matrix
    if (aboutCubeRef.current) {
      aboutCubeRef.current.rotation.y -= delta * 0.3;
      aboutCubeRef.current.rotation.z += delta * 0.2;
    }

    // 4. Hackathons & CTF Shield
    if (ctfShieldRef.current) {
      ctfShieldRef.current.rotation.y += delta * 0.35;
      ctfShieldRef.current.position.y = -11.5 + Math.sin(t * 1.5) * 0.2;
    }

    // 5. Projects
    if (agroGlobeRef.current) {
      agroGlobeRef.current.rotation.y += delta * 0.5;
    }
    if (cityRadarRef.current) {
      cityRadarRef.current.rotation.z += delta * 0.4;
    }

    // 6. Certifications Torus
    if (certTorusRef.current) {
      certTorusRef.current.rotation.x += delta * 0.3;
      certTorusRef.current.rotation.y += delta * 0.25;
    }

    // 7. Contact Portal
    if (portalRef.current) {
      portalRef.current.rotation.z += delta * 0.5;
    }
  });

  return (
    <group>
      {/* Dynamic Cyber Lights */}
      <ambientLight intensity={0.5} color="#0c1022" />
      <directionalLight position={[10, 10, 5]} intensity={0.6} color="#ffffff" />
      <pointLight
        ref={lightYellowRef}
        color="#FFE600"
        intensity={2.2}
        distance={15}
        decay={2}
      />
      <pointLight
        ref={lightCyanRef}
        color="#00E5FF"
        intensity={2.5}
        distance={15}
        decay={2}
      />

      {/* Background Particles & Infinite Tunnel Grid */}
      <CyberParticles count={650} />
      <TunnelGrid />

      {/* =========================================
          SECTION 0: HERO CENTERPIECE (y = 0)
         ========================================= */}
      <group position={[0, 0, 0]}>
        {/* Central Glowing Cyber Core */}
        <group ref={heroCoreRef}>
          {/* Outer wireframe Dodecahedron */}
          <mesh scale={1.8}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.65} />
          </mesh>

          {/* Inner Glowing Core */}
          <mesh scale={1.1}>
            <icosahedronGeometry args={[1, 1]} />
            <meshStandardMaterial
              color="#FFE600"
              roughness={0.1}
              metalness={0.9}
              emissive="#FFE600"
              emissiveIntensity={0.8}
              transparent
              opacity={0.85}
            />
          </mesh>
        </group>

        {/* Orbiting Neon Cyber Rings */}
        <group ref={heroRingsRef}>
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[2.5, 0.035, 16, 80]} />
            <meshBasicMaterial color="#FFE600" transparent opacity={0.7} />
          </mesh>
          <mesh rotation={[-Math.PI / 4, Math.PI / 6, 0]}>
            <torusGeometry args={[3.1, 0.04, 16, 80]} />
            <meshBasicMaterial color="#00E5FF" transparent opacity={0.6} />
          </mesh>
        </group>

        {/* Floating Satellites around Hero */}
        <FloatingShape
          position={[-3.2, 1.2, -1]}
          scale={0.55}
          geometryType="octahedron"
          color="#00E5FF"
          wireframeColor="#FFE600"
        />
        <FloatingShape
          position={[3.4, -0.8, -1.2]}
          scale={0.65}
          geometryType="torusKnot"
          color="#FFE600"
          wireframeColor="#00E5FF"
        />
      </group>

      {/* =========================================
          SECTION 1: ABOUT ME (y = -5.5)
         ========================================= */}
      <group position={[-1.8, -5.5, -1]}>
        <group ref={aboutCubeRef}>
          {/* Cyber Data Cube */}
          <mesh scale={1.4}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color="#00E5FF"
              wireframe
              transparent
              opacity={0.7}
              emissive="#00E5FF"
              emissiveIntensity={0.3}
            />
          </mesh>
          <mesh scale={0.8}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#FFE600"
              metalness={0.8}
              roughness={0.2}
              emissive="#FFE600"
              emissiveIntensity={0.6}
            />
          </mesh>
        </group>

        {/* Satellite floating accents */}
        <FloatingShape
          position={[3.8, 1.2, -0.5]}
          scale={0.45}
          geometryType="icosahedron"
          color="#FFE600"
          wireframeColor="#00E5FF"
        />
      </group>

      {/* =========================================
          SECTION 2: HACKATHONS & CTFs (y = -11.5)
         ========================================= */}
      <group position={[2.2, -11.5, -1]}>
        <group ref={ctfShieldRef}>
          {/* Cyber Security Shield Motif */}
          <mesh scale={1.5}>
            <cylinderGeometry args={[1.2, 0.2, 1.8, 6, 1, true]} />
            <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.6} />
          </mesh>
          <mesh position={[0, 0, 0]} scale={0.7}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
              color="#FFE600"
              emissive="#FFE600"
              emissiveIntensity={0.9}
            />
          </mesh>
        </group>

        {/* Orbiting CTF Trophy Nodes */}
        <FloatingShape
          position={[-4.0, 1.0, -0.5]}
          scale={0.5}
          geometryType="torusKnot"
          color="#FFE600"
          wireframeColor="#00E5FF"
        />
      </group>

      {/* =========================================
          SECTION 3: PROJECTS (y = -17.5)
         ========================================= */}
      <group position={[-2.2, -17.5, -1]}>
        {/* Odyssey 20 Agro Satellite & Geo-sphere */}
        <group position={[-1.2, 0.8, 0]}>
          <mesh ref={agroGlobeRef} scale={1.1}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color="#FFE600" wireframe transparent opacity={0.6} />
          </mesh>
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[1.6, 0.03, 16, 40]} />
            <meshBasicMaterial color="#00E5FF" transparent opacity={0.8} />
          </mesh>
        </group>

        {/* Community Hero Civic Radar Grid */}
        <group ref={cityRadarRef} position={[4.2, -0.8, -0.5]}>
          <mesh rotation={[-Math.PI / 2.5, 0, 0]}>
            <circleGeometry args={[1.4, 6]} />
            <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.5} />
          </mesh>
          <mesh position={[0, 0, 0.2]} scale={0.4}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color="#FFE600"
              emissive="#FFE600"
              emissiveIntensity={0.6}
            />
          </mesh>
        </group>
      </group>

      {/* =========================================
          SECTION 4: COMPETITIONS & CERTS (y = -23.5)
         ========================================= */}
      <group position={[2.0, -23.5, -1]}>
        <group ref={certTorusRef}>
          <mesh scale={1.2}>
            <torusKnotGeometry args={[0.9, 0.28, 80, 16]} />
            <meshStandardMaterial
              color="#FFE600"
              metalness={0.9}
              roughness={0.15}
              emissive="#FFE600"
              emissiveIntensity={0.5}
              wireframe={false}
            />
          </mesh>
          <mesh scale={1.3}>
            <torusKnotGeometry args={[0.9, 0.28, 80, 16]} />
            <meshBasicMaterial color="#00E5FF" wireframe transparent opacity={0.4} />
          </mesh>
        </group>

        <FloatingShape
          position={[-3.8, -0.8, 0]}
          scale={0.55}
          geometryType="dodecahedron"
          color="#00E5FF"
          wireframeColor="#FFE600"
        />
      </group>

      {/* =========================================
          SECTION 5: CONTACT PORTAL (y = -29.5)
         ========================================= */}
      <group position={[0, -29.5, -1]}>
        <group ref={portalRef}>
          <mesh>
            <torusGeometry args={[2.8, 0.08, 16, 64]} />
            <meshStandardMaterial
              color="#00E5FF"
              emissive="#00E5FF"
              emissiveIntensity={1.2}
            />
          </mesh>
          <mesh scale={0.75} rotation={[0, 0, Math.PI / 4]}>
            <torusGeometry args={[2.2, 0.06, 16, 64]} />
            <meshStandardMaterial
              color="#FFE600"
              emissive="#FFE600"
              emissiveIntensity={1.0}
            />
          </mesh>
        </group>
      </group>
    </group>
  );
}

