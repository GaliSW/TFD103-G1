"use strict";

//當前點數紀錄
function balance() {
  $.ajax({
    url: "../php/member/balance.php",
    data: {},
    dataType: "text",
    method: "post",
    success: function success(response) {
      if (response > 0) {
        $("#headerResult").html("");
        $("#headerResult").html(response + "E");
      } else if (response == "") {
        $("#headerResult").html("");
        $("#headerResult").html(0 + "E");
      }
    },
    error: function error(exception) {
      alert("發生錯誤: " + exception.status);
    }
  });
} //申請中訊息提示


function countDeal() {
  $("#headerCountResult").html("");
  $.ajax({
    url: "../php/member/count_deal.php",
    data: {},
    dataType: "json",
    success: function success(response) {
      if (response > 0) {
        $("#headerCountResult").append(response);
        $("#headerCountResult").removeClass("_off");
      } else if (response == "") {
        $("#headerCountResult").append(response);
        $("#headerCountResult").removeClass("_off");
      }
    }
  });
}

;

function status() {
  $.ajax({
    method: "POST",
    url: "../php/LoginCheck.php",
    data: {},
    dataType: "text",
    success: function success(response) {
      if (response == "") {
        var _LogOut = document.getElementById('LogOut');

        _LogOut.classList.add('none');

        var LogOutPhone = document.getElementById('LogOutPhone');
        LogOutPhone.classList.add('none');

        var _LogIn = document.getElementById('LogIn');

        _LogIn.classList.remove('logbt');

        var LogInPhone = document.getElementById('LogInPhone');
        LogInPhone.classList.remove('logbt');
      } else {
        var appear1 = document.getElementById('appear1');
        appear1.classList.remove('disappear');
        var appear2 = document.getElementById('appear2');
        appear2.classList.remove('disappear');

        var _LogOut2 = document.getElementById('LogOut');

        balance();
        countDeal();
      }
    },
    error: function error(exception) {
      alert("數據載入失敗: " + exception.status);
    }
  });
}

function LogOut() {
  $.ajax({
    method: "POST",
    url: "../php/memLogin/LogOut.php",
    data: {},
    dataType: "text",
    success: function success(response) {
      var appear1 = document.getElementById('appear1');
      appear1.classList.add('disappear');
      var appear2 = document.getElementById('appear2');
      appear2.classList.add('disappear');
      var LogOut = document.getElementById('LogOut');
      LogOut.classList.add('none');
      var LogOutPhone = document.getElementById('LogOutPhone');
      LogOutPhone.classList.add('none');
      var LogIn = document.getElementById('LogIn');
      LogIn.classList.remove('logbt');
      var LogInPhone = document.getElementById('LogInPhone'); // LogInPhone.classList.remove('logbt');
    },
    error: function error(exception) {
      alert("數據載入失敗: " + exception.status);
    }
  });
}

function LogIn() {
  location.href = './login.html';
}

function memberCheck() {
  $.ajax({
    method: "POST",
    url: "../php/LoginCheck.php",
    data: {},
    dataType: "text",
    success: function success(response) {
      if (response == "") {
        location.href = 'login.html';
      } else {
        location.href = 'member.html';
      }
    },
    error: function error(exception) {
      alert("數據載入失敗: " + exception.status);
    }
  });
}