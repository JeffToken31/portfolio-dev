import type { NarrativeState } from "@/content/narrative";
import { NarrativeCardFrame } from "@/components/content/NarrativeCardFrame";

type StateEntryProps = {
  state: NarrativeState;
  isVisible?: boolean;
  progress?: number;
};

export function StateEntry({
  state,
  isVisible = false,
  progress,
}: StateEntryProps) {
  return (
    <NarrativeCardFrame isVisible={isVisible} progress={progress}>
      <div className="space-y-2 text-sm text-neutral-300">
        {state.body?.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </NarrativeCardFrame>
  );
}
