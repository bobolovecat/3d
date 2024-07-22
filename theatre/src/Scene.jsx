import { useFrame } from '@react-three/fiber';
import { Gltf, useScroll } from '@react-three/drei';
import { val } from '@theatre/core';
import {
  PerspectiveCamera,
  useCurrentSheet,
} from '@theatre/r3f';

const Scene = () => {
  const sheet = useCurrentSheet()
  const scroll = useScroll()

  useFrame(() => {
    const sequenceLength = val(sheet.sequence.pointer.length)
    sheet.sequence.position = scroll.offset * sequenceLength
  });

  const bgColor = "#84a4f4"

  return (
    <>
      <color attach="background" args={[bgColor]} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, 5, -5]} />
      <Gltf src="/dragon.glb" castShadow receiveShadow />
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[0, 0, 0]}
        fov={90}
        near={0.1}
        far={70}
      />
    </>
  )
}

export default Scene