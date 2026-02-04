"use client";

import { STATE_COUNT, STATE_IDS, type NarrativeState } from "@/content/narrative";
import { useScrollProgress } from "@/components/orchestrator/useScrollProgress";
import { clamp } from "@/lib/utils/clamp";

const fallbackStateId: NarrativeState["id"] = "hero";

export function useNarrativeState() {
  const { progress, isTransitioning, currentIndex } = useScrollProgress();
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

  return {
    cinematicProgress,
    isTransitioning,
    activeStateId,
    stateProgress: normalized,
  };
}
