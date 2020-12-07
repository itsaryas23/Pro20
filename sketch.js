
var car, wall;
var speed, weight;
var a,b,c,d;
var deformation;



function setup() {

  
  createCanvas(1600,400);


  speed=random(55,90);
  weight=random(400,1500);
  
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1200,200,50,200);
  car.velocityX = speed;
  
  

  

 

}

function draw() {
  background(0,0,0);  


 if(isTouching(car,wall)){
   car.x = 1180;
   car.velocityX=0;
 }

  
 if(deformation>=180) {
  car.shapeColor = "red";
}

if(deformation<100) {
  car.shapeColor = "green";
}

if(deformation<80) {
  car.shapeColor = "yellow";
}
 

  drawSprites();
}