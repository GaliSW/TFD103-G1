<?php
$FK_PRODUCT_ID = $_POST["PRODUCT_ID"];

//買家
include "../Manager.php";
$Name = getSession();

include("../connection.php");

//---------------------------------------------------

//建立SQL

//確認買家餘額
$sql= "SELECT SUM(CHANGE_POINT) 
        FROM POINTS_TU 
        WHERE FK_USERNAME = '$Name';";
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $data = $statement->fetchAll();

    foreach ($data as $index => $row) {
        $Balance = $row["SUM(CHANGE_POINT)"];
    }

//抓取產品數據
$sql2 = "SELECT * FROM PRODUCT T1
            LEFT JOIN GACHA T2
            ON T1.FK_GACHA_ID = T2.GACHA_ID
            WHERE T1.PRODUCT_ID = $FK_PRODUCT_ID;";
        $statement2 = $pdo->prepare($sql2);
        $statement2->execute();
        $data2 = $statement2->fetchAll();

foreach ($data2 as $index2 => $row2) {
    $Price = $row2["PRICE"];
    $Sale = $row2["FK_USERNAME"];
    $GACHA_ID=$row2["FK_GACHA_ID"];
}


if ($Balance >= $Price ){
    $sql3 = "   -- 先轉換點數
                insert into POINTS_TU( FK_USERNAME, DEALDATE, SRC, CHANGE_POINT) 
                values('$Name', NOW(), 1, -$Price),
                ('$Sale', NOW(), 2, $Price);
                -- GACHA 狀態更改
                UPDATE GACHA 
                SET FK_USERNAME = '$Name',
                STATUS = 1
                WHERE GACHA_ID = $GACHA_ID;
                -- 產品狀態更新
                UPDATE PRODUCT 
                SET AMOUNT = 0,
                    ISSHOW = 0 
                WHERE PRODUCT_ID = $FK_PRODUCT_ID
                ";

    $statement3 = $pdo->prepare($sql3);
    $statement3->execute();

    echo "y";
}else{
    //帳戶錢不夠
    echo "no";
}



