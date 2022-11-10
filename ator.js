//ator
let xAtor = 85;
let yAtor = 367;
let colisao = false;
let meusPontos = 0;

  function mostraAtor(){
    image(imagemDoAtor, xAtor, yAtor, 28, 28);
  }

  function movimentaAtor(){
    if (keyIsDown(UP_ARROW)){
      yAtor -= 3;
    }
    if (keyIsDown(DOWN_ARROW)){
      if(podeSeMover()){ 
        yAtor += 3;
        }
      }
    if (yAtor < -50 ){
      yAtor = 367;
    }
  }
function verificaColisao(){
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
    if (colisao){
      colidiu();
      somDaColisao.play();
      meusPontos -= 1;
    }
  }
}
function colidiu(){
  yAtor = 368;
}

function incluiPontos(){
  textAlign(CENTER)
  textSize(25);
  fill(color(0,0,255))
  text(meusPontos, width / 5,27);
}

function marcaPonto(){
  if(yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    colidiu();
  }
}
function tiraPontos(){
  if(meusPontos <= 0){
    meusPontos = 0;
  }

}
function podeSeMover (){
  return yAtor < 368;
}






