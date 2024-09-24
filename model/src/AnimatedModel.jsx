import { useGLTF, useAnimations } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"

const AnimatedModel = () => {
    const { animations, scene } = useGLTF('/lol.glb')
    const { actions } = useAnimations(animations, scene)
    console.log('actions', actions)

    useFrame(() => {
        actions?.Animation.play()
    })

    return (
        <primitive object={scene} />
    )
}

export default AnimatedModel