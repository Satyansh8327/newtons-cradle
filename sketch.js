
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(100,600)
	bob2=new Bob(300,400)
	bob3=new Bob(500,400)
	bob4=new Bob(200,400)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
}



