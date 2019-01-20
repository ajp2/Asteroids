/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\nfunction Asteroid(options) {\n  MovingObject.call(this, {\n    pos: options.pos,\n    vel: Util.randomVec(3),\n    radius: Asteroid.RADIUS,\n    color: Asteroid.COLOR,\n    game: options.game\n  });\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.COLOR = 'blue';\nAsteroid.RADIUS = 25;\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate();\n  }\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/bullet.js":
/*!***********************!*\
  !*** ./src/bullet.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nfunction Bullet(options) {\n  MovingObject.call(this, {\n    pos: options.pos,\n    vel: options.vel,\n    radius: Bullet.RADIUS,\n    color: Bullet.COLOR,\n    game: options.game\n  });\n}\n\nUtil.inherits(Bullet, MovingObject);\n\nBullet.RADIUS = 5;\nBullet.COLOR = 'black';\n\nBullet.prototype.collideWith = function(otherObject) {\n  this.game.remove(otherObject);\n  this.game.remove(this);\n};\n\nBullet.prototype.isWrappable = false;\n\nmodule.exports = Bullet;\n\n//# sourceURL=webpack:///./src/bullet.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction Game() {\n  this.asteroids = [];\n  this.ship = new Ship({ pos: this.randomPosition(), game: this });\n  this.bullets = [];\n}\n\nGame.DIM_X = 600;\nGame.DIM_Y = 400;\nGame.NUM_ASTEROIDS = 5;\n\nGame.prototype.addAsteroids = function() {\n  const options = { game: this, pos: this.randomPosition() };\n  const newAsteroid = new Asteroid(options);\n  this.add(newAsteroid);\n};\n\nGame.prototype.add = function(obj) {\n  if (obj instanceof Asteroid) {\n    this.asteroids.push(obj);\n  } else if (obj instanceof Bullet) {\n    this.bullets.push(obj);\n  }\n};\n\nGame.prototype.randomPosition = function() {\n  const x = Math.random() * Game.DIM_X;\n  const y = Math.random() * Game.DIM_Y;\n  return [x, y];\n};\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n  this.allObjects().forEach(movingObject => {\n    movingObject.draw(ctx);\n  });\n};\n\nGame.prototype.moveObjects = function() {\n  this.allObjects().forEach(movingObject => {\n    movingObject.move();\n  });\n};\n\nGame.prototype.wrap = function(pos) {\n  let x = pos[0] >= Game.DIM_X ? 0 : pos[0];\n  let y = pos[1] >= Game.DIM_Y ? 0 : pos[1];\n\n  x = pos[0] < 0 ? Game.DIM_X : x;\n  y = pos[1] < 0 ? Game.DIM_Y : y;\n\n  return [x, y];\n};\n\nGame.prototype.checkCollisions = function() {\n  const allObjects = this.allObjects();\n\n  for (let i = 0; i < allObjects.length; i++) {\n    for (let j = i + 1; j < allObjects.length; j++) {\n\n      if (allObjects[i].isCollidedWith(allObjects[j])) {\n\n        // check if Bullet collides with Asteroid\n        if (allObjects[i] instanceof Bullet) {\n          if (allObjects[j] instanceof Asteroid) {\n            allObjects[i].collideWith(allObjects[j]);\n          }\n\n        } else {\n          allObjects[i].collideWith(allObjects[j]);\n          // return true; --is this needed?\n        }\n      }\n\n    }\n  }\n\n  return false;\n};\n\nGame.prototype.step = function() {\n  this.moveObjects();\n  this.checkCollisions();\n};\n\nGame.prototype.remove = function(obj) {\n  if (obj instanceof Asteroid) {\n    const idx = this.asteroids.indexOf(obj);\n    this.asteroids.splice(idx, 1);\n  } else if (obj instanceof Bullet) {\n    const idx = this.bullets.indexOf(obj);\n    this.bullets.splice(idx, 1);\n  }  \n};\n\nGame.prototype.allObjects = function() {\n  return this.bullets.concat(this.asteroids).concat(this.ship);\n};\n\nGame.prototype.bindKeyHandlers = function() {\n  key('w', () => this.ship.power([0, -1]));\n  key('a', () => this.ship.power([-1, 0]));\n  key('s', () => this.ship.power([0, 1]));\n  key('d', () => this.ship.power([1, 0]));\n  key('space', () => this.ship.fireBullet());\n};\n\nGame.prototype.isOutOfBounds = function(pos) {\n  if (pos[0] < 0 || pos[0] > Game.DIM_X) {\n    return true;\n  }\n\n  if (pos[1] < 0 || pos[1] > Game.DIM_Y) {\n    return true;\n  }\n\n  return false;\n};\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(ctx) {\n  this.ctx = ctx;\n  this.game = new Game();\n}\n\nGameView.prototype.start = function() {\n  this.game.bindKeyHandlers();\n  \n  for (let i = 0; i < Game.NUM_ASTEROIDS; i++) {\n    this.game.addAsteroids();\n  } \n\n  const renderAsteroids = setInterval(() => {\n    this.game.step();\n    this.game.draw(this.ctx);\n  }, 20);\n};\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\n\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", (event) => {\n  const canvas = document.getElementById(\"game-canvas\");\n  const ctx = canvas.getContext(\"2d\");\n  window.ctx = ctx;\n\n  const gameView = new GameView(ctx);\n  gameView.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options) {\n  this.pos = options.pos;\n  this.vel = options.vel;\n  this.radius = options.radius;\n  this.color = options.color;\n  this.game = options.game;\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.fillStyle = this.color;\n  ctx.beginPath();\n\n  ctx.arc(\n    this.pos[0],\n    this.pos[1],\n    this.radius,\n    0,\n    2 * Math.PI,\n    false\n  );\n\n  ctx.fill();\n};\n\nMovingObject.prototype.move = function() {\n  this.pos[0] += this.vel[0]\n  this.pos[1] += this.vel[1];\n  if (this.game.isOutOfBounds(this.pos)) {\n    if (this.isWrappable) {\n      this.pos = this.game.wrap(this.pos);\n    } else {\n      this.game.remove(this);\n    }\n  }\n};\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  // collided if distance between center points < sum of radii\n  const xDiff = (this.pos[0] - otherObject.pos[0]);\n  const yDiff = this.pos[1] - otherObject.pos[1];\n  const distance = Math.sqrt((xDiff ** 2) + (yDiff ** 2));\n\n  return distance < (this.radius + otherObject.radius);\n};\n\nMovingObject.prototype.collideWith = function(otherObject) {\n};\n\nMovingObject.prototype.isWrappable = true;\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Bullet = __webpack_require__(/*! ./bullet */ \"./src/bullet.js\");\n\nfunction Ship(options) {\n  MovingObject.call(this, {\n    pos: options.pos,\n    vel: Util.randomVec(0),\n    radius: Ship.RADIUS,\n    color: Ship.COLOR,\n    game: options.game\n  });\n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.RADIUS = 15;\nShip.COLOR = 'green';\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition();\n  this.vel = Util.randomVec(0);\n};\n\nShip.prototype.power = function(impulse) {\n  this.vel[0] += impulse[0];\n  this.vel[1] += impulse[1];\n};\n\nShip.prototype.fireBullet = function() {\n  let x, y, dx, dy;\n\n  if (this.vel[0] > 0) {\n    x = this.pos[0] + Ship.RADIUS;\n    dx = 5;\n    dy = 1;\n  } else if (this.vel[0] < 0) {\n    x = this.pos[0] - Ship.RADIUS;\n    dx = -5;\n    dy = 0;\n  }\n\n  if (this.vel[1] > 0) {\n    y = this.pos[1] + Ship.RADIUS;\n    dx = dx || 0;\n    dy = 5;\n  } else if (this.vel[1] < 0) {\n    y = this.pos[1] - Ship.RADIUS;\n    dx = dx || 0;\n    dy = -5;\n  }\n\n  console.log([dx, dy]);\n\n\n  const bullet = new Bullet({\n    pos: [x, y],\n    vel: [dx, dy],\n    game: this.game\n  });\n  this.game.add(bullet);\n};\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n  inherits(childClass, parentClass) {\n    childClass.prototype = Object.create(parentClass.prototype);\n    childClass.prototype.constructor = childClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });