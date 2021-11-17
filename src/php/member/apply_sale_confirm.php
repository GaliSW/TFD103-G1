<?php
$Name = $_POST["Name"];
include("../connection.php");

//---------------------------------------------------

//建立SQL
$sql = "update BYCHECK SET CONFIRM = 1 WHERE BYCHECK_ID = :name;
        update PRODUCT SET AMOUNT = 0 WHERE PRODUCT_ID = (select FK_PRODUCT_ID FROM BYCHECK WHERE BYCHECK_ID = :name)";



//執行
$statement = $pdo->prepare($sql);
$statement->bindValue(":name", $Name);

$statement->execute();
//    header("Location: Select.php");
echo "Y";
