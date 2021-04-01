var bullet , wall
var speed , weight;
var thickness


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  
  weight = random(30,52);

  thickness = random(22,83)

  bullet=createSprite(100, 200, 30, 10);
  bullet.velocityX=speed
  bullet.shapeColor=color(250)
  

  wall=createSprite(1000, 200, thickness,height/2);
  wall.shapeColor=color("grey")
 
 
}

function draw() {
  background("black");  


if(hasCollided(bullet,wall)){
bullet.velocityX= 0 ;

var damage = 0.5 * weight * speed * speed/thickness * thickness * thickness


 if(damage>=10){
   wall.shapeColor=color("red")
 }
 if(damage<10){
  wall.shapeColor=color("green")
}
}




drawSprites();
}

function hasCollided(lbullet,lwall){


   bulletRightEdge = lbullet.x + lbullet.width;
   wallLeftEdge = lwall.x;

  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
return false;
}