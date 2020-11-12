var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var car1,car2,car3,car4;
var cars
var form, player, game;
var car1i,car2i,car3i,car4i,groundi,tracki,track2;



function preload(){
  tracki=loadImage("images/track.jpg")
  track2=loadImage("images/track.png")
car1i=loadImage("images/car1.png")
car2i=loadImage("images/car2.png")
car3i=loadImage("images/car3.png")
car4i=loadImage("images/car4.png")
groundi=loadImage("images/ground.png")
}

function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    
    game.end();
  }
  //drawSprites()
}
 

 
 

