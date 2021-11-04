"use strict";

//宣告子組件:hiddenPopUps 並綁定區塊
// let hiddenPopUps1 = {
//     template: '#hiddenPopUps1',
//     //向上層傳遞事件
//     methods: {
//         clickClose() {
//             this.$emit('stop-show')
//         }
//     },
// }
var vm0 = new Vue({
  el: '#confirmBlk',
  data: {
    isShow: false
  },
  //在父層掛載子組件
  components: {// hidden: hiddenPopUps1
  },
  //綁定點擊事件
  methods: {
    clickShow2: function clickShow2() {
      // console.log('123');
      this.isShow = true;
    },
    close: function close() {
      // console.log('321');
      this.isShow = false;
    }
  }
});