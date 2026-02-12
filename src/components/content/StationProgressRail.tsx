"use client";

type StationProgressRailProps = {
  count: number;
  currentIndex: number;
  pendingTargetIndex: number | null;
  isTransitioning: boolean;
  onSelect: (index: number) => void;
};

export function StationProgressRail({
  count,
  currentIndex,
  pendingTargetIndex,
  isTransitioning,
  onSelect,
}: StationProgressRailProps) {
  return (
    <nav
      aria-label="Progression des stations"
      className="pointer-events-none fixed inset-x-0 top-8 z-20 md:top-18"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="pointer-events-auto inline-flex rounded-full border border-neutral-600/80 bg-black/55 px-[5px] py-[5px] backdrop-blur-sm md:px-2.5 md:py-2.5">
          <div className="relative flex items-center gap-1 md:gap-1.5">
            {Array.from({ length: count }, (_, index) => {
              const isActive = index === currentIndex;
              const isVisited = index < currentIndex;
              const isPendingTarget = pendingTargetIndex === index;
              const segmentVisited = index < currentIndex;
              const segmentPending =
                pendingTargetIndex !== null &&
                ((index >= currentIndex && index < pendingTargetIndex) ||
                  (index < currentIndex && index > pendingTargetIndex));
              return (
                <div key={index} className="flex items-center gap-1.5">
                  <button
                    type="button"
                    aria-label={`Aller a la station ${index + 1}`}
                    aria-current={isActive ? "step" : undefined}
                    onClick={() => onSelect(index)}
                  className={[
                    "relative z-10 rounded-full border transition-all",
                    "h-[9px] w-[9px] border-neutral-400/80 bg-neutral-800/90 md:h-3 md:w-3",
                    "cursor-pointer",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80",
                    isActive
                        ? "h-3 w-3 border-cyan-100 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.85)] md:h-4 md:w-4 md:shadow-[0_0_14px_rgba(103,232,249,0.95)]"
                        : "",
                      isVisited && !isActive
                        ? "border-cyan-700/70 bg-cyan-900/45"
                        : "",
                      isPendingTarget && !isActive
                        ? "border-cyan-200/90 bg-cyan-400/90 animate-pulse shadow-[0_0_10px_rgba(103,232,249,0.8)]"
                        : "",
                      isTransitioning && !isActive
                        ? "opacity-85 hover:border-neutral-300/80"
                        : "hover:border-cyan-200/80",
                    ].join(" ")}
                  />
                  {index < count - 1 ? (
                    <span
                      aria-hidden
                      className={[
                        "h-px w-[10px] transition-colors md:w-5",
                        segmentVisited
                          ? "bg-cyan-700/60"
                          : segmentPending
                            ? "bg-cyan-300/80"
                            : "bg-neutral-500/80",
                      ].join(" ")}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
