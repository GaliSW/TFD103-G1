<?php
    include "../Manager.php";
    include "../connection.php";

    getMemberName();
    if(isset($_SESSION["Name"])){
        echo "Y";
    }else{
        echo "false";
    }


?>