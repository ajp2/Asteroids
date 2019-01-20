const Asteroid = require('./asteroid');
const Ship = require('./ship');

function Game() {
  this.asteroids = [];
  this.ship = new Ship({ pos: this.randomPosition(), game: this });
}

Game.DIM_X = 600;
Game.DIM_Y = 400;
Game.NUM_ASTEROIDS = 5;

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
  this.allObjects().forEach(movingObject => {
    movingObject.draw(ctx);
  });
};

Game.prototype.moveObjects = function() {
  this.allObjects().forEach(movingObject => {
    movingObject.move();
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
  const allObjects = this.allObjects();

  for (let i = 0; i < allObjects.length; i++) {
    for (let j = i + 1; j < allObjects.length; j++) {
      if (allObjects[i].isCollidedWith(allObjects[j])) {
        allObjects[i].collideWith(allObjects[j]);
        // return true; --is this needed?
      }
    }
  }

  return false;
};

Game.prototype.step = function() {
  this.moveObjects();
  this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
  const idx = this.asteroids.indexOf(asteroid);
  this.asteroids.splice(idx, 1);
};

Game.prototype.allObjects = function() {
  return this.asteroids.concat(this.ship);
};

Game.prototype.bindKeyHandlers = function() {
  key('w', () => this.ship.power([0, -1]));
  key('a', () => this.ship.power([-1, 0]));
  key('s', () => this.ship.power([0, 1]));
  key('d', () => this.ship.power([1, 0]));
};

module.exports = Game;