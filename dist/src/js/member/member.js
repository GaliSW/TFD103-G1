"use strict";

var vm = new Vue({
  el: "#app",
  data: {
    // content: "buyer_contain",
    buyer: true,
    saler: false,
    pop: false,
    buyCancel: false,
    saleCheck: false,
    saleReject: false,
    thisId: "",
    thisBuy: "",
    thisSale: "",
    gachaBuy: "",
    gachaSale: ""
  },
  methods: {
    showBuyer: function showBuyer() {
      vm.$data.buyer = true;
      vm.$data.saler = false;
      displayBuy(); // vm.$data.content = "buyer_contain";
    },
    showSaler: function showSaler() {
      vm.$data.saler = true;
      vm.$data.buyer = false; // vm.$data.content = "saler_contain";

      displaySale();
    },
    clickClose: function clickClose() {
      vm.$data.pop = false;
    },
    clickPop: function clickPop() {
      vm.$data.pop = true;
    }
  }
}); //計算交易數量

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
      } else if (response == "") {
        $("#countResult").html("");
      }
    }
  });
}

;

function clickBuyCancel(clickId) {
  console.log(clickId);
  vm.$data.pop = true;
  vm.$data.buyCancel = true;
  vm.$data.saleCheck = false;
  vm.$data.saleReject = false;
  vm.$data.thisId = clickId;
} // 買方取消


function confirmBuyCancel() {
  vm.$data.pop = false;
  $.ajax({
    method: "POST",
    url: "../php/member/apply_buy_cancel.php",
    data: {
      Name: vm.$data.thisId
    },
    dataType: "text",
    success: function success(response) {
      if (response == "Y") {
        $("#result_buy").html("");
        $("#result_buy_off").html("");
        displayBuy();
        vm.$data.thisId = "";
      } else {
        alert("error");
      }
    },
    error: function error(exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
} // 買家刪除清單


function deleted(clickId) {
  $.ajax({
    method: "POST",
    url: "../php/member/deleted_apply.php",
    data: {
      Id: clickId
    },
    dataType: "text",
    success: function success(response) {
      if (response == "Y") {
        $("#result_buy").html("");
        $("#result_buy_off").html("");
        displayBuy();
        displaySale();
      } else {
        alert("error");
      }
    }
  });
} //我是買方


function displayBuy() {
  $.ajax({
    method: "POST",
    url: "../php/member/apply_buy.php",
    data: {},
    dataType: "json",
    success: function success(response) {
      $("#result_buy").html("");
      $("#result_buy_off").html(""); //更新html內容(透過jQuery跑迴圈取值)

      $.each(response, function (indexA, rowA) {
        var status = "";

        switch (rowA.CHECKVALUE) {
          case "0":
            status = " 商品已完售";
            break;

          case "1":
            status = "拒絕:<br>不喜歡角色";
            break;

          case "2":
            status = "拒絕:<br>不喜歡能力";
            break;

          case "3":
            status = "拒絕:<br>其他";
            break;
        }

        if (rowA.CONFIRM == 0 && rowA.AMOUNT == 1) {
          $("#result_buy").append("\n                      <div class=\"contain_list\">\n                        <span class=\"apply_date col-1\">".concat(rowA.CHANGEDATE, "</span>\n                        <div class=\"my_role col-3\"><img src=\"../image/ROLE/").concat(rowA.ROLE_IMG_BUY, "\"></div>\n                        <div class=\"slaes_role col-3\">\n                          <img src=\"../image/ROLE/").concat(rowA.ROLE_IMG, "\" alt=\"\">\n                        </div>\n                        <span class=\"trade_status col-1\">\u7B49\u5F85\u78BA\u8A8D</span>\n                        <div class=\"trade_button col-3\">\n                          <button class=\"confirm\" onclick=clickBuyCancel(\"").concat(rowA.BYCHECK_ID, "\")>\u53D6\u6D88\u4EA4\u6613</button>\n                        </div>\n                      </div>\n                      <span>\n                      <hr>\n                      </span>\n                      "));
        }

        if (rowA.CONFIRM == 0 && rowA.AMOUNT == 0 || rowA.CONFIRM == 2) {
          $("#result_buy_off").append("\n       <div class=\"contain_list _off\">\n                            <span class=\"apply_date col-1\">".concat(rowA.CHANGEDATE, "</span>\n                            <div class=\"my_role col-3\"><img src=\"../image/ROLE/").concat(rowA.ROLE_IMG_BUY, "\"></div>\n                            <div class=\"slaes_role col-3\">\n                                <img src=\"../image/ROLE/").concat(rowA.ROLE_IMG, "\" alt=\"\">\n                            </div>\n\n                            <span class=\"trade_status col-1\">").concat(status, "</span>\n                            <div class=\"trade_button col-3\">\n                                <button class=\"delete\" onclick= deleted(\"").concat(rowA.BYCHECK_ID, "\")><i class=\"fas fa-trash-alt\"></i></button>\n                            </div>\n                        </div>\n                        <span>\n                      <hr>\n                      </span>\n                                "));
        }
      });
    }
  }); // 計算交易數

  countDeal();
} // 賣家確認交易


function clickSaleCheck(clickId, clickBuy, clickSale, gachaBuy, gachaSale) {
  vm.$data.pop = true;
  vm.$data.buyCancel = false;
  vm.$data.saleCheck = true;
  vm.$data.saleReject = false;
  vm.$data.thisId = clickId;
  vm.$data.thisBuy = clickBuy;
  vm.$data.thisSale = clickSale;
  vm.$data.gachaBuy = gachaBuy;
  vm.$data.gachaSale = gachaSale;
}

function saleConfirm() {
  vm.$data.pop = false;
  $.ajax({
    method: "POST",
    url: "../php/member/apply_sale_confirm.php",
    data: {
      Id: vm.$data.thisId,
      Buy: vm.$data.thisBuy,
      Sale: vm.$data.thisSale,
      gachaBuy: vm.$data.gachaBuy,
      gachaSale: vm.$data.gachaSale
    },
    dataType: "text",
    success: function success(response) {
      if (response == "Y") {
        // $("#result_sale").html("");
        // $("#result_sale_off").html("");
        vm.$data.thisId = "";
        vm.$data.thisBuy = "", vm.$data.thisSale = "", vm.$data.gachaBuy = "", vm.$data.gachaSale = "";
        displaySale();
      } else {
        alert("error");
      }
    },
    error: function error(exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
} // 賣家拒絕交易，跳出彈跳視窗，抓ID


function clickSaleReject(clickIdS) {
  vm.$data.pop = true;
  vm.$data.buyCancel = false;
  vm.$data.saleCheck = false;
  vm.$data.saleReject = true;
  vm.$data.thisId = clickIdS; // alert(clickIdS);
}

function rejectValue(thisCheckValue) {
  $.ajax({
    method: "POST",
    url: "../php/member/apply_sale_reject.php",
    data: {
      Name: vm.$data.thisId,
      CheckValue: thisCheckValue
    },
    dataType: "text",
    success: function success(response) {
      if (response == "Y") {
        $("#result_sale").html("");
        $("#result_sale_off").html("");
        displaySale();
        vm.$data.thisId = "";
        vm.$data.pop = false;
      } else {
        alert("error");
      }
    },
    error: function error(exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
}

function displaySale() {
  $.ajax({
    url: "../php/member/apply_sale.php",
    data: {},
    dataType: "json",
    success: function success(response) {
      $("#result_sale").html("");
      $("#result_sale_off").html(""); //更新html內容(透過jQuery跑迴圈取值)

      $.each(response, function (index, row) {
        if (row.CONFIRM == 0 && row.AMOUNT == 1) {
          $("#result_sale").append("\n                  <div class=\"contain_list\">\n                      <span class=\"apply_date col-1\">".concat(row.CHANGEDATE, "</span>\n                      <div class=\"my_role col-3\"><img src=\"../image/ROLE/").concat(row.ROLE_IMG_BUY, "\"></div>\n                      <div class=\"slaes_role col-3\">\n                          <img src=\"../image/ROLE/").concat(row.ROLE_IMG, "\" alt=\"\">\n                      </div>\n                      <span class=\"trade_status col-1\">\u7B49\u5F85\u78BA\u8A8D</span>\n                      <div class=\"trade_button col-3\">\n                          <button class=\"confirm\" onclick=clickSaleCheck(\"").concat(row.BYCHECK_ID, "\",\"").concat(row.FK_USERNAME_BUY, "\",\"").concat(row.FK_USERNAME, "\",\"").concat(row.FK_GACHA_ID_BUY, "\",\"").concat(row.FK_GACHA_ID, "\")>\u78BA\u8A8D\u4EA4\u6613</button>\n                          <button class=\"reject\" onclick=\"clickSaleReject(").concat(row.BYCHECK_ID, ")\">\u62D2\u7D55\u4EA4\u6613</button>\n                      </div>\n                  </div>    \n                  <span>\n                      <hr>\n                  </span>\n                                "));
        }

        if (row.CONFIRM == 4 && row.AMOUNT !== 0 && row.ISSHOW !== 0) {
          $("#result_sale_off").append("\n       <div class=\"contain_list _off\">\n                            <span class=\"apply_date col-1\">".concat(row.CHANGEDATE, "</span>\n                            <div class=\"my_role col-3\"><img src=\"../image/ROLE/").concat(row.ROLE_IMG_BUY, "\"></div>\n                            <div class=\"slaes_role col-3\">\n                                <img src=\"../image/ROLE/").concat(row.ROLE_IMG, "\" alt=\"\">\n                            </div>\n\n                            <span class=\"trade_status col-1\">\u5DF2\u88AB\u53D6\u6D88</span>\n                            <div class=\"trade_button col-3\">\n                                <button class=\"delete\" onclick= deleted(\"").concat(row.BYCHECK_ID, "\")><i class=\"fas fa-trash-alt\"></i></button>\n                            </div>\n                        </div>\n                                "));
        }
      });
    }
  });
  countDeal();
}