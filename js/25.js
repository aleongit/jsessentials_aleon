'use strict';

/*5. Fes una funció en javaScript que li passem una frase 
i retorna la paraula més llarga de la frase.*/

//declarem
let frase = "Fes una funció en javaScript que li passem una frase i retorna la paraula més llarga de la frase";

//dividir
//buscar max de lenght

document.write("<h3>Frase: </h3>");
document.write("<h4>" + frase + "</h4><br>");

const mesLlarga = function(cad) {
    
    //paraules amb separador espai
    let paraules = cad.split(" ");
    //console.log(paraules);
    
    //test
    //console.log(paraules.length);
    //console.log(paraules[0]);
    //console.log(paraules[0].length);
    
    //inicialitzo 1a paraula per comparació
    let llarga = paraules[0];
    //console.log(llarga.length);

    //miro cada paraula si és més llarga que 'llarga'
    for (let i = 0; i < paraules.length; i ++ ) 
        {
        //test
        //console.log(paraules[i]);
        //console.log(paraules[i].length);

        if (paraules[i].length > llarga.length) {
            llarga = paraules[i];
        }
    }
    return llarga;
}
document.write("<h3>Paraula més llarga: </h3>");
document.write("<h4><mark>" + mesLlarga(frase) + "</mark></h4>");
