<?php
include "connection.php";
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Origin, Methods, Content-Type");

$data = json_decode(file_get_contents("php://input"));
$number = $data->number;
$password = $data->password;
$name = $data->name;
$biulder = $data->biulder;
$create_date = $data->create_date;
$authority = $data->authority;
$sql = "INSERT INTO `A_cake`.`EMPLOYEE` ( `EMPLOYEE_NUMBER`, `EMPLOYEE_NAME`, `PASSWORD`, `AUTHORITY`,
 `CREATE_DATE`, `PHONE`, `BIULDER`, `ACTIVE`, `IMG`) VALUES ( ?, ?, ?, ?, NOW(), '3201252', ?, '1', '123654.jpg');";
$statement = getPDO()->prepare($sql);
       $statement -> bindValue(1,$number);
       $statement -> bindValue(2,$name);
       $statement -> bindValue(3,$password);
       $statement -> bindValue(4,$authority);
       $statement -> bindValue(5,$biulder);
       $statement -> execute();

echo $number;
echo "<br>";
echo $password;
echo "<br>";
echo $name;
echo "<br>";
echo $biulder;
echo "<br>";
echo $create_date;
echo "<br>";
echo $authority;
?>