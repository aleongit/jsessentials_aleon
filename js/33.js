"use strict";

/*3. Fes una funció javascript per clonar un array 
que li passem com a paràmetre.*/

arra = [1, 2, 3, 4, 5];

//funció
//const clonaArray = (...clon) => new Array(clon);
//crec que no cal fer new, ja retorna array amb els ...
const clonaArray = (...clon) => clon;

let arra_clon = clonaArray(...arra);

console.log(arra + Array.isArray(arra));
console.log(arra_clon + Array.isArray(arra_clon));
console.log(arra.concat(arra_clon));

text = "<h1>Array " + arra.join(", ") + "</h1>";
text += "<h1>Clon  " + arra_clon.join(", ") + "</h1>";

//mostra resultats
sortida = document.getElementById("section33");
sortida.getElementsByTagName("article")[0].innerHTML = text;
