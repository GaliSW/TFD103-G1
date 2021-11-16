let vm0 = new Vue({
  el: "#app0",
  data: {
    // content: "buyer_contain",
    b_contain: true,
    b_change: false,
    s_contain: false,
    s_change: false,
    imgPhp:"",
    imgUrlSale: '../../../../dist/images/member/' + this.imgPhp,
  },
  methods: {
    displaySale: function () {
      $.ajax({
        url: "../php/member/trading_list_sale.php",
        data: {
          // account: new URL(location.href).searchParams.get("POINTS_ID"),
        },
        dataType: "json",
        success: function (response) {
          $("#result_sale").html("");
          //更新html內容(透過jQuery跑迴圈取值)
          $.each(response, function (index, row) {
            let imgUrl = "../dist/images/member/" + row.ROLE_IMG;
            let srcName = "購買";
            imgPhp = row.ROLE_IMG
            $("#result_sale").append(
              `
               <div class="contain_list">
                                <span class="apply_date col-3">${row.BUYDATE}</span>
                                <div class="my_role col-3"><img src=""></div>
                                <span class="method col-2">販售</span>
                                <span class="price col-2">${row.PRICE}e</span>
                                <span class="block col-2"></span>
                            </div>
                            <span><hr></span>
                                `
            );
          });
        },
        error: function (exception) {
          alert("發生錯誤: " + exception.status);
        },
      });
    },
    showBuyContain: function () {
      vm0.$data.b_contain = true;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = false;
      vm0.$data.s_change = false;
      //   this.content = "buyer_contain";
    },
    showBuyChange: function () {
      vm0.$data.b_contain = false;
      vm0.$data.b_change = true;
      vm0.$data.s_contain = false;
      vm0.$data.s_change = false;
      // (this.content = "buyer_change");
    },
    showSalerContain: function () {
      vm0.$data.b_contain = false;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = true;
      vm0.$data.s_change = false;
      this.displaySale();
      //   this.content = "saler_contain";
    },
    showSalerChange: function () {
      vm0.$data.b_contain = false;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = false;
      vm0.$data.s_change = true;
      //   this.content = "saler_change";
    },
    
  },
});

function displayBuy(){
        $.ajax({
          url: "../php/member/trading_list_buy.php",
        data: {
          // account: new URL(location.href).searchParams.get("POINTS_ID"),
        },
        dataType: "json",
        success: function (response) {
          $("#result_buy").html("");
          //更新html內容(透過jQuery跑迴圈取值)
          $.each(response, function (index, row) {
            // let imgUrl = "../dist/images/member/" + row.ROLE_IMG;
      
            $("#result_buy").append(
              `
               <div class="contain_list">
                                <span class="apply_date col-3">${row.BUYDATE}</span>
                                <div class="my_role col-3"><img :src=$imgUrl></div>
                                <span class="method col-2">購買</span>
                                <span class="price col-2">${row.PRICE}e</span>
                                <span class="block col-2"></span>
                            </div>
                            <span><hr></span>
                                `
            );
          });
          },
          error: function (exception) {
            alert("發生錯誤: " + exception.status);
          },
        });
  };

  window.onload =  displayBuy() ;
  

// Vue.component(`buyer_contain`, {
//   template: `
//             <!-- 買家 -->
//                 <div class="buyer_contain">
//                     <div class="contain_bar">
//                         <span class="apply_date col-3">交易日期</span>
//                         <span class="product col-3">交易商品</span>
//                         <span class="method col-2">交易方式</span>
//                         <span class="price col-2">購買金額</span>
//                         <div class="dropdown col-2" id="app">
//                             <select >
//                                 <option value="t3">近三個月</option>
//                                 <option value="t6">近六個月</option>
//                                 <option value="t9">近九個月</option>
//                                 <option value="t12">近一年</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div class="contain_list">
//                         <span class="apply_date col-3">110-10-20</span>
//                         <div class="my_role col-3"><img src="../image/member/r1.jpg"></div>
//                         <span class="method col-2">購買</span>
//                         <span class="price col-2">100e</span>
//                         <span class="block col-2"></span>
//                     </div>
//                 </div>
//     `,
// });
// Vue.component(`buyer_change`, {
//   template: `
//             <!-- 買家交換 -->
//                 <div class="buyer_change">
//                     <div class="contain_bar">
//                         <span class="apply_date col-3">交易日期</span>
//                         <span class="product col-3">交易商品</span>
//                         <span class="method col-2">交易方式</span>
//                         <span class="price col-2">我的角色</span>
//                         <div class="dropdown col-2" id="app1">
//                             <select>
//                                 <option value="t3">近三個月</option>
//                                 <option value="t6">近六個月</option>
//                                 <option value="t9">近九個月</option>
//                                 <option value="t12">近一年</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div class="contain_list">
//                         <span class="apply_date col-3">110-10-20</span>
//                         <div class="my_role col-3"><img src="../image/member/r1.jpg"></div>
//                         <span class="method col-2">購買</span>
//                         <div class="price col-2">
//                             <img src="../image/member/r2.jpg">
//                         </div>
//                         <span class="block col-2"></span>
//                     </div>

//                 </div>
//     `,
// });
// Vue.component(`saler_contain`, {
//   template: `
//             <!-- 賣家 -->
//                 <div class="saler_contain">
//                     <div class="contain_bar">
//                         <span class="apply_date col-3">交易日期</span>
//                         <span class="product col-3">我的商品</span>
//                         <span class="method col-2">交易方式</span>
//                         <span class="price col-2">販售金額</span>
//                         <div class="dropdown col-2" id="app2">
//                             <select>
//                                 <option value="t3"> 近三個月</option>
//                                 <option value="t6">近六個月</option>
//                                 <option value="t9">近九個月</option>
//                                 <option value="t12">近一年</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div class="contain_list">
//                         <span class="apply_date col-3">110-10-20</span>
//                         <div class="my_role col-3"><img src="../image/member/r1.jpg"></div>
//                         <span class="method col-2">販售</span>
//                         <span class="price col-2">100e</span>
//                         <span class="block col-2"></span>
//                     </div>
//                 </div>
//     `,
// });
// Vue.component(`saler_change`, {
//   template: `
//             <!-- 賣家交換 -->
//                 <div class="saler_change">
//                     <div class="contain_bar">
//                         <span class="apply_date col-3">交易日期</span>
//                         <span class="product col-3">我的商品</span>
//                         <span class="method col-2">交易方式</span>
//                         <span class="price col-2">交換角色</span>
//                         <div class="dropdown col-2" id="app3">
//                             <select>
//                                 <option value="t3">近三個月</option>
//                                 <option value="t6">近六個月</option>
//                                 <option value="t9">近九個月</option>
//                                 <option value="t12">近一年</option>
//                             </select>
//                         </div>
//                     </div>
//                     <div class="contain_list">
//                         <span class="apply_date col-3">110-10-20</span>
//                         <div class="my_role col-3"><img src="../image/member/r1.jpg"></div>
//                         <span class="method col-2">交換</span>
//                         <div class="price col-2">
//                             <img src="../image/member/r2.jpg">
//                         </div>
//                         <span class="block col-2"></span>
//                     </div>

//                 </div>
//     `,
// });