<?php
    $productID = $_POST["productID"];
    include "../connection.php";
    include "../Manager.php";
    

    if(getSession()==""){
        echo "N";
    }else{
        $sql = "SELECT * from MYFAV where FK_USERNAME = ? && FK_PRODUCT_ID = ?";
    

    //執行並查詢，會回傳查詢結果的物件，必須使用fetch、fetchAll...等方式取得資料
    $statement = $pdo->prepare($sql);
    $statement->bindValue(1,getSession());
    $statement->bindValue(2, $productID);
    $statement->execute();
    $data = $statement->fetchAll();
    // echo count($data);
        if(count($data)>0){
            echo "YY";
        }else{
            echo "YN";
        }
    }
    // foreach($data as $index => $row ){
    //     echo row["PRODUCT_ID"];
    // }

?>