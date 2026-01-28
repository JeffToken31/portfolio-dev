import type { NarrativeState } from "@/content/narrative";

export function StateMethod({ state }: { state: NarrativeState }) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl space-y-6">
          {state.subtitle ? (
            <p className="text-sm text-neutral-300">{state.subtitle}</p>
          ) : null}
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
        <div className="mt-12 space-y-10">
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
      </div>
    </section>
  );
}
