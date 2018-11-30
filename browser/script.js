// TODO: change to 1 when done timing the lyrics.
var speedMultiplier = 1;

// Use the webvfx custom effect function
// as the main thing called by requestAnimationFrame().
var runLoop = webvfx_add_to_frame[0];
var frameRate = 30 * speedMultiplier;

// Get the audio player.
var audio = document.getElementById('test-audio');
audio.playbackRate = speedMultiplier;

// Skip animation frames to improve accuracy.
var framesToSkip = 4;
var skippedFrameCount = 0;

var animate = function(n) {
	if (skippedFrameCount < framesToSkip) {
		skippedFrameCount += 1;
	} else {
		skippedFrameCount = 0;
		runLoop(null, null, audio.currentTime * frameRate, frameRate);
	}
	window.requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);


// Pause or play the audio.
var togglePause = function() {
	if (audio.paused) {
		audio.play();
	} else {
		audio.pause();
	}
}

// Pause or play by clicking anywhere in the window.
// Attach this event to the lyrics wrapper so that it doesn't catch
// events that bubble from clicking the audio player.
var wrapper = document.getElementById('kara-lyrics-wrapper');
wrapper.addEventListener('mouseup', togglePause);

// Pause or play the audio by hitting the space bar.
window.addEventListener('keyup', function(event) {
	if (event.key === " ") {
		togglePause();
	}
});

// Pause or play by clicking the Sunfly image.
var sunfly = document.getElementById('kara-sunfly');
sunfly.addEventListener('mouseup', togglePause);

// Hide the Sunfly image when the audio first plays or is seeked.
var hideSunfly = function() {
	sunfly.classList.add('kara-hidden');
}
var showSunfly = function() {
	sunfly.classList.remove('kara-hidden');
}
audio.addEventListener('play', hideSunfly);
audio.addEventListener('seeked', hideSunfly);

// Show the Sunfly image when the audio finishes.
audio.addEventListener('timeupdate', function(event) {
	if (audio.currentTime >= audio.duration) {
		showSunfly();
	}
});
