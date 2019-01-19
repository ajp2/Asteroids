const MovingObject = require('./moving_object');
const Util = require('./util');

function Asteroid(posObject) {
  MovingObject.call(this, {
    pos: posObject.pos,
    vel: Util.randomVec(3),
    radius: Asteroid.RADIUS,
    color: Asteroid.COLOR,
    game: posObject.game
  });
}

Util.inherits(Asteroid, MovingObject);

Asteroid.COLOR = 'blue';
Asteroid.RADIUS = 25;

module.exports = Asteroid;