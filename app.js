'use strict';

import { Ball } from './ball.js';
class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");

    document.body.appendChild(this.canvas);

    window.addEventListener("resize", this.resize.bind(this), false);
      this.resize();
      
      this.ball = new Ball(this.stageWidth, this.stageHeight, 60, 15);

    window.requestAnimationFrame(this.animate.bind(this));
  }
  resize() {
    this.stageWidth = document.body.clientWidth;
      this.stageHeight = document.body.clientHeight;
      
      this.canvas.width = this.stageWidth * 2;
      this.canvas.height = this.stageHeight * 2;
      this.context.scale(2, 2)
  }
    animate(time) {
        window.requestAnimationFrame(this.animate.bind(this));
        this.ball.draw(this.context, this.stageWidth, this.stageHeight);
  }
}

window.onload = () => {
    new App();
} 
