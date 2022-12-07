'use strict';

/*
4. Escriviu un formulari on indiqueu una fila i una columna, i un text, 
    i amb una funció JavaScript que accepti fila, columna 
    (per identificar una cel·la concreta) 
    i una cadena actualitzeu el contingut d’aquesta cel·la. 
*/

const script44 = () => {

    let text ="";

    //obtenir form
    let form = document.forms['form44'];
    //console.log(form);
    //console.log(form.length);

    //obtenir valors form
    //for (let i = 0; i < form.length; i ++) {
    //    console.log(form.elements[i]);    }
    
    //directament per índex + value
    let fila = parseInt(form[0].value);
    let col = parseInt(form[1].value);
    let txt = form[2].value;
    //console.log(fila + ", " + col + ", " + txt);
    //console.log(typeof(fila));

    //control valors form
    //fila i col ja són nums per input number
    if (fila && col && txt) {
        //console.log("ok dades");
    
        //obtenir taula
        let taula = document.getElementById('taula44');
        //console.log(taula);

        //obtenir num files i cols taula
        //num files
        let nFila = parseInt(taula.getElementsByTagName('tr').length);
        //console.log(nFila, typeof(nFila));
        
        //obtenim num cols de 1a fila
        let nCols = parseInt(taula.getElementsByTagName('tr')[0].getElementsByTagName('td').length);
        //console.log(nCols,typeof(nCols));

        //control valors dins taula
        if ( (fila > 0 && fila <= nFila) && (col > 0 && col <=nCols) ) {
            //console.log('ok valors');
            
            //localitzar td
            let item = taula.getElementsByTagName('tr')[fila - 1].getElementsByTagName('td')[col - 1]
            //console.log(item);

            //crear node text
            let txt_node = document.createTextNode(txt);

            //replace
            item.replaceChild(txt_node, item.childNodes[0]);
            //item.style.fontWeight = 'bold';
            item.className = 'marca';

        } else {
            //console.log('valors fora taula');
            text += "* FATAL ERROR * Valors fora taula"
        }
} else {
        //console.log("algun valor buit");
        text += "* FATAL ERROR * Dades incorrectes"
    }

    //sortida
    if (text) {
        //document.getElementById('resultat').style.backgroundColor = 'rgba(238, 255, 2, 0.377)';
        document.getElementById("resultat44").className = "error";
    } else {
        //document.getElementById('resultat').style.backgroundColor = 'white';
        document.getElementById("resultat44").className = "";
    }
    document.getElementById('resultat44').innerHTML = text;
    
}
