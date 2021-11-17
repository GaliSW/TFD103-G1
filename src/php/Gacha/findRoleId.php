<?php
    $roleStr = $_POST["roleStr"];
    include "../connection.php";

    $sql = "select ROLE_ID from ROLE where RNAME = ?;";
    
    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $roleStr);
    $statement->execute();
    $data = $statement->fetchAll();

    //抓出全部且依照順序封裝成一個二維陣列
    foreach($data as $index => $row){
        echo $row["ROLE_ID"];   //欄位名稱    
}
?>