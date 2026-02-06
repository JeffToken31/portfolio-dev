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
  const lockRef = useRef(false);
  const wheelArmedRef = useRef(true);
  const lastWheelAtRef = useRef(0);
  const transitionRef = useRef({
    from: 0,
    to: 0,
    start: 0,
    duration: 700,
  });
  const indexRef = useRef(0);
  const targets = UNIFORM_TARGETS;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const tick = () => {
      const now = performance.now();
      if (lockRef.current) {
        const { from, to, start, duration } = transitionRef.current;
        const t = clamp((now - start) / duration, 0, 1);
        const eased = easeInOutCubic(t);
        const next = from + (to - from) * eased;
        setProgress(next);
        if (t >= 1) {
          lockRef.current = false;
          setIsTransitioning(false);
          setProgress(to);
        }
      } else {
        if (!wheelArmedRef.current && now - lastWheelAtRef.current > 350) {
          wheelArmedRef.current = true;
        }
        setProgress(targetRef.current);
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    targetRef.current = targets[indexRef.current] ?? 0;
    setCurrentIndex(indexRef.current);
    rafRef.current = requestAnimationFrame(tick);

    const goToIndex = (nextIndex: number) => {
      if (nextIndex === indexRef.current) return;
      indexRef.current = nextIndex;
      setCurrentIndex(nextIndex);
      const nextTarget = targets[nextIndex] ?? 0;
      transitionRef.current = {
        from: targetRef.current,
        to: nextTarget,
        start: performance.now(),
        duration: 700,
      };
      targetRef.current = nextTarget;
      lockRef.current = true;
      setIsTransitioning(true);
    };

    const triggerMove = (dir: number) => {
      const nextIndex = clamp(indexRef.current + dir, 0, targets.length - 1);
      goToIndex(nextIndex);
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      lastWheelAtRef.current = performance.now();
      if (lockRef.current) return;
      if (!wheelArmedRef.current) return;
      if (Math.abs(event.deltaY) < 2) return;
      const dir = event.deltaY > 0 ? 1 : -1;
      wheelArmedRef.current = false;
      triggerMove(dir);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(
            target.tagName
          ))
      ) {
        return;
      }
      if (lockRef.current) {
        event.preventDefault();
        return;
      }
      const key = event.key;
      if (key === "End") {
        goToIndex(targets.length - 1);
        event.preventDefault();
        return;
      }
      if (key === "Home") {
        goToIndex(0);
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
