"use strict";

/*5. Mostra per pantalla la taula de multiplicar d’un nombre 
que l’usuari introdueix per teclat. El nombre ha de ser positiu i entre l’1 i el 10.*/

const script15 = () => {
  //declarem
  let n, text;

  do {
    n = prompt("Número positiu [ 1-10 ]");
  } while (isNaN(n) || n < 1 || n > 10);

  //iniciem text
  text = "Taula de multiplicar del " + n + "</br></br>";

  //passem a número
  n = Number(n);

  //taula multiplicar
  for (let i = 1; i <= 10; i++) {
    text += n + " x " + i + " = " + n * i + "</br>";
  }

  //mostra resultats
  //document.write(text);
  var sortida = document.getElementById("sortida");
  sortida.innerHTML = text;
};
