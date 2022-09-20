import * as THREE from "three";
import { useLayoutEffect } from "react";
import { Canvas, applyProps } from "@react-three/fiber";
import {
  AccumulativeShadows,
  RandomizedLight,
  OrbitControls,
  Environment,
  useGLTF,
} from "@react-three/drei";

export const LandingPage3D = () => {
  return (
    <Canvas
      className="h-screen w-full"
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
    >
      <Suzi rotation={[0, 0, 0]} scale={0.75} position={[0, 0, 0]} />
      <AccumulativeShadows
        temporal
        frames={100}
        color="cyan"
        colorBlend={2}
        toneMapped={true}
        alphaTest={0.9}
        opacity={2}
        scale={12}
        position={[5, 5, -10]}
      >
        <RandomizedLight
          amount={8}
          radius={4}
          ambient={0.5}
          intensity={1}
          position={[5, 5, -10]}
          bias={0.001}
        />
      </AccumulativeShadows>
      <OrbitControls autoRotate={false} />
      <Environment preset="city" />
    </Canvas>
  );
};

function Suzi(props: any) {
  const { scene, materials } = useGLTF("./server_v2_console/scene.gltf");

  return <primitive object={scene} {...props} />;
}

export default LandingPage3D;
