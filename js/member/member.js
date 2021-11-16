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
      displaySale();
    },
    clickClose() {
      vm.$data.pop = false;
    },
    clickPop() {
      vm.$data.pop = true;
    }, 
    
  },
  
  },
);

function clickBuyCancel() 
{
vm.$data.pop = true;
vm.$data.buyCancel = true;
vm.$data.saleCheck = false;
vm.$data.saleReject = false;
}

function displayBuy() {
  $.ajax({
    url: "../php/member/apply_buy.php",
    data: {},
    dataType: "json",
    success: function (response) {
      $("#result_buy").html("");
      //更新html內容(透過jQuery跑迴圈取值)
      $.each(response, function (indexA, rowA) {
        let status = "";
        switch (rowA.CHECKVALUE) {
          case "0":
            status = "已完售";
            break;
          case "1":
            status = "不喜歡角色";
            break;
          case "2":
            status = "不喜歡能力";
            break;
          case "3":
            status = "其他";
            break;
        }

        if (rowA.CONFIRM == 0 && rowA.AMOUNT == 1) {
          $("#result_buy").append(
            `
                      <div class="contain_list">
                        <span class="apply_date col-1">${rowA.CHANGEDATE}</span>
                        <div class="my_role col-3"><img src=""></div>
                        <div class="slaes_role col-3">
                          <img src="" alt="">
                        </div>
                        <span class="trade_status col-1">等待確認</span>
                        <div class="trade_button col-3">
                          <button class="confirm" onclick=clickBuyCancel()>取消交易</button>
                        </div>
                      </div>
                      <span>
                      <hr>
                      </span>
                      `
          );
        }
        if (
          (rowA.CONFIRM == 0 && rowA.AMOUNT == 0) ||
          (rowA.CONFIRM == 0 && rowA.SHOW == 0)
        ) {
          $("#result_buy_off").append(
            `
       <div class="contain_list _off">
                            <span class="apply_date col-1">${rowA.CHANGEDATE}</span>
                            <div class="my_role col-3"><img src=""></div>
                            <div class="slaes_role col-3">
                                <img src="" alt="">
                            </div>

                            <span class="trade_status col-1">${status}</span>
                            <div class="trade_button col-3">
                                <button class="delete "><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                                `
          );
        }
      });
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    },
  });
}

window,onload = displayBuy();

// 賣家確認交易
function clickSaleCheck() {
  vm.$data.pop = true;
  vm.$data.buyCancel = false;
  vm.$data.saleCheck = true;
  vm.$data.saleReject = false;
}

// 賣家拒絕交易
function clickSaleReject() {
  vm.$data.pop = true;
  vm.$data.buyCancel = false;
  vm.$data.saleCheck = false;
  vm.$data.saleReject = true;
}

function displaySale() {
  $.ajax({
    url: "../php/member/apply_sale.php",
    data: {},
    dataType: "json",
    success: function (response) {
      $("#result_sale").html("");
      $("#result_sale_off").html("");
      //更新html內容(透過jQuery跑迴圈取值)
      $.each(response, function (index, row) {
        if (row.CONFIRM == 0 && row.AMOUNT == 1) {
          $("#result_sale").append(
            `
                  <div class="contain_list">
                      <span class="apply_date col-1">${row.CHANGEDATE}</span>
                      <div class="my_role col-3"><img src=""></div>
                      <div class="slaes_role col-3">
                          <img src="" alt="">
                      </div>
                      <span class="trade_status col-1">等待確認</span>
                      <div class="trade_button col-3">
                          <button class="confirm" onclick=clickSaleCheck()>確認交易</button>
                          <button class="reject" onclick=clickSaleReject()>拒絕交易</button>
                      </div>
                  </div>    
                  <span>
                      <hr>
                  </span>
                                `
          );
        }
        if (row.CONFIRM == 4 && row.AMOUNT !== 0 && row.SHOW !== 0) {
          $("#result_sale_off").append(
            `
       <div class="contain_list _off">
                            <span class="apply_date col-1">${row.CHANGEDATE}</span>
                            <div class="my_role col-3"><img src=""></div>
                            <div class="slaes_role col-3">
                                <img src="" alt="">
                            </div>

                            <span class="trade_status col-1">已被取消</span>
                            <div class="trade_button col-3">
                                <button class="delete "><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                                `
          );
        }
      });
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    },
  });
}