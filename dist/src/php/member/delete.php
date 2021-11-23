<?php
    include("../connection.php");
    $Id = $_POST['Id'];
    //---------------------------------------------------

       //建立SQL
       $sql = "DELETE FROM MYFAV WHERE FAV_ID = ?";

       $statement = $pdo->prepare($sql);
       $statement->bindValue(1 , $Id);   

       $statement->execute();
       echo "Y";
?>