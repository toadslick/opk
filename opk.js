var screens = [
  {
    start: 9,
    end: 16,
    lines: [[
      { start: 2.8, text: "sip" },
      { start: 2.94, text: "pin'" },
      { text: " " },
      { start: 3.09, text: "tro" },
      { start: 3.25, text: "pi" },
      { start: 3.41, text: "ca" },
      { start: 3.71, text: "na" },
    ], [
      { start: 4.97, text: "in" },
      { text: " " },
      { start: 5.13, text: "a" },
      { text: " " },
      { start: 5.31, text: "co" },
      { start: 5.46, text: "co" },
      { start: 5.62, text: "nut" },
      { text: " " },
      { start: 5.78, text: "ca" },
      { start: 5.96, text: "ba" },
      { start: 6.26, text: "na" },
    ]]
  },
];

var pauses = [
  { start: 0, end: 11.8 },
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
