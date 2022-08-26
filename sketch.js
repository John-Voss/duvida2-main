const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;

var ground;
var plinkos1, plinkos2, plinkos3, plinkos4;
var division;
var particle;
var score = 0;
var typeGame = 'START';
var count = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 790, 800, 10);

  for (let j = 0; j <= 800; j=j+100) {
    division = new Division(j,640);
  }
  for (let i = 50; i <= 790; i=i+45) {
    plinkos1 = new Plinko(i, 150);
  }
  for (let i = 25; i <= 750; i=i+45) {
    plinkos2 = new Plinko2(i, 200);
  }
  for (let i = 50; i <= 790; i=i+45) {
    plinkos3 = new Plinko(i, 250);
  }
  for (let i = 25; i <= 750; i=i+45) {
    plinkos4 = new Plinko2(i, 300);
  }
}
function draw() {
  background(4,25,84);
  Engine.update(engine);

  textSize(25);
  fill('gold');
  text('R$500', 5, 690);
  text('R$500', 105, 690);
  fill('#FF1493');
  text('R$200', 405, 690);
  text('R$200', 305, 690);
  text('R$200', 205, 690);
  fill('#EEE8AA');
  text('R$100', 505, 690);
  text('R$100', 705, 690);
  text('R$100', 605, 690);
  fill('purple');
  text('Score: R$'+score, 20, 400);
  fill('#B22222');

  ground.display();
  division.display();

  plinkos1.display();
  plinkos2.display();
  plinkos3.display();
  plinkos4.display();

  if(particle != null){

    particle.display();

    if(particle.ball.position.y > 640) {
      if(particle.ball.position.x < 205 && particle.ball.position.x > 0) {
        score =score+ 500;
        particle = null
      }
    }
  }

  if(particle != null){

    particle.display();

    if(particle.ball.position.y > 640) {
      if(particle.ball.position.x < 510 && particle.ball.position.x > 210){
        score=score+200;
        particle = null
      }
    }
  }
  if(particle != null){

    particle.display();

    if(particle.ball.position.y > 640) {
      if(particle.ball.position.x < 795 && particle.ball.position.x > 515){
        score=score+100;
        particle = null
      }
    }
  }
  if(count >= 5) {
    typeGame = 'end';
  }

  if(typeGame === 'end') {
    textSize(100);
    fill('white');
    text('GAME OVER!', 80, 80);
  }
}
function mousePressed() {
  if(typeGame !== 'end') {
    count++;
    particle = new Particle(mouseX, -10);
  }
}