var Bot,Boss,Lamath,Earth,Space; 

function preload() {
Bot=loadImage("Images/A-bot.png");
Space=loadImage("Images/Space.png");
Boss=loadImage("Images/Boss.png");
A_Planet=loadImage("Images/Lamath.png");
Earth=loadImage("Images/Earth.png");
Jet=loadImage("Images/Fighter-jet.png")
K_Shield=loadImage("Images/Shield.png")
}


function setup() {
  createCanvas(800,displayHeight-130);
  //Bots
  Bot1=createSprite(400, 250, 50, 50);
  Bot1.addImage("Bot1",Bot)
  Bot1.scale=0.2;
 Bot2=createSprite(250, 200, 50, 50);
  Bot2.addImage("Bot2",Bot)
  Bot2.scale=0.2;
  Bot3=createSprite(150, 200, 50, 50);
  Bot3.addImage("Bot3",Bot)
  Bot3.scale=0.2;
  Bot4=createSprite(550, 200, 50, 50);
  Bot4.addImage("Bot4",Bot)
  Bot4.scale=0.2;
  Bot5=createSprite(650, 200, 50, 50);
  Bot5.addImage("Bot5",Bot)
  Bot5.scale=0.2;
  // Krampus/Boss
 Krampus=createSprite(400, 100, 50, 50);
  Krampus.addImage("Krampus",Boss)
  Krampus.scale=0.6;
  //Knetic Shield
  Shield=createSprite(400, 350, 800, 50);
  Shield.tint=(rgb(15,9,36))
  //Players jet
  PlayerShip=createSprite(400, 800, 50, 50);
  PlayerShip.addImage("PlayerShip",Jet)
  PlayerShip.scale=0.3;
  //Planets
  Lamath=createSprite(400, 100 , 50, 50)
  Lamath.addImage("Lamath", A_Planet)
  Lamath.scale=5;
  Lamath.depth=-600

}

function draw() {
  background(Space);
  
  if (keyIsDown(RIGHT_ARROW)) {
    Jet.x += 10
}
if (keyIsDown(LEFT_ARROW)) {
  Jet.x -= 10

  }

  drawSprites();
}