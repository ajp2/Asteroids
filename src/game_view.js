const Game = require('./game');

function GameView(ctx) {
  this.ctx = ctx;
  this.game = new Game();
}

GameView.prototype.start = function() {
  const img = new Image();
  img.onload = () => ctx.drawImage(img, 0, 0, 900, 600);
  img.src = "../download.jpeg";
  
  this.game.bindKeyHandlers();
  
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.game.addAsteroids();
  } 

  const renderAsteroids = setInterval(() => {
    this.game.step();
    this.game.draw(this.ctx);
  }, 20);
};

module.exports = GameView;