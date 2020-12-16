


var wall;
var speed;
var car;
var waight;

function setup() {
  createCanvas(800,400);
  wall=createSprite(700, 200, 50, 300);
  
  speed=random(55,90)

  weight=random(50,180)

  car=createSprite(50,200,40,40)
  car.velocityX = speed;

}

function draw() {
  background(255,255,255);

    if(col(car, wall)){
    //car.shapeColor = "purple";
    //wall.shapeColor = "red";
    car.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22509
    if(deformation>180){

      car.shapeColor="green";

    }
    if(deformation<180 && deformation>100){

      car.shapeColor="yellow";

    }
    if(deformation<100){

      car.shapeColor="red";

    }
  }
  

    drawSprites();
  }

  //collision detection program
  function col(car, wall){
      //DETECTING COLLISION
      if (car.x - wall.x < wall.width/2 + car.width/2
        && wall.x - car.x < wall.width/2 + car.width/2
        && car.y - wall.y < wall.height/2 + car.height/2
        && wall.y - car.y < wall.height/2 + car.height/2) {
      
          return true;
      }
      else {
          return false;
      }
  }
    