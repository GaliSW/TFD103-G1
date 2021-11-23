"use strict";

var vm = new Vue({
  el: "#app",
  data: {
    login: true,
    forget: false,
    loginError: false,
    forgetError: false,
    sendOk: false
  },
  methods: {
    showForget: function showForget() {
      vm.$data.login = false;
      vm.$data.forget = true;
      vm.$data.loginError = false;
    },
    showLogin: function showLogin() {
      vm.$data.login = true;
      vm.$data.forget = false;
      vm.$data.forgetError = false;
    },
    loginCheck: function loginCheck(event) {
      event.preventDefault(); // vm.$data.loginError = true;

      var loginBtn = document.querySelector(".btn_login");
      var mgUser = document.getElementById("userId").value;
      console.log(document.getElementById("userId"));
      var mgPassword = document.getElementById("password").value;
      user = mgUser; //填入的user

      pass = mgPassword; //填入的密碼
      // console.log(user, pass);

      login(user, pass);

      function login(user, pass) {
        $.ajax({
          method: "POST",
          url: "../php/memLogin/login.php",
          data: {
            Name: user,
            Pass: pass
          },
          dataType: "text",
          success: function success(response) {
            if (response == 1) {
              var appear1 = document.getElementById("appear1");
              appear1.classList.remove("disappear");
              var appear2 = document.getElementById("appear2");
              appear2.classList.remove("disappear");
              location.href = "../html/index.html";
            } else if (response == 0) {
              var banBlk = document.getElementById("banBlk");
              banBlk.classList.remove("none");
            } else if (response == 2) {
              var veriBlk = document.getElementById("veriBlk");
              veriBlk.classList.remove("none");
            } else {
              vm.$data.loginError = true;
            }
          },
          error: function error(exception) {
            alert("發生錯誤: " + exception.status);
          }
        });
      }
    },
    forgetCheck: function forgetCheck(event) {
      event.preventDefault();
      var email = $("#email").val();
      email = $.trim(email);
      $.ajax({
        method: "POST",
        url: "../php/member/forget.php",
        data: {
          email: email
        },
        dataType: "text",
        success: function success(response) {
          if (response == 1) {
            vm.$data.sendOk = true;
            vm.$data.forgetError = false;
          } else {
            vm.$data.forgetError = true;
          }
        },
        error: function error(exception) {
          alert("發生錯誤: " + exception.status);
        }
      });
    }
  }
});

function visiblePwd() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}