$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("textarea").val();
        /*$('#click').append('<a href="https://api.fda.gov/drug/label.json?search='+toAdd+'">'+toAdd+'</a>');*/
		$('#clik').attr("href","https://api.fda.gov/drug/label.json?search=brand_name:"+toAdd);
    });
	
});

