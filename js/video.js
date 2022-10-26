var video = document.querySelector("video");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;

});

// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

document.getElementById("play").addEventListener("click", function() {
	video.volume = document.getElementById("slider").value / 100;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
	video.play();
});

document.getElementById("pause").addEventListener("click", function() {
	video.pause();
});

document.getElementById("slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .9;
	console.log("Speed is " + video.playbackRate);
});

document.getElementById("faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * (10/9);
	console.log("Speed is " + video.playbackRate);
	
});

document.getElementById("skip").addEventListener("click", function() {
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Video current time is " + video.currentTime);
	
});

document.getElementById("mute").addEventListener("click", function() {
	if (document.getElementById("mute").innerHTML === "Mute") {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
});

document.getElementById("slider").addEventListener("change", function() {
	video.volume = document.getElementById("slider").value / 100;
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.getElementById("vintage").addEventListener("click", function() {
	document.querySelector("video").classList.add("oldSchool");
});

document.getElementById("orig").addEventListener("click", function() {
	document.querySelector("video").classList.remove("oldSchool");
	
});











