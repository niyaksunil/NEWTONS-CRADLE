
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1400, 600);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	roof =new Roof(700,150,246,20);
	
	bob1 = new Bob(600,400,25);
	bob2 = new Bob(650,400,25);
	bob3 = new Bob(700,400,25);
	bob4 = new Bob(750,400,25);
	bob5 = new Bob(800,400,25);
	
	// rope1 = new Rope(bob1.body,roof.body, 248, 150);
	// rope2 = new Rope(bob2.body,roof.body, 298, 150);
	// rope3 = new Rope(bob3.body,roof.body, 348, 150);
	// rope4 = new Rope(bob4.body,roof.body, 398, 150);
	// rope5 = new Rope(bob5.body,roof.body, 448, 150);

	rope1 = new Rope(bob1.body, 600, 155);
	rope2 = new Rope(bob2.body, 650, 155);
	rope3 = new Rope(bob3.body, 700, 155);
	rope4 = new Rope(bob4.body, 750, 155);
	rope5 = new Rope(bob5.body, 800, 155);

	


	Engine.run(engine);
}

function draw() {
//   rectMode(CENTER);
  background(246,172,0);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  
  roof.display();
  
  drawSprites();
}


function keyPressed(){
	if (keyCode === UP_ARROW ) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-7,y:-1});
    }

}
  


