import type { NarrativeState } from "@/content/narrative";
import { Button } from "@/components/ui/Button";
import { NarrativeCardFrame } from "@/components/content/NarrativeCardFrame";

type StateProjectsProps = {
  state: NarrativeState;
  isVisible?: boolean;
  progress?: number;
};

export function StateProjects({
  state,
  isVisible = false,
  progress,
}: StateProjectsProps) {
  return (
    <NarrativeCardFrame isVisible={isVisible} progress={progress}>
      <div className="max-w-3xl space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          {state.title}
        </h2>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {state.projects?.map((project) => (
          <article
            key={project.name}
            className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-8"
          >
            <div className="space-y-5">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-neutral-100">
                  {project.name}
                </h3>
                <p className="text-sm uppercase tracking-wide text-neutral-400">
                  Contexte
                </p>
                <p className="text-base leading-relaxed text-neutral-300">
                  {project.context}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-neutral-400">
                  Ce que j’ai fait
                </p>
                <p className="text-base leading-relaxed text-neutral-300">
                  {project.work}
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm uppercase tracking-wide text-neutral-400">
                  Point méthode
                </p>
                <p className="text-base leading-relaxed text-neutral-300">
                  {project.method}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.cta.map((action) => (
                  <Button key={action.label} href={action.href} variant="ghost">
                    {action.label}
                  </Button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </NarrativeCardFrame>
  );
}
