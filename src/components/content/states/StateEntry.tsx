import type { NarrativeState } from "@/content/narrative";

export function StateEntry({ state }: { state: NarrativeState }) {
  return (
    <section className="flex min-h-screen items-end">
      <div className="mx-auto w-full max-w-6xl px-6 pb-12 md:px-10">
        <div className="space-y-2 text-sm text-neutral-300">
          {state.body?.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
