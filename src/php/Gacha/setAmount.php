<?php
    $roleStr = $_POST["roleStr"];
    include "../connection.php";

    $sql = "UPDATE ROLE SET AMOUNT = 0 where RNAME = ?;";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $roleStr);
    $statement->execute();
?>