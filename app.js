/**let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del numero secreto';

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Ingresa un numero del 1 al 10";

/*oneclick trabaja con funciones 

*/
let numeroSecreto = generaNumeroSecreto();
console.log(numeroSecreto);

let intentos = 1;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
};

function generaNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;

}

/*capturamos el valor que el usuario ingreso en el input*/
/* let numeroDeUsuario = document.querySelector('input');*/
/* */
function verificaIntento() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
console.log(intentos)
    if (numeroDeUsuario === numeroSecreto) {
        /*uso de operador ternario usar if else en una linea de codigo */
        asignarTextoElemento('p', `acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    } else {
        //el usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else{

            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();

    }
    return;
};

function limpiarCaja(){
    /*reutilizar el elemento del id del input
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value=''; */

    //resumido el codigo
    document.querySelector('#valorUsuario').value = '';
};



/* ejemplo elemento = h1 o P o h2 ; texto = "hola mundo"*/
asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');

