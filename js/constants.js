"use strict";

//declaració variables compartides
let text = "";
let sortida = "";
let frase= "";

const ESSENTIALS = {
  11: {
    src: "js/11.js",
    title: "Nombres",
    text: `Feu un programa que demani dos nombres i ens digui amb una alerta, 
  si són iguals,o bé quin és el més gran i quin és el més petit. (feu el programa robust)
  Afegeix que si el nombres no són de tipus nombre o bé són negatius, que els torni a demanar.
  `,
  },

  12: {
    src: "js/12.js",
    title: "Nombres",
    text: `Utilitzant un bucle demana a l’usuari  nombres introduïts per teclat 
    fins que introdueix un nombre negatiu. 
    És a dir, l’usuari anirà introduint nombres, fins que introdueix un nombre negatiu. 
    Finalment mostra la mitjana i l’acumulat de tots els nombres positius.
  `,
  },

  13: {
    src: "js/13.js",
    title: "Nombres",
    text: `Mostra en la pàgina tots els nombres imparells i múltiples de 5 o de 7 
    entre dos nombres que l’usuari introdueix per teclat. Fés que el programa sigui robust.
  `,
  },

  14: {
    src: "js/14.js",
    title: "Nombres",
    text: `Mostrar per la pàgina web tots els divisors d’un nombre positiu 
    que l’usuari introdueix per teclat.
  `,
  },

  15: {
    src: "js/15.js",
    title: "Nombres",
    text: `Mostra per pantalla la taula de multiplicar d’un nombre 
    que l’usuari introdueix per teclat. El nombre ha de ser positiu i entre l’1 i el 10.
  `,
  },

  16: {
    src: "js/16.js",
    title: "Nombres",
    text: `Fes una calculadora demani 2 nombres per pantalla, 
    i després demani l’operació aritmètica a realitzar (+ - * / %) 
    i finalment mostri amb una alerta el resultat.
  `,
  },

  21: {
    src: "js/21.js",
    title: "Strings i Funcions",
    text: `Escriviu una funció JavaScript que giri un número que ha introduit l’usuari.
    Exemple x =123456789; x=987654321;
  `,
  },

  22: {
    src: "js/22.js",
    title: "Strings i Funcions",
    text: `Escriviu una funció que és capaç de tractar de diferents maneres un array 
    que li passem com a paràmetre, aquest array és una llista d’anys de naixement. 
    Els diferents càlculs que ha de fer són:
    <ul>
        <li><strong>1.</strong>l’edat</li>
        <li><strong>2.</strong>si són majors d’edat un array de booleans (cert o fals)</li>
        <li><strong>3.</strong>quants anys els falta per jubilar-se (si ja ho estan retorna -1)</li>
    </ul>
    El resultat és mostrarà per la consola.
    L’estructura ha de ser una funció genèrica anomenada per exemple “tractaAnys()” 
    que rep per paràmetre l’array amb els anys de naixement 
    i la funció que tracta aquests anys. 
    Escriu 3 crides, amb la funció definida a part, amb la funció definida a la crida, 
    i amb la funció definida a la crida, però de fletxa.
  `,
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
  },

  24: {
    src: "js/24.js",
    title: "Strings i Funcions",
    text: `Fes una funció Javascript que donada una cadena de text: “abska” 
    retorni la cadena ordenada alfabèticament.
  `,
  },

  25: {
    src: "js/25.js",
    title: "Strings i Funcions",
    text: `Fes una funció en javaScript que li passem una frase 
    i retorna la paraula més llarga de la frase.
  `,
  },

  26: {
    src: "js/26.js",
    title: "Strings i Funcions",
    text: `Fes una funció en javascript que donada una quantitat d’euros ens retorni el seu valor 
    en tres tipus de monedes. Utilitza les funcions de callBack, (és a dir funcions com expressions).
  `,
  },

  27: {
    src: "js/27.js",
    title: "Strings i Funcions",
    text: `Fes una funció en javascript que retorni el nombre de vegades que un determinat caràcter 
    apareix en un string.
  `,
  },

  28: {
    src: "js/28.js",
    title: "Strings i Funcions",
    text: `Definiu una funció de fletxa dividirXDos que accepta un número i retorna aquest número dividit per 2.
    Aplica aquesta funció a tots els elements d’un array.
  `,
  },

  29: {
    src: "js/29.js",
    title: "Strings i Funcions",
    text: `Crea una funció que rebi un paràmetre, 1 dni, i retorni la lletra. 
    Si el dni passat té algun error retornarà -1.
  `,
  },

  210: {
    src: "js/210.js",
    title: "Strings i Funcions",
    text: `Crea una funció que generi 100 números aleatoris entre 1 i 1000 que no es repeteixin 
    i després mostra'ls per consola ordenats.
  `,
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
  },
};
