<?php    
    include "../connection.php";
    //先判斷圖片是否上傳成功?
    if($_FILES["roleFile"]["error"] > 0){

        echo "上傳失敗: 錯誤代碼".$_FILES["roleFile"]["error"];

    }else{
        $fileName = $_FILES["roleFile"]["name"]; 
        // Server上的暫存檔路徑含檔名
        $filePath_Temp = $_FILES["roleFile"]["tmp_name"];

        //Web根目錄真實路徑
        $ServerRoot = $_SERVER["DOCUMENT_ROOT"];

        //欲放置的檔案路徑
        // $filePath = getFilePath().$_FILES["file"]["name"];

        //檔案最終存放位置
        $filePath = $ServerRoot."/TFD103-G1/src/image/ROLE/".$fileName;

        //將暫存檔搬移到正確位置
        if(move_uploaded_file($filePath_Temp, $filePath)){

            //取得POST過來的值
            $rName = $_POST["roleName"];
            $rNum = $_POST["roleNum"];
            $Text = $_POST["roleText"];
            $ab = $_POST['ab'];
            $ab1 = $_POST['ab1'];
            $ab2 = $_POST['ab2'];
            $ab3 = $_POST['ab3'];
            $ab4 = $_POST['ab4'];
            $abStr = "$ab"."$ab1"."$ab2"."$ab3"."$ab4";
            $color = $_POST['abColor'];
            // echo $rName;
            // echo $rNum;
            // echo $abStr;
            // echo $color;

            //建立SQL
            $sql = "INSERT INTO ROLE(ROLE_IMG,ABILITY,RNAME,COLOR,ROLE_ID,AMOUNT,ROLE_CONTENT) VALUES (?,?,?,?,?,1,?)";
            
            //執行
            $statement = $pdo->prepare($sql);
            $statement->bindValue(1 , $_FILES["roleFile"]["name"]);
            $statement->bindValue(2 , $abStr);
            $statement->bindValue(3 , $rName);
            $statement->bindValue(4 , $color);
            $statement->bindValue(5 , $rNum);
            $statement->bindValue(6 , $Text);

            $statement->execute();

            //導頁            
            // echo "<script>alert('新增成功!'); location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
            echo "Y";
            

        }else{

            // echo "<script>alert('拷貝/移動上傳圖片失敗!'); location.href = location.href='".$_SERVER["HTTP_REFERER"]."';</script>";
            echo "N";
            
        }
    }

?>