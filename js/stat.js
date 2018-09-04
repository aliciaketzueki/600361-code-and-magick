'use strict';

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var TEXT_GAP = 50;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var maxBarHeight = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var j = 1; j < arr.length; j++) {
    if (arr[j] > maxElement) {
      maxElement = arr[j];
    }
  }
  return maxElement;
};

var getRandomArbitrary = function(min, max) {
  return Math.random() * (max - min) + min;
}

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + 10, 'rgba(0,0,0,0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, 'rgba(255,255,255,1)');

  ctx.fillStyle = 'rgba(0,0,0,1)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP, TEXT_GAP);
  ctx.fillText('Список результатов: ', CLOUD_X + GAP, TEXT_GAP * 1.5);
  var maxTime = getMaxElement(times);
  

  for (var i = 0; i < names.length; i++) {
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + BAR_WIDTH * i + BAR_GAP * i, -(times[i] * maxBarHeight / maxTime) + CLOUD_HEIGHT - GAP * 2.5);

    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255,0,0,1)';
    } else {
      ctx.fillStyle = 'rgba(50,5,252,' + getRandomArbitrary(0.2, 0.9);
    }

    ctx.fillRect(CLOUD_X + BAR_GAP + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT - GAP * 2, BAR_WIDTH, -(times[i] * maxBarHeight / maxTime));
    ctx.fillStyle = 'rgba(0,0,0,1)';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + BAR_WIDTH * i + BAR_GAP * i, CLOUD_HEIGHT);
  }
};
