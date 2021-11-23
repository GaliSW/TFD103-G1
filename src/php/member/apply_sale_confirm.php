<?php
$Id = $_POST["Id"];
$Buyer = $_POST["Buy"];
$Sale = $_POST["Sale"];
$gachaBuy = $_POST["gachaBuy"];
$gachaSale = $_POST["gachaSale"];
include("../connection.php");

//---------------------------------------------------

//建立SQL
$sql = "update BYCHECK SET CONFIRM = 1 WHERE BYCHECK_ID = $Id;
        update PRODUCT 
        SET AMOUNT = 0,
        ISSHOW = 0 
        WHERE FK_GACHA_ID = $gachaBuy;
        update PRODUCT 
        SET AMOUNT = 0,
        ISSHOW = 0 
        WHERE FK_GACHA_ID = $gachaSale;
        ";
$pdo->query($sql);

$sql="update GACHA 
        SET FK_USERNAME = '$Buyer',
        STATUS = 1
        WHERE GACHA_ID = $gachaSale;
        update GACHA 
        SET FK_USERNAME = '$Sale',
        STATUS = 1
        WHERE GACHA_ID = $gachaBuy;";


//執行
$statement = $pdo->prepare($sql);

$statement->execute();
//    header("Location: Select.php");
echo "Y";
