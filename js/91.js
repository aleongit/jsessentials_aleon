"use strict";

/*
. cal que utilitzeu empty, append, prepend, i eq 
    per situar-vos a l’element de l’array que us interessi.
. podeu afegir/eliminar  “span”
*/

$(document).ready(() => {
  console.log("jQuery ready");

  //reset esdeveniment click de tots els botons
  $("button").off("click");

  //ini
  $("#div91").empty();


  $("#boto1").click(() => {
    $("#div91").empty();
  });

  //console.log($("#boto2").click());
  //$("#boto2").off("click");
  //console.log($("#boto2").click());

  $("#boto2").click(() => {
    $("#div91").append("<div class = 'verd' ></div>");
  });
  
  $("#boto3").click(() => {
    $("#div91").append("<div class = 'el fi' >FI</div>");
  });

  $("#boto4").click(() => {
    $("#div91").prepend("<div class = 'el in' >IN</div>");
  });

  $("#boto5").click(() => {
    $("#div91").find("div").eq(0).remove();
  });

  $("#boto6").click(() => {
    $("#div91").find("div").eq(-1).remove();
  });
});
