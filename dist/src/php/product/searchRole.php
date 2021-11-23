<?php
    $search = $_POST["search"];
    include "../connection.php";

    $sql = "SELECT T1.PRODUCT_ID,T1.FK_USERNAME,T1.FK_GACHA_ID,T1.PRICE,T1.TRANS,T1.AMOUNT,T1.ISSHOW,
            T2.GACHA_ID,T3.ROLE_ID,T3.RNAME,T3.COLOR,T3.ROLE_IMG,T3.ABILITY,T3.ROLE_CONTENT,T4.USER_IMG
                FROM PRODUCT T1
                LEFT JOIN GACHA T2
                ON T1.FK_GACHA_ID = T2.GACHA_ID
                LEFT JOIN ROLE T3
                ON T2.FK_ROLE_ID = T3.ROLE_ID
                LEFT JOIN MEMBER T4
                ON T1.FK_USERNAME = T4.USERNAME
                WHERE  T1.AMOUNT = 1
                        AND T3.RNAME LIKE ?;
        ";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, "%".$search."%");
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    echo json_encode($data);

?>