$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("textarea").val();
		$.getJSON("https://api.fda.gov/drug/label.json?search=brand_name:"+toAdd, function(data) {
			
			var brand = "";
			for (var i = 0; i < 10; i+=2) {
				brand +="H\n";
			}
			$("#brandName").text(brand);
			console.log(brand);
			$("#genericName").text(data.results[0].openfda.generic_name);
			$("#purpose").text(data.results[0].purpose);
		});
		$.getJSON("https://api.fda.gov/drug/event.json?search=brand_name:"+toAdd, function(data){
			$("#sideEffects").text(data.results[0].patient.reaction[0].reactionmeddrapt);
		}); 
    });
});

