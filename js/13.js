"use strict";

/*3. Mostra en la pàgina tots els nombres imparells i múltiples de 5 o de 7 
entre dos nombres que l’usuari introdueix per teclat. Fés que el programa sigui robust.*/

const script13 = () => {
  //declarem
  let n1, n2, a, b;
  let text = "Els números són: ";

  do {
    n1 = prompt("Número 1");
  } while (isNaN(n1));

  do {
    n2 = prompt("Número 2");
  } while (isNaN(n2));

  //control més gran
  //passar valors a tipus Number

  //passem a número
  (n1 = Number(n1)), (n2 = Number(n2));

  //control més gran
  if (n1 > n2) {
    (a = n2), (b = n1);
  } else {
    (a = n1), (b = n2);
  }

  console.log(a, b);
  console.log(typeof a, typeof b);

  //busca
  for (let i = a; i <= b; i++) {
    if (i % 2 != 0 && i % 5 == 0 && i % 7 == 0) {
      text += i + ", ";
      console.log(i);
      console.log(typeof i);
    }
  }

  //mostra resultats
  //document.write(text);
  sortida = document.getElementById("sortida");
  sortida.innerHTML = text;
};
