var ctx = document.getElementById("game").getContext("2d");

var x = 100;
var y = 50;
var ground = 80;

function drawGame(){
    ctx.clearRect(0,0,200,100);
    ctx.fillRect(0,ground,200,100-ground);
    ctx.fillRect(x,y,10,10);
    ctx.fillText("x="+ x + "  y="+y,2,10)
}

window.onkeydown = keydown;

function keydown(e) {
    var c = e.keyCode;
    console.log(c);
    // Hitting left arrow
    if(c == 37) {
        x-=6;
    // Hitting up arrow
    } else if(c == 38){
        y-=6;
    // Hitting right arrow
    } else if(c == 39){
        x+=6;
    // Hitting down arrow
    } else if(c == 40){
        y+=6;
    }
    // Prevent scrolling
    if(c >= 37 && c <= 40){
        e.preventDefault();
    }
    drawGame();
}

function moveThings(){
    //If higher than the ground
    if(y + 10 < ground){
        y++;
    }
    
    //Make sure the square is above ground
    y = Math.min(ground -10, y);
    // Keep x between 0 and 200, moving around-the-world
    if(x > 200) 
        x -= 200;
    if(x < 0)
        x += 200;
    if(y < 0)
        y = 0;
}

setInterval(function(){
    moveThings();
    drawGame();
}, 20);
