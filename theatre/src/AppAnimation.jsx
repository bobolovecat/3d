import { Canvas } from '@react-three/fiber';
import { Gltf, OrbitControls } from '@react-three/drei';
import AnimatedModel from './AnimatedModel';

function App() {

  return (
    <Canvas>
      <AnimatedModel />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, 5, -5]} />
      <OrbitControls />
    </Canvas>
  )

}

function Scene() {

  return (
    <>

      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, 5, -5]} intensity={1.5} />
      <Gltf src="/honkai.glb" castShadow receiveShadow />
      <OrbitControls />

    </>
  )
}

export default App
