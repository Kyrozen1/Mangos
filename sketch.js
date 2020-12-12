
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var mango1, mango2, mango3, mango4, mango5;
var tree, boy, boyImg, stone, chain;

function preload()
{
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	boy = createSprite(150, 620, 10, 10)
	boy.addImage(boyImg);
	boy.scale=0.12;
	//Create the Bodies Here.
	ground = new Ground(400,680,800,40);
	stone = new Stone(80, 540, 70, 70)
	chain = new Chain(stone.body, {x:80, y:524})
	mango1 = new Mango(500, 290, 10);
	Engine.run(engine);
  
}


function draw() {
  background(255);
  ground.display();
  stone.display();
  chain.display();
  mango1.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

