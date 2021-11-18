<?php
    include "../Manager.php";
    include "../connection.php";
    
    getMemberName();
    if(isset($_SESSION["Name"])){

    $Name = $_SESSION["Name"];
        
    $sql = "SELECT SUM(CHANGE_POINT) 
            FROM POINTS_TU 
            WHERE FK_USERNAME = ?;";

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $Name);
    $statement->execute();

    $data = $statement->fetchAll();
    foreach($data as $index => $row){
        echo $row["SUM(CHANGE_POINT)"];
}
    }else{
        echo "false";
    }
?>