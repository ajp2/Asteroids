const Util = require('./util');
const MovingObject = require('./moving_object');
const Bullet = require('./bullet');

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

Ship.RADIUS = 15;
Ship.COLOR = 'green';

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition();
  this.vel = Util.randomVec(0);
};

Ship.prototype.power = function(impulse) {
  this.vel[0] += impulse[0];
  this.vel[1] += impulse[1];
};

Ship.prototype.fireBullet = function() {
  let x = this.pos[0], y = this.pos[1], dx = 0, dy = 0;

  if (this.vel[0] > 0) {
    x = this.pos[0] + Ship.RADIUS;
    dx = 20;
  } else if (this.vel[0] < 0) {
    x = this.pos[0] - Ship.RADIUS;
    dx = -20;
  }

  if (this.vel[1] > 0) {
    y = this.pos[1] + Ship.RADIUS;
    dx = dx === 0 ? 0 : dx;
    dy = 20;
  } else if (this.vel[1] < 0) {
    y = this.pos[1] - Ship.RADIUS;
    dx = dx === 0 ? 0 : dx;
    dy = -20;
  }

  if (this.vel[0] === 0 && this.vel[1] === 0) {
    x = undefined;
    y = undefined;
  }

  const bullet = new Bullet({
    pos: [x, y],
    vel: [dx, dy],
    game: this.game
  });
  this.game.add(bullet);
};

module.exports = Ship;