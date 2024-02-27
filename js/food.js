//定义食物
const radius = 15;//半径
const foodColor = 'red';//颜色
let food;

//创建食物对象
foodInitialize = function() {
  food = new Food(random(), random());
};

//生成随机数,用于食物坐标
function random() {
  return Math.floor(Math.random() * 17) * 30;
}

function Food(positionX, positionY) {
  this.positionX = positionX;
  this.positionY = positionY;
}

//画圆
Food.prototype.draw = function() {
  ctx.beginPath();
  ctx.fillStyle = foodColor;
  ctx.arc(this.positionX + radius, this.positionY + radius, radius, 0, 2 * Math.PI);
  ctx.fill();
};

//更新食物的位置
Food.prototype.update = function() {
  food = new Food(random(), random());
};