<?php
// auth = 1為正常

//建立SQL

    include("../connection.php");

    //---------------------------------------------------

    $userId = htmlspecialchars($_POST["userId"]);
    $password = htmlspecialchars($_POST["password"]);
    $email = htmlspecialchars($_POST["email"]);
    $sql = "select * from MEMBER WHERE USERNAME = '$userId'";

    $statement = $pdo->prepare($sql);
    $statement->execute();
    $data = $statement->fetchAll();
    // 設定驗證碼變數
    $arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    $verifyA = [];

    for ($i = 0; $i < 4; $i++) {
        shuffle($arr);
        array_push($verifyA, $arr[0]);
    }
    $verify = intval($verifyA[0] . $verifyA[1] . $verifyA[2] . $verifyA[3]);
    

//欄位名稱

if (count($data) > 0) {
    echo ("X");
} else {
    
    $sql2 = "INSERT INTO MEMBER( USERNAME, PASSWORD , EMAIL , USER_IMG , SIGNUP_DATE , AUTH) VALUES  ( ? , ? , ? , 'r6.jpg' ,  NOW() , $verify);
    INSERT INTO GACHA (FK_USERNAME , FK_ROLE_ID ,STATUS) VALUES ( '$userId' , 666 , 0)";

    //執行
    $statement = $pdo->prepare($sql2);

    $statement->bindValue(1, $userId);
    $statement->bindValue(2, $password);
    $statement->bindValue(3, $email);
    $statement->execute();
    
    echo ("Y");
};

?>