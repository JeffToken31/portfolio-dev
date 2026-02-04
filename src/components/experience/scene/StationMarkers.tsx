import { useMemo } from "react";
import { UNIFORM_TARGETS } from "@/content/narrative";
import {
  CAMERA_END_Z,
  CAMERA_START_Z,
  tunnelOffsetForZ,
} from "@/components/experience/scene/tunnelPath";
import { TUNNEL_PALETTE } from "@/components/experience/scene/palette";

type Station = {
  z: number;
  x: number;
  y: number;
};

export function StationMarkers() {
  const stations = useMemo<Station[]>(() => {
    const span = CAMERA_START_Z - CAMERA_END_Z;
    return UNIFORM_TARGETS.map((target) => {
      const z = CAMERA_START_Z - target * span;
      const { x, y } = tunnelOffsetForZ(z);
      return { z, x, y };
    });
  }, []);

  return (
    <group>
      {stations.map((station) => (
        <group key={station.z} position={[station.x, station.y, station.z]}>
          <mesh position={[0, 0, -0.4]}>
            <planeGeometry args={[1.1, 0.5]} />
            <meshStandardMaterial
              color={TUNNEL_PALETTE.stationPlate}
              roughness={0.85}
              metalness={0.05}
            />
          </mesh>
          {/* station ring removed */}
        </group>
      ))}
    </group>
  );
}
