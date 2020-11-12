class Game {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
   
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,300)
    car4=createSprite(700,300)
    
    cars=[car1,car2,car3,car4]
    car1.addImage(car1i)
    car2.addImage(car2i)
    car3.addImage(car3i)
    car4.addImage(car4i)
    
  }

  play(){
  
    form.hide();
 
 
    Player.getPlayerInfo();
    
    if(allPlayers !== undefined){
      background(track2)
    
    
      image(tracki, 0,-displayHeight*5,displayWidth,displayHeight*6)
     
   
     
     var x=170
     var y;
     var index=0;
     for(var plr in allPlayers){
       index=index+1
       x=x+200
       y=displayHeight-allPlayers[plr].distance
       cars[index-1].x=x
       cars[index-1].y=y
       if(index=== player.index){
         fill("red")
         ellipse(x,y,150,150)
        cars[index-1].shapeColor="red"
        camera.position.x=displayWidth/2
      
    camera.position.y=cars[index-1].y
      }
     }
    }

    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=50
      player.update();
    }
    if(player.distance>5250){
      gameState=2
    }
   
    drawSprites()
  }
  end(){
   // text("Game Over",displayWidth/2,displayHeight/2)
   console.log("game over")
  }
  }
