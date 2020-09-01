
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
  createCanvas(400, 400);
  
  //creating trex
  monkey = createSprite(100,300,20,50);
  monkey.addAnimation("running", monkey_running);
  // trex.addAnimation("collided",trex_collided)
  monkey.scale = 0.1;
  
  //creating ground
  ground = createSprite(100,300,1000,20);
  
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(100,300,400,10);
  invisibleGround.visible = false;
  
  //add initial value to score
  score=0;  
  
}

function draw() {
  background(180);
  
  //display and increase score
  stroke("black");
  textSize(20);
  fill("black");
  text("SURVIVAL TIME="+score,100,100);
  score=score+Math.round(getFrameRate()/60);
  
  //making trex jump
  if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
  //adding gravity to trex
  monkey.velocityY = monkey.velocityY + 0.8
  
  //making ground move continously
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //making trex collide with invisible ground
  monkey.collide(invisibleGround);
  
  //spawn the clouds
  spawnBanana();
  spawnObstacles();
  drawSprites();
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600,320,40,10);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(200,200))
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
    //assigning lifetime to the variable
    banana.lifetime = -1;
    
    //adjust the depth
    banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
    }
}

    //spawn obstacles
function spawnObstacles(){
  if (frameCount % 300 === 0) {
    obstacle = createSprite(400,280,40,10);
    obstacle.addImage(obstacleImage)
    obstacle.y = Math.round(random(275,275))
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;   
  
  }
}
