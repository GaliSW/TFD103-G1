<?php
$GACHA_ID = $_POST["GACHA_ID"];
include "../connection.php";
       //建立SQL
   $sql = "UPDATE PRODUCT SET AMOUNT = 0 WHERE FK_GACHA_ID = $GACHA_ID";
       //執行

   $statement = $pdo->prepare($sql);
   $statement->execute();
   echo 'y';

?>



