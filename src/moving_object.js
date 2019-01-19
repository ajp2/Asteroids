function MovingObject(argsObject) {
  this.pos = argsObject.pos;
  this.vel = argsObject.vel;
  this.radius = argsObject.radius;
  this.color = argsObject.color;
  this.game = argsObject.game;
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
  this.pos = this.game.wrap(this.pos);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
  // collided if distance between center points < sum of radii
  const xDiff = (this.pos[0] - otherObject.pos[0]);
  const yDiff = this.pos[1] - otherObject.pos[1];
  const distance = Math.sqrt((xDiff ** 2) + (yDiff ** 2));

  return distance < (this.radius + otherObject.radius);
};

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(otherObject);
  this.game.remove(this);
};

module.exports = MovingObject;