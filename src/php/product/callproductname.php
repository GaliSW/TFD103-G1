<?php
    $GACHAID = $_POST["GACHAID"];
    
    include "../connection.php";

    // $sql = "SELECT * from product WHERE FK_GACHA_ID  = '$GACHAID'" ;

    $sql = "SELECT * 
    FROM PRODUCT T1
    LEFT JOIN GACHA T2
    ON T1.FK_GACHA_ID = T2. GACHA_ID
    LEFT JOIN ROLE T3
    ON T2.FK_ROLE_ID = T3.ROLE_ID
    WHERE T1.PRODUCT_ID = '$GACHAID';
    ";
    

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    echo json_encode($data);



?>
