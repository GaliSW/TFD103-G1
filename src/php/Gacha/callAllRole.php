<?php
    include "../Manager.php";
    include "../connection.php";

        $sql = "SELECT * FROM ROLE";

        $statement = $pdo->prepare($sql);
        $statement->execute();

        $data = $statement->fetchAll();
        echo json_encode($data);


?>