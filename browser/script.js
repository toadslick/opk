// TODO: change to 1 when done timing the lyrics.
var speedMultiplier = 1;

// Use the webvfx custom effect function
// as the main thing called by requestAnimationFrame().
var runLoop = webvfx_add_to_frame[0];
var frameRate = 30 * speedMultiplier;

// Get the audio player.
var audio = document.getElementById('test-audio');
audio.playbackRate = speedMultiplier;

// TODO: remove this when done timing the lyrics.
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
