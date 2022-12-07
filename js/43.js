'use strict';

/*
3. Fes una funció javascript per afegir files en una taula 
quan es premi el botó: 
*/

const script43 = () => {
    //obtenir taula
    let taula = document.getElementById('taula43');
    //console.log(taula);
    //console.log(taula.getElementsByTagName('tr'));

    //obtenim número files
    let nFila = taula.getElementsByTagName('tr').length;
    //console.log(nFila);
    
    //obtenim 1a fila
    let fila = taula.getElementsByTagName('tr')[0];
    //console.log(fila.getElementsByTagName('td'));

    //obtenim número columnes de 1a fila, obtenint els seus 'td'
    let nCols = fila.getElementsByTagName('td').length;
    //console.log(nCols);

    //insertar fila (tr) a taula a índex (-1 final)
    let nova_fila   = taula.insertRow(-1);
    //console.log(nova_fila);
    
    //incrementem num files
    nFila += 1;

    //afegim columnes fins nCols
    for (let i = 0; i < nCols; i ++) {

        //insertar caselles (td) a fila
        let  nova_col  = nova_fila.insertCell(-1);

        //afegir text a td
        let text  = document.createTextNode('F' + nFila + ' ' + 'Cel·la ' + parseInt(i + 1));
        nova_col.appendChild(text);
    }
}

