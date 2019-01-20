const GameView = require('./game_view');

window.GameView = GameView;

document.addEventListener("DOMContentLoaded", (event) => {
  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  window.ctx = ctx;

  const gameView = new GameView(ctx);
  gameView.start();
});