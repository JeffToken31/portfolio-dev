import type { ReactNode } from "react";

const baseClasses =
  "inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/40";

const variants = {
  solid: "bg-cyan-300 text-zinc-950 hover:bg-cyan-200",
  ghost: "border border-white/10 text-neutral-100 hover:border-cyan-300/40",
  "ghost-ats":
    "border border-white/10 text-neutral-100 hover:!text-[#003e6d] hover:border-[#003e6d]",
  "ghost-zafira":
    "border border-white/10 text-neutral-100 hover:!text-[#e9348c] hover:border-[#e9348c]",
  "ghost-linkedin":
    "border border-white/10 text-neutral-100 hover:!text-[#0e76a8] hover:border-[#0e76a8]",
};

type ButtonProps = {
  href?: string;
  variant?: keyof typeof variants;
  className?: string;
  target?: string;
  rel?: string;
  children: ReactNode;
};

export function Button({
  href,
  variant = "solid",
  className,
  target,
  rel,
  children,
}: ButtonProps) {
  const classes = [baseClasses, variants[variant], className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a className={classes} href={href} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button">
      {children}
    </button>
  );
}
