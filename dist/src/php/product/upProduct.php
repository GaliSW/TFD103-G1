<?php
$GACHA_ID = $_POST["GACHA_ID"];
$USERNAME = $_POST["USERNAME"];
$PRICE = $_POST["PRICE"];
$TRANS = $_POST["TRANS"];
$STATUS = $_POST["STATUS"];
include "../connection.php";  
echo $GACHA_ID;
echo $USERNAME;
echo $PRICE;
echo $TRANS;
echo $STATUS;
//ho建立SQL 
      $sql = "INSERT INTO PRODUCT(FK_USERNAME, PRICE, TRANS, AMOUNT, ISSHOW, FK_GACHA_ID) VALUES (?, ?, ?, 1, 1, ?);
            UPDATE GACHA SET STATUS = (?) WHERE GACHA_ID = $GACHA_ID";
       //執行

      $statement = $pdo->prepare($sql);
      $statement->bindValue(1 , $USERNAME);  
      $statement->bindValue(2 , $PRICE);
      $statement->bindValue(3 , $TRANS);
      $statement->bindValue(4, $GACHA_ID);  
      $statement->bindValue(5, $STATUS);

      $statement->execute();
      echo 'y';

?>



