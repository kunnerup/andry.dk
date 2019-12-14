//JAVASCRIPT

//Burgermenuen. Tester om siden er klar og starter funktionen: ved klik
//på burgermenu skal mobilemenu toggle frem som slid.. Langsomt
//rammes med # eller . efter om det er class eller ID
$(document).ready(function() {
  $("#burgermenu").click(function() {
    $(".mobileMenu").slideToggle("slow");
  });
});

//Samme som ovenstående - en slider der åbner prislisten.
$(document).ready(function() {
  $("#skubud").click(function() {
    $("#priser").slideToggle("slow");
  });
});


//mapbox api
//Her indsættes selv kortet med vores egen token og style. Derudover tilpasses zoom og kordinator til startskærm
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYTU1MDgiLCJhIjoiY2syMDZ5bXBtMDBuZTNlcXpvbnozYzJuZSJ9.Wo5gS17JDQ8hYPQ82hQlgA';
var map = new mapboxgl.Map({
  style: 'mapbox://styles/jona5508/ck3zpq0h31vuk1cn74wbe32ug',
  center: [10.1540, 56.14355],
  zoom: 15.5,
  container: 'map',
});


map.on("load", function() {

  //loader her billedet der benyttes som pointer. MapBox egen pointer funktion benyttet.
  map.loadImage("https://i.imgur.com/MK4NUzI.png", function(error, image) {
    if (error) throw error;
    map.addImage("custom-marker", image);
    /* Style layer: sammensætter kilden til billede, og hvordan det skal vises. */
    map.addLayer({
      id: "markers",
      type: "symbol",
      /* Kilden.. specificerer de geografiske koordinater, hvor billedmarkøren skal placeres.*/
      source: {
        type: "geojson",
        data: {
          type: 'FeatureCollection',
          features: [{
            type: 'Feature',
            properties: {},
            geometry: {
              type: "Point",
              coordinates: [10.1545, 56.143]
            }
          }]
        }
      },
      layout: {
        "icon-image": "custom-marker",
      }
    });
  });
});



//SLIDER TIL 'KUNDERNE SIGER'
//Variabel som giver værdien 1. Showdivs viser det første billede - altså ”kundemening”
var kundemening = 1;
showDivs(kundemening);


//”plusDivs” funktion refererer til HTML-knapperne som kan lægge en til og trække en fra iimage slideren array.
function plusDivs(n) {
  showDivs(kundemening += n);
}


//showDiv skjuler billederne med class'en ”billedet”. Den viser billedet som er under class'en ”kundemening”(værdi 1).
//Klikkes der på pilene ændrer kodens visning egenskaber til (display=none) for alle de andre billeder, mens det billede som har værdien 1 kun kan ses.
function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("billedet");

//”kundemening” sættes tilbage til værdien 1 efter det sidste billede er vist.
//x.length refererer til ”billedet”-class’en og skaber en tråd med alle vores billeder, så billederne kan køre i rækkefølge. 
  if (n > x.length) {
    kundemening = 1;
  }

  //Trykker man til venstre i stedet for højre, vil det sidste billede i rækkefølgen blive vist først
  if (n < 1) {
    kundemening = x.length;
  }

  //”For” definerer loopens gang. i++ forøger værdien hver gang der bliver trykket på ”plusDiv” i HTML'en.
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[kundemening - 1].style.display = "flex";
}
