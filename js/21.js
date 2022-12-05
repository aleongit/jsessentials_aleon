'use strict';

/*1. Escriviu una funció JavaScript que giri  un número que ha introduit l’usuari.
Exemple x =123456789; x=987654321;*/

//funció fletxa
const gira = cadena => {
    let girada = "";
    for (let i = (cadena.length - 1); i >= 0; i--) {
        girada += cadena.charAt(i);
        //console.log(girada);
    }
    return girada;
}

const script21 = () => {

//declarem
let n1;
let text = "";

do {
n1 = prompt("Número: ");
} while (isNaN(n1) || (n1<0));

//assegurem String
//n1 = String(n1);
n1 = n1.toString();

//test
//console.log(n1.length); //mida
//mida = n1.length;
//console.log("tipus mida: " + typeof(mida));
//console.log(n1.charAt(0)); //1r
//console.log(n1.charAt(mida-1)); //Últim

//guarda
text += "<h1>" + n1 + " - Número </h1>";

//crida funció
text += "<h1>" + gira(n1) + " - Número girat </h1>";

//operació amb Number
var sortida = document.getElementById("sortida");
sortida.innerHTML = text;

}