"use strict";

/*10. Crea una funció que generi 100 números aleatoris entre 1 i 1000 que no es repeteixin 
i després mostra'ls per consola ordenats.*/

//funció
const centNums = () => {
  const MAX = 1000;
  const N = 100;
  let nums = [];
  let num;
  let conta = 0;

  //test random
  //console.log(Math.random());
  //console.log(Math.random() * 1000);
  //console.log(Math.floor(Math.random() * 1000));

  //genera nums random fins N
  while (conta < N) {
    //genera num
    num = Math.floor(Math.random() * MAX);

    //si num no està en llista, afageix i incrementa comptador
    if (nums.indexOf(num) == -1) {
      nums.push(num);
      conta++;
    }
    //console.log(nums);
  }
  //ordenar
  console.log(nums.sort());

  //truc per ordenar nums
  console.log(
    nums.sort(function (a, b) {
      return a - b;
    })
  );
  console.log(nums.length);

  return nums;
};

//centNums();
text = "<h3>";
centNums().forEach((el) => {
  text += el + ", ";
});
text += "</h3>";

sortida = document.getElementById("section210");
sortida.getElementsByTagName("article")[0].innerHTML = text;
