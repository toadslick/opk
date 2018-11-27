var screens = [
  {
    start: 11.2,
    end: 16,
    segments: [
      { sec: 0.00, text: "sip" },
      { sec: 0.15, text: "pin'" },
      { text: " " },
      { sec: 0.14, text: "tro" },
      { sec: 0.15, text: "pi" },
      { sec: 0.17, text: "ca" },
      { sec: 0.28, text: "na" },
      { text: "\n"},
      { sec: 1.30, text: "in" },
      { text: " " },
      { sec: 0.16, text: "a" },
      { text: " " },
      { sec: 0.16, text: "co" },
      { sec: 0.16, text: "co" },
      { sec: 0.14, text: "nut" },
      { text: " " },
      { sec: 0.18, text: "ca" },
      { sec: 0.16, text: "ba" },
      { sec: 0.30, text: "na" },
    ]
  },
];

var pauses = [
  { start: 0, end: 11.2 },
];

var screenContainer = document.getElementById('kara-lyrics-container');
var pauseContainer = document.getElementById('kara-pause-container');

screens.forEach(function(screen) {
  var screenNode = document.createElement('div');
  screenNode.classList.add('kara-screen');
  screen.node = screenNode;
  screen.segments.forEach(function(segment) {
    var segmentNode = document.createElement('div');
    segmentNode.classList.add('kara-segment');
    segment.node = segmentNode;
    segmentNode.innerText = segment.text;
    screenNode.appendChild(segmentNode);
  });
  screenContainer.appendChild(screenNode);
});

pauses.forEach(function(pause) {
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

  screens.forEach(function(screen) {
    var startFrame = screen.start * frameRate;
    var endFrame = screen.end * frameRate;
    if (currentFrame < startFrame || currentFrame > endFrame) {
      screen.node.classList.remove('kara-visible');
    } else {
      screen.node.classList.add('kara-visible');
      var segmentStartTime = screen.start;
      screen.segments.forEach(function(segment) {
        segmentStartTime += segment.sec || 0;
        var startFrame = segmentStartTime * frameRate;
        if (startFrame <= currentFrame) {
          segment.node.classList.add('kara-highlight');
        }
      });
    }
  });

  pauses.forEach(function(pause) {
    var startFrame = pause.start * frameRate;
    var endFrame = pause.end * frameRate;
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

webvfx_add_to_frame = [runLoop];
