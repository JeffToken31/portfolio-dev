import type { NarrativeState } from "@/content/narrative";

export function StateIdentity({ state }: { state: NarrativeState }) {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
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
      </div>
    </section>
  );
}
