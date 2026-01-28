"use client";

import { STATES } from "@/content/narrative";
import { useScrollProgress } from "@/components/orchestrator/useScrollProgress";

export function useNarrativeState() {
  const { progress } = useScrollProgress();

  return {
    progress,
    activeStateId: STATES[1].id,
    stateProgress: 0,
    transitionProgress: 0,
  };
}
