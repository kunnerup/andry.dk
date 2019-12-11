//JAVASCRIPT

//Burgermenuen. Tester om siden er klar og starter funktionen: ved klik
//på burgermenu skal mobilemenu toggle frem som slid.. Langsomt
//rammes med # eller . efter om det er class eller ID
$(document).ready(function(){
$("#burgermenu").click(function(){
$(".mobileMenu").slideToggle("slow");
});
});

//Samme som ovenstående - en slider der åbner prislisten.
$(document).ready(function(){
  $("#skubud").click(function(){
    $("#priser").slideToggle("slow");
  });
});


//mapbox api
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9uYTU1MDgiLCJhIjoiY2syMDZ5bXBtMDBuZTNlcXpvbnozYzJuZSJ9.Wo5gS17JDQ8hYPQ82hQlgA';
var map = new mapboxgl.Map({
style: 'mapbox://styles/jona5508/ck3zpq0h31vuk1cn74wbe32ug',
center: [10.1540, 56.14355],
zoom: 15.5,
container: 'map',
antialias: true
});
