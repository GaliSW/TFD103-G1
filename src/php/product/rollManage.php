<?php
    $Name = $_POST['Name'];
    include "../connection.php";

    $sql =  "SELECT * 
                FROM PRODUCT T1
                LEFT JOIN GACHA T2
                ON T1.FK_GACHA_ID = T2.GACHA_ID
                LEFT JOIN ROLE T3
                ON T2.FK_ROLE_ID = T3.ROLE_ID
                WHERE T1.FK_USERNAME = ?
                && T1.AMOUNT = 1
                ORDER BY T1.AMOUNT DESC";
                //&& T1.ISSHOW = 1";

    $statement= $pdo->prepare($sql);
    $statement->bindValue(1, $Name);
    $statement->execute();
    $data= $statement->fetchAll();
    echo json_encode($data); 
    // echo "Y";        

?>