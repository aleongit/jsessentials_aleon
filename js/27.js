'use strict';

/*7. Fes una funció en javascript que retorni el nombre de vegades que un determinat caràcter 
apareix en un string.*/

//declarem
const frase = "Fes una funció en javascript que retorni el nombre de vegades que un determinat caràcter apareix en un string";
const c = "v";

const contaC = (frase, c) => {
    let conta = 0;
    for (let i = 0; i < frase.length; i++) {
        //console.log(frase[i]);
    if (c == frase[i]) { conta ++; }
    }
    return conta; }

document.write("<h4>" + frase + "</h4>");
document.write("<h4>" + c + "</h4>");
document.write("<h4>" + contaC(frase,c) + " vegades</h4>");
