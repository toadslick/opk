var totalDuration = 167.784;
var segmentAnimationDuration = 0.4;
var letterRegex = /[a-z]/;
var screenContainer = document.getElementById('kara-lyrics-container');
var pauseContainer = document.getElementById('kara-pause-container');

// Render the `data-animate` JSON for animating the bounce when a segment is highlighted.
// Webvfx animation start and end times are based on a percentage instead of a timestamp.
var segmentAnimation = function(startSeconds) {
  var startPercent = startSeconds / totalDuration;
  var endPercent = (startSeconds + segmentAnimationDuration) / totalDuration;
  return '{' +
    'start: ' + startPercent + ', ' +
    'end: '   + endPercent   + ', ' +
    'ease: "easeOutQuad", ' +
    '0%: { top: "6px" }, ' +
    '100%: { top: "0px" } ' +
  '}';
};

// Render the nodes for each "screen" of the karaoke song.
// Each screen consists of many "segments", each of which represent a syllable.
// Each syllable consists of one or more "letters".
window.songData.lyrics.forEach(function(screen) {
  var screenNode = document.createElement('div');
  screenNode.classList.add('kara-screen');
  screen.node = screenNode;

  // Each screen begins at an absolute timestamp, but the timing between segments
  // is stored as the relative time between them. This is because segments were timed
  // using a stopwatch.
  //
  // While looping through the segments, add their relative duration to the screen's
  // start time to calculate:
  // - the screen's end time, when it should be hidden by and its segments ignored.
  // - the times required for the webvfx data-animate property,
  //   since webvfx does not support CSS animations.
  var duration = screen.start;

  screen.segments.forEach(function(segment) {

    // Segments without a time property are treated as if they have a duration of zero.
    duration += segment[1] || 0;

    var segmentNode = document.createElement('div');
    segmentNode.classList.add('kara-segment');

    // Properties required to be animated by webvfx.
    segmentNode.classList.add('webvfx');
    segmentNode.setAttribute('data-animate', segmentAnimation(duration));

    segment.node = segmentNode;

    // Split each segment into multiple letters.
    // Only letters, spaces, and line breaks are supported by the
    // CSS/PNG sprites. (See images/letters.png)
    segment[0].toLowerCase().split('').forEach(function(letter) {
      var letterNode = document.createElement('div');
      if (letterRegex.test(letter)) {
        letterNode.classList.add('kara-letter');
        letterNode.classList.add('kara-letter-' + letter);
      } else if (letter === "\n") {
        letterNode.classList.add('kara-line-break');
      } else {
        letterNode.classList.add('kara-letter-space');
      }
      segmentNode.appendChild(letterNode);
    });

    screenNode.appendChild(segmentNode);
  });
  screen.end = duration;
  screenContainer.appendChild(screenNode);
});

// Render the divs for each "pause". A pause represents a portion of the song
// when no lyrics are sung, and is denoted by a filling progress meter.
window.songData.pauses.forEach(function(pause) {
  var pauseNode = document.createElement('div');
  pauseNode.classList.add('kara-pause-meter');
  pause.node = pauseNode;
  barNode = document.createElement('div');
  barNode.classList.add('kara-pause-bar');
  pause.bar = barNode;
  pauseNode.appendChild(barNode);
  pauseContainer.appendChild(pauseNode);
});

// Each webvfx custom effect can basically be treated as a run loop.
// This function will be called once per video frame by webvfx.
// For the browser version, requestAnimationFrame calls this function.
var runLoop = function(time, browser, currentFrame, frameRate) {

  // For each screen, only display the screen if the video's current time
  // is between the screen's start time and end time.
  window.songData.lyrics.forEach(function(screen) {
    var startFrame = (screen.start - screen.startDelay) * frameRate;
    var endFrame = (screen.end + screen.endDelay) * frameRate;
    if (currentFrame < startFrame || currentFrame > endFrame) {
      screen.node.classList.remove('kara-visible');
    } else {

      // If the screen is visible, loop through each segment and add their
      // relative times together to get the segment's absolute start time.
      // Highlight segments whose absolute start time is on or after this frame.
      screen.node.classList.add('kara-visible');
      var segmentStartTime = screen.start;
      screen.segments.forEach(function(segment) {
        segmentStartTime += segment[1] || 0;
        var startFrame = segmentStartTime * frameRate;
        if (startFrame <= currentFrame) {
          segment.node.classList.add('kara-highlight');
        } else {
          segment.node.classList.remove('kara-highlight');
        }
      });
    }
  });

  // Just like with screens, loop through each pause and
  // render the bar, as well as it's current progress,
  // based on the pause's start and end times.
  window.songData.pauses.forEach(function(pause) {
    var startFrame = pause[0] * frameRate;
    var endFrame = pause[1] * frameRate;
    if (currentFrame < startFrame || currentFrame > endFrame) {
      pause.node.classList.remove('kara-visible');
    } else {
      pause.node.classList.add('kara-visible');
      var sec = endFrame - startFrame;
      var progress = currentFrame - startFrame;
      var ratio = Math.max(0, Math.min(1, progress / sec));
      pause.bar.style.width = Math.floor(ratio * 100) + "%";
    }
  });
};

// This is where webvfx expects to find custom effect functions.
window.webvfx_add_to_frame = [runLoop];
