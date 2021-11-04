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
    },
    forgetCheck: function (event) {
      event.preventDefault();
      vm.$data.forgetError = true;
    },
  },
});
