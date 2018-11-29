var speedMultiplier = 0.5;

var runLoop = webvfx_add_to_frame[0];
var frameRate = 30 * speedMultiplier;

var audio = document.getElementById('test-audio');
audio.playbackRate = speedMultiplier;

var timeDisplay = document.getElementById('test-current-time');

var animate = function(n) {
	runLoop(null, null, audio.currentTime * frameRate, frameRate);
	timeDisplay.innerText = audio.currentTime;
	window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
