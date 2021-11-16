<?php
    $Name = $_POST["Name"];
    $Mail = $_POST["Mail"];
    $Pass = $_POST["Pass"];
    $Auth = $_POST["Auth"];
    include "connection.php";

    // $sql = "SELECT TOTAL,PDATE from STORE where CLASS = 0 & ";
    $sql = "INSERT INTO MANAGER(MNAME, MACCOUNT, MPASS, MAUTH) VALUES (?, ? , ?,?)";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $Name);
    $statement->bindValue(2, $Mail);
    $statement->bindValue(3, $Pass);
    $statement->bindValue(4, $Auth);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    // echo json_encode($data);

?>