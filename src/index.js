const MovingObject = require('./moving_object');
const Asteroid = require('./asteroid');
const Game = require('./game');
const GameView = require('./game_view');

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.GameView = GameView;
window.Game = Game;

document.addEventListener("DOMContentLoaded", (event) => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  window.ctx = ctx;

  const gameView = new GameView(ctx);
  gameView.start();

  window.x = gameView.game;
});