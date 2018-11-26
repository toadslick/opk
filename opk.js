var screens = [
  {
    start: 0,
    end: 20,
    lines: [[
      { start: 3, text: "sip" },
      { start: 4, text: "pin'" },
      { text: " " },
      { start: 5, text: "tro" },
      { start: 6, text: "pi" },
      { start: 7, text: "ca" },
      { start: 8, text: "na" },
    ], [
      { start: 9, text: "in" },
      { text: " " },
      { start: 10, text: "a" },
      { text: " " },
      { start: 11, text: "co" },
      { start: 12, text: "co" },
      { start: 13, text: "nut" },
      { text: " " },
      { start: 14, text: "ca" },
      { start: 15, text: "ba" },
      { start: 16, text: "na" },
    ]]
  },
];

var pauses = [
  { start: 0, end: 10 },
];

var container = document.getElementById('karaoke-lyrics-container');

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
  container.appendChild(screenNode);
});

webvfx_add_to_frame = [
  function(time, browser, currentFrame, frameRate) {
    screens.forEach(function(screen) {
      var startFrame = screen.start * frameRate;
      var endFrame = screen.end * frameRate;
      if (currentFrame < startFrame || currentFrame > endFrame) {
        screen.node.classList.add('karaoke-lyrics-hidden');
      } else {
        screen.node.classList.remove('karaoke-lyrics-hidden');
        screen.lines.forEach(function(line) {
          line.forEach(function(segment) {
            var startFrame = segment.start * frameRate;
            if (startFrame <= currentFrame) {
              segment.node.classList.add('karaoke-lyrics-highlight');
            }
          });
        });
      }
    });
  }
];
