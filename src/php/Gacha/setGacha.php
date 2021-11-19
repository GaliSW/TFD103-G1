<?php
    $roleID = $_POST["roleID"];
    include "../Manager.php";
    include "../connection.php";

    $sql = "INSERT INTO GACHA(FK_ROLE_ID,FK_USERNAME,STATUS) VALUES(?,?,1)";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $roleID);
    $statement->bindValue(2, getSession());
    $statement->execute();
    echo getSession();
?>