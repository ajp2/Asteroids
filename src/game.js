const Asteroid = require('./asteroid');

function Game() {
  this.asteroids = [];
}

Game.DIM_X = 600;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 3;

Game.prototype.addAsteroids = function() {
  const options = { game: this, pos: this.randomPosition() };
  const newAsteroid = new Asteroid(options);
  this.asteroids.push(newAsteroid);
};

Game.prototype.randomPosition = function() {
  const x = Math.random() * Game.DIM_X;
  const y = Math.random() * Game.DIM_Y;
  return [x, y];
};

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
  this.asteroids.forEach(asteroid => {
    asteroid.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(asteroid => {
    asteroid.move();
  });
};

Game.prototype.wrap = function(pos) {
  let x = pos[0] >= Game.DIM_X ? 0 : pos[0];
  let y = pos[1] >= Game.DIM_Y ? 0 : pos[1];

  x = pos[0] < 0 ? Game.DIM_X : x;
  y = pos[1] < 0 ? Game.DIM_Y : y;

  return [x, y];
};

Game.prototype.checkCollisions = function() {
  for (let i = 0; i < this.asteroids.length; i++) {
    for (let j = i + 1; j < this.asteroids.length; j++) {
      if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
        alert("COLLISION");
        return true;
      }
    }
  }

  return false;
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

module.exports = Game;