import type { NarrativeState } from "@/content/narrative";
import { NarrativeCardFrame } from "@/components/content/NarrativeCardFrame";

type StateRelationProps = {
  state: NarrativeState;
  isVisible?: boolean;
  progress?: number;
};

export function StateRelation({
  state,
  isVisible = false,
  progress,
}: StateRelationProps) {
  return (
    <NarrativeCardFrame isVisible={isVisible} progress={progress}>
      <div className="max-w-3xl space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {state.title}
        </h2>
        {state.body?.map((line) => (
          <p
            key={line}
            className="text-base leading-relaxed text-neutral-300 md:text-lg"
          >
            {line}
          </p>
        ))}
      </div>
    </NarrativeCardFrame>
  );
}
