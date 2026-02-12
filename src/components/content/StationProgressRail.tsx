"use client";

type StationProgressRailProps = {
  count: number;
  currentIndex: number;
  isTransitioning: boolean;
  onSelect: (index: number) => void;
};

export function StationProgressRail({
  count,
  currentIndex,
  isTransitioning,
  onSelect,
}: StationProgressRailProps) {
  return (
    <nav
      aria-label="Progression des stations"
      className="pointer-events-none fixed inset-x-0 top-12 z-20 md:top-18"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="pointer-events-auto inline-flex rounded-full border border-neutral-600/80 bg-black/55 px-2 py-2.5 backdrop-blur-sm md:px-2.5">
          <div className="relative flex items-center gap-2.5">
            <div
              aria-hidden
              className="absolute left-1 right-1 top-1/2 h-px -translate-y-1/2 bg-neutral-500/85"
            />
            {Array.from({ length: count }, (_, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Aller a la station ${index + 1}`}
                  aria-current={isActive ? "step" : undefined}
                  onClick={() => onSelect(index)}
                  className={[
                    "relative z-10 rounded-full border transition-all",
                    "h-3 w-3 border-neutral-400/80 bg-neutral-800/90",
                    "cursor-pointer",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/80",
                    isActive
                      ? "h-4 w-4 border-cyan-200 bg-cyan-300 shadow-[0_0_14px_rgba(103,232,249,0.95)]"
                      : "",
                    isTransitioning && !isActive
                      ? "opacity-75 hover:border-neutral-300/80"
                      : "hover:border-cyan-200/80",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
