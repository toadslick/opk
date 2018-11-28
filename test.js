var speedMultiplier = 0.5;

var runLoop = webvfx_add_to_frame[0];
var frameRate = 30 * speedMultiplier;

var audio = document.getElementById('test-audio');
audio.playbackRate = speedMultiplier;

var animate = function() {
	runLoop(null, null, audio.currentTime * frameRate, frameRate);
	window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
