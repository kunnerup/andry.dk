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

  //loader her billedet der benyttes som pointer
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
var kundemening = 1;
showDivs(kundemening);

function plusDivs(n) {
  showDivs(kundemening += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("billedet");
  if (n > x.length) {
    kundemening = 1;
  }
  if (n < 1) {
    kundemening = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[kundemening - 1].style.display = "flex";
}
