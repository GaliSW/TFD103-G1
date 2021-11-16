<?php

       include("connection.php");

       //---------------------------------------------------

       //建立SQL
       $sql = "INSERT INTO member(USERNAME, PASSWORD) VALUES ('ANDY', 'aBBa')";
       getPDO() ->query($sql);

       //執行
       // $pdo->query($sql);


?>