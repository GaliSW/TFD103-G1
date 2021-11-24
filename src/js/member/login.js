let vm = new Vue({
  el: "#app",
  data: {
    login: true,
    forget: false,
    loginError: false,
    forgetError: false,
    sendOk: false,
  },
  methods: {
    showForget: function () {
      vm.$data.login = false;
      vm.$data.forget = true;
      vm.$data.loginError = false;
    },
    showLogin: function () {
      vm.$data.login = true;
      vm.$data.forget = false;
      vm.$data.forgetError = false;
    },

    forgetCheck: function (event) {
      event.preventDefault();
      let email = $("#email").val();
      email = $.trim(email);
      $.ajax({
        method: "POST",
        url: "../php/member/forget.php",
        data: {
          email: email,
        },
        dataType: "text",
        success: function (response) {
          if (response == 1) {
            vm.$data.sendOk = true;
            vm.$data.forgetError = false;
          } else {
            vm.$data.forgetError = true;
          }
        },
        error: function (exception) {
          alert("發生錯誤: " + exception.status);
        },
      });
    },
  },
});

function visiblePwd() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
function loginCheck () {
      // e.preventDefault();
      // vm.$data.loginError = true;
      let loginBtn = document.querySelector(".btn_login");
      let mgUser = document.getElementById("userId").value;
      let mgPassword = document.getElementById("password").value;
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
            Pass: pass,
          },
          dataType: "text",
          success: function (response) {
            if (response == 1) {
              let appear1 = document.getElementById("appear1");
              appear1.classList.remove("disappear");
              let appear2 = document.getElementById("appear2");
              appear2.classList.remove("disappear");
              location.href = "../html/index.html";
            } else if (response == 0) {
              let banBlk = document.getElementById("banBlk");
              banBlk.classList.remove("none");
            } else if (response == 2) {
              let veriBlk = document.getElementById("veriBlk");
              veriBlk.classList.remove("none");
            } else {

              vm.$data.loginError = true;
            }
          },
          error: function (exception) {
            alert("發生錯誤: " + exception.status);
          },
        });
      }
    }