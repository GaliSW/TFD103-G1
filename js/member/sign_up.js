let vm = new Vue({
  el: "#app",
  data: {
    writing: true,
    success: false,
    idError: false,
    pwdError: false,
    emailError: false,
    pwdTwoError: false,
  },
  methods: {
    singUpSuccess: function () {
      vm.$data.writing = false;
      vm.$data.success = true;
    },
    showIdError: function () {
      vm.$data.idError = true;
    },
    showPwdError: function () {
      vm.$data.pwdError = true;
    },
    showPwdTwoError: function () {
      vm.$data.pwdTwoError = true;
    },
    showEmailError: function () {
      vm.$data.emailError = true;
    },
  },
});
