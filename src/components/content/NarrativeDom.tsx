"use client";

import { STATES, profile } from "@/content/narrative";
import { StateContact } from "@/components/content/states/StateContact";
import { StateEntry } from "@/components/content/states/StateEntry";
import { StateHero } from "@/components/content/states/StateHero";
import { StateIdentity } from "@/components/content/states/StateIdentity";
import { StateMethod } from "@/components/content/states/StateMethod";
import { StateProjects } from "@/components/content/states/StateProjects";
import { StateRelation } from "@/components/content/states/StateRelation";
import { StateThreshold } from "@/components/content/states/StateThreshold";
import { StationProgressRail } from "@/components/content/StationProgressRail";
import { useNarrativeController } from "@/components/orchestrator/NarrativeContext";

export function NarrativeDom() {
  const [entry, hero, identity, method, projects, relation, contact] = STATES;
  const { activeStateId, stateProgress, isArrived, currentIndex, isTransitioning, goToStation } =
    useNarrativeController();

  const isVisible = (id: string) =>
    isArrived && activeStateId === id;

  const progressFor = (id: string) =>
    activeStateId === id ? stateProgress : undefined;

  return (
    <div className="relative z-10">
      <StationProgressRail
        count={STATES.length}
        currentIndex={currentIndex}
        isTransitioning={isTransitioning}
        onSelect={goToStation}
      />
      <p className="sr-only">
        {profile.fullName}, développeur full-stack JavaScript spécialisé en
        Next.js, React et Node.js.
      </p>
      <StateEntry
        state={entry}
        isVisible={isVisible("entry")}
        progress={progressFor("entry")}
      />
      <StateHero
        state={hero}
        isVisible={isVisible("hero")}
        progress={progressFor("hero")}
      />
      <StateIdentity
        state={identity}
        isVisible={isVisible("identity")}
        progress={progressFor("identity")}
      />
      {method.subtitle ? <StateThreshold text={method.subtitle} /> : null}
      <StateMethod
        state={method}
        isVisible={isVisible("method")}
        progress={progressFor("method")}
      />
      <StateProjects
        state={projects}
        isVisible={isVisible("projects")}
        progress={progressFor("projects")}
      />
      <StateRelation
        state={relation}
        isVisible={isVisible("relation")}
        progress={progressFor("relation")}
      />
      <StateContact
        state={contact}
        isVisible={isVisible("contact")}
        progress={progressFor("contact")}
      />
    </div>
  );
}
