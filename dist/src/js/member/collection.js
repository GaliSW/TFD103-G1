"use strict";

// 彈跳視窗
var vmm = new Vue({
  el: "#vmm",
  data: {
    pop: false,
    buy: true,
    success: false,
    one: true,
    two: false,
    three: false,
    ROLE: []
  },
  methods: {
    clickClose: function clickClose() {
      vmm.$data.pop = false;
    },
    toSuccess: function toSuccess() {
      vmm.$data.success = true;
      vmm.$data.buy = false;
    },
    toTwo: function toTwo() {
      vmm.$data.two = true;
      vmm.$data.one = false;
      vmm.$data.three = false;
    },
    toThree: function toThree() {
      vmm.$data.three = true;
      vmm.$data.one = false;
      vmm.$data.two = false;
    }
  }
});

function display() {
  $.ajax({
    method: "POST",
    url: "../php/member/getMemberRole.php",
    data: {},
    dataType: "json",
    success: function success(response) {
      $("#result").html("");
      $.each(response, function (indexA, rowA) {
        var row = rowA.ABILITY;
        var ab1 = row.slice(0, 1);
        var ab2 = row.slice(1, 2);
        var ab3 = row.slice(2, 3);
        var ab4 = row.slice(3, 4);
        var ab5 = row.slice(4, 5);

        if (rowA.AMOUNT == 1) {
          $("#result").append("\n                            <div class=\"contain_list\">\n                                <div class=\"role col-2\"><img src=\"../image/ROLE/".concat(rowA.ROLE_IMG, "\"></div>\n                                <span class=\"role_name col-2\">\n                                    ").concat(rowA.RNAME, "\n                                    <p class=\"rwd_price\">").concat(rowA.PRICE, "E</p>\n                                </span>\n                                <div class=\"ability col-3\">\n                                    <div class=\"chartBox\">\n                                        \u52A0\u901F\uFF1A").concat(ab1, "\n                                        <br>\n                                        \u6293\u5730\uFF1A").concat(ab2, "\n                                        <br>\n                                        \u78B0\u649E\uFF1A").concat(ab3, "\n                                        <br>\n                                        \u8FF4\u907F\uFF1A").concat(ab4, "\n                                        <br>\n                                        \u9053\u5177\uFF1A").concat(ab5, "\n                                    </div>\n                                </div>\n                                <span class=\"price col-2\">").concat(rowA.PRICE, "</span>\n                                <div class=\"trade_button col-2\">\n                                    <button class=\"buy\" onclick=\"clickPop()\">\u8CFC\u8CB7</button>\n                                    <button class=\"change \" onclick=clickChange()>\u4EA4\u63DB</button>\n                                </div>\n                                <div class=\"delete col-1\">\n                                    <button class=\"delete_btn\" onclick= \"deleted(").concat(rowA.FAV_ID, ")\"><i class=\"fas fa-trash-alt\"></i></button>\n                                </div>\n                            </div>\n                \n                            <span>\n                                <hr>\n                            </span>\n                        "));
        } else if (rowA.AMOUNT == 0) {
          $("#result_off").append("\n                        <div class=\"contain_list _off\">\n                            <div class=\"role col-2\"><img src=\"../image/ROLE/".concat(rowA.ROLE_IMG, "\"></div>\n                            <span class=\"role_name col-2\">").concat(rowA.RNAME, "\n                                <p class=\"rwd_price\">").concat(rowA.PRICE, "E</p>\n                            </span>\n                            <div class=\"ability col-3\">\n                            <div class=\"chartBox\">\n                                \u52A0\u901F\uFF1A").concat(ab1, "\n                                        <br>\n                                        \u6293\u5730\uFF1A").concat(ab2, "\n                                        <br>\n                                        \u78B0\u649E\uFF1A").concat(ab3, "\n                                        <br>\n                                        \u8FF4\u907F\uFF1A").concat(ab4, "\n                                        <br>\n                                        \u9053\u5177\uFF1A").concat(ab5, "\n                            </div>\n                            </div>\n                            <span class=\"price col-2\">").concat(rowA.PRICE, "</span>\n                            <div class=\"trade_button col-2\">\n                                \u5DF2\u5B8C\u552E\n                            </div>\n                            <div class=\"delete col-1\">\n                                <button class=\"delete_btn\" onclick= \"deleted(").concat(rowA.FAV_ID, ")\"><i class=\"fas fa-trash-alt\"></i></button>\n                            </div>\n                        </div>\n                    "));
        }
      });
    }
  });
}

function deleted(clickId) {
  $.ajax({
    method: "POST",
    url: "../php/member/delete.php",
    data: {
      Id: clickId
    },
    dataType: "text",
    success: function success(response) {
      if (response == "Y") {
        $("#result").html("");
        $("#result_off").html("");
        display();
      } else {
        alert("error");
      }
    },
    error: function error(exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
}

function clickPop() {
  vmm.$data.pop = true;
  vmm.$data.buy = true;
  vmm.$data.success = false;
  vmm.$data.one = false;
  vmm.$data.two = false;
  vmm.$data.three = false;
}

function clickChange() {
  vmm.$data.pop = true;
  vmm.$data.buy = false;
  vmm.$data.success = false;
  vmm.$data.one = true;
  vmm.$data.two = false;
  vmm.$data.three = false;
}