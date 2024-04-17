var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 120, moveX: -70, moveY: -90, image: "img/inksplat.png",  damage: -30, scaleX: .80, scaleY: .80 },
          { type: "obstacle", x: 600, y: groundY - 120, moveX: -70, moveY: -90, image: "img/inksplat.png",  damage: -30, scaleX: .80, scaleY: .80 },
          { type: "obstacle", x: 900, y: groundY - 120, moveX: -70, moveY: -90, image: "img/inksplat.png",  damage: -30, scaleX: .80, scaleY: .80 },
          { type: "enemy", x: 600, y: groundY - 20, image: "img/02_cowardly_maya.png", moveX: -75, moveY: -100, velocity: -3, scaleX: .70, scaleY: .70, damage: -10, points: 200},
          { type: "enemy2", x: 800, y: groundY - 20, image: "img/24_indolent_maya.png", moveX: -75, moveY: -100, velocity: -3, scaleX: 1, scaleY: 1, damage: -10, points: 200},
          { type: "enemy3", x: 1500, y: groundY - 20, image: "img/31_insidious_maya.png", moveX: -75, moveY: -100, velocity: -3, scaleX: 1, scaleY: 1, damage: -10, points: 300},
          { type: "reward", x: 600, y: groundY - 50, image: "img/sparklesprite.png", moveX: -75, moveY: -100, velocity: -3, scaleX: 1, scaleY: 1,  points: 100},
          { type: "reward", x: 600, y: groundY - 50, image: "img/sparklesprite.png", moveX: -75, moveY: -100, velocity: -3, scaleX: 1, scaleY: 1,  points: 100},
          { type: "reward", x: 600, y: groundY - 50, image: "img/sparklesprite.png", moveX: -75, moveY: -100, velocity: -3, scaleX: 1, scaleY: 1,  points: 100},
          { type: "marker", x: 1500, y: groundY - 25, moveX: -70, moveY: -90, image: "img/lensflare.webp",  velocity: -3, scaleX: .80, scaleY: .80, points: 100}, 
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY - 120, moveX: -70, moveY: -90, image: "img/inksplat.png",  damage: -30, scaleX: .80, scaleY: .80 },
          { type: "obstacle", x: 600, y: groundY - 120, moveX: -70, moveY: -90, image: "img/inksplat.png",  damage: -30, scaleX: .80, scaleY: .80 },
          { type: "obstacle", x: 900, y: groundY - 120, moveX: -70, moveY: -90, image: "img/inksplat.png",  damage: -30, scaleX: .80, scaleY: .80 },
          { type: "enemy", x: 600, y: groundY - 20, image: "img/02_cowardly_maya.png", moveX: -75, moveY: -100, velocity: -3, scaleX: .50, scaleY: .50, damage: -10, points: 50},
          { type: "enemy2", x: 800, y: groundY - 20, image: "img/24_indolent_maya.png", moveX: -75, moveY: -100, velocity: -3, scaleX: 0.25, scaleY: 0.25, damage: -10, points: 50},
          { type: "enemy3", x: 1500, y: groundY - 20, image: "img/31_insidious_maya.png", moveX: -75, moveY: -100, velocity: -3, scaleX: 0.10, scaleY: 0.10, damage: -10, points: 200},
          { type: "reward", x: 600, y: groundY - 50, image: "img/sparklesprite.png", moveX: -75, moveY: -100, velocity: -3, scaleX: 1, scaleY: 1,  points: 100},
          { type: "reward", x: 600, y: groundY - 50, image: "img/sparklesprite.png", moveX: -75, moveY: -100, velocity: -3, scaleX: 1, scaleY: 1,  points: 100},
          { type: "reward", x: 600, y: groundY - 50, image: "img/sparklesprite.png", moveX: -75, moveY: -100, velocity: -3, scaleX: 1, scaleY: 1,  points: 100},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
