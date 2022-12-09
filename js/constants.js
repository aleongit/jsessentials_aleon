"use strict";

//declaració variables compartides
let text = "";
let sortida = "";
let frase = "";
let arra = [];
let ACC = 0;
let FRE = 5;
let BAT = 1;

//object
const ESSENTIALS = {
  11: {
    src: "js/11.js",
    title: "Nombres",
    text: `Feu un programa que demani dos nombres i ens digui amb una alerta, 
  si són iguals,o bé quin és el més gran i quin és el més petit. (feu el programa robust)
  Afegeix que si el nombres no són de tipus nombre o bé són negatius, que els torni a demanar.
  `,
    order: 1,
  },

  12: {
    src: "js/12.js",
    title: "Nombres",
    text: `Utilitzant un bucle demana a l’usuari  nombres introduïts per teclat 
    fins que introdueix un nombre negatiu. 
    És a dir, l’usuari anirà introduint nombres, fins que introdueix un nombre negatiu. 
    Finalment mostra la mitjana i l’acumulat de tots els nombres positius.
  `,
    order: 1,
  },

  13: {
    src: "js/13.js",
    title: "Nombres",
    text: `Mostra en la pàgina tots els nombres imparells i múltiples de 5 o de 7 
    entre dos nombres que l’usuari introdueix per teclat. Fés que el programa sigui robust.
  `,
    order: 1,
  },

  14: {
    src: "js/14.js",
    title: "Nombres",
    text: `Mostrar per la pàgina web tots els divisors d’un nombre positiu 
    que l’usuari introdueix per teclat.
  `,
    order: 1,
  },

  15: {
    src: "js/15.js",
    title: "Nombres",
    text: `Mostra per pantalla la taula de multiplicar d’un nombre 
    que l’usuari introdueix per teclat. El nombre ha de ser positiu i entre l’1 i el 10.
  `,
    order: 1,
  },

  16: {
    src: "js/16.js",
    title: "Nombres",
    text: `Fes una calculadora demani 2 nombres per pantalla, 
    i després demani l’operació aritmètica a realitzar (+ - * / %) 
    i finalment mostri amb una alerta el resultat.
  `,
    order: 1,
  },

  21: {
    src: "js/21.js",
    title: "Strings i Funcions",
    text: `Escriviu una funció JavaScript que giri un número que ha introduit l’usuari.
    Exemple x =123456789; x=987654321;
  `,
    order: 2,
  },

  22: {
    src: "js/22.js",
    title: "Strings i Funcions",
    text: `Escriviu una funció que és capaç de tractar de diferents maneres un array 
    que li passem com a paràmetre, aquest array és una llista d’anys de naixement. 
    Els diferents càlculs que ha de fer són:
    <ul>
        <li><strong>>></strong> l’edat</li>
        <li><strong>>></strong> si són majors d’edat un array de booleans (cert o fals)</li>
        <li><strong>>></strong> quants anys els falta per jubilar-se (si ja ho estan retorna -1)</li>
    </ul>
    El resultat és mostrarà per la consola.
    L’estructura ha de ser una funció genèrica anomenada per exemple “tractaAnys()” 
    que rep per paràmetre l’array amb els anys de naixement 
    i la funció que tracta aquests anys. 
    Escriu 3 crides, amb la funció definida a part, amb la funció definida a la crida, 
    i amb la funció definida a la crida, però de fletxa.
  `,
    order: 2,
  },

  23: {
    src: "js/23.js",
    title: "Strings i Funcions",
    text: `Escriviu una funció JavaScript que donada una cadena separada per comes 
    generi un array de dates (string): 
    Exemple: dates([14, 15, 16, 17], ‘juny’,’2020’)  genera un array amb els següents elements:
    14-juny-2020
    15-juny-2020
    16-juny-2020
    17-juny-2020;
  `,
    order: 2,
  },

  24: {
    src: "js/24.js",
    title: "Strings i Funcions",
    text: `Fes una funció Javascript que donada una cadena de text: “abska” 
    retorni la cadena ordenada alfabèticament.
  `,
    order: 2,
  },

  25: {
    src: "js/25.js",
    title: "Strings i Funcions",
    text: `Fes una funció en javaScript que li passem una frase 
    i retorna la paraula més llarga de la frase.
  `,
    order: 2,
  },

  26: {
    src: "js/26.js",
    title: "Strings i Funcions",
    text: `Fes una funció en javascript que donada una quantitat d’euros ens retorni el seu valor 
    en tres tipus de monedes. Utilitza les funcions de callBack, (és a dir funcions com expressions).
  `,
    order: 2,
  },

  27: {
    src: "js/27.js",
    title: "Strings i Funcions",
    text: `Fes una funció en javascript que retorni el nombre de vegades que un determinat caràcter 
    apareix en un string.
  `,
    order: 2,
  },

  28: {
    src: "js/28.js",
    title: "Strings i Funcions",
    text: `Definiu una funció de fletxa dividirXDos que accepta un número i retorna aquest número dividit per 2.
    Aplica aquesta funció a tots els elements d’un array.
  `,
    order: 2,
  },

  29: {
    src: "js/29.js",
    title: "Strings i Funcions",
    text: `Crea una funció que rebi un paràmetre, 1 dni, i retorni la lletra. 
    Si el dni passat té algun error retornarà -1.
  `,
    order: 2,
  },

  210: {
    src: "js/210.js",
    title: "Strings i Funcions",
    text: `Crea una funció que generi 100 números aleatoris entre 1 i 1000 que no es repeteixin 
    i després mostra'ls per consola ordenats.
  `,
    order: 2,
  },

  31: {
    src: "js/31.js",
    title: "Arrays",
    text: `Escriviu una funció  que crea una nou array amb valors donats.
    <br><strong>* Resultat esperat: (3, 'a') => ['a', 'a', 'a']</strong>
  `,
    order: 3,
  },

  32: {
    src: "js/32.js",
    title: "Arrays",
    text: `Escriviu una funció que elimini de l’array tots els elements innecessaris, 
    com ara cadenes buides, falses, indefinides, zero, nul·les
    <br><strong>* Resultat esperat: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]</strong>
  `,
    order: 3,
  },

  33: {
    src: "js/33.js",
    title: "Arrays",
    text: `Fes una funció javascript per clonar un array que li passem com a paràmetre.
  `,
    order: 3,
  },

  34: {
    src: "js/34.js",
    title: "Arrays",
    text: `Fes una funció en javascript que retorni el primer element d’un array 
    que li passem com a paràmetre, en cas que tingui 2 paràmetres, 
    el segon element indicarà que retorni el n primers elements:
    <br><strong>Exemple de crida:
    <br>console.log(primers([7, 9, 0, -2])); retorna: 7
    <br>console.log(primers(“un text”,3)); retorna: el paràmetre no és un array
    <br>console.log(primers([7, 9, 0, -2],3)); retorna [7, 9, 0]
    <br>console.log(primers([7, 9, 0, -2],-4)); retorna []</strong>
  `,
    order: 3,
  },

  35: {
    src: "js/35.js",
    title: "Arrays",
    text: `Fes una funció en javascript que donat un array numèric, i utlitzant funcions de fletxa:
    <ul>
    <li><strong>>></strong> una funció que mostra quants nombres senars hi ha
    <li><strong>>></strong> una funció que  retorna la mitjana de tots els elements de l’array
    <li><strong>>></strong> una funció que retorna el més gran
    <li><strong>>></strong> una funció que retorna el més petit
    </ul>
  `,
    order: 3,
  },

  36: {
    src: "js/36.js",
    title: "Arrays",
    text: `Fes una funció en javascript que donat un array retorni 
    quin és l’element que té més repeticions.
    <br><strong>var arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
    Sortida a - 5 vegades</strong>.
  `,
    order: 3,
  },

  37: {
    src: "js/37.js",
    title: "Arrays",
    text: `Fer un programa que:
    <ul>
    <li><strong>1.</strong> Demani 6 números per teclat i els posis en un array,
    <li><strong>2.</strong> En una funció ha de mostrar tots els elements de l'array en el body 
       amb una llista desordenada (un a un "forEach") i en la consola (de cop),
    <li><strong>3.</strong> Ordenar i mostrar l'array numèricament (reutilitzem el mostrar)
    <li><strong>4.</strong> Girar l'array i mostra’l
    <li><strong>5.</strong> Mostra quants elements té l'array
    <li><strong>6.</strong> Fer una funció que permet cercar un valor introduït per l'usuari i retorni l'índex.
    <br><strong>Proveu la següent entrada per fer les proves : 
     1000, 101, 121, 13, 15, 11111</strong>
  `,
    order: 3,
  },

  38: {
    src: "js/38.js",
    title: "Arrays",
    text: `Donat un array multidimensional, on cada element és un array de tres elements:
    <br><strong>Preu Unitari / Unitats / IVA
    <br>Exemple: [[100,10,0.10,], [200,1,0.21], … ]</strong>
    <br>
    Fes una funció que genera l’array de 100 elements amb dades aleatòries, seguint 
    les següents premises (imports entre 1 i 1000, IVA 10% o 21%, i quantitats entre 1 i 10).
    <br>
    Fes un script que:
    <ul>
    <li><strong>>></strong> Generi un array amb els imports finals</li>
    <li><strong>>></strong> Generi un array amb l’IVA</li>
    <li><strong>>></strong> Generi un array amb el PVP unitari</li>
    <li><strong>>></strong> Calculi l’import total</li>
    <li><strong>>></strong> Calculi l’import de l’IVA total i desglossat per IVA de 10% i 21%</li>
    </ul>
    Cal utilitzar funcions de fletxa, operador ternari, reutilitzar el codi...
  `,
    order: 3,
  },

  39: {
    src: "js/39.js",
    title: "Arrays",
    text: `Fes una funció que donats 2 arrays, (genera els arrays aleatòriament) 
    retorni la intersecció, és a dir els elements que estan en ambdós arrays, 
    aquest array ha de ser únic (cada element només pot aparèixer una vegada).
  `,
    order: 3,
  },

  310: {
    src: "js/310.js",
    title: "Arrays",
    text: `Fes una funció que comprovi que un array és homogeni,
    és a dir que tots els elements són del mateix tipus.
  `,
    order: 3,
  },

  41: {
    src: "js/41.js",
    title: "DOM",
    text: `Aquí teniu un codi HTML  amb un botó:
    Modifica l’estil botó a través de codi javascript de la funció js_style, 
    mida del text 14, lletra la que vulgueu  i color de la lletra verd.
  `,
    code: `<!DOCTYPE html>
  <html><head><meta charset=utf-8 />
  <title>JS DOM paragraph style</title>
  </head>
  <body>
      <p id ='text'>JavaScript Exercises</p> 
  <div>
      <button id="button41" onclick="script41()">Style</button>
  </div>
  </body></html>`,
    order: 4,
  },

  42: {
    src: "js/42.js",
    title: "DOM",
    text: `Fes un programa javascript per modificar el color 
    (cada paràgraf d’un color diferent) de la pàgina HTML (amb un bucle for).
  `,
    code: `<!DOCTYPE html>
    <html><head><meta charset=utf-8 />
    <title>JS DOM paragraph style</title>
    </head><body>
    <p id ='text'>JavaScript Exercises</p> 
    <p>paràgraf 1</p> 
    <p>paràgraf 2</p> 
    <p>paràgraf 3</p> 
    <p>paràgraf 4</p> 
    </body></html>`,
    order: 4,
  },

  43: {
    src: "js/43.js",
    title: "DOM",
    text: `Fes una funció javascript per afegir files en una taula 
    quan es premi el botó.
  `,
    order: 4,
  },

  44: {
    src: "js/44.js",
    title: "DOM",
    text: `Escriviu un formulari on indiqueu una fila i una columna, i un text, 
    i amb una funció JavaScript que accepti fila, columna 
    (per identificar una cel·la concreta) 
    i una cadena actualitzeu el contingut d’aquesta cel·la.
  `,
    order: 4,
  },

  45: {
    src: "js/45.js",
    title: "DOM",
    text: `En aquest exercici, heu d’extreure  el contingut d’una etiqueta de paràgraf i, a continuació, 
    posa un fons ressaltat groc darrere de paraules de més de vuit caràcters.
    Podeu fer servir aquest text de mostra.
  `,
    order: 4,
  },

  51: {
    src: "js/51.js",
    title: "Esdeveniments",
    text: `Cal que feu una pàgina web que simularà una calculadora:
    podeu utilitzar la funció eval(), que avalua un string matemàticament.
    eval(“4+3”) retorna 7
    la idea és fer un string que concatena tots els caràcters dels botons 
    que són premut i quan es prem l’igual s’avalua.
  `,
    order: 5,
  },

  61: {
    src: "js/61.js",
    title: "POO",
    text: `Cotxes (versió javascript antic):
    <br>Utilitzeu una funció constructora per implementar un cotxe. 
    <br>Un cotxe té una propietat de marca i velocitat. 
    <br>La propietat de velocitat és la velocitat actual del cotxe en km / h;
    <br>Implementar un mètode "accelerar" que augmentarà la velocitat del cotxe en 10 
      i registrar la nova velocitat a la consola;
    <br>Implementeu un mètode de "fre" que reduirà la velocitat del cotxe en 5 
      i registreu la nova velocitat a la consola;
    <br>Creeu 5 objectes de cotxes i deseu-los en un array.  
    <br>Treballarem amb  "accelerar" i "frenar" ,
    <br>mostreu la informació per la consola, mostreu la velocitat al costat. 
    <br>Afegiu una característica. La velocitat no pot ser negativa
  `,
    order: 6,
  },

  62: {
    src: "js/62.js",
    title: "POO",
    text: `Torneu a programar  l’exercici1, però aquesta vegada amb una classe ES6.
  `,
    order: 6,
  },

  63: {
    src: "js/63.js",
    title: "POO",
    text: `Herència (ES6).
    <br>Crea una classe nova, filla de cotxe, per implementar un cotxe elèctric (anomenada Ev).
    A més de la marca i la velocitat actual, 
      l'Ev també té la càrrega actual de la bateria en% (propietat de "càrrega");
    <br>Implementeu un mètode 'chargeBattery' que prengui un argument 'chargeTo' 
      i estableixi la càrrega de la bateria en 'chargeTo';
    <br>Implementeu un mètode "accelerar" que augmentarà la velocitat del cotxe en 20 
      i reduirà la càrrega un 1%. A continuació, registreu un missatge com aquest: 
        "Tesla anirà a 140 km / h, amb una càrrega del 22%";
    <br>Creeu un objecte de cotxe elèctric i experimenteu amb les crides  
      "accelerar", "frenar" i "carregar bateria" (carregar al 90%). 
    <br>Fixeu-vos en què passa quan "accelereu".
    <br>A continuació, registreu un missatge com aquest: 
"Tesla anirà a 140 km / h, amb una càrrega del 22%";
<br>Creeu un objecte de cotxe elèctric i experimenteu amb les crides  
"accelerar", "frenar" i "carregar bateria" (carregar al 90%). 
<br>Fixeu-vos en què passa quan "accelereu".
  `,
    order: 6,
  },

  71: {
    src: "js/71.js",
    title: "Local Storage",
    text: `Fes un formulari per afegir títols de pel·lícules i que el llistat de títols surt al final,
    es desaran en el local storage com parelles key: titol, value: titol , 
    i només cal que tingui en compte no desar strings buits, 
    cal que comproveu que el navegador permet utilitzar aquesta funcionalitat. 
    Afegiu en una llista.
  `,
    order: 7,
  },

  72: {
    src: "js/72.js",
    title: "Local Storage",
    text: `Crea un camp textarea que “autodesi” els seus valors en cada canvi (cada lletra premuda).
    Llavors, si l'usuari tanca accidentalment la pàgina i l'obre de nou, 
    trobarà la seva entrada inacabada al seu lloc.
  `,
    order: 7,
  },

  81: {
    src: "js/81.js",
    title: "Fetch i Promeses",
    text: `Exercici fetch.
    <br>A partir de l’exemple, fes un llistat dels usuaris amb una petició fetch de tots els usuaris de la web 
    https://reqres.in/api/users
    <br>Mostra els camps id, avatar, Nom i Cognoms, email en una taula, 
    amb una fila per cada usuari, en aquest ordre.
    for each és una opció, però també hi ha el map
    <br>Fes una altra petició fetch que ens mostri les dades del segon element de l’array
    Que surti el missatge carregant mentre es carreguen les dades
    https://reqres.in/api/users/2.
  `,
    order: 7,
  },

  82: {
    src: "js/82.js",
    title: "Fetch i Promeses",
    text: `Creeu una funció "whereAmI" que prengui com a entrades 
    un valor de latitud (lat) i un valor de longitud (lng)    
    <br>Utilitzeu el símbol de graus en comptes de "d".
    <br>Per als decimals, utilitzeu punts en comptes de comes. 
    <br>Correcte: 41.40338, 2.17403
    <br>Incorrecte: 41,40338, 2,17403
    <br>Indiqueu la coordenada de latitud abans de la de longitud.
    <br>Comproveu que el primer nombre de la coordenada de latitud estigui entre -90 i 90.
    <br>Comproveu que el primer nombre de la coordenada de longitud estigui entre -180 i 180.
    <br>   
    <br>Feu una "geocodificació inversa" de les coordenades proporcionades. 
    <br>La geocodificació inversa significa convertir coordenades a una ubicació significativa, 
    com ara un nom de ciutat i país. 
    <br>Utilitzeu aquesta API per fer geocodificació inversa: https://geocode.xyz/api.
    <br>La crida AJAX es farà a un URL amb aquest format:
    https://geocode.xyz/52.508,13.381?geoit=json . 
    <br>Utilitzeu l'API de recuperació i prometeu obtenir les dades. 
    <br>
    <br>Un cop tingueu les dades, 
    mireu-les a la consola per veure tots els atributs que heu rebut 
      sobre la ubicació proporcionada. 
    <br>Després, utilitzant aquestes dades, registreu un missatge com aquest a la consola:
     "Esteu a Berlin, Germany" 
    <br>
    <br>Encadeneu un mètode .catch fins al final de la cadena de promeses 
    i registreu els errors a la consola.
    <br>
    <br>Ara és hora d'utilitzar les dades rebudes per representar un país. 
    Per tant, agafeu l'atribut pertinent del resultat de l'API de geocodificació 
    i connecteu-lo a l'API de països que hem estat utilitzant.
    <br>
    <br>Renderitzeu el país i detecteu els errors, tal com hem fet als últims exemples  
    (fins i tot podeu copiar aquest codi, sense necessitat d'escriure el mateix codi)
    <br>PROVA 1: 52.508, 13.381 (Latitud, Longitud)
    <br>PROVA 2: 19.037, 72.873
    <br>PROVA 3: -33.933, 18.474
  `,
    order: 7,
  },

  1001: {
    src: "js/1001.js",
    title: "Esdeveniments i Efectes amb JQuery",
    text: `   
    1. Fer un botó que faci scroll fins al final de la pàgina (ajuda: animate)
    2. Deshabilitar el botó dret del mouse 
    3. Deshabilitar el botó de submit fins que no hagin acceptar un check 
    4. Fer un text intermitent. 
    5. Fer un input de tipus description limitat a 15 caràcters (ajuda: keyup)
    6. Informa per consola si cliqueu el botó dret o l'esquerra o es fa doble click
    7. Deshabilitar un link. 
    8. Comptar el nombre de milisegons que han passats entre els dos clics a un div  
    9. Fes un efecte d’una pilota (border radius 999) 
      que rebota al final de la finestra 3 vegades, 
      i cada vegada puja menys i es desplaça cap a la dreta. S’activarà amb un botó.
    `,
    order: 10,
  },
};
