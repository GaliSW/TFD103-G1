<?php
       include("../connection.php");
       $Filters = $_POST["Filter"];
//---------------------------------------------------

//建立SQL語法



if ($Filters == "t3") {
       $sql = "
              select
              POINTS_ID,
              CHANGE_POINT,
              FK_USERNAME,
              DEALDATE,
              SRC
              from POINTS_TU
              WHERE FK_USERNAME = 'JERRY'
              && DEALDATE BETWEEN (now() - interval 90 DAY) AND now()
              ORDER BY POINTS_ID 
              ";     
} else if ($Filters == "t6") {
       $sql =
       "
              select
              POINTS_ID,
              CHANGE_POINT,
              FK_USERNAME,
              DEALDATE,
              SRC
              from POINTS_TU
              WHERE FK_USERNAME = 'JERRY'
              && DEALDATE BETWEEN (now() - interval 180 DAY) AND now()
              ORDER BY POINTS_ID 
              ";      
} else if ($Filters == "t9") {
       $sql =
              "
              select
              POINTS_ID,
              CHANGE_POINT,
              FK_USERNAME,
              DEALDATE,
              SRC
              from POINTS_TU
              WHERE FK_USERNAME = 'JERRY'
              && DEALDATE BETWEEN (now() - interval 270 DAY) AND now()
              ORDER BY POINTS_ID 
              ";       
} else if ($Filters == "t12"){
       $sql =
              "
              select
              POINTS_ID,
              CHANGE_POINT,
              FK_USERNAME,
              DEALDATE,
              SRC
              from POINTS_TU
              WHERE FK_USERNAME = 'JERRY'
              && DEALDATE BETWEEN (now() - interval 365 DAY) AND now()
              ORDER BY POINTS_ID 
              ";      
}
       
//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
       
   $statement = $pdo->query($sql);
// $statement = getPDO("g1")->query($sql);
       $statement->execute();
       //抓出全部且依照順序封裝成一個二維陣列
       $data = $statement->fetchAll();

echo json_encode($data);
?>