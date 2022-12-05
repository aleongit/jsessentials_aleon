"use strict";

/*1. Feu un programa que demani dos nombres i ens digui amb una alerta, 
si són iguals,o bé quin és el més gran i quin és el més petit. (feu el programa robust)
Afegeix que si el nombres no són de tipus nombre o bé són negatius, que els torni a demanar. 
Ajuda isNaN();*/

const script11 = () => {
  //declarem
  let n1, n2;

  do {
    n1 = prompt("Número 1");
    //console.log(typeof(n1));
    //console.log(isNaN(n1));
  } while (isNaN(n1) || n1 < 0);

  do {
    n2 = prompt("Número 2");
  } while (isNaN(n2) || n2 < 0);

  //passem a número
  (n1 = Number(n1)), (n2 = Number(n2));

  //operació amb Number
  if (n1 > n2) {
    alert(n1 + " és el més gran\n" + n2 + " és el més petit");
  } else if (n1 < n2) {
    alert(n1 + " és el més petit\n" + n2 + " és el més gran");
  } else {
    alert(n1 + " i " + n2 + " són iguals");
  }

  //console.log("n1:"+ n1 + " " + typeof(n1));
  //console.log("n2:"+ n2 + " " + typeof(n2));
};
