import './index.css';

const THREE = require('three');

window.onload = function() {
  var scene = new THREE.Scene();
  // var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

  var renderer = new THREE.WebGLRenderer();
  renderer.setSize(600, 600 * 0.75);
  renderer.setClearColor(0xf0f0f0)
  document.body.appendChild( renderer.domElement );
  var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1), 
    new THREE.MeshBasicMaterial({ 
        color: 0xff0000, 
        wireframe: true 
    })
  ); 
  scene.add(cube);
 
  // var camera = new THREE.OrthographicCamera(-1, 3, 1.5, -1.5, 1, 10);
  var camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10); 
  camera.position.set(0, 0, 5);
  camera.lookAt(0, 0, 0)
  scene.add(camera); 
  
  var render = function () {
    requestAnimationFrame( render );
    renderer.render(scene, camera);
  };

  render();
}