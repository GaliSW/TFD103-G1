<?php
include("../connection.php");
include ("../Manager.php");
$Name = getSession();
//---------------------------------------------------
// 查詢購買，篩選會員id為1class為0
//建立SQL語法

$sql = "select * from MEMBER
        where USERNAME = '$Name'
        ";

//執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料

$statement = $pdo->query($sql);
$statement->execute();

// $statement = getPDO("g1")->query($sql);

//抓出全部且依照順序封裝成一個二維陣列
$data = $statement->fetchAll();


echo json_encode($data);
?>