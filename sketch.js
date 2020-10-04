// created the constant variables
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

// created the variables
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1400, 600);

// created the engine and the world 
	engine = Engine.create();
	world = engine.world;

// created the roof
	roof =new Roof(700,150,246,20);

// created the different bobs
	bob1 = new Bob(600,400,25);
	bob2 = new Bob(650,400,25);
	bob3 = new Bob(700,400,25);
	bob4 = new Bob(750,400,25);
	bob5 = new Bob(800,400,25);

// created the ropes
	rope1 = new Rope(bob1.body, 600, 155);
	rope2 = new Rope(bob2.body, 650, 155);
	rope3 = new Rope(bob3.body, 700, 155);
	rope4 = new Rope(bob4.body, 750, 155);
	rope5 = new Rope(bob5.body, 800, 155);

	Engine.run(engine);
}

function draw() {
  background(246,172,0);

// displaying the ropes
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

// displaying the bobs 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
// displaying the roof 
  roof.display();
  
  drawSprites();
}

// creating the function keyPressed
function keyPressed(){
	if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-7,y:-1});
    }

}
  


