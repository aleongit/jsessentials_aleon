"use strict";

/*
Crea un camp textarea que “autodesi” els seus valors en cada canvi (cada lletra premuda).
Llavors, si l'usuari tanca accidentalment la pàgina i l'obre de nou, 
trobarà la seva entrada inacabada al seu lloc.
*/

//global
let textarea = document.getElementById("textarea72");

//LOCAL STORAGE
//comptabilitat navegador
//console.log(Storage);
const compatible_storage72 = () => typeof Storage !== "undefined";

/*
The KeyDown event is triggered when the user presses a Key.
The KeyUp event is triggered when the user releases a Key.
The KeyPress event is triggered when the user presses & releases 
a Key. (onKeyDown followed by onKeyUp)

Down happens first
Press happens second (when text is entered)
Up happens last (when text input is complete).

*/
/*
//keypress
inputNom.addEventListener('keypress',function(event){

      var key = event.key;
      console.log("KEYPRESS:tecla premuda :" + key);
       //console.log('keydown->has premut ',String.fromCharCode(event.keycode));
   });
*/

const get_LocalStorage = () => {
  //recuperem localStorage
  //si no existeix retorna 'null'
  console.log("get storage!");
  let storage = JSON.parse(localStorage.getItem("textarea"));
  //console.log(storage);
  //console.log(typeof(storage));

  //si hi ha storage, col·loquem
  if (storage != null) {
    textarea.innerHTML = storage;
  } else {
    //console.log("NO LocalStorage")
  }
};

const guarda_storage = (event) => {
  //console.log(event.key);
  //console.log(textarea);
  //console.log(textarea.value);
  //guardem textarea a LocalStorage
  localStorage.setItem("textarea", JSON.stringify(textarea.value));
};

//amb keyup, s'entera de qualsevol tecla (p.ex. backspace)
textarea.addEventListener("keyup", (event) => {
  if (compatible_storage72()) {
    guarda_storage(event);
  }
});

//inicial càrrega pàgina
//window.addEventListener('load',function () {
if (compatible_storage72()) {
  //recuperar LocalStorage cap a textbox
  get_LocalStorage();
}
//});
