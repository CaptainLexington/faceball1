function createScene(engine){
	var scene = new BABYLON.Scene(engine);
	scene.gravity = new BABYLON.Vector3(0,-9.81, 0);
	scene.collisionsEnabled = true;
	var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0,10,-25), scene);
	camera.applyGravity=true;
	camera.checkCollisions=true;
	camera.ellipsoid = new BABYLON.Vector3 (1,2,1);
	var light0 = new BABYLON.HemisphericLight("hemi0", new BABYLON.Vector3(0,1,0), scene);
	var dirLight = new BABYLON.DirectionalLight("dir0", new BABYLON.Vector3(0,-1,0),scene);
	dirLight.position = new BABYLON.Vector3(0,5,-5);
	window.camera = camera;
	var people = new Array();
	for (var i=0; i<5; i++){
		people[i] = BABYLON.Mesh.CreateSphere("person_"+i, 10.0, 3.0, scene); 
		people[i].position= new BABYLON.Vector3(10*i-20, 0, 0);
		people[i].checkCollisions=true;
	}
	window.people = people;
	

	//build the house:
	var floorMat = new BABYLON.StandardMaterial("floorMat",scene);
	floorMat.diffuseColor = new BABYLON.Color3(.8,.8,.6);

	var floor = BABYLON.Mesh.CreatePlane("floor", 150.0, scene);	
	floor.rotation.x = Math.PI/2;
	floor.checkCollisions = true;
	floor.material = floorMat;

	var wallMat1 = new BABYLON.StandardMaterial("wall1Mat",scene);
	wallMat1.diffuseColor = new BABYLON.Color3(1,.75,0);
	wallMat1.specularColor = new BABYLON.Color3(1,.75,0);
	wallMat1.emissiveColor = new BABYLON.Color3(.8,.7,.5);

	var wood = new BABYLON.StandardMaterial("woodTexture",scene);
	wood.diffuseColor = new BABYLON.Color3(.3,.1,0);

	var wood2 = new BABYLON.StandardMaterial("wood2Texture",scene);
	wood2.diffuseColor = new BABYLON.Color3(.4,.05,0);

	var wallpaper1 = new BABYLON.StandardMaterial("wallpaper",scene);
	wallpaper1.diffuseTexture = new BABYLON.Texture("./assets/wallpaper.jpg",scene);
	wallpaper1.diffuseTexture.uScale=6.0;
	wallpaper1.diffuseTexture.vScale=3.0;

	var wallpaper2 = new BABYLON.StandardMaterial("wallpaper",scene);
	wallpaper2.diffuseTexture = new BABYLON.Texture("./assets/wallpaper.jpg",scene);
	wallpaper2.diffuseTexture.uScale=15.0;
	wallpaper2.diffuseTexture.vScale=15.0;

	var wallpaper3 = new BABYLON.StandardMaterial("wallpaper",scene);
	wallpaper3.diffuseTexture = new BABYLON.Texture("./assets/wallpaper.jpg",scene);
	wallpaper3.diffuseTexture.uScale=45.0;
	wallpaper3.diffuseTexture.vScale=15.0;

	var wall1 = BABYLON.Mesh.CreatePlane("wall1", 50.0, scene);
	wall1.position.z = 30;
	wall1.checkCollisions = true;
	wall1.material = wallpaper2;

	var wall1Ws = BABYLON.Mesh.CreateBox("wall1Ws",1.0,scene);
	wall1Ws.position.y = 3;
	wall1Ws.position.z = 30;
	wall1Ws.material = wallMat1;
	wall1Ws.scaling = new BABYLON.Vector3(50,.2,.2);

	var wall1Ws2 = BABYLON.Mesh.CreateBox("wall1Ws2",1.0,scene);
	wall1Ws2.position.y = 1.5;
	wall1Ws2.position.z = 30;
	wall1Ws2.material = wood2;
	wall1Ws2.scaling = new BABYLON.Vector3(50,2.9,.1);

	var wall2 = BABYLON.Mesh.CreatePlane("wall2", 50.0, scene);
	wall2.position.z = -30;
	wall2.rotation.x = Math.PI;
	wall2.checkCollisions = true;
	wall2.material = wallpaper2;

	var wall2Ws = BABYLON.Mesh.CreateBox("wall2Ws",1.0,scene);
	wall2Ws.position.y = 3;
	wall2Ws.position.z = -30;
	wall2Ws.material = wallMat1;
	wall2Ws.scaling = new BABYLON.Vector3(50,.2,.2);
	
	var wall2Ws2 = BABYLON.Mesh.CreateBox("wall2Ws2",1.0,scene);
	wall2Ws2.position.y = 1.5;
	wall2Ws2.position.z = -30;
	wall2Ws2.material = wood2;
	wall2Ws2.scaling = new BABYLON.Vector3(50,2.9,.1);

	var wall3 = BABYLON.Mesh.CreatePlane("wall3", 50.0, scene);
	wall3.position.x = -15;
	wall3.scaling.x = 3;
	wall3.rotation.y = -Math.PI/2;
	wall3.checkCollisions = true;
	wall3.material = wallpaper3;

	var wall3Ws = BABYLON.Mesh.CreateBox("wall3Ws",1.0,scene);
	wall3Ws.position.y = 3;
	wall3Ws.position.x = -15;
	wall3Ws.material = wallMat1;
	wall3Ws.scaling = new BABYLON.Vector3(.2,.2,60);

	var wall3Ws2 = BABYLON.Mesh.CreateBox("wall1Ws2",1.0,scene);
	wall3Ws2.position.y = 1.5;
	wall3Ws2.position.x = -15;
	wall3Ws2.material = wood2;
	wall3Ws2.scaling = new BABYLON.Vector3(.1,2.9,60);

	var wall4 = BABYLON.Mesh.CreatePlane("wall4", 50.0, scene);
	wall4.position.x = 15;
	wall4.scaling.x = 3;
	wall4.rotation.y = Math.PI/2;
	wall4.checkCollisions = true;
	wall4.material = wallpaper3;

	var wall4Ws = BABYLON.Mesh.CreateBox("wall3Ws",1.0,scene);
	wall4Ws.position.y = 3;
	wall4Ws.position.x = 15;
	wall4Ws.material = wallMat1;
	wall4Ws.scaling = new BABYLON.Vector3(.2,.2,60);

	var wall4Ws2 = BABYLON.Mesh.CreateBox("wall1Ws2",1.0,scene);
	wall4Ws2.position.y = 1.5;
	wall4Ws2.position.x = 15;
	wall4Ws2.material = wood2;
	wall4Ws2.scaling = new BABYLON.Vector3(.1,2.9,60);

	var ceilingMat = new BABYLON.StandardMaterial("ceilingMat", scene);
	ceilingMat.emissiveColor = new BABYLON.Color3(0,0,.1);

	var ceiling = BABYLON.Mesh.CreatePlane("ceiling", 150.0, scene);
	ceiling.rotation.x = -Math.PI/2;
	ceiling.position.y = 10;
	//ceiling.material = ceilingMat;


	var intWall1 = BABYLON.Mesh.CreateBox("intWall1", 1.0, scene);
	intWall1.position.y = 5;
	intWall1.scaling.y = 10;
	intWall1.position.x = 10;
	intWall1.scaling.x = 20;
	intWall1.position.z = 10;
	intWall1.checkCollisions = true;
	intWall1.material = wallpaper1;

	var intWall1Ws = BABYLON.Mesh.CreateBox("intWall1Ws", 1.0, scene);
	intWall1Ws.position.y = 3;
	intWall1Ws.position.x = 10;
	intWall1Ws.position.z = 10;
	intWall1Ws.scaling = new BABYLON.Vector3(20.4,.2,1.4);
	intWall1Ws.material = wallMat1;

	var intWall1Ws2 = BABYLON.Mesh.CreateBox("intWall1Ws2", 1.0, scene);
	intWall1Ws2.position.y = 1.5;
	intWall1Ws2.position.x = 10;
	intWall1Ws2.position.z = 10;
	intWall1Ws2.scaling = new BABYLON.Vector3(20.2,3,1.2);
	intWall1Ws2.material = wood2;

	var intWall2 = BABYLON.Mesh.CreateBox("intWall2", 1.0, scene);
	intWall2.position.y = 5;
	intWall2.scaling.y = 10;
	intWall2.position.x = -11.0;
	intWall2.scaling.x = 8;
	intWall2.position.z = 10;
	intWall2.checkCollisions = true;
	intWall2.material = wallMat1;

	var table = BABYLON.Mesh.CreateBox("table", 1.0, scene);
	table.position.y = 1.5;
	table.position.z = -5;
	table.scaling = new BABYLON.Vector3(10,1,10);
	table.checkCollisions = true;
	table.material = wood;

	var tableLeg1 = BABYLON.Mesh.CreateBox("tableLeg1",1.0, scene);
	tableLeg1.position.y = .5;
	tableLeg1.position.z = -5;
	tableLeg1.position.x = 2.5;
	tableLeg1.scaling.z=10;
	tableLeg1.material=wood;

	var tableLeg2 = BABYLON.Mesh.CreateBox("tableLeg2",1.0, scene);	
	tableLeg2.position.y = .5;
	tableLeg2.position.z = -5;
	tableLeg2.position.x = -2.5;
	tableLeg2.scaling.z=10;
	tableLeg2.material=wood;

	return scene;
}
