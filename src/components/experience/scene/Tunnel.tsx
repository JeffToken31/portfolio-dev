import { useMemo } from "react";
import {
  RING_COUNT,
  RING_RADIUS,
  RING_SCALE_STEP,
  RING_SPACING,
  RING_THICKNESS,
  CAMERA_END_Z,
  CAMERA_START_Z,
  tunnelOffsetAt,
} from "@/components/experience/scene/tunnelPath";
import { TUNNEL_PALETTE } from "@/components/experience/scene/palette";

type Ring = {
  index: number;
  position: [number, number, number];
  scale: number;
};

export function Tunnel({ progress }: { progress: number }) {
  const span = CAMERA_START_Z - CAMERA_END_Z;
  const t = span > 0 ? progress : 0;
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  }, []);
  const rings = useMemo<Ring[]>(() => {
    const list: Ring[] = [];
    for (let i = 0; i < RING_COUNT; i += 1) {
      if (isMobile && i % 6 === 0) continue;
      const z = -i * RING_SPACING;
      const scale = 1 + i * RING_SCALE_STEP;
      const { x, y } = tunnelOffsetAt(i);
      list.push({ index: i, position: [x, y, z], scale });
    }
    return list;
  }, [isMobile]);

  return (
    <group>
      {rings.map((ring) => (
        <mesh
          key={ring.position[2]}
          position={[
            ring.position[0],
            ring.position[1],
            ring.position[2] +
              Math.sin((ring.index / (RING_COUNT - 1)) * Math.PI) *
                (t - 0.5) *
                2.2,
          ]}
          scale={ring.scale}
        >
          <torusGeometry
            args={[
              RING_RADIUS,
              RING_THICKNESS,
              isMobile ? 6 : 8,
              isMobile ? 20 : 32,
            ]}
          />
          <meshStandardMaterial
            color={ring.index % 4 === 0 ? TUNNEL_PALETTE.ring : TUNNEL_PALETTE.ringAlt}
            roughness={0.22}
            metalness={0.6}
            emissive={ring.index % 4 === 0 ? TUNNEL_PALETTE.ring : TUNNEL_PALETTE.ringAlt}
            emissiveIntensity={ring.index % 4 === 0 ? 0.45 : 0.25}
          />
        </mesh>
      ))}
    </group>
  );
}
