<?php

       include("connection.php");

//---------------------------------------------------

        $pdo = getPDO();

       //建立SQL
       $sql = "UPDATE member SET PASSWORD = '852369' WHERE USER_ID = '3'";

       //執行
       $pdo->exec($sql);
