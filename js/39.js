"use strict";

/*9. Fes una funció que donats 2 arrays, (genera els arrays aleatòriament) 
retorni la intersecció, és a dir els elements que estan en ambdós arrays, 
aquest array ha de ser únic (cada element només pot aparèixer una vegada)*/

//paràmetres
const N = 10;

//genera arrays
//generar array M elements de [preu, unitats, tipus iva]
const crea_array = () => {
  //array buida
  let arra = [];
  for (let i = 0; i < N; i++) {
    //crea element
    arra.push(Math.floor(Math.random() * N + 1));
  }
  return arra;
};
let arra1 = crea_array();
let arra2 = crea_array();

console.log(arra1);
console.log(arra2);

//funció
const interseccio = (arra, arrb) => {
  //array C buida
  let arrc = [];
  let valor;
  //per cada element d'array A
  arra.forEach((el) => {
    //busco i retorno element d'array A que trobi a array B
    //si no el troba retorna 'undefined'
    valor = arrb.find((le) => el == le);
    console.log(valor);
    //si valor no està a array C i valor no és 'undefined', posa'l a array C
    if (!arrc.includes(valor) && valor != undefined) {
      arrc.push(arrb.find((le) => el == le));
    }
  });
  return arrc;
};

//console.log
let arra_in = interseccio(arra1, arra2);
console.log(arra_in);

text = "<h1>Array 1: " + arra1 + "</h1>";
text += "<h1>Array 2: " + arra2 + "</h1>";
text += "<h1>Intersecció: " + arra_in + "</h1>";

//mostra resultats
sortida = document.getElementById("section39");
sortida.getElementsByTagName("article")[0].innerHTML = text;
