var car;
var speed;
var weight;
var wall;
var deformation;

function setup() {

  createCanvas(1550,750);
  car=createSprite(200, 375, 30, 30);
  wall=createSprite(1400,375,40,100);
  speed=random(55,90,120);
  car.velocityX=speed;
  weight=random(400,1500);
  car.shapeColor="blue";
  wall.shapeColor="blue";

}

function draw() {
  background(0);  
  
  fill ("red");
  textSize(30);
  text("DEFORMATION TEST",575,100);

  if(wall.x-car.x < car.width/2 + wall.width/2)
  {
    car.velocityX=0;
    deformation=(0.5*weight*speed*speed)/22500;
    
    if(deformation>180)
    {
       background("red");
       fill ("green");
       textSize(30);
       text("VERY BAD FOR PASSENGERS",575,100);
       
       text("DO NOT USE THIS CAR",580,200);
    }

    if(deformation<180 && deformation>80)
    {
       background("yellow");
       fill ("red");
       textSize(30);
       text("AVERAGE FOR PASSENGERS",575,100);
       
       text("CAN USE THIS CAR",580,200);
    }

    if(deformation<80)
    {
       background("green");
       fill ("yellow");
       textSize(30);
       text("GOOD FOR PASSENGERS",575,100);
       
       text("VERY GOOD CAR",580,200);
    }
  }

  drawSprites();
}