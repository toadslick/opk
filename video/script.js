var startDelay = 0.3;
var endDelay = 0.3;

var letterRegex = /[a-z]/;

var screenContainer = document.getElementById('kara-lyrics-container');
var pauseContainer = document.getElementById('kara-pause-container');

window.songData.lyrics.forEach(function(screen) {
  var screenNode = document.createElement('div');
  screenNode.classList.add('kara-screen');
  screen.node = screenNode;
  var duration = 0;
  screen[1].forEach(function(segment) {
    var segmentNode = document.createElement('div');
    segmentNode.classList.add('kara-segment');
    segment.node = segmentNode;

    segment[0].toLowerCase().split('').forEach(function(letter) {
      var letterNode = document.createElement('div');
      if (letterRegex.test(letter)) {
        letterNode.classList.add('kara-letter');
        letterNode.classList.add('kara-letter-' + letter);
      } else if (letter === " ") {
        letterNode.classList.add('kara-letter-space');
      } else if (letter === "\n") {
        letterNode.classList.add('kara-line-break');
      } else {
        letterNode.classList.add('kara-letter');        
        letterNode.classList.add('kara-letter-misc');
      }
      segmentNode.appendChild(letterNode);
    });

    screenNode.appendChild(segmentNode);
    duration += segment[1] || 0;
  });
  screen.end = screen[0] + duration;
  screenContainer.appendChild(screenNode);
});

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

var runLoop = function(time, browser, currentFrame, frameRate) {

  window.songData.lyrics.forEach(function(screen) {
    var startFrame = (screen[0] - startDelay) * frameRate;
    var endFrame = (screen.end + endDelay) * frameRate;
    if (currentFrame < startFrame || currentFrame > endFrame) {
      screen.node.classList.remove('kara-visible');
    } else {
      screen.node.classList.add('kara-visible');
      var segmentStartTime = screen[0];
      screen[1].forEach(function(segment) {
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

window.webvfx_add_to_frame = [runLoop];
