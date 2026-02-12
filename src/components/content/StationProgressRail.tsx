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
      className="pointer-events-none fixed inset-x-0 top-16 z-20 md:top-22"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="pointer-events-auto inline-flex rounded-full border border-neutral-800/70 bg-black/30 px-2 py-2 backdrop-blur-[2px] md:px-2.5">
          <div className="relative flex items-center gap-2.5">
            <div
              aria-hidden
              className="absolute left-1 right-1 top-1/2 h-px -translate-y-1/2 bg-neutral-700/80"
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
                    "h-2.5 w-2.5 border-neutral-500/80 bg-neutral-900/85",
                    "cursor-pointer",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70",
                    isActive
                      ? "h-3.5 w-3.5 border-cyan-300/90 bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.85)]"
                      : "",
                    isTransitioning && !isActive
                      ? "opacity-70 hover:border-neutral-500/80"
                      : "hover:border-cyan-300/70",
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
