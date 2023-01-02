
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine
var world
var s
var ps
var b
var pb
var r
var pr
var r1
var pr1
function setup() {
	createCanvas(400,400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
ps={
isStatic:true

}
s=Bodies.rectangle(0,380,1000,20,ps)
World.add(world,s)
  

pb={
restitution:0.5,
friction:0.02,
frictionAir:0

}

pr={
	restitution:0.7,
	friction:0.01,
	frictionAir:0.1
	
	}
pr1={
	restitution:0.01,
	friction:1,
	frictionAir:0.3
	
	}


b=Bodies.circle(220,10,10,pb)
World.add(world,b);



r=Bodies.rectangle(110,50,10,10,pr)
World.add(world,r);



r1=Bodies.rectangle(350,50,100,10,pr1)
World.add(world,r1);



















}


function draw() {
  
  background("red");
  Engine.update(engine)
  rectMode(CENTER)
  rect(s.position.x,s.position.y,1000,20)


  ellipseMode(RADIUS)
  ellipse(b.position.x,b.position.y,10,10)
 

rectMode(CENTER)
  rect(r.position.x,r.position.y,10,10)

  rectMode(CENTER)
  rect(r1.position.x,r1.position.y,100,10)
}