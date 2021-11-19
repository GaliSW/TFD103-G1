<?php
    $Name = $_POST["Name"];
    include("../connection.php");

       //---------------------------------------------------

       //建立SQL
       $sql = "UPDATE  BYCHECK SET CONFIRM =  4  WHERE BYCHECK_ID = ?";
        
        //執行
        $statement = $pdo->prepare($sql);

       $statement->bindValue ( 1 , $Name);
       $statement->execute();
    //    header("Location: Select.php");
        echo "Y";