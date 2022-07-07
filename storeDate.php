<?php
// database connection code
if(isset($_POST['meetingTime']))
{
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
$con = mysqli_connect('localhost', 'root', '','db_dates');

// get the post records

$dateTime = $_POST['meetingTime'];

// database insert SQL code
$sql = "INSERT INTO `date` (`id`, `date`) VALUES ('0', '$dateTime')";

// insert in database
$rs = mysqli_query($con, $sql);
if($rs)
{
	echo "Contact Records Inserted";
}
}
else
{
	echo "Are you a genuine visitor?";

}
?>
