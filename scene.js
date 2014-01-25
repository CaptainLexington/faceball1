function createScene(engine){
	var scene = new BABYLON.Scene(engine);
	var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0,0,-30), scene);
	window.camera = camera;
	var people = new Array();
	for (var i=0; i<5; i++){
		people[i] = BABYLON.Mesh.CreateSphere("person_"+i, 10.0, 3.0, scene); 
		people[i].position= new BABYLON.Vector3(10*i-20, 0, 0);
	}
	window.people = people;
	

	return scene;
}
