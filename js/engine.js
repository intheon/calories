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

var html = [];

function addToHTML(jsondata)
{
	var data = JSON.parse(jsondata);

	console.log(jsondata);
	//for (key in data)
	//{
		//$("#output").append(data[key].exercise_name + " spends " + data[key].calories + " calories per minute <br />");

		//html.push("<option value='" + data[key].exercise_name + "'>" + data[key].exercise_name +  "</option>");
	//}


	//$("#form").append("<form>\
	//	<select id='select_exercise'>\
	//		" + html + "\
	//	</select>\
	//	<input type='text' id='input_calories' onkeypress='hoDown(this.value,select_exercise.value)'>\
	//	</form>");

}

console.log(addToHTML());

function hoDown(value,exercise)
{
	if (!value)
	{
		return false;
	}

	//var total = value * data.





}

