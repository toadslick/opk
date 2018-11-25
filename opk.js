var screens = [
  {
    start: 10,
    end: 16,
    lines: [[
      { start: 11, text: "sip" },
      { start: 11, text: "pin'" },
      { text: " " },
      { start: 12, text: "tro" },
      { start: 12, text: "pic" },
      { start: 12, text: "an" },
      { start: 12, text: "a" },
    ], [
      { start: 13, text: "in" },
      { text: " " },
      { start: 13, text: "a" },
      { text: " " },
      { start: 14, text: "co" },
      { start: 14, text: "co" },
      { start: 14, text: "nut" },
      { text: " " },
      { start: 15, text: "ca" },
      { start: 15, text: "ba" },
      { start: 15, text: "na" },
    ]]
  },
];

var pauses = [
  { start: 0, end: 10 },
];

var container = document.getElementById('container');

screens.forEach(function(screen) {
  div = document.createElement('div');
  screen.node = div;
  screen.lines.forEach(function(line) {
    p = document.createElement('p');
    div.appendChild(p);
    line.forEach(function(segment) {
      span = document.createElement('span');
      segment.node = span;
      span.innerText = segment.text;
      p.appendChild(span);
    });
  });
  container.appendChild(div);
});

webvfx_add_to_frame = [
  function(time, browser, currentFrame, frameRate) {
    screens.forEach(function(screen) {
      var startFrame = screen.start * frameRate;
      var endFrame = screen.end * frameRate;
      if (currentFrame < startFrame || currentFrame > endFrame) {
        screen.node.style.opacity = 0;
      } else {
        screen.node.style.opacity = 1;
        screen.lines.forEach(function(line) {
          line.forEach(function(segment) {
            var startFrame = segment.start * frameRate;
            if (startFrame <= currentFrame) {
              segment.node.classList.add('highlight');
            }
          });
        });
      }
    });
  }
];
