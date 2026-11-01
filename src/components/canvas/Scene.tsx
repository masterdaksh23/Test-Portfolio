"use client";

import { Suspense, RefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { World } from "./World";
import { CameraRig } from "./CameraRig";

interface SceneProps {
  progressRef?: RefObject<number>;
  progress?: number;
}

export function Scene({ progressRef, progress }: SceneProps) {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        key="daksh-3d-spatial-canvas"
        shadows
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        className="w-full h-full"
      >
        <Suspense fallback={null}>
          <World />
          <CameraRig progressRef={progressRef} progress={progress} />
        </Suspense>
      </Canvas>
    </div>
  );
}
