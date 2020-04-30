const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12;
var ground;
//var tri;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    wall1 = new Wall(400,300,80,200);
    ground = new Ground(390,400,830,20);
    wall2 = new Wall(320,300,50,220);
    wall3 = new Wall(480,300,50,220);
    wall4 = new Wall(540,300,40,260);
    wall5 = new Wall(260,300,40,260);
    wall6 = new Wall(210,300,30,300);
    wall7 = new Wall(590,300,30,300);
    wall8 = new Wall(400,225,100,50);
    wall9 = new Wall(540,175,70,30);
    wall10 = new Wall(260,175,70,30);  
    //tri = new Tri(100,200,3,6)
  }

function draw() {
  background(0);  
  Engine.update(engine)
  
  wall1.display();
  ground.display();
  wall2.display();
  wall3.display();
  wall4.display();
  wall5.display();
  wall6.display();
  wall7.display();
  wall8.display();
  wall9.display();
  wall10.display();
  //tri.display();
  drawSprites();
}