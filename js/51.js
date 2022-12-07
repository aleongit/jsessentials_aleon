"use strict";

/*
1. Cal que feu una pàgina web que simularà una calculadora:
podeu utilitzar la funció eval(), que avalua un string matemàticament.
eval(“4+3”) retorna 7
la idea és fer un string que concatena tots els caràcters dels botons 
que són premut i quan es prem l’igual s’avalua.
*/

let evalua = false;

//Amb jQuery conflicte
//window.addEventListener('load',function () {

const calcula = (boto) => {
  //afagem valors
  var valor = boto.getAttribute("value");
  var nom = boto.getAttribute("name");
  var pantalla = document.getElementById("pantalla");
  //console.log(valor + " " + nom);

  let ultim = pantalla.value.length - 1;

  switch (nom) {
    case "num":
      //console.log('pantalla');
      //no escriure nums si després operació
      if (!evalua) {
        pantalla.value += valor;
        evalua = false;
      }
      break;
    case "zero":
      //zero només a dreta num, si num previ
      if (!evalua && !isNaN(pantalla.value[ultim])) {
        pantalla.value += valor;
        evalua = false;
      }
      break;
    case "op":
      //si operació cal número previ
      if (!isNaN(pantalla.value[ultim])) {
        pantalla.value += valor;
        evalua = false;
      }
      break;
    case "res":
      //console.log('resultat');
      //console.log(pantalla.value);
      //depurar, si cal últim caràcter 'op'
      if (isNaN(pantalla.value[ultim])) {
        pantalla.value = pantalla.value.substring(0, ultim);
      }
      //si pantalla no buida
      if (pantalla.value !== "") {
        pantalla.value = eval(pantalla.value);
        //si fem eval, marcarem per no nums, si ops
        evalua = true;
      }
      break;
    case "net":
      //console.log('neteja');
      pantalla.value = "";
      evalua = false;
      break;
  }
};

//event click tots els elements d'una classe
//https://stackoverflow.com/questions/21700364/adding-click-event-listener-to-elements-with-the-same-class

var boto = document.querySelectorAll(".boto");
console.log(boto);
console.log(boto[0].getAttribute("value"));

//per cada botó event click, entra a funció 'calcula' el del click
boto.forEach((boto) => {
  //console.log(boto);
  //console.log(boto.getAttribute('value'));
  boto.addEventListener("click", function () {
    calcula(boto);
  });
});
//});
