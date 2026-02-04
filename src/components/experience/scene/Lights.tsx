import { TUNNEL_PALETTE } from "@/components/experience/scene/palette";

export function Lights() {
  return (
    <>
      <ambientLight intensity={0.45} />
      <directionalLight
        position={[0, 3, 10]}
        intensity={0.6}
        color={TUNNEL_PALETTE.keyLight}
      />
      <pointLight
        position={[0, -1.5, 6]}
        intensity={0.3}
        color={TUNNEL_PALETTE.fillLight}
      />
    </>
  );
}
