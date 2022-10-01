// teste de alteração
//variáveis da bolinha
let xBolinha = 100; 
let yBolinha = 30; 
let dBolinha = 50; 

//velocidade da bolinha
let velocidadexBolinha = 6; 
let velocidadeyBolinha = 6;
let raio = dBolinha/2; 

//variáveis da raquete P1
let xRaqueteP1 = 60; 
let yRaqueteP1 = 150; 
let larguraRaqueteP1 = 10; 
let alturaRaqueteP1 = 90; 
let meioCompP1 = alturaRaqueteP1 / 2;

// teste alteração simultânea
//variáveis da raquete do oponente
let xRaqueteP2 = 550; 
let yRaqueteP2 = 150; 
let larguraRaqueteP2 = 10; 
let alturaRaqueteP2 = 90; 
let meioCompP2 = alturaRaqueteP2 / 2;
let velocidadeyRaqueteP2 = 3; 

//Determinar Vencedor
let meusPontos = 0;
let pontosP2 = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  
  background(0);
  mostraBolinha();
  mostraRaquete(xRaqueteP1,yRaqueteP1);
  mostraRaquete(xRaqueteP2,yRaqueteP2);
  movimentaBolinha();
  VerificaColisãoBorda();
  movimentaRaqueteP1();
  verificaColisaoComRaqueteP1();
  verificaColisaoComRaqueteP2();
  movimentaRaqueteP22();
  //vimentaRaqueteOponente(); 
  incluiPlacar(meusPontos, 150); 
  incluiPlacar(pontosP2, 450);
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, dBolinha);
}


function mostraRaquete(x,y){
  rect(x,y,larguraRaqueteP2,alturaRaqueteP2);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function VerificaColisãoBorda(){
  if (xBolinha + raio > width || xBolinha < raio){
    velocidadexBolinha *= -1;
    if (xBolinha + raio > width){
        meusPontos += 1;
        }else{
          pontosP2 += 1;
        }
  }
  
  if (yBolinha < raio || yBolinha + raio > height){
    velocidadeyBolinha *= -1;
  }  
}

function movimentaRaqueteP1(){
  if(keyIsDown(UP_ARROW)){
    yRaqueteP1 -= 5;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteP1 += 5;
  }  
}

function verificaColisaoComRaqueteP1 (){
  if (xBolinha  - raio - larguraRaqueteP1 < xRaqueteP1 && yBolinha > yRaqueteP1 && yBolinha < yRaqueteP1 +  alturaRaqueteP1){
    velocidadexBolinha *= -1;
  }
}

function verificaColisaoComRaqueteP2 (){
  if (xBolinha  + raio > xRaqueteP2 && yBolinha + raio > yRaqueteP2 && yBolinha < yRaqueteP2 + alturaRaqueteP2){
    velocidadexBolinha *= -1;
  }
}


function movimentaRaqueteOponente(){
  velocidadeRaqueteP2 = yBolinha - yRaqueteP2 - alturaRaqueteP1 / 2; 
  yRaqueteP2 += velocidadeRaqueteP2; 
}

function incluiPlacar(quem,x){
  stroke(255);
  textSize(16);
  textAlign(CENTER);
  fill(255,140,0);
  rect(x - 20,10,40,20);
  fill(255);
  text(quem,x,26); 

} 

function movimentaRaqueteP22(){
  //ASCII table
  // w = 
  
  if(keyIsDown(87)){
    yRaqueteP2 -= 5;
  }
  
  if(keyIsDown(83)){
    yRaqueteP2 += 5;
  }  
}
