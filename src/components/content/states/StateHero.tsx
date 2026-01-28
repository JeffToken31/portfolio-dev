import type { NarrativeState } from "@/content/narrative";

export function StateHero({ state }: { state: NarrativeState }) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {state.title}
          </h1>
          {state.subtitle ? (
            <p className="text-base leading-relaxed text-neutral-300 md:text-lg">
              {state.subtitle}
            </p>
          ) : null}
          {state.body?.length ? (
            <p className="text-sm text-neutral-300">{state.body[0]}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
