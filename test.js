var runLoop = webvfx_add_to_frame[0];
var frameRate = 30;

var audio = document.getElementById('test-audio');

var animate = function() {
	runLoop(null, null, audio.currentTime * frameRate, frameRate);
	window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
