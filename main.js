window.onload = function(){
	var canvas = document.getElementById("canvas");
	function requestFullScreen() {
		if (canvas.requestFullscreen){
			canvas.requestFullscreen();
		} else if (canvas.mozRequestFullScreen){
			canvas.mozRequestFullScreen();
		} else if (canvas.webkitRequestFullScreen){
			canvas.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
		} else {}
	}
	canvas.addEventListener("click", function () {
		requestFullScreen();
	}, false);

	if (!BABYLON.Engine.isSupported()){
		window.alert('Browser not supported');
	} else {
		var engine = new BABYLON.Engine(canvas,true);
		engine.isPointerLock=true;
		engine.switchFullscreen(true);
		engine.switchFullscreen(true);
		window.addEventListener("resize", function() {
			engine.resize();
		});
		BABYLON.SceneLoader.Load("", "./assets/models/lukeshouse.babylon",engine, function (scene) {
			scene.executeWhenReady(function() {
				initializeScene(scene);
				scene.activeCamera.keysUp.push(87);
				scene.activeCamera.keysDown.push(83);
				scene.activeCamera.keysLeft.push(65);
				scene.activeCamera.keysRight.push(68);
				scene.activeCamera.attachControl(canvas);
			

				var conversation = null;
				var convPartner = null;
				var isSound = false;
				var emoState = createEmoState();

				engine.runRenderLoop(function() {
					scene.render();
					if (!isSound){
						if (conversation != null){
							//TODO:run the conversation
						} else {
							//check for conversation partners
							convPartner = checkConvPartners();
							if (convPartner != null){
								window.alert("Found one");
								conversation = makeConversation(convPartner);
							}
						}
					} else {
					//TODO:check for premature end of conversation
					}
				});
			});
		}, function(progress){
			//TODO: give progress feedback to user
		});


	}
}
