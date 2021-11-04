"use strict";

var vm = new Vue({
  el: "#app",
  data: {
    writing: true,
    success: false,
    idError: false,
    pwdError: false,
    emailError: false,
    pwdTwoError: false
  },
  methods: {
    singUpSuccess: function singUpSuccess() {
      vm.$data.writing = false;
      vm.$data.success = true;
    },
    showIdError: function showIdError() {
      vm.$data.idError = true;
    },
    showPwdError: function showPwdError() {
      vm.$data.pwdError = true;
    },
    showPwdTwoError: function showPwdTwoError() {
      vm.$data.pwdTwoError = true;
    },
    showEmailError: function showEmailError() {
      vm.$data.emailError = true;
    }
  }
});