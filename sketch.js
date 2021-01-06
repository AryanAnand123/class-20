function setup() {
  createCanvas(800,400);
  
fx=createSprite (200,200,50,50);
mvr=createSprite (400,200,50,50);
fx.shapeColor="green"
mvr.shapeColor="green"
}

function draw() {
  background(0);  
  mvr.x=mouseX;
  mvr.y=mouseY;
  if(mvr.x-fx.x<fx.width/2+mvr.width/2 &&
    fx.x-mvr.x<fx.width/2+mvr.width/2 &&
    mvr.y-fx.y<fx.height/2+mvr.height/2 &&
    fx.y-mvr.y<fx.height/2+mvr.height/2){
    fx.shapeColor="red";
    mvr.shapeColor="red";
  }
  else{
    fx.shapeColor="green"
    mvr.shapeColor="green"
  }
  drawSprites();
}