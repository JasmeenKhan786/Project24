
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,600,800,20);
	ball = new Paper(200,200,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  ball.display();

  textSize(30);
  text("X:"+mouseX+" Y:"+mouseY,200,20);
 
}

function keyPressed(){
	if(){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:-30,y:40})
	}
}

