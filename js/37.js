"use strict";

/*7. Fer un programa que :
1. demani 6 números per teclat i els posis en un array,
2. En una funció ha de mostrar tots els elements de l'array en el body 
   amb una llista desordenada (un a un "forEach") i en la consola (de cop),
3. Ordenar i mostrar l'array numèricament (reutilitzem el mostrar)
4. Girar l'array i mostra’l
5. Mostra quants elements té l'array
6. Fer una funció que permet cercar un valor introduït per l'usuari i retorni l'índex.
Proveu la següent entrada per fer les proves : 
 1000, 101, 121, 13, 15, 11111
*/

const script37 = () => {
  //let arra = [1000, 101, 121, 13, 15, 11111];
  arra = [];
  let n;
  const N = 6;

  //mentre més petit o igual que N
  let i = 1;
  while (i <= N) {
    //demana n, mentre sigui Nan, buit o null
    do {
      //console.log(n);
      n = prompt("Número " + i);
    } while (isNaN(n) || n == "" || n == null);
    //afageix a array
    arra.push(n);
    //incrementa índex
    i++;
  }
  console.log(arra);

  // funció printa amb llista desordenada
  const print_arra_ul = (arra) => {
    let consola = "<ul>";
    arra.forEach((el) => (consola += "<li>" + el + "</li>"));
    consola += "</ul>";
    return consola;
  };

  //clons array, sinó 'sort', 'reverse, modifiquen l'original
  let arra_ord = arra.slice();
  let arra_rev = arra.slice();

  //console
  console.log(arra);
  console.log(arra_ord.sort((a, b) => a - b));
  console.log(arra_ord.sort((a, b) => a - b));
  console.log(arra_rev.reverse());
  console.log(arra_rev.reverse());
  console.log(arra.length);

  text = `<h4>Array amb llista : ${print_arra_ul(arra)} </h4>`;
  text += `<h4>Array ordenat numèric : ${
    arra_ord.sort((a, b) => a - b)
  } </h4>`;
  text += `<h4>Array girat : ${arra_rev.reverse()} </h4>`;
  text += `<h4>Elements : ${arra.length} </h4>`;

  //demanar cerca element
  n = prompt("Valor a cercar: ");

  //cercar element amb findIndex
  const cerca_el = (val_cercat, arra) =>
    arra.findIndex((valor) => val_cercat == valor);
  let index = cerca_el(n, arra);
  console.log(index);
  text += `<h4>Índex de element ${n} és: ${index} </h4>`;

  //mostra resultats
  sortida = document.getElementById("sortida");
  sortida.innerHTML = text;
};
