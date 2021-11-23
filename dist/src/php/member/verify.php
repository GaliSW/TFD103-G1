<?php
    $Name = $_POST["Name"];
    $thisVerify = $_POST["thisVerify"];
    include "../connection.php";

    $sql = "SELECT * from MEMBER where USERNAME = ? " ;
    // $statement = $pdo->query($sql);

    // //抓出全部且依照順序封裝成一個二維陣列
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $Name); 
    $statement->execute();
    
    $data = $statement->fetchAll();
    
    
    if(count($data)> 0){
        $sql1 = "SELECT * from MEMBER where USERNAME = ? && AUTH = $thisVerify";
        // $statement = $pdo->query($sql);

        // //抓出全部且依照順序封裝成一個二維陣列
        $statement1 = $pdo->prepare($sql1);
        $statement1->bindValue(1, $Name);
        $statement1->execute();

        $data1 = $statement1->fetchAll();
        if (count($data1) > 0){

            $sql2 = "update MEMBER set AUTH = 1   where USERNAME = ? ";
            $statement = $pdo->prepare($sql2);
            $statement->bindValue(1, $Name);
            $statement->execute();
            echo "Y";
            // echo "<script>location.href='../../html/login.html';</script>";
        }else{ echo "N";}
    }else{
        echo "X1";
    }
    ;


$sql = "SELECT * from MEMBER where USERNAME = ? && AUTH = $thisVerify";
// $statement = $pdo->query($sql);

// //抓出全部且依照順序封裝成一個二維陣列
$statement = $pdo->prepare($sql);
$statement->bindValue(1, $Name);
$statement->execute();

$data = $statement->fetchAll();