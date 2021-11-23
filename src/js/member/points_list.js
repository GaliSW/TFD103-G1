function countDeal() {
  $("#countResult").html("");
  $.ajax({
    url: "../php/member/count_deal.php",
    data: {},
    dataType: "json",
    success: function (response) {
      if (response > 0) {
        $("#countResult").append(response);
        $("#countResult").removeClass("_off");
      }
    },
  });
}
function display() {
  countDeal();
  let filter = document.getElementById("filter").value;
  $.ajax({
    method: "POST",
    url: "../php/member/points_list.php",
    data: {
      Filter: filter,
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
        }

        $("#result").append(
          `
              <div class="contain_list">
                            <span class="apply_date col-3">${row.DEALDATE}</span>
                            <span class="my_role col-4">
                                ${srcName}
                            </span>
                            <span class="method col-4">${row.CHANGE_POINT}</span>
                           
                            <span class="block col-1"></span>
                        </div>                 
                <span><hr></span>
                                `
        );
      });
    },
    
  });
}


