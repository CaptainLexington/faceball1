function createScene(engine){
	var scene = new BABYLON.Scene(engine);
	scene.gravity = new BABYLON.Vector3(0,-9.81, 0);
	scene.collisionsEnabled = true;
	var camera = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0,10,-25), scene);
	camera.applyGravity=true;
	camera.checkCollisions=true;
	camera.ellipsoid = new BABYLON.Vector3 (1,2,1);
	camera.speed = 1.0;
	var light0 = new BABYLON.HemisphericLight("hemi0", new BABYLON.Vector3(0,1,0), scene);
	window.camera = camera;

	//Make people
	var people = new Array();

	var wunk = BABYLON.Mesh.CreateSphere("wunk",5.0,4.0,scene);
	wunk.position = new BABYLON.Vector3(10,2,-5);
	wunk.checkCollisions = true;
	wunk.name = "wunk";	
	people[0]=wunk;

	var terliggidy = BABYLON.Mesh.CreateSphere("terliggidy",5.0,4.0,scene);
	terliggidy.position = new BABYLON.Vector3(-12,2,-5);
	terliggidy.checkCollisions = true;
	terliggidy.name = "terliggidy";
	people[1]=terliggidy;

	var wumpy = BABYLON.Mesh.CreateSphere("wumpy",5.0,4.0,scene);
	wumpy.position = new BABYLON.Vector3(7,2,-20);
	wumpy.checkCollisions = true;
	wumpy.name="wumpy";
/*	var spriteManagerWumpy=new BABYLON.SpriteManager("wumpyManager","./assets/names/wumpy.png",1,400,scene);
	var wumpyName = new BABYLON.Sprite("wumpy",spriteManagerWumpy);
	wumpyName.position.x = wumpy.position.x;
	wumpyName.position.z = wumpy.position.z;
	wumpyName.position.y = 5;
	wumpyName.size = 10;*/
	people[2]=wumpy;

	var snoopler = BABYLON.Mesh.CreateSphere("snoopler",6.0,4.0,scene);
	snoopler.position = new BABYLON.Vector3(0,2,-14);
	snoopler.checkCollisions = true;
	snoopler.name="snoopler";
	people[3]=snoopler;

	var lepsis = BABYLON.Mesh.CreateSphere("lepsis",5.0,4.0,scene);
	lepsis.position = new BABYLON.Vector3(-10,2,5);
	lepsis.checkCollisions = true;
	lepsis.name = "lepsis";
	people[4]=lepsis;

	var kelery = BABYLON.Mesh.CreateSphere("kelery",5.0,4.0,scene);
	kelery.position = new BABYLON.Vector3(10,2,15);
	kelery.checkCollisions = true;
	kelery.name = "kelery";
	people[5]=kelery;

	var cho_bunbo = BABYLON.Mesh.CreateSphere("cho_bunbo",5.0,4.0,scene);
	cho_bunbo.position = new BABYLON.Vector3(0,2,25);
	cho_bunbo.checkCollisions = true;
	cho_bunbo.name = "cho_bunbo";
	people[6]=cho_bunbo;

	var feebus = BABYLON.Mesh.CreateSphere("feebus",5.0,4.0,scene);
	feebus.position = new BABYLON.Vector3(-8,2,18);
	feebus.checkCollisions = true;
	feebus.name = "feebus";
	people[7]=feebus;

	var lazbon = BABYLON.Mesh.CreateSphere("lazbon",5.0,4.0,scene);
	lazbon.position = new BABYLON.Vector3(7,2,20);
	lazbon.checkCollisions = true;
	lazbon.name = "lazbon";
	people[8]=lazbon;

	for (i = 0; i<people.length; i++){
		var name = people[i].name;
		var nameManager=new BABYLON.SpriteManager("nameManager"+name,"./assets/names/"+name+".png",1,400,scene);
		var nameSprite = new BABYLON.Sprite(name+"Name",nameManager);
		nameSprite.position.x = people[i].position.x;
		nameSprite.position.z = people[i].position.z;
		nameSprite.position.y = 5;
		nameSprite.size = 10;
		people[i].nameSprite = nameSprite;
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
