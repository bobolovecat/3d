import * as THREE from "three" 
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls" 

class App {
  constructor() {
    this.init()
  }

  init() {
    this.initScene()
    this.initCamera()
    this.initRenderer()
    this.initControls()
    this.loadSkybox()
    this.animate()
  }

  initScene() {
    this.scene = new THREE.Scene() 
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    ) 
    this.camera.position.z = 5
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer() 
    this.renderer.setSize(window.innerWidth, window.innerHeight) 
    document.body.appendChild(this.renderer.domElement) 
  }

  initControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement) 
    this.controls.enableDamping = true  // 启用阻尼效果
    this.controls.enableZoom = true  // 允许缩放
  }

  loadSkybox() {
    const skyboxTexture = new THREE.CubeTextureLoader()
    .load(['right.png', 'left.png', 'top.png', 'down.png', 'back.png', 'front.png'])

    this.scene.background = skyboxTexture 
  }

  animate = () => {
    requestAnimationFrame(this.animate) 

    // 更新控制器
    this.controls.update() 

    this.renderer.render(this.scene, this.camera) 
  }
}

export default App 
