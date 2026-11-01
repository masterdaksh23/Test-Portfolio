"use client";

import { useEffect, useRef, RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 3D Camera waypoints corresponding to the 6 sections
const WAYPOINTS = [
  // Section 0: Hero
  {
    pos: new THREE.Vector3(0, 0, 5.5),
    target: new THREE.Vector3(0, 0, 0),
  },
  // Section 1: About Me
  {
    pos: new THREE.Vector3(2.2, -5.5, 3.8),
    target: new THREE.Vector3(-0.5, -5.5, 0),
  },
  // Section 2: Hackathons & CTFs
  {
    pos: new THREE.Vector3(-2.8, -11.5, 3.2),
    target: new THREE.Vector3(0.5, -11.5, 0),
  },
  // Section 3: Projects
  {
    pos: new THREE.Vector3(2.5, -17.5, 3.5),
    target: new THREE.Vector3(-0.6, -17.5, 0),
  },
  // Section 4: Competitions & Certifications
  {
    pos: new THREE.Vector3(-2.0, -23.5, 3.0),
    target: new THREE.Vector3(0.4, -23.5, -0.5),
  },
  // Section 5: Contact & Terminal
  {
    pos: new THREE.Vector3(0, -29.5, 4.2),
    target: new THREE.Vector3(0, -29.5, -0.5),
  },
];

interface CameraRigProps {
  progressRef?: RefObject<number>;
  progress?: number;
}

export function CameraRig({ progressRef, progress: propProgress }: CameraRigProps) {
  const currentPos = useRef(new THREE.Vector3(0, 0, 5.5));
  const currentTarget = useRef(new THREE.Vector3(0, 0, 0));
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state, delta) => {
    // Read progress smoothly from ref or prop
    const rawProgress = progressRef?.current ?? propProgress ?? 0;
    const progress = Math.min(Math.max(rawProgress, 0), 1);

    // Compute segment index (0 to 4) and fraction (0 to 1) within the segment
    const totalSegments = WAYPOINTS.length - 1;
    const scaledProgress = progress * totalSegments;
    const segmentIndex = Math.floor(scaledProgress);
    const fraction = scaledProgress - segmentIndex;

    const currentWaypoint = WAYPOINTS[Math.min(segmentIndex, totalSegments)];
    const nextWaypoint =
      WAYPOINTS[Math.min(segmentIndex + 1, totalSegments)];

    // Interpolated target position and lookAt point
    const targetPos = new THREE.Vector3().lerpVectors(
      currentWaypoint.pos,
      nextWaypoint.pos,
      fraction
    );

    const targetLookAt = new THREE.Vector3().lerpVectors(
      currentWaypoint.target,
      nextWaypoint.target,
      fraction
    );

    // Add interactive cursor parallax
    const parallaxX = mousePos.current.x * 0.45;
    const parallaxY = mousePos.current.y * 0.3;

    targetPos.x += parallaxX;
    targetPos.y += parallaxY;

    // Smoothly damp camera towards target
    const damping = Math.min(delta * 4, 1);
    currentPos.current.lerp(targetPos, damping);
    currentTarget.current.lerp(targetLookAt, damping);

    state.camera.position.copy(currentPos.current);
    state.camera.lookAt(currentTarget.current);
  });

  return null;
}
