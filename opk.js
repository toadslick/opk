var startDelay = 2;
var endDelay = 0.5;

var screens = [
  {
    start: 11.32,
    segments: [
      { text: "sip"  , sec: 0.00 },
      { text: "pin'" , sec: 0.15 },
      { text: " "                },
      { text: "tro"  , sec: 0.14 },
      { text: "pi"   , sec: 0.15 },
      { text: "ca"   , sec: 0.17 },
      { text: "na"   , sec: 0.28 },
      { text: "\n"               },
      { text: "in"   , sec: 1.30 },
      { text: " "    ,           },
      { text: "a"    , sec: 0.16 },
      { text: " "                },
      { text: "co"   , sec: 0.16 },
      { text: "co"   , sec: 0.16 },
      { text: "nut"  , sec: 0.14 },
      { text: " "                },
      { text: "ca"   , sec: 0.18 },
      { text: "ba"   , sec: 0.16 },
      { text: "na"   , sec: 0.30 },
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
  var duration = 0;
  screen.segments.forEach(function(segment) {
    var segmentNode = document.createElement('div');
    segmentNode.classList.add('kara-segment');
    segment.node = segmentNode;
    segmentNode.innerText = segment.text;
    screenNode.appendChild(segmentNode);
    duration += segment.sec || 0;
  });
  screen.end = screen.start + duration;
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
    var startFrame = (screen.start - startDelay) * frameRate;
    var endFrame = (screen.end + endDelay) * frameRate;
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
        } else {
          segment.node.classList.remove('kara-highlight');
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

window.webvfx_add_to_frame = [runLoop];
