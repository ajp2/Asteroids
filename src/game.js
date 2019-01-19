const Asteroid = require('./asteroid');

function Game() {
  this.asteroids = [];
}

Game.DIM_X = 100;
Game.DIM_Y = 100;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function() {
  const pos = { pos: this.randomPosition() };
  const newAsteroid = new Asteroid(pos);
  this.asteroids.push(newAsteroid);
};

Game.prototype.randomPosition = function() {
  const x = Math.random() * Game.DIM_X;
  const y = Math.random() * Game.DIM_Y;
  return [x, y];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRext();
  this.asteroids.forEach(asteroid => {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(asteroid => {
    asteroid.move();
  });
};