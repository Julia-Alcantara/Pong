var xBolinha = 300;
var yBolinha = 200;
var diametro = 22;
var raio = diametro / 2;

var velocidadeXBolinha = 6;
var velocidadeYBolinha = 6;
var raqueteComprimento = 10;
var raqueteAltura = 90;

var xRaquete = 5;
var yRaquete = 150;

var xRaqueteOponente = 585;
var yRaqueteOponente = 150;
var velocidadeYOponente;

var colidiu = false;

var meusPontos = 0;
var pontosOponente = 0;

var raquetada;
var ponto;
var trilha;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete (xRaquete, yRaquete);
  movimentaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  bolinhaNaoFicaPresa();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);  
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;  
}

function verificaColisaoBorda(){
  if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *=-1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0)
    {velocidadeYBolinha *= -1;
    }
}

function mostraRaquete(x,y){
  rect(x, y, raqueteComprimento, raqueteAltura);  
}

function movimentaRaquete (){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

function verificaColisaoRaquete(x, y){
  colidiu = collideRectCircle(x,y,raqueteComprimento,raqueteAltura,xBolinha,yBolinha,raio)
    if (colidiu){
    velocidadeXBolinha *= -1;
    }
}

function movimentaRaqueteOponente (){
   if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }
}

function incluiPlacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosOponente, 470, 26);
}

function marcaPonto(){
  if (xBolinha > 590){
    meusPontos += 1;
  }
  if (xBolinha < 10){
    pontosOponente += 1;
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 22
    }
}
 