function createEmoState(){
	var emoState = {anger:0,anxiety:0,joy:0,sadness:0};
	return emoState;
}

function checkConvPartners(){
	for (var i=0; i<5; i++){
		if (distance(window.camera.position,window.people[i].position)<3){
			return window.people[i];
		}
	}
	return null;
}

function distance(pos1, pos2){
	x = pos1.x-pos2.x;
	y = pos1.y-pos2.y;
	z = pos1.z-pos2.z;
	return Math.sqrt(x*x+y*y+z*z);
}

function makeConversation(partner){
	var conversation = new Object();
	conversation.partner = partner;
	conversation.step = 0;
	conversation.run = dummyConv;
	return conversation;
}

function dummyConv(step) {
	//Put some stuff here
	return;
}

