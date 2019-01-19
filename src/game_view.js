const Game = require('./game');

function GameView(ctx) {
  this.ctx = ctx;
  this.game = new Game();
}

GameView.prototype.start = function() {
  const renderAsteroids = setInterval(() => {
    this.game.moveObjects();
    this.game.draw(this.ctx);
  }, 20);
};