<?php

$email = $_POST["email"];
include("../connection.php");


//---------------------------------------------------
$arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
$new = "";

for ($i = 0; $i < 6; $i++) {
    shuffle($arr);
    $new = $new.$arr[0];
}


//建立SQL
$sql = "
    SET SQL_SAFE_UPDATES=0;
    update MEMBER 
	set PASSWORD = ?
    where EMAIL = '$email';
    SET SQL_SAFE_UPDATES=1;";

// 執行
$statement = $pdo->prepare($sql);

$statement->bindValue(1, $new);
$statement->execute();



