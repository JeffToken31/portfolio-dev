"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { clamp } from "@/lib/utils/clamp";
import { UNIFORM_TARGETS } from "@/content/narrative";
import { useCameraProgress } from "@/components/orchestrator/cameraProgressStore";

export function useScrollProgress() {
  const cameraProgress = useCameraProgress();
  const [progress, setProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pendingTargetIndex, setPendingTargetIndex] = useState<number | null>(null);
  const targetRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lockRef = useRef(false);
  const wheelArmedRef = useRef(true);
  const lastWheelAtRef = useRef(0);
  const touchStartYRef = useRef<number | null>(null);
  const touchArmedRef = useRef(true);
  const interactionBlockedUntilRef = useRef(0);
  const transitionRef = useRef({
    from: 0,
    to: 0,
    start: 0,
    duration: 700,
  });
  const indexRef = useRef(0);
  const targets = UNIFORM_TARGETS;
  const isMobile = useRef(false);
  const mobileInertiaLockMs = 520;
  const mobileStationDwellMs = 260;
  const mobileArrivalEpsilon = 0.0012;
  const cameraProgressRef = useRef(0);
  const awaitingArrivalRef = useRef(false);
  const arrivalWaitStartRef = useRef(0);
  const goToStationRef = useRef<(nextIndex: number) => boolean>(() => false);
  const pendingTargetIndexRef = useRef<number | null>(null);

  useEffect(() => {
    cameraProgressRef.current = cameraProgress;
  }, [cameraProgress]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const linear = (t: number) => t;

    isMobile.current = window.matchMedia("(max-width: 768px)").matches;

    const tick = () => {
      const now = performance.now();
      if (lockRef.current) {
        const { from, to, start, duration } = transitionRef.current;
        const t = clamp((now - start) / duration, 0, 1);
        if (t < 1) {
          const eased = isMobile.current ? linear(t) : easeInOutCubic(t);
          const next = from + (to - from) * eased;
          setProgress(next);
        } else {
          setProgress(to);
          if (!isMobile.current) {
            lockRef.current = false;
            setIsTransitioning(false);
            interactionBlockedUntilRef.current = 0;
          } else {
            if (!awaitingArrivalRef.current) {
              awaitingArrivalRef.current = true;
              arrivalWaitStartRef.current = now;
            }
            const cameraDelta = Math.abs(cameraProgressRef.current - to);
            const cameraArrived = cameraDelta < mobileArrivalEpsilon;
            const timedOut = now - arrivalWaitStartRef.current > 1300;
            if (cameraArrived || timedOut) {
              awaitingArrivalRef.current = false;
              lockRef.current = false;
              setIsTransitioning(false);
              interactionBlockedUntilRef.current =
                now + mobileInertiaLockMs + mobileStationDwellMs;
            }
          }
        }
      } else {
        const pending = pendingTargetIndexRef.current;
        if (pending !== null && !isInputBlocked()) {
          if (pending === indexRef.current) {
            pendingTargetIndexRef.current = null;
            setPendingTargetIndex(null);
          } else {
            stepToward(pending);
          }
        }
        if (!wheelArmedRef.current && now - lastWheelAtRef.current > 350) {
          wheelArmedRef.current = true;
        }
        if (!touchArmedRef.current && now - lastWheelAtRef.current > 350) {
          touchArmedRef.current = true;
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
        duration: isMobile.current ? 480 : 700,
      };
      awaitingArrivalRef.current = false;
      arrivalWaitStartRef.current = 0;
      targetRef.current = nextTarget;
      lockRef.current = true;
      setIsTransitioning(true);
    };

    const stepToward = (targetIndex: number) => {
      const clampedTarget = clamp(targetIndex, 0, targets.length - 1);
      if (clampedTarget === indexRef.current) return false;
      const dir = clampedTarget > indexRef.current ? 1 : -1;
      goToIndex(clamp(indexRef.current + dir, 0, targets.length - 1));
      return true;
    };

    const isInputBlocked = () =>
      lockRef.current ||
      (isMobile.current && performance.now() < interactionBlockedUntilRef.current);

    goToStationRef.current = (nextIndex: number) => {
      const clamped = clamp(nextIndex, 0, targets.length - 1);
      if (clamped === indexRef.current) return false;
      pendingTargetIndexRef.current = clamped;
      setPendingTargetIndex(clamped);
      if (isInputBlocked()) return true;
      stepToward(clamped);
      return true;
    };

    const extendMobileLock = () => {
      if (!isMobile.current) return;
      const now = performance.now();
      interactionBlockedUntilRef.current = Math.max(
        interactionBlockedUntilRef.current,
        now + mobileInertiaLockMs
      );
    };

    const triggerMove = (dir: number) => {
      const nextIndex = clamp(indexRef.current + dir, 0, targets.length - 1);
      goToIndex(nextIndex);
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (isInputBlocked()) {
        extendMobileLock();
        return;
      }
      lastWheelAtRef.current = performance.now();
      if (!wheelArmedRef.current) return;
      if (Math.abs(event.deltaY) < 2) return;
      const dir = event.deltaY > 0 ? 1 : -1;
      wheelArmedRef.current = false;
      pendingTargetIndexRef.current = null;
      setPendingTargetIndex(null);
      triggerMove(dir);
    };

    const isInteractiveTarget = (target: EventTarget | null) => {
      const el = target as HTMLElement | null;
      if (!el) return false;
      return (
        el.isContentEditable ||
        ["INPUT", "TEXTAREA", "SELECT", "BUTTON", "A"].includes(el.tagName)
      );
    };

    const onTouchStart = (event: TouchEvent) => {
      if (isInteractiveTarget(event.target)) return;
      if (isInputBlocked()) {
        event.preventDefault();
        extendMobileLock();
        touchStartYRef.current = null;
        return;
      }
      if (event.touches.length !== 1) return;
      touchStartYRef.current = event.touches[0].clientY;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (isInteractiveTarget(event.target)) return;
      if (isInputBlocked()) {
        event.preventDefault();
        extendMobileLock();
        return;
      }
      if (!touchArmedRef.current) {
        event.preventDefault();
        return;
      }
      const startY = touchStartYRef.current;
      if (startY === null) return;
      const currentY = event.touches[0]?.clientY ?? startY;
      const deltaY = startY - currentY;
      if (Math.abs(deltaY) < 24) return;
      event.preventDefault();
      lastWheelAtRef.current = performance.now();
      const dir = deltaY > 0 ? 1 : -1;
      touchArmedRef.current = false;
      touchStartYRef.current = null;
      pendingTargetIndexRef.current = null;
      setPendingTargetIndex(null);
      triggerMove(dir);
    };

    const onTouchEnd = () => {
      touchStartYRef.current = null;
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
      if (isMobile.current && performance.now() < interactionBlockedUntilRef.current) {
        event.preventDefault();
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
        pendingTargetIndexRef.current = null;
        setPendingTargetIndex(null);
        triggerMove(1);
        event.preventDefault();
      }
      if (backwardKeys.includes(key)) {
        pendingTargetIndexRef.current = null;
        setPendingTargetIndex(null);
        triggerMove(-1);
        event.preventDefault();
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKeyDown, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: false });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      goToStationRef.current = () => false;
      pendingTargetIndexRef.current = null;
      setPendingTargetIndex(null);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      document.body.style.overflow = "";
    };
  }, [targets]);

  const goToStation = useCallback((nextIndex: number) => {
    return goToStationRef.current(nextIndex);
  }, []);

  return {
    progress,
    isTransitioning,
    currentIndex,
    pendingTargetIndex,
    goToStation,
  };
}
