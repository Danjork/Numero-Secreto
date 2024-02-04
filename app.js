/**let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Ingresa un numero del 1 al 10";

/*oneclick trabaja con funciones 

*/
let numeroSecreto = generaNumeroSecreto();
console.log(numeroSecreto);



function asignarTextoElemento(elemento, texto){
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function generaNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
  
}

    /*capturamos el valor que el usuario ingreso en el input*/
   /* let numeroDeUsuario = document.querySelector('input');*/
   /* */
function verificaIntento(){

let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

if(numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p','acertaste el numero');
}else{
    asignarTextoElemento('p', 'para la proxima');
}
return;
};



/* ejemplo elemento = h1 o P o h2 ; texto = "hola mundo"*/
asignarTextoElemento('h1','Juego del numero secreto');
asignarTextoElemento('p','Indica un número del 1 al 10');

