function MovingObject(options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
  this.game = options.game;
}

MovingObject.prototype.draw = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    false
  );

  ctx.fill();
};

MovingObject.prototype.move = function() {
  this.pos[0] += this.vel[0]
  this.pos[1] += this.vel[1];
  if (this.game.isOutOfBounds(this.pos)) {
    if (this.isWrappable) {
      this.pos = this.game.wrap(this.pos);
    } else {
      this.game.remove(this);
    }
  }
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  // collided if distance between center points < sum of radii
  const xDiff = (this.pos[0] - otherObject.pos[0]);
  const yDiff = this.pos[1] - otherObject.pos[1];
  const distance = Math.sqrt((xDiff ** 2) + (yDiff ** 2));

  return distance < (this.radius + otherObject.radius);
};

MovingObject.prototype.collideWith = function(otherObject) {
};

MovingObject.prototype.isWrappable = true;

module.exports = MovingObject;