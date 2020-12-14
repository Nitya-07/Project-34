const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;
var sling1, sling2, sling3, sling4, sling5;

function setup() {
	canvas = createCanvas(windowWidth / 2, windowHeight / 1.5);

	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
    let options={
		mouse: canvasmouse
	};
	mConstrait = MouseConstraint.create(engine, options);
	World.add(world, mConstrait);

	pendulum1 = new Pendulum(340,450,"pink");
	pendulum2 = new Pendulum(280,450,"pink");
	pendulum3 = new Pendulum(220,450,"pink");
	pendulum4 = new Pendulum(160,450,"pink");
	pendulum5 = new Pendulum(100,450,"pink");
	sling1 = new Sling(pendulum1.body, { x: 340, y: 200 });
	sling2 = new Sling(pendulum2.body, { x: 280, y: 200 });
	sling3 = new Sling(pendulum3.body, { x: 220, y: 200 });
	sling4 = new Sling(pendulum4.body, { x: 160, y: 200 });
	sling5 = new Sling(pendulum5.body, { x: 100, y: 200 });


	Engine.run(engine);
  
}


function draw() {
  background(0);
  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY})
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(pendulum5.body,pendulum5.body.position,{x:50,y:45});
	}
}