export const RING_COUNT = 92;
export const RING_SPACING = 17.5;
export const RING_RADIUS = 4.2;
export const RING_THICKNESS = 0.24;
export const RING_SCALE_STEP = 0.035;
export const TUNNEL_LENGTH = (RING_COUNT - 1) * RING_SPACING;

export const CAMERA_START_Z = 6;
export const CAMERA_END_Z = -TUNNEL_LENGTH - 12;

export function tunnelOffsetAt(_index: number) {
  void _index;
  return { x: 0, y: 0 };
}

export function tunnelOffsetForZ(z: number) {
  const index = Math.abs(z) / RING_SPACING;
  return tunnelOffsetAt(index);
}
