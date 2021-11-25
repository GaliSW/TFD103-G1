<?php
    $Name = $_POST["Name"];
    $Pass = $_POST["Pass"];
    include "../connection.php";

    $sql = "SELECT * from MEMBER where USERNAME = ? && PASSWORD = ?";
    // $statement = $pdo->query($sql);

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1 , $Name);  
    $statement->bindValue(2 , $Pass);  

    $statement->execute();
    
    $data = $statement->fetchAll();
    if(count($data)> 0){
        foreach($data as $index => $row){
        if($row["AUTH"] == 1){
            include "session.php";
            setMemberInfo($Name, $Pass);
            echo count($data);
        }else if($row["AUTH"] == 0){
            echo 0;
        }else{
            echo 2;
        }
    }
}else{
    echo "3";
}    

?>