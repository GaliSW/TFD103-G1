<?php
    $roleImg = $_POST["roleImg"];
    include "../Manager.php";
    include "../connection.php";

    $sql =  "UPDATE MEMBER SET USER_IMG = ? where USERNAME = ?;
            INSERT INTO POINTS_TU(FK_USERNAME,DEALDATE,SRC,CHANGE_POINT) VALUES(?,NOW(),4,50);
    ";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $roleImg);
    $statement->bindValue(2, getSession());
    $statement->bindValue(3, getSession());
    $statement->execute();
?>