import type { NarrativeState } from "@/content/narrative";
import { profile } from "@/content/narrative";
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
        <div className="space-y-1 text-sm text-neutral-300">
          <p>
            {profile.fullName} — {profile.role}
          </p>
          <p className="text-xs text-neutral-500">
            {profile.keywords.slice(0, 4).join(" · ")}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {primary ? (
            <Button href={primary.href} variant="ghost-email">
              {primary.label}
            </Button>
          ) : null}
          {secondary.map((action) => {
            const isLinkedIn = action.label
              .toLowerCase()
              .includes("linkedin");
            const variant = isLinkedIn ? "ghost-linkedin" : "ghost";
            return (
              <Button
                key={action.label}
                href={action.href}
                variant={variant}
                target="_blank"
                rel="noreferrer"
              >
                {action.label}
              </Button>
            );
          })}
        </div>
        {state.body?.length ? (
          <p className="text-sm text-neutral-300">{state.body[0]}</p>
        ) : null}
      </div>
    </NarrativeCardFrame>
  );
}
