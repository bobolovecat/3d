import { useCurrentSheet, PerspectiveCamera } from "@theatre/r3f";
import { useScroll, Gltf } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { val } from "@theatre/core";

const Scene = () => {
  const sheet = useCurrentSheet();
  const scroll = useScroll();

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLength;
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, 5, -5]} />
      <Gltf src="/dragon.glb" castShadow receiveShadow />
      <PerspectiveCamera 
        theatreKey="Camera" 
        makeDefault
        fov={90} 
        near={0.1} 
        far={300} 
        />
    </>
  );
};

export default Scene;
