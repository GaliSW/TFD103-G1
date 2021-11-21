<?php

    include("../connection.php");

    $myfav = ($_POST["myfav"]);

       //建立SQL
        $sql = "INSERT INTO MYFAV(FK_USERNAME) VALUES  ( ? )";
        $pdo = getPDO();
        //執行
        $statement = $pdo->prepare($sql);
        $statement->bindValue (1 , $myfav);
        $statement->execute();

        
?>