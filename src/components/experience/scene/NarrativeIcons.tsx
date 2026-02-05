import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group } from "three";
import { UNIFORM_TARGETS, STATE_IDS } from "@/content/narrative";
import {
  CAMERA_END_Z,
  CAMERA_START_Z,
  tunnelOffsetForZ,
} from "@/components/experience/scene/tunnelPath";
import { TUNNEL_PALETTE } from "@/components/experience/scene/palette";
import { clamp } from "@/lib/utils/clamp";
import { useCameraProgress } from "@/components/orchestrator/cameraProgressStore";

type IconKind =
  | "entry"
  | "hero"
  | "identity"
  | "method"
  | "projects"
  | "relation"
  | "contact";

type Station = {
  id: IconKind;
  z: number;
  x: number;
  y: number;
};

const ICON_SIDE_OFFSET = -3.2;

export function NarrativeIcons({ reducedMotion }: { reducedMotion: boolean }) {
  const cameraProgress = useCameraProgress();
  const iconRefs = useRef<Group[]>([]);

  const stations = useMemo<Station[]>(() => {
    const span = CAMERA_START_Z - CAMERA_END_Z;
    return UNIFORM_TARGETS.map((target, index) => {
      const z = CAMERA_START_Z - target * span;
      const { x, y } = tunnelOffsetForZ(z);
      const id = STATE_IDS[index] as IconKind;
      return { id, z, x, y };
    });
  }, []);

  useFrame((_state, delta) => {
    if (reducedMotion) return;
    iconRefs.current.forEach((ref, index) => {
      if (!ref) return;
      const dir = index % 2 === 0 ? 1 : -1;
      ref.rotation.y += delta * 0.2 * dir;
      ref.rotation.x += delta * 0.05;
    });
  });

  const cameraZ =
    CAMERA_START_Z -
    cameraProgress * (CAMERA_START_Z - CAMERA_END_Z);

  return (
    <group>
      {stations.map((station, index) => {
        const distance = Math.abs(cameraZ - station.z);
        const visibility = clamp(1 - distance / 18, 0, 1);
        const scale = 0.55 + visibility * 0.55;

        return (
          <group
            key={station.id}
            ref={(node) => {
              if (node) iconRefs.current[index] = node;
            }}
            position={[
              station.x + ICON_SIDE_OFFSET,
              station.y + 0.35,
              station.z,
            ]}
            scale={[scale, scale, scale]}
          >
            <IconMesh kind={station.id} opacity={visibility} />
          </group>
        );
      })}
    </group>
  );
}

function IconMesh({
  kind,
  opacity,
}: {
  kind: IconKind;
  opacity: number;
}) {
  const materialProps = {
    color: TUNNEL_PALETTE.ringAlt,
    emissive: TUNNEL_PALETTE.ring,
    emissiveIntensity: 0.22,
    roughness: 0.35,
    metalness: 0.7,
    transparent: true,
    opacity,
  } as const;

  switch (kind) {
    case "entry":
      return (
        <mesh>
          <sphereGeometry args={[0.28, 24, 24]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case "hero":
      return (
        <mesh>
          <coneGeometry args={[0.35, 0.8, 24]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case "identity":
      return (
        <mesh>
          <capsuleGeometry args={[0.22, 0.6, 8, 16]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case "method":
      return (
        <mesh>
          <boxGeometry args={[0.7, 0.45, 0.18]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case "projects":
      return (
        <mesh>
          <boxGeometry args={[0.55, 0.55, 0.35]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case "relation":
      return (
        <mesh>
          <torusGeometry args={[0.34, 0.08, 16, 32]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>
      );
    case "contact":
      return (
        <mesh>
          <ringGeometry args={[0.22, 0.34, 32]} />
          <meshStandardMaterial
            {...materialProps}
            side={2}
          />
        </mesh>
      );
    default:
      return null;
  }
}
