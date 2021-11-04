"use strict";

//宣告子組件:hiddenPopUps 並綁定區塊
var PopUps = {
  template: '#PopUps',
  //向上層傳遞事件
  methods: {
    clickClose: function clickClose() {
      this.$emit('stop-show');
    }
  }
};
var vm = new Vue({
  el: '#goBtn',
  data: {
    isShow: false
  },
  //在父層掛載子組件
  components: {
    hidden: PopUps
  },
  //綁定點擊事件
  methods: {
    clickShow: function clickShow() {
      console.log('123');
      this.isShow = true;
    },
    close: function close() {
      // console.log('321');
      this.isShow = false;
    }
  }
});