import { useMemo, useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { STATE_IDS, UNIFORM_TARGETS } from "@/content/narrative";
import {
  CAMERA_END_Z,
  CAMERA_START_Z,
  tunnelOffsetForZ,
} from "@/components/experience/scene/tunnelPath";
import { TUNNEL_PALETTE } from "@/components/experience/scene/palette";
import { useNarrativeController } from "@/components/orchestrator/NarrativeContext";
import { useReducedMotion } from "@/components/orchestrator/useReducedMotion";
import type { Group, Texture } from "three";
import {
  Color,
  MeshStandardMaterial,
  SRGBColorSpace,
  TextureLoader,
} from "three";

type Station = {
  z: number;
  x: number;
  y: number;
  id: (typeof STATE_IDS)[number];
};

export function StationMarkers() {
  const { activeStateId } = useNarrativeController();
  const reducedMotion = useReducedMotion();
  const isMobile = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(max-width: 768px)").matches;
  }, []);
  const iconRef = useRef<Group | null>(null);
  const iconTextures = useLoader(TextureLoader, [
    "/icons/entry.svg",
    "/icons/hero.svg",
    "/icons/identity.svg?v=2",
    "/icons/method.svg",
    "/icons/projects.svg",
    "/icons/relation.svg?v=2",
    "/icons/contact.svg",
  ]);
  iconTextures.forEach((texture) => {
    texture.colorSpace = SRGBColorSpace;
  });
  const iconById = useMemo(
    () => ({
      entry: iconTextures[0],
      hero: iconTextures[1],
      identity: iconTextures[2],
      method: iconTextures[3],
      projects: iconTextures[4],
      relation: iconTextures[5],
      contact: iconTextures[6],
    }),
    [iconTextures]
  );
  const stations = useMemo<Station[]>(() => {
    const span = CAMERA_START_Z - CAMERA_END_Z;
    return UNIFORM_TARGETS.map((target, index) => {
      const z = CAMERA_START_Z - target * span;
      const { x, y } = tunnelOffsetForZ(z);
      const id = STATE_IDS[index] ?? "entry";
      return { z, x, y, id };
    });
  }, []);
  useFrame((state, delta) => {
    if (reducedMotion) return;
    if (!iconRef.current) return;
    iconRef.current.rotation.y += delta * 0.25;
    iconRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.12;
    iconRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.5) * 0.08;
  });
  return (
    <group>
      {stations.map((station, index) => {
        const plateWidth = isMobile ? 0.56 : 1.1;
        const plateHeight = isMobile ? 1.0 : 0.5;
        const iconPosition: [number, number, number] = isMobile
          ? [0.06, 0.17, -0.55]
          : [0.07, 0.13, -0.55];
        const iconScale = isMobile ? 0.26 : 0.3;
        return (
        <group
          key={station.z}
          position={[station.x, station.y, station.z]}
          renderOrder={index}
        >
          <mesh position={[0, 0, -0.4]} scale={1.0}>
            <boxGeometry args={[plateWidth, plateHeight, 0.05]} />
            <meshStandardMaterial
              color={TUNNEL_PALETTE.stationPlate}
              roughness={0.6}
              metalness={0.4}
              depthTest={false}
              depthWrite={false}
            />
          </mesh>
          {station.id === activeStateId ? (
            <group ref={iconRef} position={iconPosition} scale={iconScale}>
              <StationIcon texture={iconById[station.id]} />
            </group>
          ) : null}
        </group>
        );
      })}
    </group>
  );
}

function StationIcon({ texture }: { texture: Texture }) {
  const iconMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
        emissive: new Color(TUNNEL_PALETTE.ring),
        emissiveIntensity: 1.3,
        roughness: 0.28,
        metalness: 0.7,
        depthTest: false,
        depthWrite: false,
        side: 2,
      }),
    [texture]
  );
  const sideMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: TUNNEL_PALETTE.ringAlt,
        roughness: 0.35,
        metalness: 0.6,
        depthTest: false,
        depthWrite: false,
      }),
    []
  );
  const materials = useMemo(
    () => [
      sideMaterial, // right
      sideMaterial, // left
      sideMaterial, // top
      sideMaterial, // bottom
      iconMaterial, // front
      iconMaterial, // back
    ],
    [iconMaterial, sideMaterial]
  );

  return (
    <group>
      <pointLight
        color={TUNNEL_PALETTE.ring}
        intensity={2}
        distance={1.8}
      />
      <mesh>
        <boxGeometry args={[0.27, 0.27, 0.06]} />
        <primitive object={materials} attach="material" />
      </mesh>
    </group>
  );
}
