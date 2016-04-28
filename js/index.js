$(document).ready(function() {
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
        numr = Math.floor((Math.random() * tours) + 0);
				nButton();
      }

      $("button").click(function() {
        if ($(this).is(".x")) {
          gagnant();
        } else {
          perdant();
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
					
        } else {
          sys = "Fermer";
        }
      }

      function perdant() {
        //Multiplier la valeur par 0.45 
        argent = argent * 0.45;
        //Pas d'argent? 
        if (argent <= 0) {
          sys = "Fermer";
        } else {
          //Décision continuer 
          var r = confirm("Voulez-vous essayer vos chances encore?");
          if (r === rue) {
            sys = "Charger";
            tours--;
            numr--;
						rButton();
          } else {
            sys = "Fermer";
          }
        }
      }

      function nButton() {
        for (var i = 0; i < tours; i++) {
          if (i === numr) {
            var btn = $('<button id="btn"></button>');
            btn.css("x");
            btn.appendTo('#serie');
          } else {
            var btn = $('<button id="btn"></button>');
            btn.appendTo('#serie');
          }

        }
				}
				
			function rButton() {
				$(".x").remove();
			}
      });
