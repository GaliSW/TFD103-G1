<?php

    include("../connection.php");

       //---------------------------------------------------

       
       $password = htmlspecialchars($_POST["pwd"]);
       

       //建立SQL
       $sql = "UPDATE  MEMBER SET PASSWORD =  '?'  WHERE USERNAME = 'LARRY'";
        $pdo = getPDO();
        //執行
        $statement = $pdo->prepare($sql);

       $statement->bindValue ( 1 , $password);
       $statement->execute();
    //    header("Location: Select.php");
