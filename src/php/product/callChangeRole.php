<?php
    include "../connection.php";
    include "../Manager.php";
    
     // echo getSession();
        $Name = getSession();

          $sql ="select * FROM GACHA
                LEFT JOIN ROLE
                ON GACHA.FK_ROLE_ID=ROLE.ROLE_ID
                where GACHA.FK_USERNAME = ? && GACHA.STATUS = 1 && ROLE.ROLE_ID != 666";

    $statement= $pdo->prepare($sql);
    $statement->bindValue(1, $Name);
    $statement->execute();
    $data= $statement->fetchAll();
    echo json_encode($data);  

?>