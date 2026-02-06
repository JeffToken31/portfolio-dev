 "use client";

import { useState } from "react";
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
  const projects = state.projects ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const total = projects.length;
  const canPrev = activeIndex > 0;
  const canNext = activeIndex < total - 1;

  const goPrev = () => {
    if (canPrev) setActiveIndex((value) => value - 1);
  };
  const goNext = () => {
    if (canNext) setActiveIndex((value) => value + 1);
  };

  return (
    <NarrativeCardFrame isVisible={isVisible} progress={progress}>
      <div className="mt-[10vh] md:mt-0">
        <div className="max-w-3xl space-y-3 md:space-y-6">
          <h2 className="mt-2 text-xl font-semibold leading-tight tracking-tight md:text-5xl">
            {state.title}
          </h2>
        </div>
        <div className="mt-9 space-y-5 md:mt-8 md:space-y-0">
          <div className="relative md:hidden">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {projects.map((project) => (
                  <article
                    key={project.name}
                    className="flex h-[420px] w-full flex-none flex-col rounded-2xl bg-white/5 p-3 ring-1 ring-white/10 md:h-full md:p-6"
                  >
                    <ProjectCard project={project} />
                  </article>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-neutral-400">
              <button
                type="button"
                className="rounded-full border border-white/10 px-3 py-2 text-neutral-100 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
                onClick={goPrev}
                disabled={!canPrev}
                aria-label="Projet précédent"
              >
                ←
              </button>
              <span>
                {total > 0 ? activeIndex + 1 : 0} / {total}
              </span>
              <button
                type="button"
                className="rounded-full border border-white/10 px-3 py-2 text-neutral-100 disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40"
                onClick={goNext}
                disabled={!canNext}
                aria-label="Projet suivant"
              >
                →
              </button>
            </div>
          </div>
          <div className="hidden gap-6 md:grid md:grid-cols-2 md:gap-6">
            {projects.map((project) => (
              <article
                key={project.name}
                className="flex h-full flex-col rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 md:p-8"
              >
                <ProjectCard project={project} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </NarrativeCardFrame>
  );
}

function ProjectCard({
  project,
}: {
  project: NonNullable<NarrativeState["projects"]>[number];
}) {
  const isZafira = project.name.includes("Zafira");
  const accent = isZafira ? "#e9348c" : "#003e6d";
  const buttonVariant = isZafira ? "ghost-zafira" : "ghost-ats";

  return (
    <div className="flex h-full flex-col">
      <div className="space-y-2">
        <h3 className="text-xl font-semibold" style={{ color: accent }}>
          {project.name}
        </h3>
      </div>
      <div className="flex flex-1 flex-col justify-center space-y-5">
        <div className="space-y-2">
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
      </div>
      <div className="pt-4">
        {project.cta.map((action) => (
          <Button
            key={action.label}
            href={action.href}
            variant={buttonVariant}
            target="_blank"
            rel="noreferrer"
          >
            {action.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
