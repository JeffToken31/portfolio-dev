import { NarrativeDom } from "@/components/content/NarrativeDom";
import { ExperienceCanvas } from "@/components/experience/ExperienceCanvas";
import { NarrativeProvider } from "@/components/orchestrator/NarrativeContext";

export default function Home() {
  return (
    <NarrativeProvider>
      <ExperienceCanvas />
      <NarrativeDom />
    </NarrativeProvider>
  );
}
