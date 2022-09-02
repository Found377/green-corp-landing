const COLORS = ["255,108,80", "5,117,18", "29,39,57", "67,189,81"];

function generateDecimalBetween(left, right) {
  return (Math.random() * (left - right) + right).toFixed(2);
}

class Bubble {
  constructor(canvas) {
    this.canvas = canvas;
    this.getCanvasSize();
    this.init();
  }

  getCanvasSize() {
    this.canvasWidth = this.canvas.clientWidth;
    this.canvasHeight = this.canvas.clientHeight;
  }

  init() {
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.alpha = generateDecimalBetween(5, 10) / 10;
    this.size = generateDecimalBetween(10, 20);
    this.translateX = generateDecimalBetween(0, this.canvasWidth);
    this.translateY = generateDecimalBetween(0, this.canvasHeight);
    this.velocity = generateDecimalBetween(20, 40);
    this.movementX = generateDecimalBetween(-2, 2) / this.velocity;
    this.movementY = generateDecimalBetween(1, 20) / this.velocity;
  }

  move() {
    this.translateX = this.translateX - this.movementX;
    this.translateY = this.translateY - this.movementY;

    if (
      this.translateY < 0 ||
      this.translateX < 0 ||
      this.translateX > this.canvasWidth
    ) {
      this.init();
      this.translateY = this.canvasHeight;
    }
  }
}

const canvas = document.getElementById("orb-canvas");

const bubbles = [];
bubbles.push(new Bubble(canvas));
bubbles.push(new Bubble(canvas));
bubbles.push(new Bubble(canvas));

console.log(bubbles);
