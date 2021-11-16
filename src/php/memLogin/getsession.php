<?php
    //取得會員帳號(前台)
    function getMemberName(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳Name，無登入session->回傳空字串""
        return isset($_SESSION["Name"]) ? $_SESSION["Name"] : ""; 

    }

//取得會員Pass(前台)
    function getMemberPass(){

        //先判斷session是否存在
        if(!isset($_SESSION)){
            session_start(); 
        }

        //有登入session->回傳ID，無登入session->回傳空字串""
        return isset($_SESSION["Pass"]) ? $_SESSION["Pass"] : ""; 

    }
?>