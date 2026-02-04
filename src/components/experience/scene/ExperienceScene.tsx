import { CameraRig } from "@/components/experience/scene/CameraRig";
import { Lights } from "@/components/experience/scene/Lights";
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
      {/* fog disabled (jitter) */}
      <Lights />
      <CameraRig
        progress={progress}
        reducedMotion={reducedMotion}
      />
      <Tunnel />
      <StationMarkers />
    </>
  );
}
