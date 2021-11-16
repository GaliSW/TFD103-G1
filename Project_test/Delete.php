<?php

       include("connection.php");

       //---------------------------------------------------

       //建立SQL
       $sql = "DELETE FROM member WHERE USERNAME = 'Lillian'";

       //執行
       getPDO()->query($sql);


?>