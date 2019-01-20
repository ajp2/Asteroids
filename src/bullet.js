const MovingObject = require('./moving_object');
const Util = require('./util');

function Bullet(options) {
  MovingObject.call(this, {
    pos: options.pos,
    vel: options.vel,
    radius: Bullet.RADIUS,
    color: Bullet.COLOR,
    game: options.game
  });
}

Util.inherits(Bullet, MovingObject);

Bullet.RADIUS = 5;
Bullet.COLOR = 'black';

Bullet.prototype.collideWith = function(otherObject) {
  this.game.remove(otherObject);
  this.game.remove(this);
};

Bullet.prototype.isWrappable = false;

module.exports = Bullet;