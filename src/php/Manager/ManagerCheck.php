<?php
    include "../Manager.php";
    include "../connection.php";

    $sql = "SELECT MAUTH from MANAGER where MACCOUNT = ? ";
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , getSessionB());   

    $statement->execute();

    $data = $statement->fetchAll();
    
    echo json_encode($data);
    //回傳session檢查結果
    // echo getSessionB();
    
    

?>