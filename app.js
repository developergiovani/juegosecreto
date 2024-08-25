let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//Para las funciones se llama hoisting no tiene un orden de ejecución a comparacion de las primeras lineas
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
console.log(numeroSecreto)
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos ===1)? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor')
        } else {
            asignarTextoElemento('p','El número secreto es mayor')
        }
        intentos++;
        limpiarCaja();
    };
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}
function generarNumeroSecreto(){
    let numeroGenrado = Math.floor(Math.random()*numeroMaximo)+1;
    //si ya sorteamos todos los numero
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se sortearon todos los números posibles')

    }else{
        //Si el número generado esta incluido en la lista hacemos una operacion sino otra
        if (listaNumerosSorteados.includes(numeroGenrado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenrado);
            return numeroGenrado;
        }
    }
    
}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    //limpiar Caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numero
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el botom de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();