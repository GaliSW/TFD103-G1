"use strict";

var vm = new Vue({
  el: "#app",
  data: {
    login: true,
    forget: false,
    loginError: false,
    forgetError: false
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
      event.preventDefault();
      vm.$data.loginError = true;
    },
    forgetCheck: function forgetCheck(event) {
      event.preventDefault();
      vm.$data.forgetError = true;
    }
  }
});