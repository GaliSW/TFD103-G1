<?php

//接收綠界回傳參數，型string
$data = file_get_contents("php://input");
//  print_r($_POST["TradeAmt"]);

//轉為數值
$total = $_POST["TradeAmt"];
include("../connection.php");
include "../Manager.php";
$Name = $_POST["StoreID"];


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
header("Location: ../../html/deposit.html");
;
