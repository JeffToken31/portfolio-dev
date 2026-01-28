import type { NarrativeState } from "@/content/narrative";

export function StateRelation({ state }: { state: NarrativeState }) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl space-y-6">
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
      </div>
    </section>
  );
}
