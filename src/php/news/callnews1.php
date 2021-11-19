<?php
    $find = $_POST["find"];
    include "../connection.php";

    $sql = "SELECT * from ARTICLE WHERE CONTENT like ?  OR  TITLE like ?  ";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "%".$find."%");
    $statement->bindValue(2, "%".$find."%");
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    echo json_encode($data);

?>