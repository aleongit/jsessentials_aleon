'use strict';

/*7. Fes una funció en javascript que retorni el nombre de vegades que un determinat caràcter 
apareix en un string.*/

//declarem
frase = "Fes una funció en javascript que retorni el nombre de vegades que un determinat caràcter apareix en un string";
const c = "a";

const contaC = (frase, c) => {
    let conta = 0;
    for (let i = 0; i < frase.length; i++) {
        //console.log(frase[i]);
    if (c == frase[i]) { conta ++; }
    }
    return conta; }

text = "<h4>" + frase + "</h4>";
text += "<h4>" + c + "</h4>";
text += "<h4>" + contaC(frase,c) + " vegades</h4>";

sortida = document.getElementById("section27");
sortida.getElementsByTagName("article")[0].innerHTML = text;
