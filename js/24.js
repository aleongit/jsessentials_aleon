'use strict';

/*4. Fes una funció Javascript que donada una cadena de text: “abska” 
retorni la cadena ordenada alfabèticament. 
*/

//declarem
const cadena = "abska";

//funció ordenar
//passar a array, ordenar amb sort, passar a cadena amb join

const ordena = function(cad) {
    let separada = cad.split(""); //separa sense separador en array
    console.log(separada);
    console.log(typeof(separada));
    let ordenada = separada.sort(); //ordena array
    console.log(ordenada);
    let ajuntada = ordenada.join(""); //ajunta sense separador en str
    console.log(ajuntada);
    console.log(typeof(ajuntada));
    return ajuntada;
}

text = "<h1>" + cadena + "</h1>";
text += "<h1>" + ordena(cadena) + "</h1>";

//fletxa
const ordenafletxa = cad => cad.split('').sort().join('');
text += "<h1>" + ordenafletxa(cadena) + "</h1>";

sortida = document.getElementById("section24");
//console.log(sortida)
//console.log(sortida.getElementsByTagName("article")[0]);
sortida.getElementsByTagName("article")[0].innerHTML = text;

