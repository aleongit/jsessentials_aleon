"use strict";

const showSection = (num) => {
  //enunciat
  $(".title").empty();
  $(".subtitle").empty();
  $(".text").empty();

  //amb jquery no anava
  if (ESSENTIALS[num]?.src) {
    //$("head").append(ESSENTIALS[num].script);
    var script = document.createElement("script");
    script.setAttribute("src", ESSENTIALS[num].src);
    script.setAttribute("type", "text/javascript");
    document.head.appendChild(script);
  }

  if (ESSENTIALS[num]?.title) {
    $(".title").append(ESSENTIALS[num].title);
  }

  if (ESSENTIALS[num]?.subtitle) {
    $(".subtitle").append(ESSENTIALS[num].subtitle);
  }

  if (ESSENTIALS[num]?.text) {
    $(".text").append(ESSENTIALS[num].text);
  }

  //amaguem i mostrem secció
  $("section").hide();
  $(`#section${num}`).show();
};

//document ready
$(function () {
  console.log("jQuery ready init.js");

  //init section
  showSection(0);

  //change section
  /*
  $("#button11").on("click", () => {
    showSection(11);
  });
  */

  //per cada clau d'objecte
  Object.entries(ESSENTIALS).forEach(([key, value]) => {
    console.log(value);

    //afageix butó
    let buto = `<a class="button" id="button${key}">${key}</a>`;
    $("#menu").append(buto);
    
    //crea crida butó
    $(`#button${key}`).on("click", () => {
      showSection(key);
    });
  });
});
