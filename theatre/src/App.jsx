import { Canvas } from '@react-three/fiber';
import { ScrollControls } from '@react-three/drei';
import { getProject } from '@theatre/core';
import { SheetProvider } from '@theatre/r3f';
import flyThroughState from './state.json'
import Scene from './Scene';

function App() {
  // const sheet = getProject('Fly Through', {state: flyThroughState}).sheet('Scene')
  const sheet = getProject('Fly Through').sheet('Scene')

  return (
    <Canvas>
      <ScrollControls pages={5}>
        <SheetProvider sheet={sheet}>
          <Scene />
        </SheetProvider>
      </ScrollControls>
    </Canvas>
  )
}

export default App
