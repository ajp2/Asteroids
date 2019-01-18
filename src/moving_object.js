function MovingObject(argsObject) {
  this.pos = argsObject.pos;
  this.vel = argsObject.vel;
  this.radius = argsObject.radius;
  this.color = argsObject.color;
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
}

module.exports = MovingObject;