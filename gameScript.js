alert("Mission: Help Yuchi cross the road");
alert("Blue: Yuchi | Red: Birds | Gray: Door | Pink: Gabi")

var screen = document.querySelector("canvas");
var ctx = screen.getContext("2d");
var car = screen.getContext("2d");
var car1 = screen.getContext("2d");
var car2 = screen.getContext("2d");
var door = screen.getContext("2d");

// character size
var size = 10;

// speed/FramePerSeconds
var gameSpeed = 50;

// coordinates & velocity
var x = 200;
var y = 50;
var velX = 0;
var velY = 0;

// cars
var carx = 0;
var cary = 200;
var carvelX = 1*10;

var carx1 = 150;
var cary1 = 250;
var carvelX1 = 1*10;

var carx2 = 70;
var cary2 = 270;
var carvelX2 = 1*10;

setInterval(update, gameSpeed);

function update() {
   ctx.clearRect(x, y, size, size);
   x += velX;
   y += velY;
   ctx.fillStyle = "lightblue";
   ctx.fillRect(x, y, size, size);
   
   car.clearRect(carx, cary, size, size);
   carx += carvelX;
   car.fillStyle = "red";
   car.fillRect(carx, cary, size, size);
   
   car1.clearRect(carx1, cary1, size, size);
   carx1 += carvelX1;
   car1.fillStyle = "red";
   car1.fillRect(carx1, cary1, size, size);
   
   car2.clearRect(carx2, cary2, size, size);
   carx2 += carvelX2;
   car2.fillStyle = "red";
   car2.fillRect(carx2, cary2, size, size);
   
   door.fillStyle = "gray";
   door.fillRect(100, 350, size, size);
   
   //cars collisions to walls  
   if(carx >= 310) {
        carvelX = -1*10;
    }
    
    if(carx === 0) {
        carvelX = 1*10;
    }
    
    if(x === carx && y === cary) {
        alert("Game over! deds si yuchi");
        location.reload();
    }
    /////////
    if(carx1 >= 310) {
        carvelX1 = -1*10;
    }
    
    if(carx1 === 0) {
        carvelX1 = 1*10;
    }
    
    if(x === carx1 && y === cary1) {
        alert("Game over! deds si yuchi");
        location.reload();
    }
    ////////
    if(carx2 >= 310) {
        carvelX2 = -1*10;
    }
    
    if(carx2 === 0) {
        carvelX2 = 1*10;
    }
    
    if(x === carx2 && y === cary2) {
        alert("Game over! deds si yuchi");
        location.reload();
    }
    
    //player collision with door
    if(x === 100 && y === 350) {
        velX = 0;
        velY = 0;
        location.href = "game2.html";
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
