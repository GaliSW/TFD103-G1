<?php
// $Name = $_POST["Name"];
$Filters = $_POST["FilterSale"];
include("../connection.php");

//---------------------------------------------------
// 查詢購買，篩選會員id為1class為0
//建立SQL語法
if ($Filters == "t3") {
    $sql = " SELECT 
	            t1.ORDER_ID,
				t2.FK_USERNAME,
	             t1.BUYDATE,
				t2.PRICE,
				t4.ROLE_IMG
                FROM ORDERS t1 
	            left join PRODUCT t2
                on t1.FK_PRODUCT_ID = t2.PRODUCT_ID
                left join GACHA t3
                on t2.FK_GACHA_ID = t3.GACHA_ID
                left join ROLE t4
                on t3.FK_ROLE_ID = t4.ROLE_ID
                where 
                    t2.FK_USERNAME =  'JERRY'
                    && BUYDATE BETWEEN (now() - interval 90 DAY) AND now()
                    order by ORDER_ID desc   ";
} else if ($Filters == "t6") {
    $sql = " SELECT 
	            t1.ORDER_ID,
				t2.FK_USERNAME,
	             t1.BUYDATE,
				t2.PRICE,
				t4.ROLE_IMG
                FROM ORDERS t1 
	            left join PRODUCT t2
                on t1.FK_PRODUCT_ID = t2.PRODUCT_ID
                left join GACHA t3
                on t2.FK_GACHA_ID = t3.GACHA_ID
                left join ROLE t4
                on t3.FK_ROLE_ID = t4.ROLE_ID
                where 
                    t2.FK_USERNAME =  'JERRY'
                    && BUYDATE BETWEEN (now() - interval 180 DAY) AND now()
                    order by ORDER_ID desc   ";
} else if ($Filters == "t9") {
    $sql = " SELECT 
	            t1.ORDER_ID,
				t2.FK_USERNAME,
	             t1.BUYDATE,
				t2.PRICE,
				t4.ROLE_IMG
                FROM ORDERS t1 
	            left join PRODUCT t2
                on t1.FK_PRODUCT_ID = t2.PRODUCT_ID
                left join GACHA t3
                on t2.FK_GACHA_ID = t3.GACHA_ID
                left join ROLE t4
                on t3.FK_ROLE_ID = t4.ROLE_ID
                where 
                    t2.FK_USERNAME =  'JERRY'
                    && BUYDATE BETWEEN (now() - interval 270 DAY) AND now()
                    order by ORDER_ID desc   ";
} else if ($Filters == "t12"){
    $sql = " SELECT 
	            t1.ORDER_ID,
				t2.FK_USERNAME,
	             t1.BUYDATE,
				t2.PRICE,
				t4.ROLE_IMG
                FROM ORDERS t1 
	            left join PRODUCT t2
                on t1.FK_PRODUCT_ID = t2.PRODUCT_ID
                left join GACHA t3
                on t2.FK_GACHA_ID = t3.GACHA_ID
                left join ROLE t4
                on t3.FK_ROLE_ID = t4.ROLE_ID
                where 
                    t2.FK_USERNAME =  'JERRY'
                    && BUYDATE BETWEEN (now() - interval 365 DAY) AND now()
                    order by ORDER_ID desc   ";
}



//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料

$statement = $pdo->query($sql);
// $statement->bindValue(1, $Name);
$statement->execute();
//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();


echo json_encode($data);
?>
