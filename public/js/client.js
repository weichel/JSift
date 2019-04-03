$(document).ready(function(){
	
	
	var canvas = document.getElementById("renderCanvas"); // Get the canvas element 
	var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

	/******* Add the create scene function ******/
	var createScene = function () {

		// Create the scene space
		var scene = new BABYLON.Scene(engine);

		// Add a camera to the scene and attach it to the canvas
		var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 50, new BABYLON.Vector3(0,0,0), scene);
		camera.attachControl(canvas, true);


		var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
		var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);


		var board = BABYLON.MeshBuilder.CreateBox("board", {height: 24, width: 24, depth: 4, updatable: true, isPickable: false, sideOrientation: BABYLON.Mesh.DOUBLESIDE});


		
		var tile = new BABYLON.StandardMaterial("tile", scene);
		tile.diffuseTexture = new BABYLON.Texture("/images/tile.png", scene);

		tile.diffuseTexture.uScale = 6;
		tile.diffuseTexture.vScale = 6;

		board.material = tile;



		for ( var i = 0; i < 6; i++){
			for (var j = 0; j < 6; j++){
				
				var transparent = new BABYLON.StandardMaterial("transparent/"+i+"-"+j, scene);
				transparent.alpha = 0.1;
				
				var id = "spot/"+i+"-"+j;
				var block = BABYLON.MeshBuilder.CreateBox(id, {height: 4, width: 4, depth: 6, updatable: true, isPickable: true, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
				block.actionManager = new BABYLON.ActionManager(scene);
				
				block.position = new BABYLON.Vector3( i*4 - 12 + 2, j*4 - 12 + 2, 0 );
				block.material = transparent;
	
				block.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, block.material, "alpha", 0.1));
				block.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, block.material, "alpha", 0.5));
				block.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, block.material, "emissiveColor", block.material.emissiveColor));
				block.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, block.material, "emissiveColor", BABYLON.Color3.White()));
				block.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOutTrigger, block, "scaling", new BABYLON.Vector3(1, 1, 1), 150));
				block.actionManager.registerAction(new BABYLON.InterpolateValueAction(BABYLON.ActionManager.OnPointerOverTrigger, block, "scaling", new BABYLON.Vector3(1.1, 1.1, 1.1), 150));

			
	
			}
		}


		return scene;
	};
	/******* End of the create scene function ******/    

	var scene = createScene(); //Call the createScene function

	// Register a render loop to repeatedly render the scene
	engine.runRenderLoop(function () { 
			scene.render();
	});

	// Watch for browser/canvas resize events
	window.addEventListener("resize", function () { 
			engine.resize();
	});	

	window.addEventListener("click", function () {

		var pickResult = scene.pick(scene.pointerX, scene.pointerY);
		
		if (pickResult.hit){
			
			//pickResult.pickedMesh.material.alpha = 1;
			
		}
	});


	
	var socket = io();

	socket.on('page', function(page){

	});
	
	//socket.emit('map');
	
	socket.on('map', function(map){

	});
	
});