import type { NarrativeState } from "@/content/narrative";
import { Button } from "@/components/ui/Button";

export function StateContact({ state }: { state: NarrativeState }) {
  const [primary, secondary] = state.cta ?? [];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {state.title}
          </h2>
          <div className="flex flex-wrap items-center gap-4">
            {primary ? (
              <Button href={primary.href}>{primary.label}</Button>
            ) : null}
            {secondary ? (
              <a
                className="text-sm font-semibold text-cyan-300"
                href={secondary.href}
              >
                {secondary.label}
              </a>
            ) : null}
          </div>
          {state.body?.length ? (
            <p className="text-sm text-neutral-300">{state.body[0]}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
