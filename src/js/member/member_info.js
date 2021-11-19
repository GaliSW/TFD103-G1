function showInfo() {
  $.ajax({
    url: "../php/member/memberInfo.php",
    data: {},
    dataType: "json",
    success: function (response) {
      $("#account").html("");
      $("#userImg").attr("src", "");
      vm.$data.image = "";
      $.each(response, function (index, row) {
        $("#account").html(row.USERNAME);
        $("#userImg").attr("src", "../image/member/" + row.USER_IMG);
        vm.$data.image = "../image/member/" + row.USER_IMG;
      });
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    },
  });
}

let vm = new Vue({
  el: "#app",
  data: {
    edit_on: true,
    btn_on: true,
    newPassword: "",
    twicePassword: "",
    pop: false,
    image: "",
  },
  methods: {
    fileChange(e) {
      let file = e.target.files[0];
      readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener("load", this.loadImage);
    },
    loadImage(e) {
      this.image = readFile.result;
    },
    clickPop() {
      showInfo();
      vm.$data.pop = true;
    },
    clickClose() {
      vm.$data.pop = false;
      this.image = "";
    },
    clickSubmit(){
      showInfo();
    }
  },
});

function showPwdError() {
  // e.preventDefault();
  let passwordRegular = /^[a-zA-Z0-9]*$/;
  if (
    passwordRegular.test(vm.$data.newPassword) &&
    vm.$data.newPassword !== ""
  ) {
    alertPwd();
  } else {
    alert("請勿輸入特殊符號");
  }
}

function alertPwd() {
  if (vm.$data.newPassword == vm.$data.twicePassword) {
    $.ajax({
      method: "POST",
      url: "../php/member/change_pwd.php",
      data: {
        password: vm.$data.newPassword,
      },
      dataType: "text",
      success: function (response) {
        vm.$data.newPassword = "";
        vm.$data.twicePassword = "";
        alert("密碼已修改");
      },
      error: function (exception) {
        alert("發生錯誤 ");
        // console.log(exception);
      },
    });
  } else {
    alert("兩次密碼不同");
  }
}

window.onload = showInfo();
