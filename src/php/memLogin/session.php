<?php
    function setMemberInfo($Name, $Pass){

    //先判斷session是否存在
    if(!isset($_SESSION)){
        session_start(); 
    }

    //input裡的ID欄位值
    $_SESSION["Name"] = $Name; 

    //input裡的Account欄位值
    $_SESSION["Pass"] = $Pass; 

    }

?>