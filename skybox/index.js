import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let scene, camera, renderer, controls

function init() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(
        55,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
    )
    camera.position.z = 5
    scene.add(camera)

    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)

    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.enableRotate = true

    scene.background = new THREE.CubeTextureLoader()
        .load(['right.png', 'left.png', 'top.png', 'down.png', 'back.png', 'front.png'])

    animate()
}

const animate = () => {
    controls.update()
    renderer.render(scene, camera)

    requestAnimationFrame(animate)
};

init()