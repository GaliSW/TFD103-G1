let vm = new Vue({
  el: "#app",
  data: {
    writing: true,
    success: false,
    idError: false,
    pwdError: false,
    emailError: false,
    pwdTwoError: false,
    id:"",
    newPassword:"",
    twicePassword:"",
    mail:"",
  },
  methods: {
    singUpSuccess: function () {
      vm.$data.writing = false;
      vm.$data.success = true;
    },
    showIdError: function () {
      let idRegular = /^(?=.*[A-Za-z])(?=.*\d)[^]{8,16}$/;
      if (idRegular.test(this.id) && this.id !== "") {
        vm.$data.idError = false;
        // console.log(this.id.length);
      } else {
        vm.$data.idError = true;
        // console.log(this.id.length);
      }
    },
    showPwdError: function () {
      let passwordRegular = /^[a-zA-Z0-9]*$/;
      if (passwordRegular.test(this.newPassword) && this.newPassword !=="") {
        vm.$data.pwdError = false;
        // console.log(this.newPassword.length);
      } else {
        vm.$data.pwdError = true;
        // console.log(this.newPassword.length);
      }
    },
    showPwdTwoError: function () {
      if (this.newPassword == this.twicePassword && this.twicePassword !== "") {
        vm.$data.pwdTwoError = false;
      } else {
        vm.$data.pwdTwoError = true;
      }
      
    },
    showEmailError: function () {
      let mailRegular =
        /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
      if (mailRegular.test(this.mail) && this.mail !== "") {
        vm.$data.emailError = false;
      } else {
        vm.$data.emailError = true;
      }
    },
    
    doThis: function () {
      if (
        this.idError == false &&
        this.pwdError == false &&
        this.newPassword == this.twicePassword &&
        this.emailError == false &&
        this.id !== "" &&
        this.newPassword !== "" &&
        this.twicePassword !== "" &&
        this.mail !== ""
      ) {
        $.ajax({
          method: "POST",
          url: "../php/member/join.php",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },

          data: {
            userId: $("#userId").val(),
            password: $("#password").val(),
            email: $("#email").val(),
          },
          dataType: "text",
          success: function (response) {
            vm.$data.writing = false;
            vm.$data.success = true;
          },
          error: function (exception) {
            alert("發生錯誤 ");
            console.log(exception);
          },
        });
      } else {
        alert("請輸入正確格式");
      }
    },
  },
});
