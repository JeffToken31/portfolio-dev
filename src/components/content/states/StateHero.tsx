import type { NarrativeState } from "@/content/narrative";
import { profile } from "@/content/narrative";
import { NarrativeCardFrame } from "@/components/content/NarrativeCardFrame";

type StateHeroProps = {
  state: NarrativeState;
  isVisible?: boolean;
  progress?: number;
};

export function StateHero({
  state,
  isVisible = false,
  progress,
}: StateHeroProps) {
  return (
    <NarrativeCardFrame isVisible={isVisible} progress={progress}>
      <div className="max-w-3xl space-y-6">
        <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {state.title}
        </h1>
        <div className="space-y-1 text-xs uppercase tracking-wide text-neutral-400 md:text-sm">
          <p>
            {profile.fullName} — {profile.role}
          </p>
          <p>{profile.keywords.slice(0, 4).join(" · ")}</p>
        </div>
        {state.subtitle ? (
          <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
            {state.subtitle}
          </p>
        ) : null}
        {state.body?.length ? (
          <p className="text-sm text-neutral-300">{state.body[0]}</p>
        ) : null}
      </div>
    </NarrativeCardFrame>
  );
}
