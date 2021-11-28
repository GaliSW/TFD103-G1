<?php
    // $Name = $_POST["Name"];
    include "../connection.php";

    $sql = "SELECT ROLE_ID,RNAME,ABILITY,AMOUNT from ROLE";

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    // $statement->bindValue(1, $NAME);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $result = $statement->fetchAll();
    echo json_encode($result);
    // $data = $result[0]['ROLE_IMG'];
    // $type = $result[0]['filetype'];
    // Header( "Content-type: $type");
    // echo json_encode($result);

?>