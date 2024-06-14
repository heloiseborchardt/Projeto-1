let cor;
let posicaohorizontal; // x
let posicaoVertical; // y
let posicaoHorizontal2; // x
let posicaoVertical2; // y

function setup() {
  createCanvas(400, 400);
   background("pink");
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
  cor = color(random(255), random(255), random(255));
posicaoHorizontal = 0;
posicaoVertical = 200;
  posicaoVertical = random(height);

posicaoHorizontal2 = 0;
posicaoVertical2 = random(height);
}


function draw() {
 
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical, 50);
 
 posicaoHorizontal++;
 posicaoHorizontal+= random(0, 3);
posicaoVertical+= random(-3, 3);

  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
   
}