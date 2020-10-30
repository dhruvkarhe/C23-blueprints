const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var myEngine,myWorld,box1,box2,ground;

function setup() {
  createCanvas(800,800);

  myEngine = Engine.create();
  myWorld = myEngine.world;
  
  box1=new Box(400,400,60,60);
  box2=new Box(425,300,50,50);
  ground=new Ground(400,800,780,20)
}

function draw() {
  background(0); 
  Engine.update(myEngine);
  box1.display();
  box2.display();
  ground.display();
}




