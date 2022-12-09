"use strict";

/*
Herència (ES6):
Crea una classe nova, filla de cotxe, per implementar un cotxe elèctric (anomenada Ev).
A més de la marca i la velocitat actual, 
  l'Ev també té la càrrega actual de la bateria en% (propietat de "càrrega");
Implementeu un mètode 'chargeBattery' que prengui un argument 'chargeTo' 
  i estableixi la càrrega de la bateria en 'chargeTo';
Implementeu un mètode "accelerar" que augmentarà la velocitat del cotxe en 20 
  i reduirà la càrrega un 1%. A continuació, registreu un missatge com aquest: 
    "Tesla anirà a 140 km / h, amb una càrrega del 22%";
Creeu un objecte de cotxe elèctric i experimenteu amb les crides  
  "accelerar", "frenar" i "carregar bateria" (carregar al 90%). 
Fixeu-vos en què passa quan "accelereu". 

*/

//constants
ACC = 20; //increment velocitat
FRE = 5; //decrement velocitat
BAT = 1; //reducció bateria

//classes ES6
//classe cotxe
class Cotxe63 {
  //propietats i inicialització
  constructor(m, v) {
    this.marca = m;
    this.velocitat = v; //velocitat actual del cotxe en km / h
  }

  // Instance methods
  // s'afegiran al prototipus

  accelerar() {
    this.velocitat += ACC;
    console.log(this.velocitat + " km/h");
  }

  fre() {
    //control velocitat negativa
    if (this.velocitat - FRE >= 0) {
      this.velocitat -= FRE;
    }
    console.log(this.velocitat + " km/h");
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

//herència
//classe filla de cotxe
class Ev extends Cotxe63 {
  //propietats i inicialització
  constructor(marca, velocitat, carrega) {
    super(marca, velocitat);
    this.carrega = carrega; // càrrega actual de la bateria en%
  }

  chargeBattery(chargeTo) {
    this.carrega = chargeTo;
    console.log(this.carrega + " %");
  }

  accelerar() {
    //super.accelerar();
    //s'hereda mètode superior amb 'super' i afegim canvis
    //si repetim codi, es fa 2 cops

    /*this.velocitat += A;
    console.log(this.velocitat + ' km/h');*/

    //si no posem 'super' el maxaquem

    //si s'acaba bateria, cal parat cotxe
    if (this.carrega - BAT >= 0) {
      this.velocitat += ACC;
      this.carrega -= BAT;
    } else {
      this.velocitat = 0;
    }
    console.log(this.velocitat + " km/h");
    console.log(this.carrega + " %");
  }

  //getters
  get carrega() {
    return this._carrega;
  }

  //setters
  set carrega(c) {
    this._carrega = c;
  }
}

/*A continuació, registreu un missatge com aquest: 
"Tesla anirà a 140 km / h, amb una càrrega del 22%";
Creeu un objecte de cotxe elèctric i experimenteu amb les crides  
"accelerar", "frenar" i "carregar bateria" (carregar al 90%). 
Fixeu-vos en què passa quan "accelereu". */

const script63 = () => {
  console.log("Tesla anirà a 140 km / h, amb una càrrega del 22%");

  text = "";
  text += ">> Creant Tesla<br>";
  const Electric = new Ev("Tesla", 140, 22);
  text += JSON.stringify(Electric) + "<br>";

  console.log(Electric); //print instància
  console.log(Electric instanceof Cotxe); // true
  console.log(Electric instanceof Ev); // true
  console.log(Electric.marca); //print directe propietat marca
  text += ">> Marca " + Electric.marca + "<br>";
  console.log(Electric.velocitat); //velocitat actual
  text += ">> Velocitat " + Electric.velocitat + "<br>";
  console.log(Electric.carrega); //velocitat actual
  text += ">> Bateria " + Electric.carrega + "<br>";

  text += ">> Accelerem!" + "<br>";
  Electric.accelerar(); //accelerem
  text += ">> Velocitat " + Electric.velocitat + "<br>";
  text += ">> Bateria " + Electric.carrega + "<br>";

  text += ">> Frenem!" + "<br>";
  Electric.fre(); //fre
  text += ">> Velocitat " + Electric.velocitat + "<br>";
  text += ">> Bateria " + Electric.carrega + "<br>";

  text += "<br><br>";

  //accelerm n vegades
  let n = 50;
  for (let i = 0; i < n; i++) {
    text += ">> Accelerem!" + "<br>";
    Electric.accelerar(); //accelerem
    text += ">> Velocitat " + Electric.velocitat + "<br>";
    text += ">> Bateria " + Electric.carrega + "<br>";
  }
  text += "<br><br>";

  //frenem n vegades
  for (let i = 0; i < n; i++) {
    text += ">> Frenem!" + "<br>";
    Electric.fre(); //fre
    text += ">> Velocitat " + Electric.velocitat + "<br>";
    text += ">> Bateria " + Electric.carrega + "<br>";
  }
  text += "<br><br>";

  //carregar bateria
  text += ">> Carreguem bateria!" + "<br>";
  Electric.chargeBattery(90);
  text += ">> Bateria " + Electric.carrega + "<br>";

  //sortida;
  sortida = document.getElementById("sortida63");
  sortida.innerHTML = text;
};
