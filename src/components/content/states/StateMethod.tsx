import type { NarrativeState } from "@/content/narrative";
import { NarrativeCardFrame } from "@/components/content/NarrativeCardFrame";

type StateMethodProps = {
  state: NarrativeState;
  isVisible?: boolean;
  progress?: number;
};

export function StateMethod({
  state,
  isVisible = false,
  progress,
}: StateMethodProps) {
  return (
    <NarrativeCardFrame isVisible={isVisible} progress={progress}>
      <div className="max-w-3xl space-y-4">
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
      <div className="mt-8 space-y-8">
        {state.principles?.map((principle) => (
          <div key={principle.title} className="max-w-3xl space-y-3">
            <h3 className="text-lg font-semibold text-neutral-100 md:text-xl">
              {principle.title}
            </h3>
            <div className="space-y-2 text-base leading-relaxed text-neutral-300 md:text-lg">
              {principle.body.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </NarrativeCardFrame>
  );
}
