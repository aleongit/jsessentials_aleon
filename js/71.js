"use strict";

/*
Fes un formulari per afegir títols de pel·lícules i que el llistat de títols surt al final,
es desaran en el local storage com parelles key: titol, value: titol , 
i només cal que tingui en compte no desar strings buits, 
cal que comproveu que el navegador permet utilitzar aquesta funcionalitat. 
Afegiu en una llista.
*/

//global
let pelis_storage = [];
let error = document.getElementById("resultat71");

const llista_pelis = () => {
  //console.log('fer <li>')
  //console.log(typeof(pelis_storage))

  //construim a doc
  //obtenim ul

  let ul = document.querySelector("#afegides ul");
  //let lis = ul.getElementsByTagName('li');
  //console.log(ul);
  //console.log(lis);
  //console.log(lis.length)
  //let arra = Array.from(lis);
  //let arra = [...lis];
  //console.log(arra);

  //netegem ul
  //no puc tractar amb les <li> perquè apareixen després
  //així que faig net de <ul> i construeixo <li> de llista pelis recuperada
  ul.innerHTML = "";

  //fer <li> per cada element array
  //<li>Peli 1</li>

  pelis_storage.forEach((peli) => {
    let li = document.createElement("li");
    li.innerHTML = peli;
    ul.appendChild(li);
  });
};

//LOCAL STORAGE
//comptabilitat navegador
//console.log(Storage);
const compatible_storage = () => typeof Storage !== "undefined";

const llegeix_pelis = () => {
  //recuperem localStorage
  //si no existeix retorna 'null'
  //let recupera = localStorage.getItem('pelis').split(',');
  let recupera = JSON.parse(localStorage.getItem("pelis"));
  //console.log(recupera);
  //console.log(typeof(recupera));

  //si hi ha pelis a storage, afegim a array pelis
  if (recupera != null) {
    pelis_storage = recupera;
    //console.log(pelis_storage);
  } else {
    //console.log("NO PELIS a LocalStorage")
  }
};

//inicial càrrega pàgina
//window.addEventListener('load',function () {
if (compatible_storage()) {
  llegeix_pelis();
  llista_pelis();
}
//});

const afegir_peli = () => {
  //si retorna false, no compatible
  if (compatible_storage()) {
    //obtenim peli
    let camp = document.querySelector("#peli");
    //console.log(camp);
    let peli = camp.value;
    //console.log(peli);

    //si no buit
    if (peli) {
      //console.log('ok ple');
      /*
              Mètodes relacionats
            ● setItem(clau, valor) – emmagatzemar un parell clau/valor.
            ● getItem(clau) – obtenir el valor per mitjà de la clau.
            ● removeItem(clau) – elimina la clau i el seu valor.
            ● clear() – borrar-ho tot.
            ● key(índex) – obtenir la clau d'una posició donada.
            ● length – el nombre d'ítems emmagatzemats.
            */

      //afegim a pelis
      //llegeix_pelis()
      pelis_storage.unshift(peli); //afegim al principi
      //console.log(pelis_storage);

      //guardem array com a LocalStorage
      localStorage.setItem("pelis", JSON.stringify(pelis_storage));
      //console.log('peli insertada');

      //llegeix_pelis()
      llista_pelis();

      //neteja camps
      camp.value = "";
      error.innerHTML = "";

      //localStorage.clear();
    } else {
      //console.log('buit')
      error.innerHTML = "* FATAL ERROR * falta peli";
    }
  } else {
    //console.log('no compatible storage')
    error.innerHTML = "* FATAL ERROR * no compatible LocalStorage";
  }
};
