<?php
$FK_USERNAME_BUY = $_POST["FK_USERNAME_BUY"];
$FK_PRODUCT_ID = $_POST["FK_PRODUCT_ID"];
$FK_GACHA_ID_BUY = $_POST["FK_GACHA_ID_BUY"];
$CHANGEDATE = $_POST["CHANGEDATE"];
include "../connection.php";  
//ho建立SQL 

        $sql = "INSERT INTO BYCHECK (FK_USERNAME_BUY, FK_PRODUCT_ID, FK_GACHA_ID_BUY, CHANGEDATE)
                VALUES(,NOW())";


    //   $sql = "INSERT INTO PRODUCT(FK_USERNAME, PRICE, TRANS, AMOUNT, ISSHOW, FK_GACHA_ID) VALUES (?, ?, ?, 1, 1, ?);
    //         UPDATE GACHA SET STATUS = (?) WHERE GACHA_ID = $GACHA_ID";
       //執行

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $FK_USERNAME_BUY);  
    $statement->bindValue(2 , $FK_PRODUCT_ID);
    $statement->bindValue(3 , $FK_GACHA_ID_BUY);
    $statement->bindValue(4, $CHANGEDATE);  

    $statement->execute();
    echo 'y';

?>