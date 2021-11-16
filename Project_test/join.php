<?php

    include("connection.php");

       //---------------------------------------------------

       $account = htmlspecialchars($_POST["userId"]);
       $password = htmlspecialchars($_POST["password"]);
        $email = htmlspecialchars($_POST["email"]);

       //建立SQL
       $sql = "INSERT INTO MEMBER( USERNAME, PASSWORD , EMAIL , SIGNUP_DATE) VALUES  ( ? , ? , ? , NOW())";
        $pdo = getPDO();
        //執行
        $statement = $pdo->prepare($sql);

       $statement->bindValue ( 1 , $account);
       $statement->bindValue ( 2 , $password);
        $statement->bindValue(3, $email);
       $statement->execute();
       header("Location: Select.php");
?>