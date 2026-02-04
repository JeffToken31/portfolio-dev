import { useSyncExternalStore } from "react";

let cameraProgress = 0;
const listeners = new Set<() => void>();

export function setCameraProgress(next: number) {
  if (Math.abs(next - cameraProgress) < 0.0005) return;
  cameraProgress = next;
  listeners.forEach((listener) => listener());
}

export function useCameraProgress() {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    () => cameraProgress,
    () => cameraProgress
  );
}
