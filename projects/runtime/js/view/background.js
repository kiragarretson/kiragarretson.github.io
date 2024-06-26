var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];

        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, groundY,'#516f61');
            background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
             for(var stars = 0; stars < 100; stars++){
                var circle = draw.circle(10, "#d7fceb", "#a3eecb", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }
            

            for (var i = 0; i < 11; i++) {
                var buildingHeight = 500 * Math.random();
                var building = draw.rect(50, buildingHeight, "#286247", "#10402a", 3); // creates a single building
                building.x = 600 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building); // adds building as part of the background
                buildings.push(building); // saves data to the array
            }
            var moon = draw.bitmap("img/moon (1).png"); // holds image of moon 
            moon.x = canvasWidth - 350; // creates x value
            moon.y = groundY - 450; // creates y value
            moon.scaleX = .5;
            moon.scaleY = .5;
            background.addChild(moon);

            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var buildingColors = [];
            for (var i = 0; i < 5; i++) {
                var buildingHeight = 500 * Math.random();
                var building = draw.rect(75, buildingHeight, "#579779", "#33684f", 3); // creates a single building
                building.x = 200 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building); // adds building as part of the background
                buildings.push(building); // saves data to the array
            }

            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png"); // imports image of tree
            tree.x = canvasWidth - 400;
            tree.y = groundY- 230;
            background.addChild(tree); // adds tree as part of the background
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x = tree.x - 5; // dictates tree speed
            if (tree.x < -200) { // loops the tree 
                tree.x = canvasWidth; // places tree in its spot
            }
                        
            // TODO 4: Part 2 - Parallax
            for(var i = 0; i < buildings.length; i++){
                var building = buildings[i];
                building.x = building.x - 2;
                    if (building.x < -200){
                        building.x = canvasWidth;
                }
            }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
