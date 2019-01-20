const MovingObject = require('./moving_object');
const Util = require('./util');
const Ship = require('./ship');

function Asteroid(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: Util.randomVec(3),
    radius: Asteroid.RADIUS,
    color: Asteroid.COLOR,
    game: options.game
  });
}

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = 'blue';
Asteroid.RADIUS = 25;

Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate();
  }
};

module.exports = Asteroid;