var bullet;
var wall;
var speed;
var weight;
var thickness;
var bulletLeftEdge;
var bulletRightEdge;
var lbullet , lwall;







function setup() {
  createCanvas(1600,400);
  
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50,200,20,20);
  bullet.velocityX=speed;
  bullet.shapeColor=("black");
  wall=createSprite(1200,200,thickness,height/2);
}


function draw() {
  background("white");  
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
  if(damage>10){
    wall.shapeColor="red";
  }
  if(damage<10){
    wall.shapeColor="green"
  }
  

}


  

drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +lbullet.width;
  wallLeftEdge=lwall.x
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}