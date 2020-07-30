// var 
var ball;


function setup(){  
   // to add the dtabase 
    database = firebase.database() 
    //create frame
    createCanvas(500,500); 
    // create a sprite and give it colour 
    ball = createSprite(250,250,10,10); 
    ball.shapeColor = "red" ;  
    // to add x and y value to read the values continuesly from database 
    ball_position= database.ref('ball/position'); 
    ball_position.on("value",readposition)
}

function draw(){  
    // background colour 
    background("white");  
    // to move the ball
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    } 
    // to display the sprites 
    drawSprites();
}
// to display change in both slides 
function changePosition(x,y){
   database.ref('ball/position').set({
       x:position.x+x,
       y:position.y+y
   })
}  
//to read, svae and show the same position on the other side 
function readposition(data){ 
    position = data.val(); 
    ball.x= position.x ;
    ball.y = position.y ; 

}
