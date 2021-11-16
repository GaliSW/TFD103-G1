<?php
       include("../connection.php");

//---------------------------------------------------
// 查詢購買，篩選會員id為1class為0
       //建立SQL語法
       
       $sql = "SELECT 
	              t1.ORDER_ID,
		       t1.FK_USERNAME_BUY,
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
                    t1.FK_USERNAME_BUY =  'LARRY'
                    order by ORDER_ID desc";

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
