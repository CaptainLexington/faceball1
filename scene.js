function initializeScene(scene){
	scene.gravity = new BABYLON.Vector3(0,-9.81,0);	
	scene.collisionsEnabled=true;
	var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0,0,0), scene);
	camera.ellipsoid = new BABYLON.Vector3(1,1,1);
	camera.applyGravity=true;
	scene.activeCamera = camera;
	camera.checkCollisions=true;
	var light0 = new BABYLON.DirectionalLight("Dir0", new BABYLON.Vector3(0,-1,0), scene);
	window.camera = camera;
	var people = new Array();
	for (var i=0; i<5; i++){
		people[i] = BABYLON.Mesh.CreateSphere("person_"+i, 10.0, 3.0, scene); 
		people[i].position= new BABYLON.Vector3(10*i-20, 0, 0);
		people[i].checkCollisions=true;
	}
	window.people = people;
	

	return scene;
}
