var pw = prompt("Mot de passe:", "...");


if (pw == "NslmPaS2k19!") {
  $(".login").hide();
	
	console.log("lala");
} else {
  txt = "Accès refusé";
	$(".login").html(txt);
	
	console.log("foo");
}