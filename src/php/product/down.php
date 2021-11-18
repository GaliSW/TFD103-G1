<?php
$GACHA_ID = $_POST["GACHA_ID"];
$ISSHOW = $_POST["ISSHOW"];
include "../connection.php";
       //建立SQL
    $sql = "UPDATE PRODUCT SET ISSHOW = ? WHERE FK_GACHA_ID = $GACHA_ID";
    
    
    
       //執行

    $statement = $pdo->prepare($sql);
    $statement->bindValue(1, $ISSHOW);

    $statement->execute();
    echo 'y';

?>



