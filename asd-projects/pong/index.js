/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const BOARD_WIDTH = $("#board").width();
  const BOARD_HEIGHT = $("#board").height();
  
  // Game Item Objects
  function gameItem(id, speedX, speedY){
    var obj = {
      id: id,
      xPos: parseFloat($(id).css("left")),
      yPos: parseFloat($(id).css("top")),
      speedX: speedX,
      speedY: speedY,
      W: $(id).width(),
      H: $(id).height(),
    }
    return obj;
  };
  
  var leftPaddle = gameItem("#leftPaddle", 0, 0);
  var rightPaddle = gameItem("#rightPaddle", 0, 0);
  var ball = gameItem("#ball", (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1), (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -3 : 1));

  // keycode setup
  const KEY = {
    W: 87,
    S: 83,
    UP: 38,
    DOWN: 40,
  }

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp);    
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    drawGameItem(leftPaddle);
    moveGameItem(leftPaddle);
    drawGameItem(rightPaddle);
    moveGameItem(rightPaddle);
    drawGameItem(ball);
    moveGameItem(ball);
    doCollide(leftPaddle);
    doCollide(rightPaddle);
    doCollide(ball);

  }
  
  /* 
  Called in response to events.
  */



  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

   // movement helpers
   function drawGameItem(obj){
    $(obj.id).css("left", obj.xPos);
    $(obj.id).css("top", obj.yPos);
   };

   function moveGameItem(obj){
    obj.xPos += obj.speedX
    obj.yPos += obj.speedY
   };

   function handleKeyDown(event) {

    if(event.which === KEY.W){
      leftPaddle.speedY = -5;
    }

    if(event.which === KEY.S){
      leftPaddle.speedY = +5;
    }

    if(event.which === KEY.UP){
      rightPaddle.speedY = -5;
    }

    if(event.which === KEY.DOWN){
      rightPaddle.speedY = +5;
    }

  };

  function handleKeyUp(event){
    if(event.which === KEY.W || event.which === KEY.S){
      leftPaddle.speedY = 0;
    }
    if(event.which === KEY.UP || event.which === KEY.DOWN){
      rightPaddle.speedY = 0;
    }
  }

  // handle paddle on wall collision
  // handle paddle on ball collision
  // handle ball on wall collision
  // handle win scenario
  // handle the point tally
  // handle game reset
  function doCollide(obj1, obj2) {
    // TODO: calculate and store the remaining
    // sides of the left paddle
    obj1.leftX = obj1.xPos;
    obj1.topY =  obj1.yPos;
    obj1.rightX =  obj1.xPos + obj1.width;
    obj1.bottomY =  obj1.yPos + obj1.height;

    // TODO: Do the same for right paddle
    obj2.leftX = obj2.xPos;
    obj2.topY = obj2.yPos;
    obj2.rightX = obj2.xPos + obj2.width;
    obj2.bottomY = obj2.yPos + obj2.height;

    // TODO: Return true if they are overlapping, false otherwise
	if(obj2.rightX > obj1.leftX &&
       obj2.leftX < obj1.rightX &&
       obj2.bottomY > obj1.topY){
      return true;
    }
	else {
      return false;
    }
}


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
