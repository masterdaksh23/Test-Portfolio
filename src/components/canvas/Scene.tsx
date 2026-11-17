"use client";

import { Suspense, RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { World } from "./World";
import { CameraRig } from "./CameraRig";

interface SceneProps {
  progressRef?: RefObject<number>;
  progress?: number;
  isBooted?: boolean;
}

export function Scene({ progressRef, progress, isBooted = true }: SceneProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        key="daksh-3d-spatial-canvas"
        shadows
        camera={{ position: [0, 0, 10], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <World />
          <CameraRig progressRef={progressRef} progress={progress} isBooted={isBooted} />
        </Suspense>
      </Canvas>
    </div>
  );
}
