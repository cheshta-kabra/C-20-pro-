var wall;
//var Car=[];
var Zenia,Tourus,Cyclap;
function setup() {
  createCanvas(1600,400);
  wall=createSprite(1500,200,60,400);
  Zenia = new Car();
  Tourus=new Car();
  Cyclap =new Car();

}

function draw() {
  background("black"); 
  Zenia.display();
  Tourus.display();
  Cyclap.display();

  Zenia.move();
  Tourus.move();
  Cyclap.move();
  
 collition(Zenia);
  drawSprites();
}
function collition(car){
       
  if(wall.x-car.x<(car.width+wall.width)/2){
          var deformation=0.5*this.weight*this.speed*this.speed/2500;
          car.velocityX=0;
      if(deformation>180){
              car.fill="red";
      }
      else if(deformation<180 && deformation>100){
          car.fill="yellow";
      }
      else if(deformation<100){
          car.fill="green";
      }
      else{
          car.fill="white"
      }
  }
}