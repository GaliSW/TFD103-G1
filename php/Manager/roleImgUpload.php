<?php
if (isset($_POST['submit'])) {
    $role_name = $_POST['roleName'];
    $role_num = $_POST['roleNum'];
    $ab = $_POST['ab'];
    $ab1 = $_POST['ab1'];
    $ab2 = $_POST['ab2'];
    $ab3 = $_POST['ab3'];
    $ab4 = $_POST['ab4'];
    $color = $_POST['abColor'];
    $form_data_name = $_FILES['form_data']['name'];
    $form_data_size = $_FILES['form_data']['size'];
    $form_data_type = $_FILES['form_data']['type'];
    $form_data = $_FILES['form_data']['tmp_name'];
}
    $dsn = 'mysql:dbname=g1;host=127.0.0.1';
    $pdo = new PDO($dsn, 'root', 'password');
    $data = addslashes(fread(fopen($form_data, "r"), filesize($form_data)));
    $abStr = "$ab"."$ab1"."$ab2"."$ab3"."$ab4";

    $result = $pdo->query("INSERT INTO ROLE (ROLE_IMG,filename,filesize,filetype,ABILITY,RNAME,AMOUNT,COLOR,ROLE_ID)
    VALUES ('$data','$form_data_name','$form_data_size','$form_data_type','$abStr','$role_name',1,'$color','$role_num')");
    

    if ($result) {
        echo "<script>location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
    } else {
        echo "請求失敗,請重試";
    }
?>