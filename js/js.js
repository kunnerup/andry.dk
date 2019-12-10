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
