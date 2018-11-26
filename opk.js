var screens = [
  {
    start: 3,
    end: 8,
    lines: [[
      { start: 0.25, text: "sip" },
      { start: 0.5, text: "pin'" },
      { text: " " },
      { start: 0.75, text: "tro" },
      { start: 1, text: "pi" },
      { start: 1.25, text: "ca" },
      { start: 1.5, text: "na" },
    ], [
      { start: 1.75, text: "in" },
      { text: " " },
      { start: 2, text: "a" },
      { text: " " },
      { start: 2.25, text: "co" },
      { start: 2.5, text: "co" },
      { start: 3, text: "nut" },
      { text: " " },
      { start: 3.5, text: "ca" },
      { start: 4, text: "ba" },
      { start: 4.5, text: "na" },
    ]]
  },
];

var pauses = [
  { start: 0, end: 4 },
];

var screenContainer = document.getElementById('karaoke-lyrics-container');
var pauseContainer = document.getElementById('karaoke-pause-container');

screens.forEach(function(screen) {
  var screenNode = document.createElement('div');
  screenNode.classList.add('karoke-lyrics-screen');
  screen.node = screenNode;
  screen.lines.forEach(function(line) {
    var lineNode = document.createElement('div');
    lineNode.classList.add('karoke-lyrics-line');
    screenNode.appendChild(lineNode);
    line.forEach(function(segment) {
      var segmentNode = document.createElement('div');
      segmentNode.classList.add('karaoke-lyrics-segment');
      segment.node = segmentNode;
      segmentNode.innerText = segment.text;
      lineNode.appendChild(segmentNode);
    });
  });
  screenContainer.appendChild(screenNode);
});

pauses.forEach(function(pause) {
  var pauseNode = document.createElement('div');
  pauseNode.classList.add('karaoke-pause-meter');
  pause.node = pauseNode;
  barNode = document.createElement('div');
  barNode.classList.add('karaoke-pause-bar');
  pause.bar = barNode;
  pauseNode.appendChild(barNode);
  pauseContainer.appendChild(pauseNode);
});

var runLoop = function(time, browser, currentFrame, frameRate) {

  screens.forEach(function(screen) {
    var startFrame = screen.start * frameRate;
    var endFrame = screen.end * frameRate;
    if (currentFrame < startFrame || currentFrame > endFrame) {
      screen.node.classList.add('karaoke-hidden');
    } else {
      screen.node.classList.remove('karaoke-hidden');
      screen.lines.forEach(function(line) {
        line.forEach(function(segment) {
          var startFrame = (screen.start + segment.start) * frameRate;
          if (startFrame <= currentFrame) {
            segment.node.classList.add('karaoke-highlight');
          }
        });
      });
    }
  });

  pauses.forEach(function(pause) {
    var startFrame = pause.start * frameRate;
    var endFrame = pause.end * frameRate;
    if (currentFrame < startFrame || currentFrame > endFrame) {
      pause.node.classList.add('karaoke-hidden');
    } else {
      pause.node.classList.remove('karaoke-hidden');
      var duration = endFrame - startFrame;
      var progress = currentFrame - startFrame;
      var ratio = Math.max(0, Math.min(1, progress / duration));
      pause.bar.style.width = Math.floor(ratio * 100) + "%";
    }
  });
};

webvfx_add_to_frame = [runLoop];
