var path,truck;
var object1,object2,object3;
var dustbin1,dustbin2,dustbin3;
var pathImg,truckimg,stoneimg,plantimg;
var ob1img,ob2img,ob3img

var gameOverImg,cycleBell;
var waste1,waste2,waste3
var dustbin1img,dustbin2img,dustbin3img
var ob1G, ob2G,ob3G,stoneGroup,plantGroup; 

var END =0;
var PLAY =1;
var gameState = PLAY;

var distance=0;
var gameOver, restart;



function setup(){
  
createCanvas(1200,300);
// Moving background
path=createSprite(100,150);

path.velocityX = -5;

//creating boy running
truck  = createSprite(70,150);
truck.scale=0.07;
  
gameOver = createSprite(650,150);

gameOver.scale = 0.8;
gameOver.visible = false;  
  
ob1G = new Group();
ob2G = new Group();
ob3G = new Group();
stoneGroup = new Group();
plantGroup = new Group();
  
}

function draw() {
  background(0);
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Distance: "+ distance,900,30);
  

    
   distance = distance + Math.round(getFrameRate()/50);
   path.velocityX = -(6 + 2*distance/150);
  
   truck.y = World.mouseY;
  
   edges= createEdgeSprites();
   truck .collide(edges);
  
  //code to reset the background
  if(path.x < 0 ){
    path.x = width/2;
  }
  
  
}