import { useFrame, useThree } from "@react-three/fiber";
import { clamp } from "@/lib/utils/clamp";
import {
  CAMERA_END_Z,
  CAMERA_START_Z,
  tunnelOffsetForZ,
} from "@/components/experience/scene/tunnelPath";

type CameraRigProps = {
  progress: number;
  reducedMotion: boolean;
};

export function CameraRig({ progress, reducedMotion }: CameraRigProps) {
  const { camera } = useThree();

  useFrame(() => {
    const t = clamp(progress, 0, 1);
    const targetZ = CAMERA_START_Z - t * (CAMERA_START_Z - CAMERA_END_Z);
    const offset = reducedMotion ? { x: 0, y: 0 } : tunnelOffsetForZ(targetZ);

    const lerp = (from: number, to: number, alpha: number) =>
      from + (to - from) * alpha;
    const alpha = reducedMotion ? 1 : 0.025;

    camera.position.z = lerp(camera.position.z, targetZ, alpha);
    camera.position.x = lerp(camera.position.x, offset.x, alpha);
    camera.position.y = lerp(camera.position.y, offset.y, alpha);
    camera.lookAt(offset.x, offset.y, targetZ - 6);
  });

  return null;
}
