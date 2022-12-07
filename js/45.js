"use strict";

/*
5. En aquest exercici, heu d’extreure  el contingut d’una etiqueta de paràgraf i, a continuació, 
posa un fons ressaltat groc darrere de paraules de més de vuit caràcters.
Podeu fer servir aquest text de mostra. 
*/

const script45 = () => {
  //let sortida ="";

  //obtenir paràgraf
  let text = document.getElementById("section45").getElementsByTagName("p");
  console.log(text);

  //obtenir text html
  let text_html = text[0].innerHTML;
  console.log(text_html);

  //array paraules, expressió /(\s+)/g [tots els separadors també són separats]
  //https://stackoverflow.com/questions/5365428/how-does-s-g-replace-spaces-with-other-characters/5365433

  //canviar qualsevol espai, tab, \n per 1 espai
  //dividir per aquest espai
  let paraules = text_html.replace(/\s+/g, " ").split(" ");
  console.log(paraules);

  //modifico llista paraules si >=8 amb <mark> o no
  paraules = paraules.map((paraula) =>
    paraula.length >= 8 ? `<mark>${paraula}</mark>` : paraula
  );
  console.log(paraules);

  //torno a string
  text_html = paraules.join(" ");

  //torno a html
  text[0].innerHTML = text_html;

  //sortida
  //document.getElementById('resultat').innerHTML = sortida;
};
