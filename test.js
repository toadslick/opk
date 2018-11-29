// Change to 1 for normal play speed.
var speedMultiplier = 1;

var runLoop = webvfx_add_to_frame[0];
var frameRate = 30 * speedMultiplier;

var audio = document.getElementById('test-audio');
audio.playbackRate = speedMultiplier;

var timeDisplay = document.getElementById('test-current-time');

// Skip animation frames to improve accuracy.
var framesToSkip = 4;
var skippedFrameCount = 0;

var animate = function(n) {
	if (skippedFrameCount < framesToSkip) {
		skippedFrameCount += 1;
	} else {
		skippedFrameCount = 0;
		runLoop(null, null, audio.currentTime * frameRate, frameRate);
		timeDisplay.innerText = audio.currentTime;
	}
	window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);
