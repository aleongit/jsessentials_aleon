"use strict";

/*9. Crea una funció que rebi un paràmetre, 1 dni, i retorni la lletra. 
Si el dni passat té algun error retornarà -1.*/

/*Càlcul de la lletra de control
La lletra del NIF s'obté a partir d'aplicar l'operació aritmètica de mòdul 23 al número del DNI.
El resultat és un nombre comprès entre el 0 i el 22 que es correspon a una lletra basant-se en la taula següent:
0	1	2	3	4	5	6	7	8	9	10	11	12	13	14	15	16	17	18	19	20	21	22
T	R	W	A	G	M	Y	F	P	D	X	B	N	J	Z	S	Q	V	H	L	C	K	E
Lletres de l'alfabet no utilitzades: I, O, U*/

const script29 = () => {
  const taula = "TRWAGMYFPDXBNJZSQVHLCKE";

  //funció lletra dni
  const lletraDni = (dni) => {
    //inicialitzem
    let c = "-1";

    //control si 8 dígits
    if (dni.length == 8 && !isNaN(dni)) {
      //console.log(dni)

      //càlcul lletra
      c = taula[Number(dni) % 23];
      //console.log(c);
    }
    return c;
  };

  //demanem dni, almenys 1 caràcter
  let dni = prompt("Escriu DNI [sense lletra]");

  text = "";
  if (lletraDni(dni) != "-1") {
    text = "<h3>" + dni + " : " + lletraDni(dni) + "</h3>";
  } else {
    text = "<h3> DNI no vàlid</h3>";
  }

  //mostra resultats
  sortida = document.getElementById("sortida");
  sortida.innerHTML = text;
};
