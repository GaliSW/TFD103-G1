<?php
    include "../Manager.php";
    $Name = getSession();
    include "../connection.php";

    $sql = "select 
        count(*)
        from BYCHECK T1
        left join PRODUCT T2
        on T1.FK_PRODUCT_ID = T2.PRODUCT_ID
        where (FK_USERNAME_BUY = '$Name' && T2.AMOUNT = 1 && T1.CONFIRM = 0)
        OR
        (T2.FK_USERNAME = '$Name' && T1.CONFIRM = 0 && T2.AMOUNT =1)";

    $statement = $pdo->prepare($sql);

    $statement->execute();
    
    $data = $statement->fetchAll();
foreach ($data as $index => $row) {
    if($row["count(*)"] > 0){
        echo $row["count(*)"];
    }
      
}

