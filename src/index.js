const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid');

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", (event) => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  window.ctx = ctx;
})