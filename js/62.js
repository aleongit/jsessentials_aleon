'use strict';

/*
Torneu a programar  l’exercici1, però aquesta vegada amb una classe ES6
*/

//constants
const A = 20;
const F = 5;

//classes ES6
//classe cotxe
class Cotxe {

constructor(m, v) {
  //propietats i inicialització
  this.marca = m;
  this.velocitat = v; //velocitat actual del cotxe en km / h
  }

// Instance methods
// s'afegiran al prototipus

accelerar() {
  this.velocitat += A;
  console.log(this.velocitat + ' km/h' );
}

fre() {
  //control velocitat negativa
  if ( (this.velocitat - F ) >= 0 ) {
    this.velocitat -= F;
    }
  console.log(this.velocitat + ' km/h' );
}


//getters
get marca() {
  return this._marca;
}


get velocitat() {
  return this._velocitat;
}

//setters

set marca(m) {
  this._marca = m;
}

set velocitat(v) {
  //this._velocitat = `${v} km/h`;  //no puc sumar això
  this._velocitat = v;
}

}

//Creeu 5 objectes de cotxes i deseu-los en un array.
//noves instàncies js antic

const Cotxe1 = new Cotxe('BMW', 300);
const Cotxe2 = new Cotxe('Ferrari', 500);
const Cotxe3 = new Cotxe('Seat', 60);
const Cotxe4 = new Cotxe('Peugeot', 100);
const Cotxe5 = new Cotxe('Nissan', 120);

//cotxes a array
let cotxes = [Cotxe1, Cotxe2, Cotxe3, Cotxe4, Cotxe5];

//crides per cada cotxe
cotxes.forEach( cotxe => {
  console.log(cotxe); //print instància
  console.log(cotxe instanceof Cotxe); // true
  console.log(cotxe.marca); //print directe propietat marca
  console.log(cotxe.velocitat); //velocitat actual
  cotxe.accelerar(); //accelerem
  cotxe.fre(); //fre

  //frenem n vegades
  let n = 50;
  for(let i = 0; i < n; i++) { cotxe.fre(); }

})

