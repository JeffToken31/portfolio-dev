import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { clamp } from "@/lib/utils/clamp";
import {
  CAMERA_END_Z,
  CAMERA_START_Z,
  tunnelOffsetForZ,
} from "@/components/experience/scene/tunnelPath";
import { setCameraProgress } from "@/components/orchestrator/cameraProgressStore";

type CameraRigProps = {
  progress: number;
  reducedMotion: boolean;
};

export function CameraRig({ progress, reducedMotion }: CameraRigProps) {
  const { camera } = useThree();
  const prevProgressRef = useRef(progress);

  useFrame((_, delta) => {
    const t = clamp(progress, 0, 1);
    const prev = prevProgressRef.current;
    const direction = t - prev;
    prevProgressRef.current = t;
    const targetZ = CAMERA_START_Z - t * (CAMERA_START_Z - CAMERA_END_Z);
    const offset = reducedMotion ? { x: 0, y: 0 } : tunnelOffsetForZ(targetZ);

    const lerp = (from: number, to: number, alpha: number) =>
      from + (to - from) * alpha;
    // Convert per-frame smoothing to time-based smoothing so mobile/desktop feel consistent.
    const speed = reducedMotion ? 90 : direction < 0 ? 9 : 1.5;
    const alpha = reducedMotion
      ? 1
      : 1 - Math.exp(-speed * Math.min(delta, 0.1));

    /* eslint-disable react-hooks/immutability */
    camera.position.z = lerp(camera.position.z, targetZ, alpha);
    camera.position.x = lerp(camera.position.x, offset.x, alpha);
    camera.position.y = lerp(camera.position.y, offset.y, alpha);
    /* eslint-enable react-hooks/immutability */
    camera.lookAt(offset.x, offset.y, camera.position.z - 6);

    const visual =
      (CAMERA_START_Z - camera.position.z) /
      (CAMERA_START_Z - CAMERA_END_Z);
    setCameraProgress(clamp(visual, 0, 1));
  });

  return null;
}
