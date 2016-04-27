$(document).ready(function() {
  //Variables - argent 
  var a;
  var argent;
  var pointage = 1;

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

  if (pointage => 100) {
    numr = Math.floor((Math.random() * tours) + 0);

    /*$(document).on("click", "#x", function() {
      /*var div = $('<button id="btn"></button>');
      div.html();
      div.appendTo('#serie');
      gagnant();
    });
    $(document).on("click", "#btn", function() {
      /*var div = $('<button id="btn"></button>');
      div.html();
      div.appendTo('#serie');
      gagnant();
    });*/
  }

  $("button").click(function() {
    if ($(this).is(".x")) {
      gagnant();
    }
  });

  function gagnant() {
    //Multiplier la valeur par 0.4 
    argent = argent * 0.4;
    //Décision continuer 
    var r = confirm("Voulez-vous essayer vos chances encore?");
    if (r === true) {
      sys = "Charger";
      tours++;
      numr++;
      initUI();
    } else {
      sys = "Fermer";
    }
  }
});
