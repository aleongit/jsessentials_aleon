'use strict';

/*
Exercici fetch
A partir de l’exemple, 
fes un llistat dels usuaris amb una petició fetch de tots els usuaris de la web 
https://reqres.in/api/users

mostra els camps id, avatar, Nom i Cognoms, email en una taula, 
amb una fila per cada usuari, en aquest ordre.
for each és una opció, però també hi ha el map
*/

/*
Fes una altra petició fetch que ens mostri les dades del segon element de l’array
Que surti el missatge carregant mentre es carreguen les dades
https://reqres.in/api/users/2
*/ 

let usuaris = [];

const fes_taula = (dades) => {
  //console.log(dades);

  //agafa div
  let div = document.getElementById('dades');

  //crea taula
  let taula = document.createElement('table');
  div.appendChild(taula);

  //dades és una array del JSON
  dades.map( fila  => {
    let tr = document.createElement('tr');
    taula.appendChild(tr);
    //console.log(fila);
      //fila és un objecte JSON, recorrem JSON
      for (const prop in fila) {
        let td = document.createElement('td');

        //si camp és avatar, fes imatge dins td
        if ( prop == 'avatar' ) {
          let img = document.createElement('img');
          img.src = fila[prop];
          td.appendChild(img);
        }
        else {
          td.innerHTML = fila[prop];
        }
        tr.appendChild(td);
        //console.log(fila[prop]);
      }
    }
    )
  }

  const fes_taula_user = (user) => {
    //console.log(user);
  
    //agafa div
    let div = document.getElementById('user');
    //neteja
    div.innerHTML = '';
  
    //crea taula
    let taula = document.createElement('table');
    let tr = document.createElement('tr');

    div.appendChild(taula);
    taula.appendChild(tr);

    //user és un objecte JSON, recorrem JSON
        for (const prop in user) {
          let td = document.createElement('td');
  
          //si camp és avatar, fes imatge dins td
          if ( prop == 'avatar' ) {
            let img = document.createElement('img');
            img.src = user[prop];
            td.appendChild(img);
          }
          else {
            td.innerHTML = user[prop];
          }
          tr.appendChild(td);
          //console.log(fila[prop]);
      }
    }

//demanem dades api

//fetch genera promesa 1, quan url envia les dades, les convertim a json
fetch("https://reqres.in/api/users")
    .then( data => data.json() )
//promesa 2, quan tenim l'objecte json, tractem les dades
//enviem les dades a la funció 'fes_taula'
    .then(data => {
        fes_taula(data.data);
//com que la funció no genera cap promesa, retornem nova promesa definit 'timeout'
      //que retorni funció 'resolve' valor 1 al cap de 2 segons
        return new Promise( (resolve, reject) => setTimeout( () => resolve(1), 2000) )
    //així passats 2 sg, encadenem l'alerta (que fa pause) 
    .then( promesa => {
        alert("Resolve! "+promesa+" Accepta per carregar les dades !");
    //a partir d'aquí fem un 2n fetch (que crea una nova promesa)
    //url dades, creació objecte json i mostrar les dades
        fetch("https://reqres.in/api/users/2")
    .then(data => data.json() ) 
    .then(user => {
        //console.log(user.data)
        fes_taula_user(user.data);
        });
        } )  
        }
        );


     
