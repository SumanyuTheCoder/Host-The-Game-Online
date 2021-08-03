
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var Ground,GroundImage;
var Line;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  GroundImage = loadImage("Screenshot (66).png");

}



function setup() {
    
  Ground = createSprite(200,130)
  Ground.addImage(GroundImage)
  Ground.x = Ground.width /2;
  Ground.velocityX = -4
  Ground.scale = 1.3
  
  monkey = createSprite(100,300)
  monkey.addAnimation("running",monkey_running)
  monkey.scale = 0.1;

  
  Line = createSprite(200,335,400,10);
  Line.visible = false;
}


function draw() {
  background("white")
drawSprites();
  createBanana();
  createObstacle();
  
  

    if (Ground.x < 0){
      Ground.x = Ground.width/2;
    }
  
  if(keyDown("space") && monkey.y >= 200) {
      monkey.velocityY = -12;
    }
  
    monkey.velocityY = monkey.velocityY + 0.8

        monkey.collide(Line);

  
}
function createBanana(){
    if (frameCount % 120 === 0) {
    var   banana = createSprite(420);
    banana.y = Math.round(random(150,200));
     banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
  
    }
}

function createObstacle(){
    if (frameCount % 90=== 0) {
    var   obstacle = createSprite(420);
    obstacle.y = Math.round(random(292,292));
     obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.2;
  
    }
}


