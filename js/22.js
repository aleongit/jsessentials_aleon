"use strict";

/*2. Escriviu una funció que és capaç de tractar de diferents maneres un array 
que li passem com a paràmetre, aquest array és una llista d’anys de naixement. 
Els diferents càlculs que ha de fer són:
    * l’edat
    * si són majors d’edat un array de booleans (cert o fals) 
    * quants anys els falta per jubilar-se (si ja ho estan retorna -1)

El resultat és mostrarà per la consola.
L’estructura ha de ser una funció genèrica anomenada per exemple “tractaAnys()” 
que rep per paràmetre l’array amb els anys de naixement 
i la funció que tracta aquests anys. 
Escriu 3 crides, amb la funció definida a part, amb la funció definida a la crida, 
i amb la funció definida a la crida, però de fletxa.
*/

//funció edat
function edat(any) {
  const data = new Date(); //objecte data actual
  const actual = data.getFullYear(); //mètode any actual
  //console.log("any actual" + actual);
  return actual - any;
}

//funció major
function major(any) {
  return edat(any) >= 18;
}

//funció jubila
function jubila(any) {
  let anyJ = -1;
  if (edat(any) < 65) {
    anyJ = 65 - edat(any);
  }
  return anyJ;
}

//funció passant array + funció
function processaAnys(arra, funcio) {
  let plantilla = `<table><tr><td><b>Anys</b></td>`;
  //fila anys
  for (let i = 0; i < arra.length; i++) {
    plantilla += `<td>${arra[i]}</td>`;
  }
  plantilla += `</tr><tr><td><b>${funcio.name}</b></td>`;
  //per cada element array crida funció passada
  for (let i = 0; i < arra.length; i++) {
    //console.log("i" + arra[i]);
    plantilla += `<td>${funcio(arra[i])}</td>`;
  }
  plantilla += `</tr></table><br>`;
  return plantilla;
}

//declarem
let anys = [1982, 1900, 2018, 2020, 1949, 1986, 2000, "test"];
//console.log(typeof(anys));

//funcions normals
text = "<h3>Funcions normals</h3>";
text += processaAnys(anys, edat);
text += processaAnys(anys, major);
text += processaAnys(anys, jubila);


//******************************************************************
//funcions a la crida
text += "<h3>Funcions expressió a la crida</h3>";

//edat
text += processaAnys(anys, function (any) {
  const data = new Date(); //objecte data actual
  const actual = data.getFullYear(); //mètode any actual
  return actual - any;
});

//major
text += processaAnys(anys, function (any) {
  return edat(any) >= 18;
});

//jubila
text += processaAnys(anys, function (any) {
  let anyJ = -1;
  if (edat(any) < 65) {
    anyJ = 65 - edat(any);
  }
  return anyJ;
});

//******************************************************************
//funcions fletxa a la crida
text += "<h3>Funcions fletxa a la crida</h3>";

//edat
text += processaAnys(anys, (any) => {
  const data = new Date(); //objecte data actual
  const actual = data.getFullYear(); //mètode any actual
  return actual - any;
});

//major
text += processaAnys(anys, (any) => edat(any) >= 18);

//jubila
text += processaAnys(anys, (any) => {
  let anyJ = -1;
  if (edat(any) < 65) {
    anyJ = 65 - edat(any);
  }
  return anyJ;
});

sortida = document.getElementById("sortida_section22");
sortida.innerHTML = text;
