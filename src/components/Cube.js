import React, { useRef, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import * as THREE from "three";

export function Cube({ showInfo, position, item }) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, item.image);
  useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.008));

  return (
    <Suspense fallback={null}>
      <mesh onClick={() => showInfo(item)} position={position} ref={ref}>
        <boxBufferGeometry args={[1.5, 1.5, 1.5]} attach="geometry" />
        <meshBasicMaterial map={texture} />
      </mesh>
    </Suspense>
  );
}
