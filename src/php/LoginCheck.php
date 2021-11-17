<?php
    // include("Manager.php");    
    
    //回傳session檢查結果
    // echo getSessionB();
    include "./memLogin/getsession.php";
    getMemberName();
    echo $_SESSION["Name"];
?>