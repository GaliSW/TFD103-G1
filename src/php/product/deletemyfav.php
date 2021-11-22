<?php
    include("../connection.php");
    $DELETEMYFAV = $_POST['DELETEMYFAV'];
    //---------------------------------------------------

       //建立SQL
       $sql = "DELETE FROM MYFAV WHERE FK_PRODUCT_ID = 2";

       $statement = $pdo->prepare($sql);
       $statement->bindValue(1 , $DELETEMYFAV);   

       $statement->execute();
?>