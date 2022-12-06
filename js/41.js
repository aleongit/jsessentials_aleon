"use strict";

/*1. Aquí teniu un codi HTML  amb un botó:
Modifica l’estil botó a través de codi javascript de la funció js_style, 
mida del text 14, lletra la que vulgueu  i color de la lletra verd */

//estil botó
const script41_change = () => {
  console.log("change style!");

  let boto = document.getElementById("boto41");
  boto.style.fontSize = "2rem";
  boto.style.color = "darkgreen";
  boto.style.background = "limegreen";
  boto.innerHTML = "Botó canviat!"
};

const script41_reset = () => {
  
    let boto = document.getElementById("boto41");
    boto.style.fontSize = "1rem";
    boto.style.color = "black";
    boto.style.background = "#e7e7e7";
    boto.innerHTML = "Botó!"
  };
