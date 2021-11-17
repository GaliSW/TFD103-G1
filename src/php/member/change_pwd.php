<?php
// $Name = $_POST[""];
$password = $_POST["password"];
include("../connection.php");

//---------------------------------------------------

//建立SQL
$sql = "update MEMBER 
	set PASSWORD = ?
    where USERNAME =  'LILLAN123'";

//執行
$statement = $pdo->prepare($sql);

$statement->bindValue(1, $password);
$statement->execute();
//    header("Location: Select.php");
echo "Y";
?>
