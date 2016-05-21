$(document).ready(function() {
    $('button').click(function() {
    	var toAdd = $("textarea").val();
        $('div').append("<p>"+toAdd+"</p>");
    });
});

