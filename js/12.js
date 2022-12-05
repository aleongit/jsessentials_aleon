"use strict";

/*2. Utilitzant un bucle demana a l’usuari  nombres introduïts per teclat 
fins que introdueix un nombre negatiu. 
És a dir, l’usuari anirà introduint nombres, fins que introdueix un nombre negatiu. 
Finalment mostra la mitjana i l’acumulat de tots els nombres positius;*/

const script12 = () => {
  //declarem
  let n,
    conta = 0,
    suma = 0,
    mitja = 0;
  let text = "Els números són: ";

  // fes mentre no sigui negatiu
  do {
    n = prompt("Ves introduint números [negatiu per acabar]");
    //console.log(typeof(n));
    //console.log(isNaN(n));

    //si número positiu conta i suma
    if (!isNaN(n) && n >= 0) {
      conta++;
      suma += Number(n);
      text += n + ", ";
    }
    //console.log(conta);
    //console.log(suma);
  } while (isNaN(n) || n >= 0);

  //resultats
  text += "</br>Hi ha " + conta + " números";
  text += "</br>La suma és " + suma;
  text += "</br>La mitjana és " + suma / conta;

  //document.write(text);
  var sortida = document.getElementById("sortida");
  sortida.innerHTML = text;
};
