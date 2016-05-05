$(document).ready(function () {
  //Variables - argent 
  var a;
  var argent;
  var pointage;

  //Variables - jeu 
  var tours = 3;
  var numr = 0;

  //DOM 
  a = document.getElementById("a").textContent;
  sys = document.getElementById("sys").textContent;
  serie = document.getElementById("serie");

  //Défini argent 
  argent = a;
  pointage = a * 100;

  if (pointage >= 100) {
    numr = Math.floor((Math.random() * tours) + 1);
    nButton();
  }

  $("body").on("click", "button", function () {
    //alert("hi");
    if ($(this).is(".x")) {
      //alert("X");
      gagnant();
      numr = Math.floor((Math.random() * tours) + 0);
    } else {
      //alert("O");
      $(this).remove();
      perdant();
      numr = Math.floor((Math.random() * tours) + 0);
    }
  });

  function gagnant() {
          tours++;
    //Multiplier la valeur par 0.4 
    argent = argent * 0.4;
      nButton();
    //Décision continuer 
    /*var r = confirm("Voulez-vous essayer vos chances encore?");
    if (r === true) {
      sys = "Charger";
            tours++;
      nButton();
    } else {
      sys = "Fermer";
    }*/
  }

  function perdant() {
    //alert("perdant");
    tours--;
    rButton();
    //Multiplier la valeur par 0.45 
    argent = argent * 0.45;
    //Pas d'argent? 
    /*if (argent <= 0) {
      sys = "Fermer";
    } else {
      //Décision continuer 
      var r = confirm("Voulez-vous essayer vos chances encore?");
      if (r === rue) {
        sys = "Charger";
        //alert(tours)
        rButton();
      } else {
        sys = "Fermer";
      }
    }*/
  }

  function nButton() {
    $("button").remove();
   // alert(numr);
    //alert(tours);
    for (var i = 0; i < tours; i++) {
      if (i === numr) {
        $(document.createElement('button'));
        $('<button id="btn" class="x"></button>').appendTo('#serie');
      } else {
        $('<button id="btn"></button>').appendTo('#serie');
        $(document.createElement('button'));
      }

    }
  }

  function rButton() {
    //alert("-1");
    $(".x").remove();
  }

});
