<?php
    include "connection.php";
    $sql = "INSERT INTO ROLE(RNAME, COLOR) VALUES ('我是一隻貓', '紅色')";

    // echo "123";
    $statement = $pdo->prepare($sql);
       //執行
    $statement->execute();

?>