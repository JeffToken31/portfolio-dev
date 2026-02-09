"use client";

import { useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ExperienceScene } from "@/components/experience/scene/ExperienceScene";
import { useReducedMotion } from "@/components/orchestrator/useReducedMotion";
import { useNarrativeState } from "@/components/orchestrator/useNarrativeState";

export function ExperienceCanvas() {
  const reducedMotion = useReducedMotion();
  const { cinematicProgress } = useNarrativeState();
  const [ready, setReady] = useState(false);
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  }, []);
  const canRender = useMemo(() => {
    if (typeof window === "undefined") return true;
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("webgl2");
    return Boolean(gl);
  }, []);

  useEffect(() => {
    if (!canRender || reducedMotion) return;
    const start = () => setReady(true);
    const w = window as Window & {
      requestIdleCallback?: (
        cb: () => void,
        opts?: { timeout: number }
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(start, { timeout: 800 });
      return () => w.cancelIdleCallback?.(id);
    }
    const timeout = setTimeout(start, 300);
    return () => clearTimeout(timeout);
  }, [canRender, reducedMotion]);

  if (!canRender || reducedMotion || !ready) {
    return null;
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45, near: 0.1, far: 60 }}
        dpr={isMobile ? [1, 1.15] : [1, 1.5]}
      >
        <ExperienceScene
          progress={cinematicProgress}
          reducedMotion={reducedMotion}
        />
      </Canvas>
    </div>
  );
}
