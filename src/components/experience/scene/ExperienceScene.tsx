import { CameraRig } from "@/components/experience/scene/CameraRig";
import { Lights } from "@/components/experience/scene/Lights";
import { NarrativeIcons } from "@/components/experience/scene/NarrativeIcons";
import { StationMarkers } from "@/components/experience/scene/StationMarkers";
import { Tunnel } from "@/components/experience/scene/Tunnel";
import { TUNNEL_PALETTE } from "@/components/experience/scene/palette";

type ExperienceSceneProps = {
  progress: number;
  reducedMotion: boolean;
};

export function ExperienceScene({
  progress,
  reducedMotion,
}: ExperienceSceneProps) {
  return (
    <>
      <color attach="background" args={[TUNNEL_PALETTE.background]} />
      <fog attach="fog" args={[TUNNEL_PALETTE.fog, 8, 185]} />
      <Lights />
      <CameraRig
        progress={progress}
        reducedMotion={reducedMotion}
      />
      <Tunnel progress={progress} />
      <NarrativeIcons reducedMotion={reducedMotion} />
      <StationMarkers />
    </>
  );
}
