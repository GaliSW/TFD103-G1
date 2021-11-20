<?php
    include("./connection.php");
    include "./Manager.php";
    $Name = getSession();
    //---------------------------------------------------
    //建立SQL
    $sql="SELECT 
            T1.FAV_ID,
            T1.FK_USERNAME,
            T2.PRODUCT_ID,
            T2.PRICE,
            T2.AMOUNT,
            T4.RNAME,
            T4.ROLE_IMG,
            T4.ABILITY
        FROM MYFAV T1
        LEFT JOIN PRODUCT T2
        ON T1.FK_PRODUCT_ID = T2.PRODUCT_ID
        LEFT JOIN GACHA T3
        ON T2.FK_GACHA_ID = T3.GACHA_ID
        LEFT JOIN ROLE T4
        ON T3.FK_ROLE_ID = T4.ROLE_ID
        WHERE T1.FK_USERNAME = 'JOJO'";


        $statement = $pdo->query($sql);

        $statement->execute();
   
        //抓出全部且依照順序封裝成一個二維陣列
        $data = $statement->fetchAll();

        echo json_encode($data);
    
?>