<?php
include "../connection.php";
       //建立SQL
    $sql = "SELECT T1.PRODUCT_ID,T1.FK_USERNAME,T1.FK_GACHA_ID,T1.PRICE,T1.TRANS,T1.AMOUNT,T1.ISSHOW,
                T2.GACHA_ID,T3.ROLE_ID,T3.RNAME,T3.COLOR,T3.ROLE_IMG,T3.ABILITY,T3.ROLE_CONTENT,T4.USER_IMG
                    FROM PRODUCT T1
                    LEFT JOIN GACHA T2
                    ON T1.FK_GACHA_ID = T2.GACHA_ID
                    LEFT JOIN ROLE T3
                    ON T2.FK_ROLE_ID = T3.ROLE_ID
                    LEFT JOIN MEMBER T4
                    ON T1.FK_USERNAME = T4.USERNAME
                    WHERE  T1.AMOUNT = 1 && T1.FK_USERNAME is not null";
       //執行

    $statement= $pdo->prepare($sql);
    $statement->execute();
    $data= $statement->fetchAll();
    echo json_encode($data);
?>



