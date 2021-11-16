<?php
       include("../connection.php");

       //---------------------------------------------------

       //建立SQL語法
       $sql = "SELECT * FROM POINTS_TU  where FK_USERNAME = 'JERRY' order by POINTS_ID desc";

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
?>