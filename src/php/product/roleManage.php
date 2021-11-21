<?php
    include "../connection.php";
    include "../Manager.php";
    
    // echo getSession();
    $Name = getSession();
    $sql =  "SELECT T1.PRODUCT_ID,T1.FK_USERNAME,T1.FK_GACHA_ID,T1.PRICE,T1.TRANS,T1.AMOUNT,T1.ISSHOW,
            T2.GACHA_ID,T3.ROLE_ID,T3.RNAME,T3.COLOR,T3.ROLE_IMG,T3.ABILITY,T3.ROLE_CONTENT
                FROM PRODUCT T1
                LEFT JOIN GACHA T2
                ON T1.FK_GACHA_ID = T2.GACHA_ID
                LEFT JOIN ROLE T3
                ON T2.FK_ROLE_ID = T3.ROLE_ID
                WHERE T1.FK_USERNAME = ?
                && T1.ISSHOW = 1
                ORDER BY T1.AMOUNT DESC";

    $statement= $pdo->prepare($sql);
    $statement->bindValue(1, $Name);
    $statement->execute();
    $data= $statement->fetchAll();
    echo json_encode($data); 
    // echo "Y";        

?>