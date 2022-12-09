'use strict';

/*

1. Creeu una funció "whereAmI" que prengui com a entrades 
un valor de latitud (lat) i un valor de longitud (lng) 
(es tracta de coordenades GPS, a continuació es mostren exemples):

https://support.google.com/maps/answer/18539?hl=ca&co=GENIE.Platform%3DDesktop
. Graus, minuts i segons (GMS): 41°24'12.2"N 2°10'26.5"E
. Graus i minuts decimals (DMM): 41 24.2028, 2 10.4418
. Graus decimals (DD): 41.40338, 2.17403

Aplicar format a les coordenades
Apliqueu format a les coordenades perquè funcionin a Google Maps:

Utilitzeu el símbol de graus en comptes de "d".
Per als decimals, utilitzeu punts en comptes de comes. 
Correcte: 41.40338, 2.17403
Incorrecte: 41,40338, 2,17403
Indiqueu la coordenada de latitud abans de la de longitud.
Comproveu que el primer nombre de la coordenada de latitud estigui entre -90 i 90.
Comproveu que el primer nombre de la coordenada de longitud estigui entre -180 i 180.


2. Feu una "geocodificació inversa" de les coordenades proporcionades. 
La geocodificació inversa significa convertir coordenades a una ubicació significativa, 
com ara un nom de ciutat i país. 
Utilitzeu aquesta API per fer geocodificació inversa: https://geocode.xyz/api.

La crida AJAX es farà a un URL amb aquest format:
https://geocode.xyz/52.508,13.381?geoit=json . 

Utilitzeu l'API de recuperació i prometeu obtenir les dades. 

3. Un cop tingueu les dades, 
mireu-les a la consola per veure tots els atributs que heu rebut 
  sobre la ubicació proporcionada. 
Després, utilitzant aquestes dades, registreu un missatge com aquest a la consola:
 "Esteu a Berlin, Germany" 

4. Encadeneu un mètode .catch fins al final de la cadena de promeses 
i registreu els errors a la consola.

6. Ara és hora d'utilitzar les dades rebudes per representar un país. 
Per tant, agafeu l'atribut pertinent del resultat de l'API de geocodificació 
i connecteu-lo a l'API de països que hem estat utilitzant.

7. Renderitzeu el país i detecteu els errors, tal com hem fet als últims exemples  
(fins i tot podeu copiar aquest codi, sense necessitat d'escriure el mateix codi)

COORDENADES DE LA PROVA 1: 52.508, 13.381 (Latitud, Longitud)
COORDENADES DE LA PROVA 2: 19.037, 72.873
COORDENADES 2 DE LA PROVA: -33.933, 18.474

*/ 

let dades = [];
let div_dades = document.getElementById('sortida82');


const dades_form = (lat,long) => {
    let ok = false;

    if ( lat != '' && long != '') {
        //latitud estigui entre -90 i 90.
        //longitud estigui entre -180 i 180.
        if ( (lat >= -90) && (lat <= 90) && (long >= -180) && (long <= 180) ) {
            ok = true;
        }
    }
    //console.log(ok);
    return ok;
}

const mostra_pais = () => {
    let bandera = dades.pop()
    //console.log(bandera)

    //neteja div
    div_dades.innerHTML = '';

    //crea taula
    let taula = document.createElement('table');
    let tr = document.createElement('tr');

    div_dades.appendChild(taula);
    taula.appendChild(tr);

    //1a columna
    let td = document.createElement('td');
    let img = document.createElement('img');
    img.src = bandera;
    td.appendChild(img);
    tr.appendChild(td);

    //2a columa
    td = document.createElement('td');
    let ul = document.createElement('ul');
    td.appendChild(ul);
    
    dades.forEach( el => {
       let li = document.createElement('li');
       li.innerHTML = el
       ul.appendChild(li);
    })
    tr.appendChild(td);

}

const on_soc = () => {

    //definim
    let errors = "";
    let div_dades = document.getElementById('sortida82');

    //agafa dades form
    let lat = document.getElementById('lat').value;
    let long = document.getElementById('long').value;
    //console.log(lat,long);

    //valida form
    if ( dades_form(lat,long) ) {

        //console.log("OK FORM");

        //coordenades de prova
        //52.508, 13.381 (Latitud, Longitud)
        //19.037, 72.873
        //-33.933, 18.474

        //let coordenades = lat.toString() + ',' + long.toString()
        //console.log(coordenades);

        //demanem dades 1a api localització
        //fetch promesa, quan url envia les dades, les convertim a json
        //https://geocode.xyz/52.508,13.381?geoit=json . 

        //per controlar errors de petició HTTP
        //https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch

        fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
        .then( response => {
            //console.log(response);
            if ( response.ok ) {
                //console.log(response.json());
                //.json() ja retorna una promesa
                response.json()
                //promesa 2, quan tenim l'objecte json, tractem les dades
                .then(dades_geo => {
                    /*
                    console.log(dades_geo.city);
                    console.log(dades_geo.country);
                    console.log(dades_geo.geocode);
                    console.log(dades_geo.geonumber); 
                    console.log(dades_geo.prov);
                    */
            
                    let ciutat = dades_geo.city;
                    let pais = dades_geo.prov;
                    console.log(`Esteu a ${ciutat}, ${pais}` );
                    //retornem pais per continuar enllaçant
                    //i quan té pais, el passa per fer el 2n fetch
                    return pais
                    })
                //api països
                //https://restcountries.com/v3.1/alpha/de               
                .then( pais => {
                    fetch(`https://restcountries.com/v3.1/alpha/${pais}`)
                    .then( dades_pais => {
                        //console.log(dades_pais);
                        if ( dades_pais.ok ) {
                            dades_pais.json()
                            .then( pais => {
                                /*console.log(pais);
                                console.log(pais[0].name.official);
                                console.log(pais[0].currencies);
                                console.log(pais[0].languages);
                                console.log(pais[0].flags.png);
                                console.log(pais[0].capital[0]);
                                console.log(pais[0].population);*/

                                //preparem dades pais
                                let currencies = pais[0].currencies;
                                let monedes = "";
                                for (const prop in currencies) {
                                    //console.log(prop,currencies[prop].name, currencies[prop].symbol)
                                    monedes += currencies[prop].name + " ";
                                }
                                //console.log(monedes);
                                let languages = pais[0].languages
                                let idiomes = "";
                                for (const prop in languages) {
                                    idiomes += languages[prop] + " ";
                                }
                                //console.log(idiomes);

                                // [nom oficial, monedes, idiomes, capital, habitants, bandera]
                                dades = [pais[0].name.official, monedes, idiomes, pais[0].capital[0], pais[0].population, pais[0].flags.png ]

                                //mostrem valors
                                mostra_pais()

                            })
                        } else {
                            errors += 'Resposta de xarxa OK però resposta HTTP 2a petició no OK\n';
                        }
                    })
                    .catch ( error => {
                    errors += 'Problema amb la 2a petición Fetch:' + error.message + '\n';
                    });
                })
            } else {
              errors += 'Resposta de xarxa OK però resposta HTTP no OK\n';
            }
        div_dades.innerHTML = errors;
        })
        .catch( error => {
            errors += 'Problema amb la petición Fetch:' + error.message + '\n';
          });

    } else {
        errors += "* FATAL ERROR * dades form"
    }

//sortida
//console.log("ESTIC AL FINAL CODI");
div_dades.innerHTML = errors;

}
    
