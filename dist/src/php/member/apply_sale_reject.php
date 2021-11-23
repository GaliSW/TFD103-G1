<?php
$Name = $_POST["Name"];
$CheckValue = $_POST["CheckValue"];
include("../connection.php");

//---------------------------------------------------

//建立SQL
$sql = "UPDATE  BYCHECK SET CONFIRM = 2, CHECKVALUE = ?  WHERE BYCHECK_ID = ?";

//執行
$statement = $pdo->prepare($sql);

$statement->bindValue(1, $CheckValue);
$statement->bindValue(2, $Name);
$statement->execute();
//    header("Location: Select.php");
echo "Y";
