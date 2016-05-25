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
            numr = Math.floor((Math.random() * tours) + 0);
      gagnant();
    } else {
      //alert("O");
      //$(this).remove();
            numr = Math.floor((Math.random() * tours) + 0);
      perdant();
    }
  });

  function gagnant() {
          tours++;
    //Multiplier la valeur par 0.4
          nButton();
    argent = argent * 0.4;
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
    nButton();
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
    pariG();
    $("button").remove();
   // alert(numr);
    //alert(tours);
    for (var i = 0; i < tours; i++) {
      if (i === numr) {
        var btn = document.createElement("BUTTON");
        btn.setAttribute("class", "x");
        btn.setAttribute("id", "btn");
        document.getElementById("jeux").appendChild(btn);
      } else {
        var btn = document.createElement("BUTTON");
        btn.setAttribute("class", "o");
        btn.setAttribute("id", "btn");
        document.getElementById("jeux").appendChild(btn);
      }

    }
  }

function pariG() {
  document.getElementById("myText").value = tours;
  a = argent + tours;
}
});
