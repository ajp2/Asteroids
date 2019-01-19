const Game = require('./game');

function GameView(ctx) {
  this.ctx = ctx;
  this.game = new Game();
}

GameView.prototype.start = function() {
  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {
    this.game.addAsteroids();
  } 
  
  const renderAsteroids = setInterval(() => {
    this.game.moveObjects();
    this.game.draw(this.ctx);
  }, 20);
};

module.exports = GameView;