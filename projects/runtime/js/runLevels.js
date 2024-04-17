var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createObstacle(x, y, moveX, moveY, image, damage, scaleX, scaleY){
      var hitZoneSize = 25;
      var damageFromObstacle = damage;
      var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      obstacleHitZone.x = x;
      obstacleHitZone.y = y;
      game.addGameItem(obstacleHitZone);
      var obstacleImage = draw.bitmap(image);
      obstacleHitZone.addChild(obstacleImage);
      obstacleImage.x = moveX;
      obstacleImage.y = moveY;
      obstacleImage.scaleX = scaleX;
      obstacleImage.scaleY = scaleY;
    }
    
    function createEnemy(x, y, image, moveX, moveY, velocity, scaleX, scaleY, damage, points) {
      var enemy = game.createGameItem("enemy", 25);
      var shadow = draw.bitmap(image);
      shadow.x = moveX;
      shadow.y = moveY;
      enemy.addChild(shadow);
      enemy.x = x;
      enemy.y = y;
      game.addGameItem(enemy);
      enemy.velocityX = velocity;
      shadow.scaleX = scaleX;
      shadow.scaleY = scaleY;

      enemy.onPlayerCollision = function (){
        game.changeIntegrity(damage);
      };

      enemy.onProjectileCollision = function (){
        game.increaseScore(points); // increases player score
        enemy.fadeOut(); // causes image of enemy and hitbox to disappear (could also do enemy.shrink or enemy.flyto(x, y))
      };
    }

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel];
      var levelObjects = level.gameItems;

      for(i = 0; i < levelObjects.length; i++){
         var element = levelObjects[i];

      if(element.type === "obstacle"){
          createObstacle(element.x, element.y, element.moveX, element.moveY, element.image, element.damage, element.scaleX, element.scaleY)
      }
      if(element.type === "enemy"){
        createEnemy(element.x, element.y, element.image, element.moveX, element.moveY, element.velocity, element.scaleX, element.scaleY, element.damage, element.points)
      }
      if(element.type === "enemy2"){
        createEnemy(element.x, element.y, element.image, element.moveX, element.moveY, element.velocity, element.scaleX, element.scaleY, element.damage, element.points)
      }
      if(element.type === "enemy3"){
        createEnemy(element.x, element.y, element.image, element.moveX, element.moveY, element.velocity, element.scaleX, element.scaleY, element.damage, element.points)
      }
      if(element.type === "reward"){
        createReward(element.x, y, element.image, element.scaleX, element.scaleY, element.velocity, element.points)
      }
      if(element.type === "marker"){
        createMarker(element.x, element.y, element.moveX, element.moveY, element.image, element.velocity, element.scaleX, element.scaleY, element.points)
      }
    }
    
      function createMarker(x, y, moveX, moveY, image, velocity, scaleX, scaleY, points) {
        // all code from TODO 11 and 12
        var marker = game.createGameItem("marker", 25);
        var candy = draw.bitmap(image);
        candy.x = moveX;
        candy.y = moveY;
        marker.addChild(candy);
        marker.x = x;
        marker.y = y;
        game.addGameItem(marker);
        marker.velocityX = velocity;
        marker.scaleX = scaleX;
        marker.scaleY = scaleY;
  
        marker.onPlayerCollision = function (){
          game.increasePoints(points)
          startLevel();
        };
      }

      createMarker(1500, groundY - 25);

      function createReward(x, y, image, scaleX, scaleY, velocity, points) {
        // all code from TODO 10 and 11
        var reward = game.createGameItem("reward", 25);
        var sparkle = draw.bitmap(image);
        sparkle.x = -90; // change to 900 at some point
        sparkle.y = -90;
        reward.addChild(sparkle);
        reward.x = x;
        reward.y = y;
        rewardImage.scaleX = scaleX;
        rewardImage.scaleY = scaleY;
        game.addGameItem(reward);
        reward.velocityX = velocity;
  
        reward.onPlayerCollision = function (){
          game.increasePoints(points);
        };
      }
      createReward(570, groundY - 115);
      createReward(765, groundY - 115);
      createReward(970, groundY - 115);
      
      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
