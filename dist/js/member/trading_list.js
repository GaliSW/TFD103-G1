"use strict";

Vue.component("buyer_contain", {
  template: "\n            <!-- \u8CB7\u5BB6 -->\n                <div class=\"buyer_contain\">\n                    <div class=\"contain_bar\">\n                        <span class=\"apply_date col-3\">\u4EA4\u6613\u65E5\u671F</span>\n                        <span class=\"product col-3\">\u4EA4\u6613\u5546\u54C1</span>\n                        <span class=\"method col-2\">\u4EA4\u6613\u65B9\u5F0F</span>\n                        <span class=\"price col-2\">\u8CFC\u8CB7\u91D1\u984D</span>\n                        <div class=\"dropdown col-2\" id=\"app\">\n                            <select >\n                                <option value=\"t3\">\u8FD1\u4E09\u500B\u6708</option>\n                                <option value=\"t6\">\u8FD1\u516D\u500B\u6708</option>\n                                <option value=\"t9\">\u8FD1\u4E5D\u500B\u6708</option>\n                                <option value=\"t12\">\u8FD1\u4E00\u5E74</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"contain_list\">\n                        <span class=\"apply_date col-3\">110-10-20</span>\n                        <div class=\"my_role col-3\"><img src=\"./image/member/r1.jpg\"></div>\n                        <span class=\"method col-2\">\u8CFC\u8CB7</span>\n                        <span class=\"price col-2\">100e</span>\n                        <span class=\"block col-2\"></span>\n                    </div>\n                </div>\n    "
});
Vue.component("buyer_change", {
  template: "\n            <!-- \u8CB7\u5BB6\u4EA4\u63DB -->\n                <div class=\"buyer_change\">\n                    <div class=\"contain_bar\">\n                        <span class=\"apply_date col-3\">\u4EA4\u6613\u65E5\u671F</span>\n                        <span class=\"product col-3\">\u4EA4\u6613\u5546\u54C1</span>\n                        <span class=\"method col-2\">\u4EA4\u6613\u65B9\u5F0F</span>\n                        <span class=\"price col-2\">\u6211\u7684\u89D2\u8272</span>\n                        <div class=\"dropdown col-2\" id=\"app1\">\n                            <select>\n                                <option value=\"t3\">\u8FD1\u4E09\u500B\u6708</option>\n                                <option value=\"t6\">\u8FD1\u516D\u500B\u6708</option>\n                                <option value=\"t9\">\u8FD1\u4E5D\u500B\u6708</option>\n                                <option value=\"t12\">\u8FD1\u4E00\u5E74</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"contain_list\">\n                        <span class=\"apply_date col-3\">110-10-20</span>\n                        <div class=\"my_role col-3\"><img src=\"./image/member/r1.jpg\"></div>\n                        <span class=\"method col-2\">\u8CFC\u8CB7</span>\n                        <div class=\"price col-2\">\n                            <img src=\"./image/member/r2.jpg\">\n                        </div>\n                        <span class=\"block col-2\"></span>\n                    </div>\n\n                </div>\n    "
});
Vue.component("saler_contain", {
  template: "\n            <!-- \u8CE3\u5BB6 -->\n                <div class=\"saler_contain\">\n                    <div class=\"contain_bar\">\n                        <span class=\"apply_date col-3\">\u4EA4\u6613\u65E5\u671F</span>\n                        <span class=\"product col-3\">\u6211\u7684\u5546\u54C1</span>\n                        <span class=\"method col-2\">\u4EA4\u6613\u65B9\u5F0F</span>\n                        <span class=\"price col-2\">\u8CA9\u552E\u91D1\u984D</span>\n                        <div class=\"dropdown col-2\" id=\"app2\">\n                            <select>\n                                <option value=\"t3\"> \u8FD1\u4E09\u500B\u6708</option>\n                                <option value=\"t6\">\u8FD1\u516D\u500B\u6708</option>\n                                <option value=\"t9\">\u8FD1\u4E5D\u500B\u6708</option>\n                                <option value=\"t12\">\u8FD1\u4E00\u5E74</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"contain_list\">\n                        <span class=\"apply_date col-3\">110-10-20</span>\n                        <div class=\"my_role col-3\"><img src=\"./image/member/r1.jpg\"></div>\n                        <span class=\"method col-2\">\u8CA9\u552E</span>\n                        <span class=\"price col-2\">100e</span>\n                        <span class=\"block col-2\"></span>\n                    </div>\n                </div>\n    "
});
Vue.component("saler_change", {
  template: "\n            <!-- \u8CE3\u5BB6\u4EA4\u63DB -->\n                <div class=\"saler_change\">\n                    <div class=\"contain_bar\">\n                        <span class=\"apply_date col-3\">\u4EA4\u6613\u65E5\u671F</span>\n                        <span class=\"product col-3\">\u6211\u7684\u5546\u54C1</span>\n                        <span class=\"method col-2\">\u4EA4\u6613\u65B9\u5F0F</span>\n                        <span class=\"price col-2\">\u4EA4\u63DB\u89D2\u8272</span>\n                        <div class=\"dropdown col-2\" id=\"app3\">\n                            <select>\n                                <option value=\"t3\">\u8FD1\u4E09\u500B\u6708</option>\n                                <option value=\"t6\">\u8FD1\u516D\u500B\u6708</option>\n                                <option value=\"t9\">\u8FD1\u4E5D\u500B\u6708</option>\n                                <option value=\"t12\">\u8FD1\u4E00\u5E74</option>\n                            </select>\n                        </div>\n                    </div>\n                    <div class=\"contain_list\">\n                        <span class=\"apply_date col-3\">110-10-20</span>\n                        <div class=\"my_role col-3\"><img src=\"./image/member/r1.jpg\"></div>\n                        <span class=\"method col-2\">\u4EA4\u63DB</span>\n                        <div class=\"price col-2\">\n                            <img src=\"./image/member/r2.jpg\">\n                        </div>\n                        <span class=\"block col-2\"></span>\n                    </div>\n\n                </div>\n    "
});
var vm0 = new Vue({
  el: "#app0",
  data: {
    content: "buyer_contain",
    b_contain: true,
    b_change: false,
    s_contain: false,
    s_change: false
  },
  methods: {
    showBuyContain: function showBuyContain() {
      vm0.$data.b_contain = true;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = false;
      vm0.$data.s_change = false;
      this.content = "buyer_contain";
    },
    showBuyChange: function showBuyChange() {
      vm0.$data.b_contain = false, vm0.$data.b_change = true, vm0.$data.s_contain = false, vm0.$data.s_change = false, this.content = "buyer_change";
    },
    showSalerContain: function showSalerContain() {
      vm0.$data.b_contain = false;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = true;
      vm0.$data.s_change = false;
      this.content = "saler_contain";
    },
    showSalerChange: function showSalerChange() {
      vm0.$data.b_contain = false;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = false;
      vm0.$data.s_change = true;
      this.content = "saler_change";
    }
  }
});