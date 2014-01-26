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
		var conversation = null;
		var convPartner = null;
		var isTalking = false;
		var emoState = createEmoState();
        var scene = createScene(engine);
        scene.activeCamera.keysUp.push(87);
        scene.activeCamera.keysDown.push(83);
        scene.activeCamera.keysLeft.push(65);
        scene.activeCamera.keysRight.push(68);
        scene.activeCamera.attachControl(canvas);
		engine.runRenderLoop(function() {
			scene.render();
			if (!isTalking){
				if (conversation != null){
					//run the conversation
					conversation.run();
					if (convPrematureEnd(convPartner)){
						window.alert("Bye");
						convPartner=null;
						conversation=null;
					}
				} else {
					//check for conversation partners
					convPartner = checkConvPartners();
					if (convPartner != null){
						window.alert("Hi");
						conversation = makeConversation(convPartner);
					}
				}
			}
		});

		window.addEventListener("resize", function() {
            engine.resize();
        });

	}
}
