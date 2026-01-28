import type { ReactNode } from "react";

export function VisuallyHidden({ children }: { children: ReactNode }) {
  return (
    <span className="sr-only" aria-hidden={false}>
      {children}
    </span>
  );
}
