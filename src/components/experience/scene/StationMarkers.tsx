import { useMemo } from "react";
import { UNIFORM_TARGETS } from "@/content/narrative";
import {
  CAMERA_END_Z,
  CAMERA_START_Z,
  tunnelOffsetForZ,
} from "@/components/experience/scene/tunnelPath";
import { TUNNEL_PALETTE } from "@/components/experience/scene/palette";
import { clamp } from "@/lib/utils/clamp";
import { useCameraProgress } from "@/components/orchestrator/cameraProgressStore";

type Station = {
  z: number;
  x: number;
  y: number;
};

export function StationMarkers() {
  const cameraProgress = useCameraProgress();
  const stations = useMemo<Station[]>(() => {
    const span = CAMERA_START_Z - CAMERA_END_Z;
    return UNIFORM_TARGETS.map((target) => {
      const z = CAMERA_START_Z - target * span;
      const { x, y } = tunnelOffsetForZ(z);
      return { z, x, y };
    });
  }, []);
  const cameraZ =
    CAMERA_START_Z -
    cameraProgress * (CAMERA_START_Z - CAMERA_END_Z);

  return (
    <group>
      {stations.map((station, index) => (
        <group
          key={station.z}
          position={[station.x, station.y, station.z]}
          renderOrder={index}
        >
          <mesh
            position={[0, 0, -0.4]}
            scale={(() => {
              const distance = Math.abs(cameraZ - station.z);
              const scale = 2.2 - distance / 16;
              return clamp(scale, 0.6, 2.2);
            })()}
          >
            <planeGeometry args={[1.1, 0.5]} />
            <meshStandardMaterial
              color={TUNNEL_PALETTE.stationPlate}
              roughness={0.85}
              metalness={0.05}
              depthTest={false}
            />
          </mesh>
          {/* station ring removed */}
        </group>
      ))}
    </group>
  );
}
