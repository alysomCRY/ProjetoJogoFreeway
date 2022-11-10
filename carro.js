let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2.4, 2.5, 4.2, 5, 3, 3.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    image(imagemCarros[i] , xCarros[i] ,yCarros[i] ,comprimentoCarro, alturaCarro);
 }
}
function movimentaCarro (){
  for (let i = 0; i < imagemCarros.length; i = i +1){
    xCarros[i] -= velocidadeCarros[i];
 }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i = i +1){
    if (passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
      
  }
    
} 
  
function passouTodaATela(xCarro){
  return xCarro <-50;
}
















