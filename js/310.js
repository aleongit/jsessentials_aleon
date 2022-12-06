"use strict";

/*10. Fes una funció que comprovi que un array és homogeni,
és a dir que tots els elements són del mateix tipus. */

let arra_int = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let arra_str = ["bon dia", "bona tarda", "bona nit"];
let arra_mix = [1, "2", 3, "4", 5];
let arra_nul = [null, null, null];
let arra_mix2 = [0, 100, null];

//funció

const mateix_tipus = (arra) => {
  let ok;
  //per cada element d'array
  arra.forEach((el) => {
    //mira el tipus dels altres
    //si tots tenen el mateix tipus, true
    ok = arra.every((le) => typeof el == typeof le);
  });
  return ok;
};

//console.log
console.log(mateix_tipus(arra_int));
console.log(mateix_tipus(arra_str));
console.log(mateix_tipus(arra_mix));
console.log(mateix_tipus(arra_nul));
console.log(mateix_tipus(arra_mix2));

text = "";
text +=
  "<h1 id='resultat'>Array 1: " +
  arra_int +
  " >> Homogeni: " +
  mateix_tipus(arra_int) +
  "</h1>";
text +=
  "<h1 id='resultat'>Array 2: " +
  arra_str +
  " >> Homogeni: " +
  mateix_tipus(arra_str) +
  "</h1>";
text +=
  "<h1 id='resultat'>Array 3: " +
  arra_mix +
  " >> Homogeni: " +
  mateix_tipus(arra_mix) +
  "</h1>";
text +=
  "<h1 id='resultat'>Array 4: " +
  arra_nul +
  " >> Homogeni: " +
  mateix_tipus(arra_nul) +
  "</h1>";
text +=
  "<h1 id='resultat'>Array 5: " +
  arra_mix2 +
  " >> Homogeni: " +
  mateix_tipus(arra_mix2) +
  "</h1>";

//mostra resultats
sortida = document.getElementById("section310");
sortida.getElementsByTagName("article")[0].innerHTML = text;
