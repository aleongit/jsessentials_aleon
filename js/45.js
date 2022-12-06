'use strict';

const marca8 = () => {

    //let sortida ="";

    //obtenir paràgraf
    let text = document.getElementsByTagName('pre');
    //console.log(text);
    
    //obtenir text html
    let text_html = text[0].innerHTML;
    //console.log(text_html);

    //array paraules, expressió /(\s+)/g [tots els separadors també són separats]
    //https://stackoverflow.com/questions/5365428/how-does-s-g-replace-spaces-with-other-characters/5365433
    let paraules = text_html.split(/(\s+)/g);
    //console.log(paraules);

    //modifico llista paraules si >=8 amb <mark> o no
    paraules = paraules.map(paraula => paraula.length >= 8 ? `<mark>${paraula}</mark>` : paraula);
    //console.log(paraules);

    //torno a string
    text_html = paraules.join('');

    //torno a html
    text[0].innerHTML = text_html;

    //sortida
    //document.getElementById('resultat').innerHTML = sortida;
    
}
