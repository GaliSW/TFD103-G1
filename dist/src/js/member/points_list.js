"use strict";

function countDeal() {
  $("#countResult").html("");
  $.ajax({
    url: "../php/member/count_deal.php",
    data: {},
    dataType: "json",
    success: function success(response) {
      if (response > 0) {
        $("#countResult").append(response);
        $("#countResult").removeClass("_off");
      }
    }
  });
}

function display() {
  countDeal();
  var filter = document.getElementById("filter").value;
  $.ajax({
    method: "POST",
    url: "../php/member/points_list.php",
    data: {
      Filter: filter
    },
    dataType: "json",
    success: function success(response) {
      $("#result").html(""); //更新html內容(透過jQuery跑迴圈取值)

      $.each(response, function (index, row) {
        //設定來源
        var srcName = "";

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

        $("#result").append("\n              <div class=\"contain_list\">\n                            <span class=\"apply_date col-3\">".concat(row.DEALDATE, "</span>\n                            <span class=\"my_role col-4\">\n                                ").concat(srcName, "\n                            </span>\n                            <span class=\"method col-4\">").concat(row.CHANGE_POINT, "</span>\n                           \n                            <span class=\"block col-1\"></span>\n                        </div>                 \n                <span><hr></span>\n                                "));
      });
    }
  });
}