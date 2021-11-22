<?php
    include "../Manager.php";
    include "../connection.php";

    getMemberName();
    if(isset($_SESSION["Name"])){

    $Name = $_SESSION["Name"];
        $sql = "SELECT *
                FROM GACHA
                LEFT JOIN ROLE
                ON GACHA.FK_ROLE_ID = ROLE.ROLE_ID
                where FK_USERNAME = ?";

        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $Name);
        $statement->execute();

        $data = $statement->fetchAll();
        echo json_encode($data);
    }else{
        echo "false";
    }


?>