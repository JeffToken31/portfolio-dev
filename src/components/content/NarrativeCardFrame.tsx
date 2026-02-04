import type { ReactNode } from "react";

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
  const localProgress = progress ?? (isVisible ? 1 : 0);

  return (
    <section
      className="fixed inset-0 flex items-center justify-center transition-all duration-900 ease-in-out"
      aria-hidden={!isVisible}
      style={{
        opacity: isVisible ? 0.6 + 0.4 * localProgress : 0,
        transform: isVisible
          ? `translateY(${(1 - localProgress) * 8}px) scale(1)`
          : "translateY(16px) scale(0.97)",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div className="w-full px-6 md:px-10">
        <div className="mx-auto max-w-4xl">{children}</div>
      </div>
    </section>
  );
}
