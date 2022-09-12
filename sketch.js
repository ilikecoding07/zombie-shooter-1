var bg,bgImg;
var player, shooterImg, shooter_shooting;
var firing,firingSound


function preload(){
  
  shooterImg = loadImage("assets/shooter_1.png")
  shooter_shooting = loadImage("assets/shooter_3.png")

  bgImg = loadImage("assets/bg.jpeg")

  firing = loadSound("assets/firing.mp3")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

//creating the player sprite
   player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
   player.addImage(shooterImg)
   player.scale = 1.3
 
    player.debug = true
    // player.debug = false
    // player.Debug =false
    // Player.debug = true

  //player.Collider("rectagle",0,0,300,300)
  //player.setcollider("rectangle",0,0)
   player.setCollider("rectangle",0,0,100,100)
  // player.Setcollider("rectangle",0,0,300,300)

}

function draw() {
  background(0); 




  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-20
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+20
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 firing.play()
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyDown("space")){
  // player.addImage( shooter_shooting )
  // player.addImage()
  player.addImage(shooterImg)
  // player.addImage(shooter_1.png)

}

drawSprites();

}
