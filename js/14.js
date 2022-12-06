"use strict";

/*4. Mostrar per la pàgina web tots els divisors d’un nombre positiu 
que l’usuari introdueix per teclat.*/

const script14 = () => {
  //declarem
  let n, text;

  do {
    n = prompt("Número positiu");
  } while (isNaN(n) || n < 1);

  //iniciem text
  text = "Els divisors de " + n + " són:</br></br>";

  //console.log(typeof(n));
  //passem a número
  n = Number(n);
  //console.log(typeof(n));

  //busca divisors
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      text += i + ", ";
    }
  }

  //mostra resultats
  //document.write(text);
  sortida = document.getElementById("sortida");
  sortida.innerHTML = text;
};
