"use strict";

/*6. Fes una funció en javascript que donat un array retorni 
quin és l’element que té més repeticions.
var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
Sortida a - 5 vegades.*/

arra = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];

//funció
const conta_els = (arra) => {
  //per guardar repeticions de cada element
  let rep = [];

  // per cada element
  arra.forEach((el) => {
    //filtra per cada element comparant amb els altres
    //afageix resultat a rep
    rep.push(arra.filter((le) => el == le));
  });
  console.log(rep);
  console.log(rep.sort().slice(-1));

  //agafa valor màxim de repeticions / slice -1 és últim
  let max = rep.sort().slice(-1);

  console.log(max);
  return max;
};
//console.log
console.log(conta_els(arra));

let el_arra = conta_els(arra);
//console.log(Array.isArray(element));
//agafem element i número vegades d'array retornada
let el = el_arra[0][0];
let n = el_arra[0].length;

text = "<h1>Array    " + arra.join(", ") + "</h1>";
text += "<h1>Sortida  " + el + " >> " + n + " vegades" + "</h1>";

//mostra resultats
sortida = document.getElementById("section36");
sortida.getElementsByTagName("article")[0].innerHTML = text;
