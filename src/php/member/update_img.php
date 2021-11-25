<?php

    include "../connection.php";
    include "../Manager.php";
    $Name = getSession();
    //判斷是否上傳成功
    if($_FILES["file"]["error"] > 0){
        echo "上傳失敗: 錯誤代碼".$_FILES["file"]["error"];
    }else{
        //取得上傳的檔案資訊=======================================
        $fileName = $_FILES["file"]["name"];    //檔案名稱含副檔名        
        $filePath_Temp = $_FILES["file"]["tmp_name"];   //Server上的暫存檔路徑含檔名        
        $fileType = $_FILES["file"]["type"];    //檔案種類        
        // $fileSize = $_FILES["file"]["size"];    //檔案尺寸
        //=======================================================

        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];
        //C:/xampp/htdocs
        
        // //檔案最終存放位置
        // $filePath = $ServerRoot . "./TFD103-G1/src/image/MEMBER/" . $Name. $fileName;
        
        //檔案最終存放位置
        $filePath = $ServerRoot ."/tfd103/g1/TFD103-G1/src/image/MEMBER/" . $Name . $fileName;

        //判斷檔案格式是否為圖片
        $extensionName = getExtensionName($filePath);

        if( $extensionName == "jpg" || $extensionName == "png" || $extensionName =="gif" )
        {
        //將暫存檔搬移到正確位置
        move_uploaded_file($filePath_Temp, $filePath);

        $sql = " update member 
                set USER_IMG = ?
                where USERNAME = ?";

        //執行
        $statement = $pdo->prepare($sql);
        $statement->bindValue(1, $Name . $fileName);
        $statement->bindValue(2, $Name);
        
        $statement->execute();
        echo "<script>location.href='../../html/member_info.html';</script>";
    };
    };
    
        
    //取得檔案副檔名
    function getExtensionName($filePath){
        $path_parts = pathinfo($filePath);
        return $path_parts["extension"];
    };

?>