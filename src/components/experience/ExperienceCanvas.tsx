"use client";

import { Canvas } from "@react-three/fiber";
import { ExperienceScene } from "@/components/experience/scene/ExperienceScene";
import { useReducedMotion } from "@/components/orchestrator/useReducedMotion";
import { useNarrativeState } from "@/components/orchestrator/useNarrativeState";

export function ExperienceCanvas() {
  const reducedMotion = useReducedMotion();
  const { cinematicProgress } = useNarrativeState();

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 60 }}
        dpr={[1, 1.5]}
      >
        <ExperienceScene
          progress={cinematicProgress}
          reducedMotion={reducedMotion}
        />
      </Canvas>
    </div>
  );
}
