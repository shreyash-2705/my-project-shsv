var  rect1,rect2;
var  rect3,rect4;
var  rect5,rect6;

function setup() {
  createCanvas(800,400);
 rect1= createSprite(400, 200, 50, 50);
rect1.shapeColor='red';

rect2=createSprite(100,200,50,50);
rect2.shapeColor='black';
rect2.velocityX=3;

rect3= createSprite(500, 200, 50, 50);
rect3.shapeColor='red';
rect3.velocityX=-3;
rect4= createSprite(600, 200, 50, 50);
rect4.shapeColor='black';

rect5= createSprite(300, 100, 50, 50);
rect5.shapeColor='red';
rect5.velocityY=3;

rect6= createSprite(300, 300, 50, 50);
rect6.shapeColor='black';
rect6.velocityY=-3;

}

function draw() {
  background(220,100,0);
  rect1.x=mouseX;
  rect1.y=mouseY ;
  console.log(rect2.x-rect1.x);
  touch(rect1,rect2);
  
touch(rect1,rect3);
touch(rect1,rect4);
bounceOff(rect5,rect6);
bounceOff(rect2,rect3);
  drawSprites();
}







 






