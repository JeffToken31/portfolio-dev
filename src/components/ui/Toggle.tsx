type ToggleProps = {
  pressed: boolean;
  onPress: () => void;
  label: string;
};

export function Toggle({ pressed, onPress, label }: ToggleProps) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onPress}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-100"
    >
      <span
        className={`h-2 w-2 rounded-full ${
          pressed ? "bg-cyan-300" : "bg-neutral-500"
        }`}
      />
      {label}
    </button>
  );
}
