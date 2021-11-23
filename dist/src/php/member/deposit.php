<?php

$total = $_POST["total"];
include("../connection.php");
include "../Manager.php";
$Name = getSession();

//---------------------------------------------------

//建立SQL
$sql = "INSERT INTO POINTS_TU( FK_USERNAME, DEALDATE , SRC , CHANGE_POINT) 
        VALUES  ( '$Name' ,  NOW() , 0 , ?);
        INSERT INTO STORE ( FK_USERNAME, PDATE , TOTAL) 
        VALUES  ( '$Name' ,  NOW() , ?);";

//執行
$statement = $pdo->prepare($sql);

$statement->bindValue(1, $total);
$statement->bindValue(2, $total);
$statement->execute();
//    header("Location: Select.php");
echo "Y";
