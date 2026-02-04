export function StateThreshold({ text }: { text: string }) {
  return (
    <section className="py-12">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <p className="text-sm uppercase tracking-wide text-neutral-300">
          {text}
        </p>
      </div>
    </section>
  );
}
