<?php
    include "../Manager.php";
    $Name = getSession();
    include "../connection.php";

    $sql = "select 
        *
        from BYCHECK T1
        left join PRODUCT T2
        on T1.FK_PRODUCT_ID = T2.PRODUCT_ID
        where (FK_USERNAME_BUY = '$Name' && T2.AMOUNT = 1 && T1.CONFIRM = 0)
        OR
        (T2.FK_USERNAME = '$Name' && T1.CONFIRM = 0 && T2.AMOUNT =1)";

    $statement = $pdo->prepare($sql);

    $statement->execute();
    
    $data = $statement->fetchAll();
    if(count($data)> 0){
        echo count($data);
    }

