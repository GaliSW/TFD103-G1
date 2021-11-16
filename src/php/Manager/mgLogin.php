<?php
    $Name = $_POST["Name"];
    $Pass = $_POST["Pass"];
    include "connection.php";

    $sql = "SELECT MNAME from MANAGER where MACCOUNT = ? && MPASS = ?";
    // $statement = $pdo->query($sql);

    //抓出全部且依照順序封裝成一個二維陣列
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $Name);  
    $statement->bindValue(2 , $Pass);  

    $statement->execute();

    $data = $statement->fetchAll();

    if(count($data) > 0){

        include "Manager.php";
        

        //將登入資訊寫入session
        setSessionB($_POST["Name"]);

    }
    echo count($data);
    // echo getSessionB();



?>