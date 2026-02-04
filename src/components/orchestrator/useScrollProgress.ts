"use client";

import { useEffect, useRef, useState } from "react";
import { clamp } from "@/lib/utils/clamp";
import { UNIFORM_TARGETS } from "@/content/narrative";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const lockRef = useRef(false);
  const indexRef = useRef(0);
  const targets = UNIFORM_TARGETS;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const tick = () => {
      const now = performance.now();
      const last = lastTimeRef.current ?? now;
      const dt = Math.max(0.001, (now - last) / 1000);
      lastTimeRef.current = now;

      setProgress((current) => {
        const target = targetRef.current;
        const maxSpeed = 0.035;
        const maxDelta = maxSpeed * dt;
        const delta = clamp(target - current, -maxDelta, maxDelta);
        const next = current + delta;

        if (lockRef.current && Math.abs(target - next) < 0.0012) {
          lockRef.current = false;
          setIsTransitioning(false);
          return target;
        }

        return Math.abs(next - current) < 0.0003 ? target : next;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    targetRef.current = targets[indexRef.current] ?? 0;
    setCurrentIndex(indexRef.current);
    rafRef.current = requestAnimationFrame(tick);

    const triggerMove = (dir: number) => {
      const nextIndex = clamp(indexRef.current + dir, 0, targets.length - 1);
      if (nextIndex === indexRef.current) return;
      indexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      targetRef.current = targets[nextIndex];
      lockRef.current = true;
      setIsTransitioning(true);
    };

    const onWheel = (event: WheelEvent) => {
      if (lockRef.current) {
        event.preventDefault();
        return;
      }
      if (Math.abs(event.deltaY) < 2) return;
      const dir = event.deltaY > 0 ? 1 : -1;
      triggerMove(dir);
      event.preventDefault();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (lockRef.current) {
        event.preventDefault();
        return;
      }
      const key = event.key;
      if (key === "End") {
        indexRef.current = targets.length - 1;
        setCurrentIndex(indexRef.current);
        targetRef.current = targets[indexRef.current];
        lockRef.current = true;
        setIsTransitioning(true);
        event.preventDefault();
        return;
      }
      if (key === "Home") {
        indexRef.current = 0;
        setCurrentIndex(indexRef.current);
        targetRef.current = targets[0];
        lockRef.current = true;
        setIsTransitioning(true);
        event.preventDefault();
        return;
      }
      const forwardKeys = ["ArrowDown", "PageDown", " ", "ArrowRight"];
      const backwardKeys = ["ArrowUp", "PageUp", "ArrowLeft"];
      if (forwardKeys.includes(key)) {
        triggerMove(1);
        event.preventDefault();
      }
      if (backwardKeys.includes(key)) {
        triggerMove(-1);
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown, { passive: false });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [targets]);

  return { progress, isTransitioning, currentIndex };
}
