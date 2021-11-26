<?php
    $db_host = "127.0.0.1";
    $db_user = "tibamefe_since2021";
    $db_pass = "vwRBSb.j&K#E";
    $db_select = "tibamefe_tfd103g1";

    // $db_host = "127.0.0.1";
    // $db_user = "root";
    // $db_pass = "password";
    // $db_select = "g1";


    //建立資料庫連線物件
    $dsn = "mysql:host=".$db_host.";dbname=".$db_select;

    //建立PDO物件，並放入指定的相關資料
    $pdo = new PDO($dsn, $db_user, $db_pass);

    return $pdo;
    
    
?>