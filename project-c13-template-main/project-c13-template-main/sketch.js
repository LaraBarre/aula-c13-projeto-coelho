var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg
var orangeL, orangeImg
var redL, redImg

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX

  drawSprites();
  createApples();
  createredL();
  createorangeL();
}

function createApples(){

  if(frameCount%80===0){
    apple= createSprite(random(50,350),40,10,10);
    apple.addImage("maça", appleImg);
    apple.scale=0.07;
    apple.velocityY=3;
  }
 }
  function createredL(){

  if(frameCount%70===0){
    redL= createSprite(random(50,350),40,10,10);
    redL.addImage("folha vermelha", redImg);
    redL.scale=0.07;
    redL.velocityY=3;
  }
}
  function createorangeL(){

  if(frameCount%78===0){
    orangeL= createSprite(random(50,350),40,10,10);
    orangeL.addImage("folha laranja", orangeImg);
    orangeL.scale=0.07;
    orangeL.velocityY=3;
    }
  }