<?php
include("../connection.php");

//---------------------------------------------------
// 查詢購買，篩選會員id為1class為0
//建立SQL語法

$sql = "select 
            T1.BYCHECK_ID,
            T1.FK_USERNAME_BUY,
            T1.FK_GACHA_ID_BUY,
            T1.CHANGEDATE,
            T1.CONFIRM,
            T1.CHECKVALUE,
            T2.FK_USERNAME,
            T2.FK_GACHA_ID,
            T2.AMOUNT,
            T4.ROLE_IMG AS  ROLE_IMG_BUY,
            T6.ROLE_IMG
        from BYCHECK T1
        left join PRODUCT T2
        on T1.FK_PRODUCT_ID = T2.PRODUCT_ID
        -- 買家的
        left join  GACHA  T3
        on T1.FK_GACHA_ID_BUY = T3.GACHA_ID
        left join ROLE T4
        on T3.FK_ROLE_ID = T4.ROLE_ID
        -- 賣家的
        left join  GACHA  T5
        on T2.FK_GACHA_ID = T5.GACHA_ID
        left join ROLE T6
        on T5.FK_ROLE_ID = T6.ROLE_ID
        -- 買家
        where FK_USERNAME_BUY ='JOJO' && T1.CONFIRM = 1
        ";

//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
$pdo = getPDO();
$statement = $pdo->query($sql);
// $statement = getPDO("g1")->query($sql);

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();

//將二維陣列取出顯示其值
// foreach($data as $index => $row){
//        echo $row["USER_ID"];   //欄位名稱
//        echo " / ";
//        echo $row["USERNAME"];    //欄位名稱
//        echo " / ";
//        echo $row["PASSWORD"];    //欄位名稱	  
//        echo "<br/> ";    
// }
echo json_encode($data);
