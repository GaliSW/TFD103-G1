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

function displaySale() {
  var FilterSale = document.getElementById("saleFilter").value;
  $.ajax({
    method: "post",
    url: "../php/member/trading_list_sale.php",
    data: {
      FilterSale: FilterSale
    },
    dataType: "json",
    success: function success(response) {
      $("#result_sale").html(""); //更新html內容(透過jQuery跑迴圈取值)

      $.each(response, function (index, row) {
        var srcName = "購買";
        $("#result_sale").append("\n               <div class=\"contain_list\">\n                                <span class=\"apply_date col-3\">".concat(row.BUYDATE, "</span>\n                                <div class=\"my_role col-3\"><img src=\"../image/ROLE/").concat(row.ROLE_IMG, "\"></div>\n                                <span class=\"method col-2\">\u8CA9\u552E</span>\n                                <span class=\"price col-2\">").concat(row.PRICE, "E</span>\n                                <span class=\"block col-2\"></span>\n                            </div>\n                            <span><hr></span>\n                                "));
      });
    }
  });
}

var vm0 = new Vue({
  el: "#app0",
  data: {
    // content: "buyer_contain",
    b_contain: true,
    b_change: false,
    s_contain: false,
    s_change: false
  },
  methods: {
    showBuyContain: function showBuyContain() {
      vm0.$data.b_contain = true;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = false;
      vm0.$data.s_change = false; //   this.content = "buyer_contain";
    },
    showBuyChange: function showBuyChange() {
      vm0.$data.b_contain = false;
      vm0.$data.b_change = true;
      vm0.$data.s_contain = false;
      vm0.$data.s_change = false;
      displayBuyCng(); // (this.content = "buyer_change");
    },
    showSalerContain: function showSalerContain() {
      vm0.$data.b_contain = false;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = true;
      vm0.$data.s_change = false;
      displaySale(); //   this.content = "saler_contain";
    },
    showSalerChange: function showSalerChange() {
      vm0.$data.b_contain = false;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = false;
      vm0.$data.s_change = true;
      displaySaleCng(); //   this.content = "saler_change";
    }
  }
});

function displayBuy() {
  countDeal(); // let userName = LARRY;

  var filters = document.getElementById("buyFilter").value;
  $.ajax({
    method: "POST",
    url: "../php/member/trading_list_buy.php",
    data: {
      // Name : userName,
      Filters: filters
    },
    dataType: "json",
    success: function success(response) {
      $("#result_buy").html(""); //更新html內容(透過jQuery跑迴圈取值)

      $.each(response, function (index, row) {
        $("#result_buy").append("\n               <div class=\"contain_list\">\n                                <span class=\"apply_date col-3\">".concat(row.BUYDATE, "</span>\n                                <div class=\"my_role col-3\"><img src=\"../image/ROLE/").concat(row.ROLE_IMG, "\"></div>\n                                <span class=\"method col-2\">\u8CFC\u8CB7</span>\n                                <span class=\"price col-2\">").concat(row.PRICE, "E</span>\n                                <span class=\"block col-2\"></span>\n                            </div>\n                            <span><hr></span>\n                                "));
      });
    }
  });
} // 買家交換


function displayBuyCng() {
  var FilterBuyCng = document.getElementById("buyChangeFilter").value;
  $.ajax({
    method: "post",
    url: "../php/member/trading_change_buy.php",
    data: {
      Filter: FilterBuyCng
    },
    dataType: "json",
    success: function success(response) {
      $("#result_buy_change").html(""); //更新html內容(透過jQuery跑迴圈取值)

      $.each(response, function (index, row) {
        $("#result_buy_change").append("\n               <div class=\"contain_list\">\n                                <span class=\"apply_date col-3\">".concat(row.CHANGEDATE, "</span>\n                                <div class=\"my_role col-3\"><img src=\"../image/ROLE/").concat(row.ROLE_IMG_BUY, "\"></div>\n                                <span class=\"method col-2\">\u4EA4\u63DB(\u8CB7)</span>\n                                <div class=\"price col-2\">\n                                    <img src=\"../image/ROLE/").concat(row.ROLE_IMG, "\">\n                                </div>\n                                <span class=\"block col-2\"></span>\n                            </div>\n                                "));
      });
    }
  });
} // 賣家交換


function displaySaleCng() {
  var FilterSaleCng = document.getElementById("saleChangeFilter").value;
  $.ajax({
    method: "post",
    url: "../php/member/trading_change_sale.php",
    data: {
      Filter: FilterSaleCng
    },
    dataType: "json",
    success: function success(response) {
      $("#result_sale_change").html(""); //更新html內容(透過jQuery跑迴圈取值)

      $.each(response, function (index, row) {
        $("#result_sale_change").append("\n               <div class=\"contain_list\">\n                            <span class=\"apply_date col-3\">".concat(row.CHANGEDATE, "</span>\n                            <div class=\"my_role col-3\"><img src=\"../image/ROLE/").concat(row.ROLE_IMG, "\"></div>\n                            <span class=\"method col-2\">\u4EA4\u63DB(\u8CE3)</span>\n                            <div class=\"price col-2\">\n                                <img src=\"../image/ROLE/").concat(row.ROLE_IMG_BUY, "\">\n                            </div>\n                            <span class=\"block col-2\"></span>\n                        </div>\n                                "));
      });
    }
  });
}