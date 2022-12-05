'use strict';

/*8. Definiu una funció de fletxa dividirXDos que accepta un número i retorna aquest número dividit per 2.
Aplica aquesta funció a tots els elements d’un array.*/

//declarem
const nums = [1,2,25,50,100,100000,99854785]

document.write("<h4>" + nums + "</h4>");

//fletxa
const dividirXDos = nums => nums / 2;

document.write("<h4>");
//per cada element de l'array
for (let i = 0; i < nums.length; i++) {
    //console.log(nums[i])
    document.write(dividirXDos(nums[i]) + ", ");
};
document.write("</h4>");
