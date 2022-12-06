"use strict";

/* 2. Fes un programa javascript per modificar el color 
(cada paràgraf d’un color diferent) de la pàgina HTML (amb un bucle for):
*/

const script42 = () => {
  //afagem tots els <p>
  let els_p = document.querySelectorAll("#section42 p");
  console.log(els_p);

  //random color RGB
  //rgb(255, 0, 0)
  const random_RGB = () => Math.floor(Math.random() * 255) + 1;

  //*amb ForEach
  //els_p.forEach ( p => {
  //p.style.backgroundColor = "rgb(" + random_RGB() + "," + random_RGB() + "," + random_RGB() + ")"
  //p.style.backgroundColor = "rgb(255,0,65)";
  //});

  //*amb For
  for (let i = 0; i < els_p.length; i++) {
    let color =
      "rgb(" + random_RGB() + "," + random_RGB() + "," + random_RGB() + ")";
    els_p[i].style.backgroundColor = color;
  }
};
