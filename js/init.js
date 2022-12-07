"use strict";

const showSection = (num) => {
  //neteja
  $(".title").empty();
  $(".subtitle").empty();
  $(".text").empty();
  $(".code").empty();

  $("#code").css("display", "none");

  text = ">_";
  sortida = document.getElementById("sortida");
  sortida.innerHTML = text;

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

  if (ESSENTIALS[num]?.code) {
    $("#code").text(ESSENTIALS[num].code);
    //document.getElementById("jsstyle").style.fontSize = "140px";
    $("#code").css("display", "block");
  }

  //amaguem i mostrem secció
  $("section").hide();
  $(`#section${num}`).show();
};

const exercisesOrdered = () => {
  /*order by key*/
  /*
  const ordered = Object.keys(ESSENTIALS).sort().reduce(
    (obj, key) => { 
      obj[`${key}`] = ESSENTIALS[key]; 
      return obj;
    }, 
    {}
  );
  console.log(ordered);
  */

  /*order by property*/
  /*
  al no ser una ARRAY d'objectes iguals,
  creem una array d'objectes amb només key i ordenació (order)
  */
  const ordered = Object.entries(ESSENTIALS).map(([k, v]) => {
    let obj = {
      key: parseInt(k),
      order: v.order,
    };
    return obj;
  });

  /*ordenació per una propietat de l'array d'objectes*/
  //console.log(ordered[0]);
  ordered.sort((a, b) => (a.order > b.order ? 1 : -1));
  //console.log(ordered);

  /*doble ordenació*/
  ordered.sort((a, b) =>
    a.order > b.order ? 1 : a.order === b.order ? (a.key > b.key ? 1 : -1) : -1
  );

  return ordered;
};

//document ready
$(function () {
  console.log("jQuery ready init.js");

  //init section
  showSection(0);

  //per cada clau d'objecte
  //Object.entries(ESSENTIALS).forEach(([key, value]) => {

  //array objectes ordenada
  exercisesOrdered().forEach((obj) => {
    //console.log(obj);

    //afageix butó
    let buto = `<a class="button" id="button${obj.key}">${obj.key}</a>`;
    $("#menu").append(buto);

    //crea crida butó
    $(`#button${obj.key}`).on("click", () => {
      showSection(obj.key);
    });
  });
});
