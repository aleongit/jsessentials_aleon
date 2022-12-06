"use strict";

/*8. Donat un array multidimensional, on cada element és un array de tres elements:
Preu Unitari / Unitats / IVA
Exemple: [[100,10,0.10,], [200,1,0.21], … ]

Fes una funció que genera l’array de 100 elements amb dades aleatòries, seguint 
les següents premises (imports entre 1 i 1000, IVA 10% o 21%, i quantitats entre 1 i 10).

Fes un script que:
Generi un array amb els imports finals, 
Generi un array amb l’IVA
Generi un array amb el PVP unitari
Calculi l’import total 
Calculi l’import de l’IVA total i desglossat per IVA de 10% i 21%

Cal utilitzar funcions de fletxa, operador ternari, reutilitzar el codi ...
*/

//paràmetres
const M = 5;
const MPU = 100;
const MQ = 10;
const IVAS = [0.1, 0.21];

// Returns a random integer from 0 to 9:
//Math.floor(Math.random() * 10);

//Return a random number between 1 and 10:
//Math.floor((Math.random() * 10) + 1);

//choise
//calcular un índex aleatori de la longitud de l'arrai
//console.log(IVAS[Math.floor(Math.random()*IVAS.length)]);

//generar array M elements de [preu, unitats, tipus iva]
const crea_preus = () => {
  //array buida
  let taula = [];
  for (let i = 0; i < M; i++) {
    //crea element [preu,un,t_iva]
    let preu = Math.floor(Math.random() * MPU + 1);
    let uni = Math.floor(Math.random() * MQ + 1);
    let iva = IVAS[Math.floor(Math.random() * IVAS.length)];
    let element = [preu, uni, iva];
    taula.push(element);
  }
  return taula;
};

//taula preus
let arra_preus = crea_preus();
console.log(arra_preus);
//console.log(typeof(arra_preus[0][1]),typeof(arra_preus[0][1]),typeof(arra_preus[0][2]));

//taula imports         = preu x unitats x (IVA + 1)
//taula imports IVA     = preu x unitats x IVA
//taula PVP unitari     = preu x unitats x (IVA + 1) / unitats

//per taules imports + imports IVA
//creo imports donat array 2 dimensions + posicions multiplicar

const crea_imports = (arra, operacio) => {
  //array buida
  let taula = [];
  arra.forEach((linia) => {
    switch (operacio) {
      case "imports":
        //amb slice trio quines columnes volem reduïr
        //taula.push( linia.slice(0,2).reduce( (total,val) => total * val) )
        //console.log(1 + (linia.slice(2)));
        //.toFixed talla decimals, retorna string, per això parseFloat
        taula.push(
          parseFloat((linia[0] * linia[1] * (linia[2] + 1)).toFixed(2))
        ); //2 decimals
        break;
      case "imports_iva":
        //taula.push((linia[0] * linia[1] * linia[2]).toFixed(2));
        //les 3 columnes
        taula.push(
          parseFloat(linia.reduce((total, val) => total * val).toFixed(2))
        );
        break;
      case "pvp_unitari":
        //hola
        taula.push(
          parseFloat(
            ((linia[0] * linia[1] * (linia[2] + 1)) / linia[1]).toFixed(2)
          )
        );
        break;
    }
  });
  return taula;
};
//taula imports
let arra_imports = crea_imports(arra_preus, "imports");
console.log(arra_imports);
//console.log(typeof(arra_imports[0][1]),typeof(arra_imports[0][1]),typeof(arra_imports[0][2]));

//taula iva
let arra_imports_iva = crea_imports(arra_preus, "imports_iva");
console.log(arra_imports_iva);

//taula pvp unitari
let arra_pvp_un = crea_imports(arra_preus, "pvp_unitari");
console.log(arra_pvp_un);

//import total
const import_total = (arra) => arra.reduce((suma, val) => suma + val);
const IMPORT = import_total(arra_imports);
console.log(IMPORT);

//import iva total
const IVA = import_total(arra_imports_iva);
console.log(IVA);

//console.log(arra_preus[0][2]);
//console.log(arra_preus[1][2]);

//import iva (si 10 o 21)
const iva_total = (arra, tipus) => {
  //comprovar si algun element és del tipus iva
  let busca = arra_preus.findIndex((val) => val[2] == tipus);
  console.log(busca);
  //si hi ha element del tipus iva
  if (busca > -1) {
    //filtrar valors en arrai passada per tipus mirant índex taula de preus i reduïr total suma tipus

    return arra
      .filter((val, i) => arra_preus[i][2] == tipus)
      .reduce((sum, val) => sum + val);
  } else {
    //si no tipus iva retorna 0
    return 0;
  }
};

//desgloç IVA
const IVA10 = iva_total(arra_imports_iva, 0.1);
console.log(IVA10);

const IVA21 = iva_total(arra_imports_iva, 0.21);
console.log(IVA21);

//imprimeix factura
const print_factura = (arra) => {
  let consola =
    "<table><tr><th>PREU</th><th>UNIT</th><th>IVA</th><th>PVP UN</th><th>IVA IMPORT</th><th>IMPORT</th>";
  let i = 0;
  arra.forEach((el) => {
    consola += `<tr><td>${el[0].toFixed(2)}
            </td><td>${el[1].toFixed(2)}
            </td><td>${el[2].toFixed(2)}</td>
            <td>${arra_pvp_un[i].toFixed(2)}</td>
            <td>${arra_imports_iva[i].toFixed(2)}</td>
            <td>${arra_imports[i].toFixed(2)}</td></tr>`;
    i++;
  });
  consola += `<tr><td colspan='6'></tr>`;
  consola += `<tr><td colspan='6'>TOTAL IMPORT: ${IMPORT.toFixed(2)}</td></tr>`;
  consola += `<tr><td colspan='6'>TOTAL IVA: ${IVA.toFixed(2)}</td></tr>`;
  consola += `<tr><td colspan='6'>   IVA 10: ${IVA10.toFixed(2)}</td></tr>`;
  consola += `<tr><td colspan='6'>   IVA 21: ${IVA21.toFixed(2)}</td></tr>`;
  consola += "</table>";
  return consola;
};
//console
console.log(print_factura(arra_preus));

text = `<h4>FACTURA : ${print_factura(arra_preus)} </h4>`;

//mostra resultats
sortida = document.getElementById("section38");
sortida.getElementsByTagName("article")[0].innerHTML = text;
