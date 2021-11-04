"use strict";

var vm = new Vue({
  el: "#app",
  data: {
    edit_on: false,
    btn_on: false,
    image: "./image/member/r1.jpg",
    pop: false
  },
  methods: {
    editPassword: function editPassword() {
      if (vm.$data.edit_on == true) {
        vm.$data.edit_on = false;
        vm.$data.btn_on = false;
      } else {
        vm.$data.edit_on = true;
        vm.$data.btn_on = true;
      }
    },
    fileChange: function fileChange(e) {
      var file = e.target.files[0];
      readFile = new FileReader();
      readFile.readAsDataURL(file);
      readFile.addEventListener("load", this.loadImage);
    },
    loadImage: function loadImage(e) {
      this.image = readFile.result; // this.image = e.target.result;
    },
    clickPop: function clickPop() {
      vm.$data.pop = true;
    },
    clickClose: function clickClose() {
      vm.$data.pop = false;
    }
  }
});