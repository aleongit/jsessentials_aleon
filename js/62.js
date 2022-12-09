'use strict';

/*
Torneu a programar  l’exercici1, però aquesta vegada amb una classe ES6
*/

//constants
ACC = 20;
FRE = 5;

//classes ES6
//classe cotxe
class CotxeES6 {

constructor(m, v) {
  //propietats i inicialització
  this.marca = m;
  this.velocitat = v; //velocitat actual del cotxe en km / h
  }

// Instance methods
// s'afegiran al prototipus

accelerar() {
  this.velocitat += ACC;
  console.log(this.velocitat + ' km/h' );
}

fre() {
  //control velocitat negativa
  if ( (this.velocitat - FRE ) >= 0 ) {
    this.velocitat -= FRE;
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

const script62 = () => {
  text = "";
  text += ">> Creant cotxes<br>";

  const Cotxe1 = new CotxeES6("BMW", 300);
  const Cotxe2 = new CotxeES6("Ferrari", 500);
  const Cotxe3 = new CotxeES6("Seat", 60);
  const Cotxe4 = new CotxeES6("Peugeot", 100);
  const Cotxe5 = new CotxeES6("Nissan", 120);

  text += ">> Creat Cotxe1<br>";
  text += JSON.stringify(Cotxe1) + "<br>";
  text += ">> Creat Cotxe2<br>";
  text += JSON.stringify(Cotxe2) + "<br>";
  text += ">> Creat Cotxe3<br>";
  text += JSON.stringify(Cotxe3) + "<br>";
  text += ">> Creat Cotxe4<br>";
  text += JSON.stringify(Cotxe4) + "<br>";
  text += ">> Creat Cotxe5<br>";
  text += JSON.stringify(Cotxe5) + "<br>";
  text += "<br><br>";

  //cotxes a array
  let cotxes = [Cotxe1, Cotxe2, Cotxe3, Cotxe4, Cotxe5];
  text += ">> Guardem cotxes a array<br>";
  text += JSON.stringify(cotxes) + "<br>";
  text += "<br><br>";

  //crides per cada cotxe
  cotxes.forEach((cotxe) => {
    console.log(cotxe); //print instància
    text += ">> Pugem a cotxe ";
    text += JSON.stringify(cotxe) + "<br>";
    
    console.log(cotxe instanceof CotxeES6); // true
    
    text += ">> Marca " + cotxe.marca + "<br>";
    console.log(cotxe.marca); //print directe propietat marca
    
    text += ">> Velocitat " + cotxe.velocitat + "<br>";
    console.log(cotxe.velocitat); //velocitat actual
    
    text += ">> Accelerem!" + "<br>";
    cotxe.accelerar(); //accelerem
    text += ">> Velocitat " + cotxe.velocitat + "<br>";
    console.log(cotxe.velocitat);

    text += ">> Frenem!" + "<br>";
    cotxe.fre(); //fre
    text += ">> Velocitat " + cotxe.velocitat + "<br>";
    console.log(cotxe.velocitat);

    console.log(CotxeES6.prototype.isPrototypeOf(cotxe)); //true

    //frenem n vegades
    let n = 50;
    for (let i = 0; i < n; i++) {

      text += ">> Frenem!" + "<br>";
      cotxe.fre();
      text += ">> Velocitat " + cotxe.velocitat + "<br>";
      console.log(cotxe.velocitat);
    }
    text += "<br><br>";
  });

  //sortida;
  sortida = document.getElementById("sortida62");
  sortida.innerHTML = text;
};

