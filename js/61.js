"use strict";

/*
Cotxes (versió javascript antic):
Utilitzeu una funció constructora per implementar un cotxe. 
Un cotxe té una propietat de marca i velocitat. 
La propietat de velocitat és la velocitat actual del cotxe en km / h;
Implementar un mètode "accelerar" que augmentarà la velocitat del cotxe en 10 
  i registrar la nova velocitat a la consola;
Implementeu un mètode de "fre" que reduirà la velocitat del cotxe en 5 
  i registreu la nova velocitat a la consola;
Creeu 5 objectes de cotxes i deseu-los en un array.  
Treballarem amb  "accelerar" i "frenar" ,
mostreu la informació per la consola, mostreu la velocitat al costat. 
Afegiu una característica. La velocitat no pot ser negativa
*/

//constants
ACC = 20;
FRE = 5;

//classe cotxe js antic
const Cotxe = function (m, v) {
  // Propietats
  this.marca = m;
  this.velocitat = v; //velocitat actual del cotxe en km / h

  // No farem mai:
  // this.calcAge = function () { console.log(2020 - this.birthYear); // };
};

//prototypes (mètodes js antic)

Cotxe.prototype.accelerar = function () {
  this.velocitat += ACC;
  console.log(this.velocitat + " km/h");
};

Cotxe.prototype.fre = function () {
  //control velocitat negativa
  if (this.velocitat - FRE >= 0) {
    this.velocitat -= FRE;
  }
  console.log(this.velocitat + " km/h");
};

//Creeu 5 objectes de cotxes i deseu-los en un array.
//noves instàncies js antic

const script61 = () => {
  text = "";
  text += ">> Creant cotxes<br>";

  const Cotxe1 = new Cotxe("BMW", 300);
  const Cotxe2 = new Cotxe("Ferrari", 500);
  const Cotxe3 = new Cotxe("Seat", 60);
  const Cotxe4 = new Cotxe("Peugeot", 100);
  const Cotxe5 = new Cotxe("Nissan", 120);

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
    
    console.log(cotxe instanceof Cotxe); // true
    
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

    console.log(Cotxe.prototype.isPrototypeOf(cotxe)); //true

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
  sortida = document.getElementById("sortida61");
  sortida.innerHTML = text;
};
