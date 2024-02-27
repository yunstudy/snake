//定义蛇身
let direct;//方向
const side = 30;
const positionX = 8 * side;
const positionY = 8 * side;
const snakeColor = 'green';
const borderColor = 'darkgreen';
let newDirectionRequest = null;
let tempX;
let tempY;
let preX;
let preY;
let snakes;

function Snake(positionX, positionY, direct, isHead) {
  this.positionX = positionX;
  this.positionY = positionY;
  this.direct = direct;
  this.isHead = isHead;
}

//创建初始蛇身数组
snakeInitialize = function() {
  direct = [0, -1];
  snakes = [
    new Snake(240, 240, direct, true),
    new Snake(240, 270, direct, false),
    new Snake(240, 300, direct, false),
  ];
};

//画方块
Snake.prototype.draw = function() {
  ctx.fillStyle = snakeColor;
  ctx.strokestyle = borderColor;
  ctx.fillRect(this.positionX, this.positionY, side, side);
  ctx.strokeRect(this.positionX, this.positionY, side, side);
};

//head位置更新
Snake.prototype.headUpdate = function() {
  this.positionX += direct[0] * side;
  this.positionY += direct[1] * side;
};
//body位置更新
Snake.prototype.update = function() {
  this.positionX = preX;
  this.positionY = preY;
};

//蛇的移动
Snake.prototype.move = function() {
  tempX = this.positionX;
  tempY = this.positionY;
  if (this.isHead) {
    this.headUpdate();
  } else {
    this.update();
  }
  preX = tempX;
  preY = tempY;
};