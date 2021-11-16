
    function display(){
        $.ajax({
          url: "../php/member/points_list.php",
          data: {
            // account: new URL(location.href).searchParams.get("POINTS_ID"),
          },
          dataType: "json",
          success: function (response) {
            $("#result").html("");
            //更新html內容(透過jQuery跑迴圈取值)
            $.each(response, function (index, row) {

              //設定來源
              let srcName = "";
              switch (row.SRC) {
                case "0":
                  srcName = "儲值";
                  break;
                case "1":
                  srcName = "購買";
                  break;
                case "2":
                  srcName = "販售";
                  break;
                case "3":
                  srcName = "扭蛋";
                  break;
                case "4":
                  srcName = "bonus";
                  break;
              };

              

              $("#result").append(
                `
              <div class="contain_list">
                            <span class="apply_date col-3">${row.DEALDATE}</span>
                            <span class="my_role col-2">
                                ${srcName}
                            </span>
                            <span class="method col-3">${row.CHANGE_POINT}</span>
                            <span class="price col-2">${row.BALANCE}</span>
                            <span class="block col-2"></span>
                        </div>                 
                <span><hr></span>
                                `
              );
            });
          },
          error: function (exception) {
            alert("發生錯誤: " + exception.status);
          },
        });
  };

  window.onload =  display() ;
  
