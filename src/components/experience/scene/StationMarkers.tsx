import { useMemo } from "react";
import { STATE_IDS, UNIFORM_TARGETS } from "@/content/narrative";
import {
  CAMERA_END_Z,
  CAMERA_START_Z,
  tunnelOffsetForZ,
} from "@/components/experience/scene/tunnelPath";
import { TUNNEL_PALETTE } from "@/components/experience/scene/palette";
import { useCameraProgress } from "@/components/orchestrator/cameraProgressStore";
import { useNarrativeState } from "@/components/orchestrator/useNarrativeState";

type Station = {
  z: number;
  x: number;
  y: number;
  id: (typeof STATE_IDS)[number];
};

export function StationMarkers() {
  const cameraProgress = useCameraProgress();
  const { activeStateId } = useNarrativeState();
  const stations = useMemo<Station[]>(() => {
    const span = CAMERA_START_Z - CAMERA_END_Z;
    return UNIFORM_TARGETS.map((target, index) => {
      const z = CAMERA_START_Z - target * span;
      const { x, y } = tunnelOffsetForZ(z);
      const id = STATE_IDS[index] ?? "entry";
      return { z, x, y, id };
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
          <mesh position={[0, 0, -0.4]} scale={1.0}>
            <planeGeometry args={[1.1, 0.5]} />
            <meshStandardMaterial
              color={TUNNEL_PALETTE.stationPlate}
              roughness={0.85}
              metalness={0.05}
              depthTest={false}
              depthWrite={false}
            />
          </mesh>
          {station.id === activeStateId ? (
            <group position={[0.1, 0, -0.34]} scale={0.35}>
              <StationIcon id={station.id} opacity={1} />
            </group>
          ) : null}
          {/* station ring removed */}
        </group>
      ))}
    </group>
  );
}

function StationIcon({
  id,
  opacity,
}: {
  id: (typeof STATE_IDS)[number];
  opacity: number;
}) {
  const materialProps = {
    color: TUNNEL_PALETTE.iconAccent ?? TUNNEL_PALETTE.ring,
    emissive: TUNNEL_PALETTE.iconEmissive ?? TUNNEL_PALETTE.ring,
    emissiveIntensity: 2.0,
    roughness: 0.32,
    metalness: 0.8,
    transparent: true,
    opacity,
    depthTest: false,
    depthWrite: false,
  } as const;

  switch (id) {
    case "entry":
      return (
        <group>
          <mesh>
            <ringGeometry args={[0.08, 0.12, 32]} />
            <meshStandardMaterial {...materialProps} side={2} />
          </mesh>
          <mesh>
            <sphereGeometry args={[0.03, 16, 16]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        </group>
      );
    case "hero":
      return (
        <mesh>
          <coneGeometry args={[0.09, 0.22, 20]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case "identity":
      return (
        <mesh>
          <capsuleGeometry args={[0.07, 0.18, 6, 12]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case "method":
      return (
        <group>
          <mesh position={[0, 0.05, 0]}>
            <boxGeometry args={[0.2, 0.05, 0.06]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, -0.02, 0]}>
            <boxGeometry args={[0.2, 0.05, 0.06]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0, -0.09, 0]}>
            <boxGeometry args={[0.2, 0.05, 0.06]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        </group>
      );
    case "projects":
      return (
        <mesh>
          <boxGeometry args={[0.16, 0.16, 0.12]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case "relation":
      return (
        <group>
          <mesh position={[-0.03, 0, 0]}>
            <torusGeometry args={[0.085, 0.025, 12, 24]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
          <mesh position={[0.03, 0, 0]}>
            <torusGeometry args={[0.085, 0.025, 12, 24]} />
            <meshStandardMaterial {...materialProps} />
          </mesh>
        </group>
      );
    case "contact":
      return (
        <mesh>
          <torusGeometry args={[0.095, 0.018, 12, 24, Math.PI]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    default:
      return null;
  }
}
