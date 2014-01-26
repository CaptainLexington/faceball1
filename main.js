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
		var isSound = false;
		var emoState = createEmoState();
		engine.runRenderLoop(function() {
			scene.render();
			if (!isSound){
				if (conversation != null){
					//run the conversation
				} else {
					//check for conversation partners
					convPartner = checkConvPartners();
					if (convPartner != null){
						//window.alert("Found one");
						conversation = makeConversation(convPartner);
					}
				}
			} else {
				//check for premature end of conversation
			}
		});
	}
}
