import type { NarrativeState } from "@/content/narrative";
import { NarrativeCardFrame } from "@/components/content/NarrativeCardFrame";

type StateIdentityProps = {
  state: NarrativeState;
  isVisible?: boolean;
  progress?: number;
};

export function StateIdentity({
  state,
  isVisible = false,
  progress,
}: StateIdentityProps) {
  return (
    <NarrativeCardFrame isVisible={isVisible} progress={progress}>
      <div className="max-w-3xl space-y-6">
        {state.fragments?.map((fragment) => (
          <p
            key={fragment}
            className="text-base leading-relaxed text-neutral-100 md:text-lg"
          >
            {fragment}
          </p>
        ))}
      </div>
    </NarrativeCardFrame>
  );
}
