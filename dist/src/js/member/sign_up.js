"use strict";

var vm = new Vue({
  el: "#app",
  data: {
    writing: true,
    success: false,
    idError: false,
    pwdError: false,
    emailError: false,
    pwdTwoError: false,
    id: "",
    newPassword: "",
    twicePassword: "",
    mail: ""
  },
  methods: {
    singUpSuccess: function singUpSuccess() {
      vm.$data.writing = false;
      vm.$data.success = true;
    },
    showIdError: function showIdError() {
      var idRegular = /^(?=.*[A-Za-z])(?=.*\d)[^]{8,16}$/;
      var passwordRegular = /^[a-zA-Z0-9]*$/;

      if (idRegular.test(this.id) && this.id !== "" && passwordRegular.test(this.id)) {
        vm.$data.idError = false; // console.log(this.id.length);
      } else {
        vm.$data.idError = true; // console.log(this.id.length);
      }
    },
    showPwdError: function showPwdError() {
      var passwordRegular = /^[a-zA-Z0-9]*$/;

      if (passwordRegular.test(this.newPassword) && this.newPassword !== "") {
        vm.$data.pwdError = false; // console.log(this.newPassword.length);
      } else {
        vm.$data.pwdError = true; // console.log(this.newPassword.length);
      }
    },
    showPwdTwoError: function showPwdTwoError() {
      if (this.newPassword == this.twicePassword && this.twicePassword !== "") {
        vm.$data.pwdTwoError = false;
      } else {
        vm.$data.pwdTwoError = true;
      }
    },
    showEmailError: function showEmailError() {
      var mailRegular = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

      if (mailRegular.test(this.mail) && this.mail !== "") {
        vm.$data.emailError = false;
      } else {
        vm.$data.emailError = true;
      }
    },
    doThis: function doThis() {
      if (this.idError == false && this.pwdError == false && this.newPassword == this.twicePassword && this.emailError == false && this.id !== "" && this.newPassword !== "" && this.twicePassword !== "" && this.mail !== "") {
        var userId = $("#userId").val();
        userId = $.trim(userId);
        var password = $("#password").val();
        password = $.trim(password);
        var email = $("#email").val();
        email = $.trim(email);
        $.ajax({
          method: "POST",
          url: "../php/member/signup.php",
          // headers: {
          //   "Content-Type": "application/x-www-form-urlencoded",
          // },
          data: {
            userId: userId,
            password: password,
            email: email
          },
          dataType: "text",
          success: function success(response) {
            if (response == "X") {
              vm.$data.id = "此帳號已被使用過，請換一個試試!!!";
            }

            if (response == "Y") {
              vm.$data.writing = false;
              vm.$data.success = true;
              setTimeout(trans(), 5);
            }
          },
          error: function error(exception) {
            alert("發生錯誤 ");
            console.log(exception);
          }
        });
      } else {
        alert("請輸入正確格式");
      }
    }
  }
}); // 重新點選帳號清空

function blank() {
  vm.$data.id = "";
}

; // 註冊成功跳轉驗證

function trans() {
  window.location.href = './verify.html';
}

;