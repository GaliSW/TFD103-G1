<?php

    include("../connection.php");
    include "../Manager.php";

    $USERNAME = getSession();
    $PRODUCTID = ($_POST["PRODUCT_ID"]);
    

       //建立SQL
        $sql = "SELECT * FROM PRODUCT WHERE PRODUCT_ID = ?";
        //執行
        $statement = $pdo->prepare($sql);
        $statement->bindValue (1 , $PRODUCTID);
        $statement->execute();
        $data = $statement->fetchAll();
        foreach($data as $index => $row){
            
            
            if($row["FK_USERNAME"] ==  $USERNAME){
                echo "N";
            }else{
                echo "Y";
            }
    }
?>