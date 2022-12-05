"use strict";

/*3. Escriviu una funció JavaScript que donada una cadena separada per comes 
generi un array de dates (string): 
Exemple: dates([14, 15, 16, 17], ‘juny’,’2020’)  genera un array amb els següents elements:
14-juny-2020
15-juny-2020
16-juny-2020
17-juny-2020 */

//declarem
const dies = [14, 15, 16, 17];
const mes = "juny";
const any = "2020";

//funcio dates([dia1,dia2,...],mes,any)

function generaDates(d, m, a) {
  //console.log(d,m,a);
  let arra = [];
  //per a cada dia
  for (let i = 0; i < d.length; i++) {
    let plantilla = `${d[i]}-${m}-${a}`;
    arra.push(plantilla); //afegir a array
  }
  return arra;
}

let dates = generaDates(dies, mes, any);
//llisto array

text = "";
for (let i = 0; i < dates.length; i++) {
  text += "<h2>" + dates[i] + "</h2>";
}

sortida = document.getElementById("sortida_section23");
sortida.innerHTML = text;
