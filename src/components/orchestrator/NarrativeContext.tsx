"use client";

import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { useNarrativeState } from "@/components/orchestrator/useNarrativeState";

type NarrativeController = ReturnType<typeof useNarrativeState>;

const NarrativeContext = createContext<NarrativeController | null>(null);

export function NarrativeProvider({ children }: { children: ReactNode }) {
  const value = useNarrativeState();
  return (
    <NarrativeContext.Provider value={value}>
      {children}
    </NarrativeContext.Provider>
  );
}

export function useNarrativeController() {
  const context = useContext(NarrativeContext);
  if (!context) {
    throw new Error("useNarrativeController must be used inside NarrativeProvider");
  }
  return context;
}
