"use strict";

/*2. Escriviu una funció que elimini de l’array tots els elements innecessaris, 
com ara cadenes buides, falses, indefinides, zero, nul·les
* Resultat esperat: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]*/

//array
const indeseables = ["", "", false, undefined, 0, null];
arra = [0, 1, false, 2, undefined, "", 3, null];
//let arra = [0,0,0,1];

arra.forEach((el) => console.log(typeof el));
//arra.forEach(el => console.log(isNaN(el)));

//funció
const borraIndeseables = (arra) => {
  let ok = false;
  let i = 0;
  //while mentre index dins array
  console.log(arra.length);
  while (i < arra.length) {
    //pos include indeseables ?
    //si element arra *és un indeseable (*s'inclou en) i índex dins array
    console.log(indeseables.includes(arra[i]));
    if (indeseables.includes(arra[i])) {
      //treu element amb splice; (*ja que modifica array original)
      //arra.splice(pos,desp,el,el,...)
      let pos_treu = arra.splice(i, 1);
      console.log(pos_treu);
      console.log(arra);
      //NO avança índex
      console.log("i: " + i);
    }
    //avancem índex
    else {
      i += 1;
      console.log("i: " + i);
      console.log(arra.length);
    }
  }
  return arra;
};

console.log(borraIndeseables(arra));
text = "<h1>" + borraIndeseables(arra).join(", ") + "</h1>";

//mostra resultats
sortida = document.getElementById("section32");
sortida.getElementsByTagName("article")[0].innerHTML = text;
