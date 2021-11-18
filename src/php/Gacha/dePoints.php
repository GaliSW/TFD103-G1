<?php
    $member = $_POST["member"];
    include "../Manager.php";
    include "../connection.php";

    $sql = "INSERT INTO POINTS_TU(FK_USERNAME,DEALDATE,SRC,CHANGE_POINT) VALUES(?,NOW(),3, -300)";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $member);
    $statement->execute();
    echo getSession();
?>