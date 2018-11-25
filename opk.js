var lyrics = [
  { start: 11, end: 13, text: "sippin' tropicana" },
  { start: 13, end: 16, text: "in a coconut cabana" },
]

var container = document.getElementById('container');

lyrics.forEach(function(lyric) {
  node = document.createElement('div');
  node.innerText = lyric.text;
  container.appendChild(node);
  lyric.node = node;
});

webvfx_add_to_frame = [
  function(time, browser, frameNumber, frameRate) {
    lyrics.forEach(function(phrase) {
      startFrame = phrase.start * frameRate;
      endFrame = phrase.end * frameRate;
      if (frameNumber < startFrame || frameNumber > endFrame) {
        phrase.node.style.opacity = 0;
      } else {
        phrase.node.style.opacity = 1;
      }
      phrase.node.innerText = phrase.text + " --- " + startFrame + " " + frameNumber + " " + endFrame;
    });
  }
];
