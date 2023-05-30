
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var rightside,leftside
function preload()
{
	
}

function setup() {
	createCanvas(1250, 1500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_option={
		isStatic:false ,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball = Bodies.circle(200,100,20,ball_option)
	World.add(world,ball)

	ground = new Ground (x,y,1250,600)
	leftside = new Ground (1100,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  
  drawSprites();
 
}



