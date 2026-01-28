import { STATES } from "@/content/narrative";
import { StateContact } from "@/components/content/states/StateContact";
import { StateEntry } from "@/components/content/states/StateEntry";
import { StateHero } from "@/components/content/states/StateHero";
import { StateIdentity } from "@/components/content/states/StateIdentity";
import { StateMethod } from "@/components/content/states/StateMethod";
import { StateProjects } from "@/components/content/states/StateProjects";
import { StateRelation } from "@/components/content/states/StateRelation";

export function NarrativeDom() {
  const [entry, hero, identity, method, projects, relation, contact] = STATES;

  return (
    <div className="relative z-10">
      <StateEntry state={entry} />
      <StateHero state={hero} />
      <StateIdentity state={identity} />
      <StateMethod state={method} />
      <StateProjects state={projects} />
      <StateRelation state={relation} />
      <StateContact state={contact} />
    </div>
  );
}
