window.addEventListener 'DOMContentLoaded', (e)->
  scene  = new THREE.Scene()

  w = 1200
  h = 800
  camera = new THREE.PerspectiveCamera 60, w / h, 1, 1000
  camera.position.set 0, 0, 50

  renderer = new THREE.WebGLRenderer
  renderer.setSize w, h
  document.body.appendChild renderer.domElement

  light = new THREE.SpotLight 0xFFFFFF
  light.position.set 0, .7, .7
  light.castShadow = true
  light.shadowMapWidth = 1024
  light.shadowMapHeight = 1024
  light.shadowCameraNear = 500
  light.shadowCameraFar = 4000
  light.shadowCameraFov = 30
  scene.add light

  geometry = new THREE.CubeGeometry 10, 10, 10
  material = new THREE.MeshPhongMaterial
    color: 0xaabb99
  mesh = new THREE.Mesh geometry, material
  scene.add mesh

  animate = ->
    requestAnimationFrame animate
    mesh.rotation.set 0, mesh.rotation.y + .01, mesh.rotation.z + .01
    #camera.rotation.set 0, camera.rotation.y + .01, camera.rotation.z + .01
    renderer.render scene, camera
  animate()
, false
