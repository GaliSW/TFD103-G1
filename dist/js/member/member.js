"use strict";

Vue.component("buyer_contain", {
  template: "\n            <div class=\"buyer_contain\">\n                    <div class=\"contain_bar\">\n                        <span class=\"apply_date col-1\">\u7533\u8ACB\u65E5\u671F</span>\n                        <span class=\"my_role col-3\">\u6211\u7684\u89D2\u8272</span>\n                        <span class=\"product col-3\">\u5546\u54C1</span>\n                        <span class=\"status col-5\">\u72C0\u614B</span>\n                    </div>\n                    <div class=\"contain_list\">\n                        <span class=\"apply_date col-1\">110-10-20</span>\n                        <div class=\"my_role col-3\"><img src=\"./image/member/r1.jpg\"></div>\n                        <div class=\"slaes_role col-3\">\n                            <img src=\"./image/member/r2.jpg\" alt=\"\">\n                        </div>\n                        <span class=\"trade_status col-1\">\u7B49\u5F85\u78BA\u8A8D</span>\n                        <div class=\"trade_button col-3\">\n                            <button class=\"confirm \">\u53D6\u6D88\u4EA4\u6613</button>\n                        </div>\n                    </div>\n                    <span>\n                        <hr>\n                    </span>\n                    <div class=\"contain_list _off\">\n                        <span class=\"apply_date col-1\">110-10-20</span>\n                        <div class=\"my_role col-3\"><img src=\"./image/member/r1.jpg\"></div>\n                        <div class=\"slaes_role col-3\">\n                            <img src=\"./image/member/r2.jpg\" alt=\"\">\n                        </div>\n\n                        <span class=\"trade_status col-1\">\u5DF2\u5B8C\u552E</span>\n                        <div class=\"trade_button col-3\">\n                            <button class=\"delete \"><i class=\"fas fa-trash-alt\"></i></button>\n                        </div>\n                    </div>\n\n                </div>\n    "
});
Vue.component("saler_contain", {
  template: "\n            <div class=\"saler_contain\">\n                    <div class=\"contain_bar\">\n                        <span class=\"apply_date col-1\">\u7533\u8ACB\u65E5\u671F</span>\n                        <span class=\"my_role col-3\">\u5C0D\u65B9\u89D2\u8272</span>\n                        <span class=\"product col-3\">\u6211\u7684\u5546\u54C1</span>\n                        <span class=\"status col-5\">\u72C0\u614B</span>\n                    </div>\n                    <div class=\"contain_list\">\n                        <span class=\"apply_date col-1\">110-10-20</span>\n                        <div class=\"my_role col-3\"><img src=\"./image/member/r1.jpg\"></div>\n                        <div class=\"slaes_role col-3\">\n                            <img src=\"./image/member/r2.jpg\" alt=\"\">\n                        </div>\n                        <span class=\"trade_status col-1\">\u7B49\u5F85\u78BA\u8A8D</span>\n                        <div class=\"trade_button col-3\">\n                            <button class=\"confirm \">\u78BA\u8A8D\u4EA4\u6613</button>\n                            <button class=\"reject \" @click=\"clickPop\">\u62D2\u7D55\u4EA4\u6613</button>\n                        </div>\n                    </div>\n                    <span>\n                        <hr>\n                    </span>\n                    <div class=\"contain_list _off\">\n                        <span class=\"apply_date col-1\">10-20</span>\n                        <div class=\"my_role col-3\"><img src=\"./image/member/r1.jpg\"></div>\n                        <div class=\"slaes_role col-3\">\n                            <img src=\"./image/member/r2.jpg\" alt=\"\">\n                        </div>\n\n                        <span class=\"trade_status col-1\">\u5DF2\u5B8C\u552E</span>\n                        <div class=\"trade_button col-3\">\n                            <button class=\"delete \"><i class=\"fas fa-trash-alt\"></i></button>\n                        </div>\n                    </div>\n\n                </div>\n    ",
  methods: {
    clickPop: function clickPop() {
      vm.$data.pop = true;
    }
  }
});
var vm = new Vue({
  el: "#app",
  data: {
    content: "buyer_contain",
    buyer: true,
    saler: false,
    pop: false
  },
  methods: {
    showBuyer: function showBuyer() {
      vm.$data.buyer = true;
      vm.$data.saler = false;
      vm.$data.content = "buyer_contain";
    },
    showSaler: function showSaler() {
      vm.$data.saler = true;
      vm.$data.buyer = false;
      vm.$data.content = "saler_contain";
    },
    clickClose: function clickClose() {
      vm.$data.pop = false;
    }
  }
});