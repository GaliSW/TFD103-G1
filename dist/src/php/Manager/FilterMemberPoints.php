<?php
    $Name = $_POST["Name"];
    $Filter = $_POST["Filter"];
    include "../connection.php";

    if($Filter == "one"){
        $sql = "SELECT TOTAL,PDATE from STORE where FK_USERNAME in (select USERNAME from MEMBER where USERNAME = ?) && PDATE BETWEEN (now() - interval 30 DAY) AND now() ORDER BY PDATE DESC";
    }else if($Filter == "three"){
        $sql = "SELECT TOTAL,PDATE from STORE where FK_USERNAME in (select USERNAME from MEMBER where USERNAME = ?) && PDATE BETWEEN (now() - interval 90 DAY) AND now() ORDER BY PDATE DESC";
    }else if($Filter == "six"){
        $sql = "SELECT TOTAL,PDATE from STORE where FK_USERNAME in (select USERNAME from MEMBER where USERNAME = ?) && PDATE BETWEEN (now() - interval 180 DAY) AND now() ORDER BY PDATE DESC";
    }else if($Filter == "year"){
        $sql = "SELECT TOTAL,PDATE from STORE where FK_USERNAME in (select USERNAME from MEMBER where USERNAME = ?) && PDATE BETWEEN (now() - interval 360 DAY) AND now() ORDER BY PDATE DESC";
    }


    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $Name);
    $statement->execute();

    //抓出全部且依照順序封裝成一個二維陣列
    $data = $statement->fetchAll();
    echo json_encode($data);
    // echo count($data);

?>