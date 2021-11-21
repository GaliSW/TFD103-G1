<?php

    include("../connection.php");
include "../Manager.php";
$Name = getSession();

       //---------------------------------------------------

       
       $password = htmlspecialchars($_POST["pwd"]);
       

       //建立SQL
       $sql = "UPDATE  MEMBER SET PASSWORD =  '?'  WHERE USERNAME = '$Name'";

        //執行
        $statement = $pdo->prepare($sql);

       $statement->bindValue ( 1 , $password);
       $statement->execute();
    //    header("Location: Select.php");
