<?php    
    include "../connection.php";
    echo "Y";
    //先判斷圖片是否上傳成功?
    if($_FILES["file"]["error"] > 0){

        echo "上傳失敗: 錯誤代碼".$_FILES["file"]["error"];

    }else{
        $fileName = $_FILES["file"]["name"]; 
        // Server上的暫存檔路徑含檔名
        $filePath_Temp = $_FILES["file"]["tmp_name"];

        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

        //欲放置的檔案路徑
        // $filePath = getFilePath().$_FILES["file"]["name"];

        //檔案最終存放位置
        $filePath = $ServerRoot."/TFD103-G1/src/image/intro/".$fileName;
        

        //將暫存檔搬移到正確位置
        if(move_uploaded_file($filePath_Temp, $filePath)){

            //取得POST過來的值
            $content = $_POST["newsContent"];
            $title = $_POST["newsTitle"];

            //建立SQL
            $sql = "INSERT INTO ARTICLE(AIMG, TITLE, CONTENT, ADATE) VALUES (?,?,?,NOW())";
            
            //執行
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1 , $_FILES["file"]["name"]);
            $statement->bindValue(2 , $title);
            $statement->bindValue(3 , $content);

            $statement->execute();
            // echo  $title;
            // echo $content;
            // echo $_FILES["file"]["name"];
            //導頁            
            echo "<script>alert('新增成功!'); location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
            
            

        }else{

            echo "<script>alert('新增失敗!'); location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
            
            
        }
    }

?>