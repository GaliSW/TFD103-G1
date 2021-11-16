<?php
    $Name = $_POST["Name"];
    $Pass = $_POST["Pass"];
    include "connection.php";

    $sql = "SELECT * from MEMBER where USERNAME = ? && PASSWORD = ?";
    // $statement = $pdo->query($sql);

    // //抓出全部且依照順序封裝成一個二維陣列
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $Name);  
    $statement->bindValue(2 , $Pass);  

    $statement->execute();
    
    $data = $statement->fetchAll();
    if(count($data)> 0){
        include "session.php";
        setMemberInfo($Name, $Pass);
    }
    // include "getsession.php";
    // getMemberName();

    // echo json_encode($data);
    echo count($data);
    // echo $_SESSION["Name"];
    



?>