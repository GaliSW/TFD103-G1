<?php
$GACHA_ID = $_POST["GACHA_ID"];
include "../connection.php";
       //建立SQL
   // $sql = "UPDATE PRODUCT SET ISSHOW = 0 WHERE FK_GACHA_ID = $GACHA_ID;
   // UPDATE GACHA SET STATUS = 1 WHERE GACHA_ID = $GACHA_ID";

   $sql = "DELETE from PRODUCT WHERE FK_GACHA_ID = $GACHA_ID;
         UPDATE GACHA SET STATUS = 1 WHERE GACHA_ID = $GACHA_ID";  

       //執行

   $statement = $pdo->prepare($sql);
   $statement->execute();
   echo 'y';

?>