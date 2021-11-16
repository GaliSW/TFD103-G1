<?php
    $Name = $_POST["Name"];
    $adminBool = $_POST["adminBool"];
    include "connection.php";

    // $sql = "SELECT TOTAL,PDATE from STORE where CLASS = 0 & ";
    $sql = "UPDATE MANAGER SET MAUTH = ? WHERE MNAME = ?";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $adminBool);
    $statement->bindValue(2, $Name);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    // $data = $statement->fetchAll();
    // echo json_encode($data);

?>