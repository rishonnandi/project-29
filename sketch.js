const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground = new Ground(600,height,1200,20);
  block1=new Block(330,235,30,40);
  block2=new Block(360,234,30,40);
  block3=new Block(390,235,30,40);
  block4=new Block(420,235,40,40);
  block5=new Block(450,235,30,40);
  block6=new Block(360,195,30,40);
  block7=new Block(390,195,40,40);
  block8=new Block(420,195,30,40);
  block9=new Block(390,155,30,40);
  slingshot=new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background(50,50,50);  
  Engine.update(engine);
  
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  slingshot.display();
  imageMode(CENTER);
  image(polygon_img,polygon.positionX,polygon.positionY,40,40);
}