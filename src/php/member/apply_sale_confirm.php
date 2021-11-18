<?php
$Name = $_POST["Name"];
$Buyer = $_POST["Buy"];
$Sale = $_POST["sale"];
include("../connection.php");

//---------------------------------------------------

//建立SQL
$sql = "update BYCHECK SET CONFIRM = 1 WHERE BYCHECK_ID = $Name;
        update PRODUCT 
        SET AMOUNT = 0,
        ISSHOW = 0 
        WHERE PRODUCT_ID = (select FK_PRODUCT_ID FROM BYCHECK WHERE BYCHECK_ID = $Name);
        ";



//執行
$statement = $pdo->prepare($sql);

$statement->execute();
//    header("Location: Select.php");
echo "Y";
