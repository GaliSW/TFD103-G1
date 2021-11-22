<?php

$email = $_POST["email"];
include("../connection.php");
//新增
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//設定檔案路徑
require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

// include("./mail.php");


//---------------------------------------------------
$arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
$new = "";

for ($i = 0; $i < 6; $i++) {
    shuffle($arr);
    $new = $new.$arr[0];
}

// 收件人
$recipient = "$email";
// 寄件標題
$mailTitle = 'Your password has been changed successfully.';
// html內容
$mailBody = "您的密碼已更新，新密碼為 <B> $new </B>";
// 不支援html時的內容
$mailAltBody = "'您的密碼已更新，新密碼為 $new'";

$sql2 = "select * from MEMBER WHERE EMAIL = '$email'";

$statement = $pdo->prepare($sql2);
$statement->execute();
$data = $statement->fetchAll();


if (count($data) > 0) {
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
    echo "1";
    sendMail($recipient, $mailTitle, $mailBody, $mailAltBody);
}else{
    echo "0";
}

function sendMail($recipient, $mailTitle, $mailBody, $mailAltBody)
{

    //建立物件                                                                
    $mail = new PHPMailer(true);

    // // 收件人
    // $recipient = 'yvone5116@gmail.com';
    // // 寄件標題
    // $mailTitle = 'test';
    // // html內容
    // $mailBody = 'body <B>in bold!</B>';
    // // 不支援html時的內容
    // $mailAltBody = 'body2';


    try {
        //Server settings
        //$mail->SMTPDebug = SMTP::DEBUG_SERVER;  // Enable verbose debug output
        $mail->SMTPDebug = 0; // DEBUG訊息
        $mail->isSMTP(); // 使用SMTP
        $mail->Host = 'smtp.gmail.com'; // SMTP server 位址
        $mail->SMTPAuth = true;  // 開啟SMTP驗證

        $mail->Username = 'tfd103g1@gmail.com'; // SMTP 你的gmail帳號
        $mail->Password = 'tibame_tfd103'; // SMTP 你的gmail密碼

        //$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
        $mail->SMTPSecure = "ssl"; // Gmail要透過SSL連線
        $mail->Port       = 465; // SMTP TCP port 

        //設定收件人資料
        $mail->setFrom('tfd103g1@gmail.com', ''); // 寄件人(透過Gmail發送會顯示Gmail帳號為寄件者)
        $mail->addAddress($recipient); // 收件人

        // $mail->addAddress('banana@example.com'); // 名字非必填
        // $mail->addReplyTo('info@example.com', 'Information'); //回信的收件人
        // $mail->addCC('cc@example.com'); //副本
        // $mail->addBCC('bcc@example.com'); //密件副本

        // 附件
        //$mail->addAttachment('/var/tmp/file.tar.gz'); // 附件 (*註3) 
        // $mail->addAttachment('/tmp/image.jpg', 'new.jpg'); // 插入附件可更改檔名

        // 信件內容
        $mail->isHTML(true); // 設定為HTML格式
        $mail->Subject =  $mailTitle;
        // 'Here is the subject'; // 信件標題
        $mail->Body    = $mailBody;
        //  'This is the HTML message body <B>in bold!</B>'; // 信件內容
        $mail->AltBody = $mailAltBody;
        //  'This is the body in plain text for non-HTML mail clients'; // 對方若不支援HTML的信件內容

        $mail->send();
        // echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
    



