<?php

$password = $_POST["password"];
include("../connection.php");
include "../Manager.php";
$Name = getSession();

//---------------------------------------------------

//建立SQL
$sql = "update MEMBER 
	set PASSWORD = ?
    where USERNAME =  '$Name'";

//執行
$statement = $pdo->prepare($sql);

$statement->bindValue(1, $password);
$statement->execute();
//    header("Location: Select.php");
echo "Y";
?>
