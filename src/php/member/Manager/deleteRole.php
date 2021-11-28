<?php
    $roleID = $_POST["roleID"];
    include "../connection.php";

    // $sql = "SELECT TOTAL,PDATE from STORE where CLASS = 0 & ";
    $sql = "DELETE from ROLE where ROLE_ID = ?";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $roleID);
    $statement->execute();
?>