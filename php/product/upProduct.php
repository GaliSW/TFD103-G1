<?php
$GACHA_ID = $_POST["GACHA_ID"];
$USERNAME = $_POST["USERNAME"];
$PRICE = $_POST["PRICE"];
$TRANS = $_POST["TRANS"];
include "connection.php";
       //建立SQL
      $sql = "INSERT INTO PRODUCT(FK_USERNAME, PRICE, TRANS, AMOUNT, ISSHOW, FK_GACHA_ID) VALUES (?, ?, ?, 1, 1, ?)";
      $sql = "GACHA_ID INTO (STATUS) VALUES (0)";
       //執行

      $statement = $pdo->prepare($sql);
      $statement->bindValue(1 , $USERNAME);  
      $statement->bindValue(2 , $PRICE);
      $statement->bindValue(3 , $TRANS);
      $statement->bindValue(4, $GACHA_ID);  

      $statement->execute();
      
      echo 'y';
?>