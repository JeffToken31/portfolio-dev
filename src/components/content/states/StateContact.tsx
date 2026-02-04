import type { NarrativeState } from "@/content/narrative";
import { Button } from "@/components/ui/Button";
import { NarrativeCardFrame } from "@/components/content/NarrativeCardFrame";

type StateContactProps = {
  state: NarrativeState;
  isVisible?: boolean;
  progress?: number;
};

export function StateContact({
  state,
  isVisible = false,
  progress,
}: StateContactProps) {
  const primary = state.cta?.[0];
  const secondary = state.cta?.slice(1) ?? [];

  return (
    <NarrativeCardFrame isVisible={isVisible} progress={progress}>
      <div className="max-w-3xl space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {state.title}
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          {primary ? <Button href={primary.href}>{primary.label}</Button> : null}
          {secondary.map((action) => (
            <a
              key={action.label}
              className="text-sm font-semibold text-cyan-300"
              href={action.href}
            >
              {action.label}
            </a>
          ))}
        </div>
        {state.body?.length ? (
          <p className="text-sm text-neutral-300">{state.body[0]}</p>
        ) : null}
      </div>
    </NarrativeCardFrame>
  );
}
