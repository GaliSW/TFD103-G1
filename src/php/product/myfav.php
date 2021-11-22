<?php

    include("../connection.php");

    $USERNAME = ($_POST["USERNAME"]);
    $PRODUCTID = ($_POST["PRODUCTID"]);

       //建立SQL
        $sql = "INSERT INTO MYFAV(FK_PRODUCT_ID, FK_USERNAME) VALUES  (?, ?)";
        //執行
        $statement = $pdo->prepare($sql);
        $statement->bindValue (1 , $PRODUCTID);
        $statement->bindValue (2 , $USERNAME);
        $statement->execute();
?>