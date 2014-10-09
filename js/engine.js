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
			return response;
		}
	});
}


var html = [];
var data;
function addToHTML(jsondata)
{
	data = JSON.parse(jsondata);

	for (key in data)
	{
		$("#output").append(data[key].exercise_name + " spends " + data[key].calories + " calories per minute <br />");

		html.push("<option value='" + data[key].exercise_name + "'>" + data[key].exercise_name +  "</option>");
	}

	$("#form").append("<form>\
		<select id='select_exercise'>\
			" + html + "\
		</select>\
		<input type='text' id='input_minutes' onchange='hoDown(this.value,select_exercise.value)'>\
		</form>");
}

var calorieTotals = [];

function hoDown(minutes,exercise)
{

	if (!minutes || isNaN(minutes))
	{
		return false;
	}

	for (i = 0; i <= data.length - 1; i++)
	{
		if (data[i].exercise_name == exercise)
		{
			calorieTotals.push(data[i].calories*minutes);
			$("#header").append("<div>"+minutes+" minutes of "+exercise+"</div>");
			$("#content").append("<div>"+data[i].calories*minutes+"</div>");
			$("#total").html("<h3>Total: "+eval(calorieTotals.join('+'))+"</h3>");
			break;
		}
	}

}

