var startDelay = 0.3;
var endDelay = 0.3;

var screens = [
  [ 11.32, [
    [ "sip"   ,       ],
    [ "ping"  , 0.170 ],
    [ " "     ,       ],
    [ "tro"   , 0.165 ],
    [ "pi"    , 0.145 ],
    [ "ca"    , 0.175 ],
    [ "na"    , 0.300 ],
    [ "\n"    ,       ],
    [ "in"    , 1.265 ],
    [ " "     ,       ],
    [ "a"     , 0.165 ],
    [ " "     ,       ],
    [ "co"    , 0.165 ],
    [ "co"    , 0.160 ],
    [ "nut"   , 0.180 ],
    [ " "     ,       ],
    [ "ca"    , 0.155 ],
    [ "ba"    , 0.175 ],
    [ "na"    , 0.255 ],
  ]],
  [ 16.39, [
    [ "floa"  ,       ],
    [ "ting"  , 0.150 ],
    [ " "     ,       ],
    [ "on"    , 0.155 ],
    [ " "     ,       ],
    [ "fla"   , 0.155 ],
    [ "min"   , 0.185 ],
    [ "goes"  , 0.305 ],
    [ "\n"    ,       ],
    [ "smo"   , 1.610 ],
    [ "king"  , 0.170 ],
    [ " "     ,       ],
    [ "all"   , 0.140 ],
    [ " "     ,       ],
    [ "the"   , 0.150 ],
    [ " "     ,       ],
    [ "man"   , 0.180 ],
    [ "goes"  , 0.300 ],
  ]],
  [ 21.5, [
    [ "hot"   ,       ],
    [ "ter"   , 0.140 ],
    [ " "     ,       ],
    [ "than"  , 0.160 ],
    [ " "     ,       ],
    [ "Mo"    , 0.155 ],
    [ "ja"    , 0.180 ],
    [ "ve"    , 0.290 ],
    [ "\n"    ,       ],
    [ "swee"  , 1.640 ],
    [ "ter"   , 0.165 ],
    [ " "     ,       ],
    [ "than"  , 0.160 ],
    [ " "     ,       ],
    [ "a"     , 0.130 ],
    [ "ga"    , 0.170 ],
    [ "ve"    , 0.310 ],
  ]],
  [ 27.2, [
    [ "we"    ,       ],
    [ " "     ,       ],
    [ "just"  , 0.165 ],
    [ " "     ,       ],
    [ "wan"   , 0.150 ],
    [ "na"    , 0.155 ],
    [ " "     ,       ],
    [ "stay"  , 0.180 ],
    [ " "     ,       ],
    [ "cool"  , 0.290 ],
    [ "\n"    ,       ],
    [ "ho"    , 0.330 ],
    [ "ver"   , 0.485 ],
    [ "boar"  , 0.19  ],
    [ "ding"  , 0.13  ],
    [ " "     ,       ],
    [ "in"    , 0.145 ],
    [ " "     ,       ],
    [ "a"     , 0.165 ],
    [ "\n"    ,       ],
    [ "Ca"    , 0.18  ],
    [ "la"    , 0.155 ],
    [ "ma"    , 0.165 ],
    [ "tsi"   , 0.15  ],
    [ " "     ,       ],
    [ "wave"  , 0.165 ],
    [ " "     ,       ],
    [ "pool"  , 0.315 ],
  ]],
  [ 32.1, [
    [ "je"    ,       ],
    [ "llo"   , 0.445 ],
    [ " "     ,       ],
    [ "shots" , 0.165 ],
    [ " "     ,       ],
    [ "and"   , 0.540 ],
    [ " "     ,       ],
    [ "le"    , 0.135 ],
    [ "mon"   , 0.160 ],
    [ " "     ,       ],
    [ "drops" , 0.170 ],
    [ "\n"    ,       ],
    [ "this"  , 1.615 ],
    [ " "     ,       ],
    [ "is"    , 0.150 ],
    [ " "     ,       ],
    [ "how"   , 0.165 ],
    [ " "     ,       ],
    [ "we"    , 0.165 ],
    [ " "     ,       ],
    [ "ot"    , 0.175 ],
    [ "ter"   , 0.155 ],
    [ " "     ,       ],
    [ "pop"   , 0.150 ],
    [ "\n"    ,       ],
    [ "this"  , 1.610 ],
    [ " "     ,       ],
    [ "is"    , 0.145 ],
    [ " "     ,       ],
    [ "how"   , 0.165 ],
    [ " "     ,       ],
    [ "we"    , 0.165 ],
    [ " "     ,       ],
    [ "ot"    , 0.165 ],
    [ "ter"   , 0.155 ],
    [ " "     ,       ],
    [ "pop"   , 0.150 ],
  ]],
  [ 42.4, [
    [ "high"  ,       ],
    [ "er"    , 0.445 ],
    [ " "     ,       ],
    [ "than"  , 0.165 ],
    [ " "     ,       ],
    [ "an"    , 0.510 ],
    [ " "     ,       ],
    [ "as"    , 0.155 ],
    [ "tro"   , 0.140 ],
    [ "naut"  , 0.170 ],
    [ "\n"    ,       ],
    [ "this"  , 1.615 ],
    [ " "     ,       ],
    [ "is"    , 0.145 ],
    [ " "     ,       ],
    [ "how"   , 0.175 ],
    [ " "     ,       ],
    [ "we"    , 0.155 ],
    [ " "     ,       ],
    [ "ot"    , 0.160 ],
    [ "ter"   , 0.135 ],
    [ " "     ,       ],
    [ "pop"   , 0.155 ],
    [ "\n"    ,       ],
    [ "this"  , 1.605 ],
    [ " "     ,       ],
    [ "is"    , 0.165 ],
    [ " "     ,       ],
    [ "how"   , 0.175 ],
    [ " "     ,       ],
    [ "we"    , 0.155 ],
    [ " "     ,       ],
    [ "ot"    , 0.160 ],
    [ "ter"   , 0.155 ],
    [ " "     ,       ],
    [ "pop"   , 0.155 ],
    [ "\n"    ,       ],
    [ "this"  , 1.550 ],
    [ " "     ,       ],
    [ "is"    , 0.180 ],
    [ " "     ,       ],
    [ "how"   , 0.155 ],
    [ " "     ,       ],
    [ "we"    , 0.160 ],
  ]],
  [ 51.8, [
    [ "ot"    ,       ],
    [ " "     ,       ],
    [ "ot"    , 0.310 ],
    [ " "     ,       ],
    [ "ot"    , 0.315 ],
    [ " "     ,       ],
    [ "ot"    , 0.320 ],
    [ " "     ,       ],
    [ "ot"    , 0.325 ],
    [ "ter"   , 0.135 ],
    [ " "     ,       ],
    [ "pop"   , 0.190 ],
    [ "\n"    ,       ],
    [ "ot"    , 0.315 ],
    [ " "     ,       ],
    [ "ot"    , 0.315 ],
    [ " "     ,       ],
    [ "ot"    , 0.330 ],
    [ " "     ,       ],
    [ "ot"    , 0.305 ],
    [ " "     ,       ],
    [ "ot"    , 0.315 ],
    [ " "     ,       ],
    [ "ot"    , 0.330 ],
    [ " "     ,       ],
    [ "ot"    , 0.330 ],
    [ "ter"   , 0.130 ],
    [ " "     ,       ],
    [ "pop"   , 0.180 ],
    [ " "     ,       ],
    [ "ot"    , 0.300 ],
    [ "ter"   , 0.160 ],
    [ "\n"    ,       ],
    [ "ot"    , 0.530 ],
    [ " "     ,       ],
    [ "ot"    , 0.300 ],
    [ " "     ,       ],
    [ "ot"    , 0.305 ],
    [ " "     ,       ],
    [ "ot"    , 0.340 ],
    [ " "     ,       ],
    [ "ot"    , 0.315 ],
    [ "ter"   , 0.130 ],
    [ " "     ,       ],
    [ "pop"   , 0.180 ],
    [ "\n"    ,       ],
    [ "ot"    , 0.320 ],
    [ " "     ,       ],
    [ "ot"    , 0.315 ],
    [ " "     ,       ],
    [ "ot"    , 0.330 ],
    [ " "     ,       ],
    [ "ot"    , 0.310 ],
    [ " "     ,       ],
    [ "ot"    , 0.320 ],
    [ " "     ,       ],
    [ "ot"    , 0.330 ],
    [ " "     ,       ],
    [ "ot"    , 0.300 ],
    [ "ter"   , 0.140 ],
    [ " "     ,       ],
    [ "pop"   , 0.180 ],
    [ " "     ,       ],
    [ "ot"    , 0.335 ],
    [ "ter"   , 0.155 ],
  ]],
  [ 62.3, [
    [ "ot"    ,       ],
    [ " "     ,       ],
    [ "ot"    , 0.320 ],
    [ " "     ,       ],
    [ "ot"    , 0.315 ],
    [ " "     ,       ],
    [ "ot"    , 0.325 ],
    [ " "     ,       ],
    [ "ot"    , 0.320 ],
    [ "ter"   , 0.140 ],
    [ " "     ,       ],
    [ "pop"   , 0.170 ],
    [ "\n"    ,       ],
    [ "ot"    , 0.315 ],
    [ " "     ,       ],
    [ "ot"    , 0.315 ],
    [ " "     ,       ],
    [ "ot"    , 0.325 ],
    [ " "     ,       ],
    [ "ot"    , 0.340 ],
    [ " "     ,       ],
    [ "ot"    , 0.325 ],
    [ " "     ,       ],
    [ "ot"    , 0.315 ],
    [ " "     ,       ],
    [ "ot"    , 0.305 ],
    [ "ter"   , 0.130 ],
    [ " "     ,       ],
    [ "pop"   , 0.180 ],
    [ " "     ,       ],
    [ "ot"    , 0.325 ],
    [ "ter"   , 0.140 ],
    [ "\n"    ,       ],
    [ "ot"    , 0.515 ],
    [ " "     ,       ],
    [ "ot"    , 0.350 ],
    [ " "     ,       ],
    [ "ot"    , 0.295 ],
    [ " "     ,       ],
    [ "ot"    , 0.315 ],
    [ " "     ,       ],
    [ "ot"    , 0.330 ],
    [ "ter"   , 0.130 ],
    [ " "     ,       ],
    [ "pop"   , 0.155 ],
    [ "\n"    ,       ],
    [ "ot"    , 0.340 ],
    [ " "     ,       ],
    [ "ot"    , 0.340 ],
    [ " "     ,       ],
    [ "ot"    , 0.290 ],
    [ " "     ,       ],
    [ "ot"    , 0.330 ],
    [ " "     ,       ],
    [ "ot"    , 0.310 ],
    [ " "     ,       ],
    [ "ot"    , 0.330 ],
    [ " "     ,       ],
    [ "ot"    , 0.335 ],
    [ "ter"   , 0.120 ],
    [ " "     ,       ],
    [ "pop"   , 0.175 ],
    [ " "     ,       ],
    [ "ot"    , 0.320 ],
    [ "ter"   , 0.150 ],
  ]],
  [ 73.5, [
    [ "je"    ,       ],
    [ "llo"   , 0.455 ],
    [ " "     ,       ],
    [ "shots" , 0.160 ],
    [ " "     ,       ],
    [ "and"   , 0.515 ],
    [ " "     ,       ],
    [ "le"    , 0.135 ],
    [ "mon"   , 0.130 ],
    [ " "     ,       ],
    [ "drops" , 0.210 ],
    [ "\n"    ,       ],
    [ "this"  , 1.585 ],
    [ " "     ,       ],
    [ "is"    , 0.175 ],
    [ " "     ,       ],
    [ "how"   , 0.170 ],
    [ " "     ,       ],
    [ "we"    , 0.165 ],
    [ " "     ,       ],
    [ "ot"    , 0.160 ],
    [ "ter"   , 0.155 ],
    [ " "     ,       ],
    [ "pop"   , 0.160 ],
    [ "\n"    ,       ],
    [ "this"  , 1.600 ],
    [ " "     ,       ],
    [ "is"    , 0.155 ],
    [ " "     ,       ],
    [ "how"   , 0.180 ],
    [ " "     ,       ],
    [ "we"    , 0.160 ],
    [ " "     ,       ],
    [ "ot"    , 0.165 ],
    [ "ter"   , 0.135 ],
    [ " "     ,       ],
    [ "pop"   , 0.160 ],
  ]],
];

var pauses = [
  { start: 0, end: 11.2 },
  { start: 80.9, end: 83.5 },
];

var screenContainer = document.getElementById('kara-lyrics-container');
var pauseContainer = document.getElementById('kara-pause-container');

screens.forEach(function(screen) {
  var screenNode = document.createElement('div');
  screenNode.classList.add('kara-screen');
  screen.node = screenNode;
  var duration = 0;
  screen[1].forEach(function(segment) {
    var segmentNode = document.createElement('div');
    segmentNode.classList.add('kara-segment');
    segment.node = segmentNode;
    segmentNode.innerText = segment[0];
    screenNode.appendChild(segmentNode);
    duration += segment[1] || 0;
  });
  screen.end = screen[0] + duration;
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
