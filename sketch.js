var ship,  shipImage;
var sea, seaImage;



function preload(){
shipImage = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png")
}

function setup(){
 createCanvas(1300,600);

 

sea = createSprite(650,200,20,20);
sea.addImage(seaImage)
sea.scale = 0.6
sea.velocityX = -10
sea.x = 650

ship = createSprite(50,200,20,20);
ship.addAnimation("sailing", shipImage);
ship.scale = 0.5
ship.x = 650

}



function draw() {
  background("skyblue");
  
 if (sea.x<0) {
   sea.x = 650
 }
 
 
 
 
 
 
 
  drawSprites();
}