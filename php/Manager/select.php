<?php
    include "connection.php";
    //建立SQL語法
    $sql = "SELECT * FROM ROLE";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    
    echo $data;
    // echo json_encode($data);
?>
