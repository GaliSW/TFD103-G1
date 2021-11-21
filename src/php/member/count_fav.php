<?php
    include "../Manager.php";
    $Name = getSession();
    include "../connection.php";

    $sql = "SELECT * from MYFAV where FK_USERNAME = '$Name'";
    // $statement = $pdo->query($sql);

    // //抓出全部且依照順序封裝成一個二維陣列
    $statement = $pdo->prepare($sql);
    $statement->execute();
    
    $data = $statement->fetchAll();
    if(count($data) > 0){
        echo count($data);
    }else{
        echo "X";
    }
    
    
    // echo $_SESSION["Name"];
