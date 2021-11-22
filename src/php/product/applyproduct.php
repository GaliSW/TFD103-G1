<?php
    $USERNAME = $_POST["USERNAME"];
    $PRODUCTID = $_POST["PRODUCTID"];
    include "../connection.php";

    $sql = "SELECT * from PRODUCT where FK_USERNAME = '$USERNAME' && FK_PRODUCT_ID = $PRODUCTID" ;

    // $statement = $pdo->query($sql);

    // //抓出全部且依照順序封裝成一個二維陣列
    $statement = $pdo->prepare($sql);
    $statement->execute();
    
    $data = $statement->fetchAll();
    if(count($data)> 0){
    
        echo "Y";
    }
    else{
        echo "X";
    }    

