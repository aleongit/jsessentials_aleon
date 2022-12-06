"use strict";

/*5. Fes una funció en javascript que donat un array numèric, i utlitzant funcions de fletxa:
=> una funció que mostra quants nombres senars hi ha
=> una funció que  retorna la mitjana de tots els elements de l’array
=> una funció que retorna el més gran
=>una funció que retorna el més petit
*/

arra = [1,2,3,4,5,6,7,8,9,0];
let copia = arra.slice(); //copiar array

//funcions
const senars = arra => arra.filter( el => el % 2 != 0 );
const mitjana = arra => (arra.reduce( (total,el) => total + el ))/arra.length;
const gran = arra => arra.sort( (a,b) => b-a).slice(0,1);
const petit = arra => arra.sort( (a,b) => a-b).slice(0,1);

//console.log
console.log(senars(arra));
console.log(mitjana(arra));
console.log(gran(arra));
console.log(petit(arra));

text = "<h1>Array " + copia.join(", ") + "</h1>";
text += "<h1>Senars: " + senars(arra).join(", ") + "</h1>";
text += "<h1>Mitjana: " + mitjana(arra) + "</h1>";
text += "<h1>+ Gran: " + gran(arra) + "</h1>";
text += "<h1>+ Petit: " + petit(arra) + "</h1>";

//mostra resultats
sortida = document.getElementById("section35");
sortida.getElementsByTagName("article")[0].innerHTML = text;
