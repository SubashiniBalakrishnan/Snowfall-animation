var bg,bgImg;
var santa,santapic;
var snowball,snowballImg;

function preload(){
  bgImg=loadImage("snow2.jpg");
  santapic=loadImage("santa.png");
  snowballImg=loadImage("snowball.png")
}
function setup() {
  createCanvas(800,400);
  santa=createSprite(400, 290, 50, 50);

}

function draw() {
  background(0);
  bg=background(bgImg); 
santa.addImage(santapic);
if(keyDown("up_arrow")){
  santa.y=santa.y-5;
}
if(keyDown("down_arrow")){
  santa.y=santa.y+5;
}
if(keyDown("left_arrow")){
  santa.x=santa.x-5;
}
if(keyDown("right_arrow")){
  santa.x=santa.x+5;
}

spawnBalls();
  drawSprites();
}

function spawnBalls(){
  if(frameCount%60===0){
    snowball=createSprite(10,10,20,20);
    snowball.velocityY=3;
    snowball.addImage(snowballImg);
    snowball.x=Math.round(random(10,700))
    snowball.scale=0.2;

  }
  }
  