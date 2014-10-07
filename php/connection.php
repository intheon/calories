<?php

$host = 'localhost';
$username = 'root';
$password = '';
$database = 'wholegrain';

$connect = mysqli_connect($host,$username,$password,$database);

$data = mysqli_query($connect,'SELECT exercise_name,calories FROM exercise_calories');

class exercises
{
	public $exercise_name = "";
	public $exercise_calories = "";
}

$count = 0;

$json = array();


while($row = mysqli_fetch_assoc($data))
{
		$json[] =  $row;
}

mysqli_close($connect);

echo json_encode($json);


?>