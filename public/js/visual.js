
var Visual = class Visual {
  constructor(data){
	this.canvas = document.getElementById("renderCanvas"); // Get the canvas element 
	this.engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
	this.scene = new BABYLON.Scene(engine);
	
	var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 50, new BABYLON.Vector3(0,0,0), this.scene);
	camera.attachControl(this.canvas, true);


	var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), this.scene);
	var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), this.scene);


	var board = BABYLON.MeshBuilder.CreateBox("board", {height: 24, width: 24, depth: 4, updatable: true, isPickable: false, sideOrientation: BABYLON.Mesh.DOUBLESIDE});

 }
  
  start(){
	  console.log(this.scene);
	this.engine.runRenderLoop(function(){ 
			
			this.scene.render();
	}.bind(this));
	
	
	
	window.addEventListener("resize", function () { 
			this.engine.resize();
	}.bind(this));	

	
  };

};












$(document).ready(function(){
	

	var visual = new Visual();
	
	visual.start();
	

});