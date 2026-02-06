"use client";

import {
  STATE_COUNT,
  STATE_IDS,
  UNIFORM_TARGETS,
  type NarrativeState,
} from "@/content/narrative";
import { useScrollProgress } from "@/components/orchestrator/useScrollProgress";
import { clamp } from "@/lib/utils/clamp";
import { useCameraProgress } from "@/components/orchestrator/cameraProgressStore";
import { useReducedMotion } from "@/components/orchestrator/useReducedMotion";

const fallbackStateId: NarrativeState["id"] = "hero";

export function useNarrativeState() {
  const { progress, isTransitioning, currentIndex } = useScrollProgress();
  const cameraProgress = useCameraProgress();
  const reducedMotion = useReducedMotion();
  const cinematicProgress = progress;

  const activeStateId = STATE_IDS[currentIndex] ?? fallbackStateId;
  const step = STATE_COUNT > 0 ? 1 / STATE_COUNT : 1;
  const uniformStart = currentIndex * step;
  const uniformEnd = Math.min(uniformStart + step, 1);
  const uniformSpan = uniformEnd - uniformStart;
  const local =
    uniformSpan > 0
      ? (cinematicProgress - uniformStart) / uniformSpan
      : 0;
  const normalized = clamp(local, 0, 1);

  const target = UNIFORM_TARGETS[currentIndex] ?? 0;
  const isArrived = reducedMotion
    ? true
    : Math.abs(cameraProgress - target) < 0.001;

  return {
    cinematicProgress,
    isTransitioning,
    isArrived,
    activeStateId,
    stateProgress: normalized,
  };
}
