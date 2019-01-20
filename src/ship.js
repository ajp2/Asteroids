const Util = require('./util');
const MovingObject = require('./moving_object');

function Ship(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: Util.randomVec(0),
    radius: Ship.RADIUS,
    color: Ship.COLOR,
    game: options.game
  });
}

Util.inherits(Ship, MovingObject);

Ship.RADIUS = 25;
Ship.COLOR = 'green';

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = Util.randomVec(0);
};

module.exports = Ship;