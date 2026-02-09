"use client";

import { useState } from "react";
import Image from "next/image";
import type { NarrativeState } from "@/content/narrative";
import { profile } from "@/content/narrative";
import { NarrativeCardFrame } from "@/components/content/NarrativeCardFrame";

type StateHeroProps = {
  state: NarrativeState;
  isVisible?: boolean;
  progress?: number;
};

export function StateHero({
  state,
  isVisible = false,
  progress,
}: StateHeroProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <NarrativeCardFrame isVisible={isVisible} progress={progress}>
      <div className="max-w-3xl space-y-6">
        <div className="flex items-center gap-3">
          {imageError ? (
            <div
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 text-[10px] font-semibold uppercase text-neutral-300 ring-1 ring-neutral-800/60 md:h-[52px] md:w-[52px]"
              aria-label={profile.fullName}
            >
              JB
            </div>
          ) : (
            <div className="relative h-11 w-11 overflow-hidden rounded-full ring-1 ring-neutral-800/60 md:h-[52px] md:w-[52px]">
              <Image
                src={profile.avatar.src}
                alt={profile.avatar.alt}
                fill
                sizes="(min-width: 768px) 52px, 44px"
                className="object-cover"
                onError={() => setImageError(true)}
              />
            </div>
          )}
          <div className="text-xs uppercase tracking-wide text-neutral-400 md:text-sm">
            {profile.fullName} - {profile.role}
          <p>{profile.keywords.slice(0, 5).join(" · ")}</p>
          </div>
        </div>
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
    </NarrativeCardFrame>
  );
}
