"use strict";

/*1. Escriviu una funció  que crea una nou array amb valors donats
 * Resultat esperat: (3, 'a') => ['a', 'a', 'a']*/

//funció
const creaArray = (num, lletra) => {
  //array buida
  arra = [];
  console.log(Array.isArray(arra));
  for (let i = 0; i < num; i++) {
    arra.push(lletra);
  }
  return arra;
};
console.log(creaArray(3, "a"));
text = "<h1>" + creaArray(3, "a").join(", ") + "</h1>";

//mostra resultats
sortida = document.getElementById("section31");
sortida.getElementsByTagName("article")[0].innerHTML = text;
