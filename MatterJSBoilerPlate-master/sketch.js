var roof,rope1,bobobject1,bobobject2,bobobject3,bobobject4,bobobject5,bobDiameter
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new roof(350,100,300,30)
    world.add(world,roof)

    bobobject1 = new Bob(250,300)
    bobobject2 = new Bob(300,300)
    bobobject3 = new Bob(350,300)
    bobobject4 = new Bob(400,300)
    bobobject5 = new Bob(450,300)

rope1 = new Rope(bobobject1.body,roof.body,-100,0)
   World.add(world,rope1)
   

   rope2 = new Rope(bobobject2.body,roof.body,-50,0)
   World.add(world,rope2)
   
   
rope3 = new Rope(bobobject3.body,roof.body,0,0)
World.add(world,rope3)


rope4 = new Rope(bobobject4.body,roof.body,+50,0)
   World.add(world,rope4)
   

   rope5 = new Rope(bobobject5.body,roof.body,+100,0)
   World.add(world,rope5)

   
	
	
	
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
Engine.update(engine)

roof.display();


bobobject1.display()
bobobject2.display() 
bobobject3.display()  
bobobject4.display()
bobobject5.display()

rope1.display()
rope2.display()
rope3.display()
rope4.display()
         

  drawSprites();
 
}

function keyPressed(){
	if(KeyCode===UP_Arrow){
Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:-730,y:0})
	}

}
