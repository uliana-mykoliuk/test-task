const playButton = document.getElementById("play");
const video = document.getElementById("video");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

playButton.addEventListener("click", togglePlay);
