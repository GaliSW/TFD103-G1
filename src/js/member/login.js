let vm = new Vue({
  el: "#app",
  data: {
    login: true,
    forget: false,
    loginError: false,
    forgetError: false,
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

    loginCheck: function (event) {
        event.preventDefault();
        // vm.$data.loginError = true;
        let loginBtn = document.querySelector('.btn_login');
        loginBtn.addEventListener('click', () => {
            let mgUser = document.getElementById('userId').value;
            let mgPassword = document.getElementById('password').value;
            user = mgUser; //填入的user
            pass = mgPassword; //填入的密碼
            console.log(user, pass);
            login(user, pass);
        })
        function login(user, pass) {
            $.ajax({
                method: "POST",
                url: "../php/memLogin/login.php",
                data: {
                    Name: user,
                    Pass: pass
                },
                dataType: "text",
                success: function (response) {
                    if (response == 1) {
                      alert('ok');
                        let appear1 = document.getElementById('appear1');
                        console.log(appear1);
                        appear1.classList.remove('disappear');
                        let appear2 = document.getElementById('appear2');
                        console.log(appear2);
                        appear2.classList.remove('disappear');
                        window.location.href='http://localhost/TFD103_g1/src/index.html';//正確登入後頁面跳轉至 
                    } else {
                        // alert('有誤')
                        if(user != data.user){//判斷是使用者名稱還是密碼錯誤，提示相應資訊 
                            alert(data.message);
                            $user.val(""); 
                            $pass.val(""); 
                            return false; 
                            } 
                        if(pass != data.pass){ 
                        alert(data.message); 
                        $pass.val(""); 
                        return false; 
                        } 
                    }
                },
                error: function (exception) {
                    alert("發生錯誤: " + exception.status);
                }
            });
        };
    },
    forgetCheck: function (event) {
      event.preventDefault();
      vm.$data.forgetError = true;
    },
  },
});
