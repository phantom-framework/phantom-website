import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, OrbitControls } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

function StackedCubes({ line, surface, reducedMotion }: { line: string; surface: string; reducedMotion: boolean }) {
  const ref = useRef<THREE.Group | null>(null);
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.strokeStyle = line;
      ctx.globalAlpha = 0.25;
      for (let y = 0; y < 64; y += 4) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(64, y); ctx.stroke();
      }
    }
    return new THREE.CanvasTexture(canvas);
  }, [line]);
  useEffect(() => () => texture.dispose(), [texture]);
  useFrame((_, delta) => {
    if (ref.current && !reducedMotion) ref.current.rotation.y += Math.min(delta, 0.05) * 0.12;
  });
  return (
    <group ref={ref} rotation={[0.4, 0.65, 0.1]}>
      {[0.65, 0, -0.65].map((y, i) => (
        <group key={y} position={[i * 0.15 - 0.15, y, -i * 0.12]}>
          <mesh><boxGeometry args={[1.45, 0.44, 1.45]} /><meshBasicMaterial color={surface} /><Edges lineWidth={1} color={line} /></mesh>
          <mesh><boxGeometry args={[1.452, 0.442, 1.452]} /><meshBasicMaterial map={texture} transparent depthWrite={false} /></mesh>
        </group>
      ))}
    </group>
  );
}

export function Logo3D() {
  const [colors, setColors] = useState<{ line: string; surface: string } | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const css = getComputedStyle(document.documentElement);
    const tokenColor = (name: string) => `hsl(${css.getPropertyValue(name).trim().split(/\s+/).join(",")})`;
    setColors({ line: tokenColor("--scene-line"), surface: tokenColor("--background") });
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update(); media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);
  if (!colors) return null;
  return (
    <div className="h-full w-full" role="img" aria-label="Rotating abstract stacked geometry">
      <Canvas flat orthographic dpr={[1, 1.5]} camera={{ position: [0, 0, 5], zoom: 140 }} gl={{ alpha: true, antialias: true }} frameloop={reducedMotion ? "demand" : "always"}>
        <StackedCubes {...colors} reducedMotion={reducedMotion} />
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
