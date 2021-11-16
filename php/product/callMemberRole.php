<?php
     $Name = $_POST['Name'];
     include "connection.php";

     $sql = "SELECT * FROM
               PRODUCT t3
               left join GACHA t1
               on t3.FK_GACHA_ID = t1.GACHA_ID
                    left join role t2
                    on t1.FK_ROLE_ID = t2.ROLE_ID
                    WHERE t1.FK_USERNAME = ? && 
                    STATUS = 1";

// "SELECT * FROM GACHA t1
// left join role t2
// on t1.FK_ROLE_ID = t2.ROLE_ID
// WHERE t1.FK_USERNAME = ?";

     $statement= $pdo->prepare($sql);
     $statement->bindValue(1, $Name);
     $statement->execute();
     $data= $statement->fetchAll();
     echo json_encode($data);         

?>