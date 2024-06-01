var screen = document.querySelector("canvas");
var ctx = screen.getContext("2d");
var gabi = screen.getContext("2d");

// character size
var size = 10;

// speed/FramePerSeconds
var gameSpeed = 150;

// coordinates & velocity
var x = 200;
var y = 50;
var velX = 0;
var velY = 0;

setInterval(update, gameSpeed);

function update() {
   ctx.clearRect(x, y, size, size);
   x += velX;
   y += velY;
   ctx.fillStyle = "lightblue";
   ctx.fillRect(x, y, size, size);
   
   gabi.fillStyle = "pink";
   gabi.fillRect(100, 350, size, size);
   
    //player collision with gabi
    if(x === 100 && y === 350) {
        velX = 0;
        velY = 0;
        location.href = "page2.html";
    }
    
    //player wall collision
    if(x >= 310 || x <=  0) {
        velX = 0;
    }
    
    if(y <= 0 || y >= 390) {
        velY = 0;
    }
}

function up() {
    velY = -1*10;
    velX = 0;
}

function down() {
    velY = 1*10;
    velX = 0;
}

function right() {
    velY = 0;
    velX = 1*10;
}

function left() {
    velY = 0;
    velX = -1*10;
}

function stop() {
    velX = 0;
    velY = 0;
}