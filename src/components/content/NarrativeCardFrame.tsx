"use client";

import type { ReactNode } from "react";
import { useReducedMotion } from "@/components/orchestrator/useReducedMotion";

type NarrativeCardFrameProps = {
  isVisible: boolean;
  progress?: number;
  children: ReactNode;
};

export function NarrativeCardFrame({
  isVisible,
  progress,
  children,
}: NarrativeCardFrameProps) {
  const reducedMotion = useReducedMotion();
  const localProgress = progress ?? (isVisible ? 1 : 0);
  const transitionClass = reducedMotion
    ? "transition-none"
    : "transition-all duration-900 ease-in-out";
  const transformStyle = reducedMotion
    ? "translateY(0px) scale(1)"
    : isVisible
    ? `translateY(${(1 - localProgress) * 8}px) scale(1)`
    : "translateY(16px) scale(0.97)";

  return (
    <section
      className={`fixed inset-0 flex items-center justify-center ${transitionClass}`}
      aria-hidden={!isVisible}
      style={{
        opacity: isVisible ? 0.6 + 0.4 * localProgress : 0,
        transform: transformStyle,
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div className="w-full px-6 md:px-10">
        <div className="mx-auto max-w-4xl">{children}</div>
      </div>
    </section>
  );
}
