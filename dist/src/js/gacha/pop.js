"use strict";

//宣告子組件:hiddenPopUps 並綁定區塊
var PopUps0 = {
  template: '#PopUps0',
  //向上層傳遞事件
  methods: {
    clickClose: function clickClose() {
      this.$emit('stop-show');
    }
  }
};
var vm0 = new Vue({
  el: '#box0',
  data: {
    isShow: false
  },
  //在父層掛載子組件
  components: {
    hidden: PopUps0
  },
  //綁定點擊事件
  methods: {
    clickShow: function clickShow() {
      $.ajax({
        method: "POST",
        url: "../php/Gacha/playCheck.php",
        data: {},
        dataType: "text",
        success: function success(response) {
          if (response == "Y") {
            var total = point.value.replace("E", "");

            if (total < 300) {
              var blk = document.getElementById('coinBlk');
              blk.classList.remove('none');
              return false;
            } else {
              vm0.isShow = true;
            }
          } else {
            var _blk = document.getElementById('toLoginBlk');

            _blk.classList.remove('none');
          }
        }
      });
    },
    close: function close() {
      // console.log('321');
      this.isShow = false;
    }
  }
});