
let vm = new Vue({
  el: "#app",
  data: {
    // content: "buyer_contain",
    buyer: true,
    saler: false,
    pop: false,
    buyCancel: false,
    saleCheck: false,
    saleReject: false,
  },

  methods: {
    showBuyer: function () {
      vm.$data.buyer = true;
      vm.$data.saler = false;
      // vm.$data.content = "buyer_contain";
    },
    showSaler: function () {
      vm.$data.saler = true;
      vm.$data.buyer = false;
      // vm.$data.content = "saler_contain";
    },
    clickClose() {
      vm.$data.pop = false;
    },
    clickPop() {
      vm.$data.pop = true;
    },
    clickBuyCancel() {
      vm.$data.pop = true;
      vm.$data.buyCancel = true;
      vm.$data.saleCheck = false;
      vm.$data.saleReject = false;
    },
    clickSaleCheck() {
      vm.$data.pop = true;
      vm.$data.buyCancel = false;
      vm.$data.saleCheck = true;
      vm.$data.saleReject = false;
    },
    clickSaleReject() {
      vm.$data.pop = true;
      vm.$data.buyCancel = false;
      vm.$data.saleCheck = false;
      vm.$data.saleReject = true;
    },
  },
});


// Vue.component(`buyer_contain`, {
//   template: `
//             <div class="buyer_contain">
//                     <div class="contain_bar">
//                         <span class="apply_date col-1">申請日期</span>
//                         <span class="my_role col-3">我的角色</span>
//                         <span class="product col-3">商品</span>
//                         <span class="status col-5">狀態</span>
//                     </div>
//                     <div class="contain_list">
//                         <span class="apply_date col-1">110-10-20</span>
//                         <div class="my_role col-3"><img src="../image/member/r1.jpg"></div>
//                         <div class="slaes_role col-3">
//                             <img src="../image/member/r2.jpg" alt="">
//                         </div>
//                         <span class="trade_status col-1">等待確認</span>
//                         <div class="trade_button col-3">
//                             <button class="confirm ">取消交易</button>
//                         </div>
//                     </div>
//                     <span>
//                         <hr>
//                     </span>
//                     <div class="contain_list _off">
//                         <span class="apply_date col-1">110-10-20</span>
//                         <div class="my_role col-3"><img src="../image/member/r1.jpg"></div>
//                         <div class="slaes_role col-3">
//                             <img src="../image/member/r2.jpg" alt="">
//                         </div>

//                         <span class="trade_status col-1">已完售</span>
//                         <div class="trade_button col-3">
//                             <button class="delete "><i class="fas fa-trash-alt"></i></button>
//                         </div>
//                     </div>

//                 </div>
//     `,
// });
// Vue.component(`saler_contain`, {
//   template: `
//             <div class="saler_contain">
//                     <div class="contain_bar">
//                         <span class="apply_date col-1">申請日期</span>
//                         <span class="my_role col-3">對方角色</span>
//                         <span class="product col-3">我的商品</span>
//                         <span class="status col-5">狀態</span>
//                     </div>
//                     <div class="contain_list">
//                         <span class="apply_date col-1">110-10-20</span>
//                         <div class="my_role col-3"><img src="../image/member/r1.jpg"></div>
//                         <div class="slaes_role col-3">
//                             <img src="../image/member/r2.jpg" alt="">
//                         </div>
//                         <span class="trade_status col-1">等待確認</span>
//                         <div class="trade_button col-3">
//                             <button class="confirm ">確認交易</button>
//                             <button class="reject " @click="clickPop">拒絕交易</button>
//                         </div>
//                     </div>
//                     <span>
//                         <hr>
//                     </span>
//                     <div class="contain_list _off">
//                         <span class="apply_date col-1">10-20</span>
//                         <div class="my_role col-3"><img src="../image/member/r1.jpg"></div>
//                         <div class="slaes_role col-3">
//                             <img src="../image/member/r2.jpg" alt="">
//                         </div>

//                         <span class="trade_status col-1">已完售</span>
//                         <div class="trade_button col-3">
//                             <button class="delete "><i class="fas fa-trash-alt"></i></button>
//                         </div>
//                     </div>

//                 </div>
//     `,
//   methods: {
//     clickPop() {
//       vm.$data.pop = true;
//     },
//   },
// });
