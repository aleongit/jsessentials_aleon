"use strict";

/*4. Fes una funció en javascript que retorni el primer element d’un array 
que li passem com a paràmetre, en cas que tingui 2 paràmetres, 
el segon element indicarà que retorni el n primers elements:
Exemple de crida: 
console.log(primers([7, 9, 0, -2])); retorna: 7
console.log(primers(“un text”,3)); retorna: el paràmetre no és un array
console.log(primers([7, 9, 0, -2],3)); retorna [7, 9, 0]
console.log(primers([7, 9, 0, -2],-4)); retorna []
*/

//funció amb slice(pos ini, pos fi no inclosa)
//slice(-1) retorna última pos
console.log([7, 9, 0, -2].slice(0, 1));

//?	ternary operator (condition ? expr1 : expr2 )

const primers = (arra, N = 1) => 
  Array.isArray(arra) ? arra.slice(0, N) : "NO ARRAY";

console.log(primers([7, 9, 0, -2]));
console.log(primers("un text", 3));
console.log(primers([7, 9, 0, -2], 3));
console.log(primers([7, 9, 0, -2], -4));

text =
  "<h1>primers([7, 9, 0, -2]) " +
  primers([7, 9, 0, -2]).join(", ") +
  "</h1>";

text +=
  "<h1>primers('un text',3) " + primers("un text", 3) + "</h1>";

text +=
  "<h1>primers([7, 9, 0, -2],3) " +
  primers([7, 9, 0, -2], 3).join(", ") +
  "</h1>";

text +=
  "<h1>primers([7, 9, 0, -2],-4) " +
  primers([7, 9, 0, -2], -4).join(", ") +
  "</h1>";


//mostra resultats
sortida = document.getElementById("section34");
sortida.getElementsByTagName("article")[0].innerHTML = text;
