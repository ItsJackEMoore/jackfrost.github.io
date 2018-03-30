// game.js for Perlenspiel 3.2

// The "use strict" directive in the following line is important. Don't alter or remove it!
"use strict";

// The following comment lines are for JSLint/JSHint. Don't alter or remove them!

/*jslint nomen: true, white: true */
/*global PS */

/*
This is a template for creating new Perlenspiel games.
All event-handling functions are commented out by default.
Uncomment and add code to the event handlers required by your project.
*/

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
[system] = an object containing engine and platform information; see API documentation for details.
[options] = an object with optional parameters; see API documentation for details.
*/

// Uncomment the following BLOCK to expose PS.init() event handler:
var ball = {
    myX: 5,
    myY: 5,
    myM: 0

};
var timer ={
	count : 0,
    touchedWall: false,

	time:function(){
		PS.debug(timer.count);
		timer.count += 1;
		if(ball.myM == 0 || ball.myM == 1){
		    if(timer.count % 2 == 0){
		        redraw();
            }
        }
        else if(ball.myM == 2){
		    if(timer.count % 1 == 0){
		        redraw();
            }

        }
        else{
		    if(timer.count % .5 == 0){
		        redraw();
            }
        }


	}
};
function redraw()
{
    var changeDir = false;
    var moveCount = 0;
    PS.statusText(ball.myM);

    if(ball.myM == 0 && ball.myY < 7) {
        PS.color(ball.myX, ball.myY, PS.COLOR_WHITE);
        ball.myY = ball.myY + 1;
        PS.color(ball.myX, ball.myY, PS.COLOR_BLACK);
    }
    else if(ball.myM == 1) {
        if(mousePos.mouseX <= 7 && mousePos.mouseX > 5){
            PS.statusText("enter");
            PS.color(ball.myX,ball.myY,PS.COLOR_WHITE);
            ball.myY = ball.myY - 1;
            ball.myX = ball.myX - 1;
            PS.color(ball.myX,ball.myY,PS.COLOR_BLACK);
            if(ball.myX == 0 || ball.myY == 0){
                ball.myM--
            }
        }
        else if(mousePos.myX <= 9 && mousePos.myX > 7){
            //interaction
        }
        else if(mousePos.myX == 10){
            //interaction
        }
        else if(mousePos.mouseX >= 4  && mousePos.mouseX < 5){
            //interaction
        }
        else if(mousePos.mouseX >= 1 && mousePos.myX < 4){
            //interaction
        }
        else if(mousePos.mouseX == 0){
            //interaction
        }
    }
    else if(ball.myM == 2){
        if(mousePos.mouseX <= 7 && mousePos.mouseX > 5){
            //interaction
        }
        else if(mousePos.mouseX <= 9 && mousePos.mouseX > 7){
            //interaction
        }
        else if(mousePos.mouseX == 10){
            //interaction
        }
        else if(mousePos.mouseX >= 4  && mousePos < 5){
            //interaction
        }
        else if(mousePos.mouseX >= 1 && mousePos < 4){
            //interaction
        }
        else if(mousePos.mouseX == 0){
            //interaction
        }
    }
    else if(ball.myM == 3){
        if(mousePos.mouseX <= 7 && mousePos.mouseX > 5){
            //interaction
        }
        else if(mousePos.mouseX <= 9 && mousePos.mouseX > 7){
            //interaction
        }
        else if(mousePos.mouseX == 10){
            //interaction
        }
        else if(mousePos.mouseX >= 4  && mousePos.mouseX < 5){
            //interaction
        }
        else if(mousePos.mouseX >= 1 && mousePos.mouseX < 4){
            //interaction
        }
        else if(mousePos.mouseX == 0){
            //interaction
        }
    }
}

var mousePos = {
    mouseX: 0,
    mouseY: 0,
    touched: false
};


PS.init = function( system, options ) {
	// Uncomment the following code line to verify operation:
	 PS.debug( "PS.init() called\n" );

	 PS.gridSize( 11, 11);
	 PS.gridColor( 0x4468a3 );
	 PS.borderColor(PS.ALL,PS.ALL,PS.COLOR_BLUE);

	 PS.statusText( "Ball" );

	 PS.color(ball.myX,ball.myY,PS.COLOR_BLACK);
	 PS.timerStart(5,timer.time);


	// Add any other initialization code you need here.
};

function changeMomentum(x,y){
    if(y < 7 && y > 7){

    }
    else if(y == 8){
        ball.myM = 1;

    }
    else if(y == 9){
        ball.myM = 2;
    }
    else if(y==10){
        ball.myM = 3;
    }
}

PS.touch = function(x ,y,data,options){
    if(x == ball.myX && y == ball.myY)
    {
        mousePos.touched = true;

    }


};
PS.release = function(x,y,data,options){
    if(mousePos.touched == true){
        mousePos.mouseX = x;
        mousePos.mouseY = y;
        changeMomentum(mousePos.mouseX, mousePos.mouseY);
        mousePos.touched = false;
    }
};





