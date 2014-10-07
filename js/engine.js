$(document).ready(function(){
	gatherValues();
});

function gatherValues()
{
	$.ajax({
		type: 'GET',
		dataType: 'JSON',
		url: 'php/connection.php',
		success: function(response)
		{
			addToHTML(response);
		}
	});
}

function addToHTML(jman)
{
	var data = JSON.parse(jman);
	console.log(data[0].exercise_name);
}

