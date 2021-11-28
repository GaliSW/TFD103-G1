<?php
include "./connection.php";

$sql = "select * from MEMBER";

        //執行
        $statement = $pdo->prepare($sql);
        $statement->execute();
        $data= $statement->fetchAll();
        print_r($data);
?>