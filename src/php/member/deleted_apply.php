<?php
$Id = $_POST["Id"];
include("../connection.php");

//---------------------------------------------------

//建立SQL
$sql = "delete from BYCHECK  WHERE BYCHECK_ID = ?";

//執行
$statement = $pdo->prepare($sql);

$statement->bindValue(1, $Id);
$statement->execute();
//    header("Location: Select.php");
echo "Y";
