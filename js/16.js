'use strict';

/*6. Fes una calculadora demani 2 nombres per pantalla, 
i després demani l’operació aritmètica a realitzar (+ - * / %) 
i finalment mostri amb una alerta el resultat.*/

const script16 = () => {

//declarem
let n1, n2, op, text;
let operacions = ['+','-','*','/','%'];

do {
  n1 = prompt("Número 1");
  } while (isNaN(n1));
  
do {
  n2 = prompt("Número 2");
  } while (isNaN(n2));

do {
  op = prompt("Operació [ + - * / % ]");
  console.log(operacions.indexOf(op));
  } while (operacions.indexOf(op)== -1);

//passem a número
n1 = Number(n1), n2 = Number(n2);

//iniciem text  
text = "";

//calcular
switch (op) {
  case '+':
    text += n1 + " + " + n2 + " = " + (n1+n2);
    break;
  case '-':
    text += n1 + " - " + n2 + " = " + (n1-n2);
    break;
  case '*':
    text += n1 + " * " + n2 + " = " + (n1*n2);
    break;
  case '/':
    text += n1 + " / " + n2 + " = " + (n1/n2);
    break;
  case '%':
    text += n1 + " % " + n2 + " = " + (n1%n2);
    break;
}

//mostra resultats
alert(text);
sortida = document.getElementById("sortida");
sortida.innerHTML = text;

}