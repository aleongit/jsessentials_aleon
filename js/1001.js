'use strict';

/*
Exercicis curts amb JQuery (haureu d’investigar una mica)

1. Fer un botó que faci scroll fins al final de la pàgina (ajuda: animate)
2. Deshabilitar el botó dret del mouse 
    (ajuda: on https://www.w3schools.com/jquery/event_on.asp )
3. Deshabilitar el botó de submit fins que no hagin acceptar un check 
4. Fer un text intermitent. 
5. Fer un input de tipus description limitat a 15 caràcters (ajuda: keyup)
6. Informa per consola si cliqueu el botó dret o l'esquerra o es fa doble click
7. Deshabilitar un link. 
8. Comptar el nombre de milisegons que han passats entre els dos clics a un div  
  (ajuda: click i timeStamp)
9. Fes un efecte d’una pilota (border radius 999) 
  que rebota al final de la finestra 3 vegades, 
  i cada vegada puja menys i es desplaça cap a la dreta. S’activarà amb un botó.
*/ 


$(document).ready( () => {
    console.log("jQuery ready");

    /* 1 */
    $("#b1").click( () => {
      console.log( $('body').height() )
      $('body,html').animate({ scrollTop: $('body').height() }, 800);
      });

    /* 2 */
    /*
    $('body,html').on("contextmenu", () => {
          console.log('* CLICK DRET NO PERMÈS *');
          return false;
      });
    */
    
    /* 3 */
    $('#check').click( () => {

      if( $("#check").is(':checked') ) {
        $('#b3').attr("disabled",false);
      }
      else {
        $('#b3').attr("disabled",true);
      }

    });

    /* 4 */
    /*$('#text4').fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);*/
    
    $.fn.Blink = function (interval = 100, iterate = 1) {
      for (let i = 1; i <= iterate; i++)
          $(this).fadeOut(interval).fadeIn(interval);
    }
    /*
    $('#text4').Blink(); // Will Blink once
    $('#text4').Blink(500); // Will Blink once, but slowly
    $('#text4').Blink(100, 50); // Will Blink 50 times once
    */
    setInterval( function() { $('#text4').Blink(500) } ,1000);


    /* 5 */
    let maxLength = 15;
    $('#text5').keyup( () => {
      console.log('* KEY UP *');
      let textlen = maxLength - $('#text5').val().length;      
      $('#falten').text(`* Falten ${textlen} caràcters *`);
    });


    /* 6 */
    /*
      1 = Left   mouse button
      2 = Centre mouse button
      3 = Right  mouse button
    */
    $('body').mousedown( event => {
      switch (event.which) {
          case 1:
              console.log('* BOTÓ ESQUERRE *');
              break;
          case 2:
              console.log('* BOTÓ DEL MIG *');
              break;
          case 3:
              console.log('* BOTÓ DRET *');
              break;
          default:
              console.log('No tinc ni idea què has premut');
      }
  });

    $('body').dblclick( () => {
      console.log("* DOBLE CLICK *");
    });

    /* 7 */
    $('#b7').click( () => { 
      $("#link").removeAttr('href');
      $("#link").css('text-decoration','line-through');    
    });

    /* 8 */
    let click = 0;
    let temps, dif, sms;

    $("#temps").click( (e) => {
        click += 1;

        switch (click) {
          case 0:
              temps = e.timeStamp;
              $('#temps').text("* CLICA'M *");
              sms = "";
              break;
          case 1:
              temps = e.timeStamp;
              $('#temps').text('* CLICK ' + click + ' *');
              break;
          case 2:
              dif = e.timeStamp - temps;
              console.log(dif);
              sms = `* CLICK ${click} *<br>${ (dif / 1000).toFixed(2) } segons`;
              $('#temps').html(sms);
              click = 0;
              break;
        }
    });

    /* 9 */
    let cops = 3;
    $('#butobola').click( () => {

    //console.log( $('body').height() );
    //console.log( $("#bola").position() );
      let pos = $("#bola").position();
      let to = pos.top;
      let le = pos.left;
      //console.log(to,le);

        $("#bola").delay()
              .animate({opacity:1})
              .animate({left:'+=10', top: $('.containerbola').height()/3 }, 200)
              .animate({left:'+=10', top: $('.containerbola').height()/2 }, 200)
              .animate({left:'+=10', top: '-=10'}, 200)
              .animate({left:'+=10', top: $('.containerbola').height()/2 }, 200)
              .animate({left:'+=10', top: $('.containerbola').height()/2 }, 200)
              .animate({left:'+=10'}, 400)
              .animate({opacity:0})
              .animate({left: le, top:to})
    })

 
})


