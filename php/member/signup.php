<?php

    include("connection.php");

       //---------------------------------------------------

       $userId = htmlspecialchars($_POST["userId"]);
       $password = htmlspecialchars($_POST["password"]);
        $email = htmlspecialchars($_POST["email"]);

        // auth = 1為正常

       //建立SQL
       $sql = "INSERT INTO MEMBER( USERNAME, PASSWORD , EMAIL ,POINTS , USER_IMG , SIGNUP_DATE , AUTH) VALUES  ( ? , ? , ? , 0 , 'r1.jpg' ,  NOW() , 1)";
        $pdo = getPDO();
        //執行
        $statement = $pdo->prepare($sql);

       $statement->bindValue ( 1 , $userId);
       $statement->bindValue ( 2 , $password);
        $statement->bindValue(3, $email);
       $statement->execute();
    //    header("Location: Select.php");
?>