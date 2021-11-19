function displaySale() {
  let FilterSale = document.getElementById("saleFilter").value;
  $.ajax({
    method:"post",
    url: "../php/member/trading_list_sale.php",
    data: {
      FilterSale: FilterSale,
    },
    dataType: "json",
    success: function (response) {
      $("#result_sale").html("");
      //更新html內容(透過jQuery跑迴圈取值)
      $.each(response, function (index, row) {
        let srcName = "購買";

        $("#result_sale").append(
          `
               <div class="contain_list">
                                <span class="apply_date col-3">${row.BUYDATE}</span>
                                <div class="my_role col-3"><img src="../image/ROLE/${row.ROLE_IMG}"></div>
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
};

let vm0 = new Vue({
  el: "#app0",
  data: {
    // content: "buyer_contain",
    b_contain: true,
    b_change: false,
    s_contain: false,
    s_change: false,
  },
  methods: {
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
      displayBuyCng();
      // (this.content = "buyer_change");
    },
    showSalerContain: function () {
      vm0.$data.b_contain = false;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = true;
      vm0.$data.s_change = false;
      displaySale();
      //   this.content = "saler_contain";
    },
    showSalerChange: function () {
      vm0.$data.b_contain = false;
      vm0.$data.b_change = false;
      vm0.$data.s_contain = false;
      vm0.$data.s_change = true;
      displaySaleCng();
      //   this.content = "saler_change";
    },
  },
});

function displayBuy() {
  // let userName = LARRY;
  let filters = document.getElementById("buyFilter").value;
  $.ajax({
    method: "POST",
    url: "../php/member/trading_list_buy.php",
    data: {
      // Name : userName,
      Filters: filters,
    },
    dataType: "json",
    success: function (response) {
      $("#result_buy").html("");
      //更新html內容(透過jQuery跑迴圈取值)
      $.each(response, function (index, row) {
        $("#result_buy").append(
          `
               <div class="contain_list">
                                <span class="apply_date col-3">${row.BUYDATE}</span>
                                <div class="my_role col-3"><img src="../image/ROLE/${row.ROLE_IMG}"></div>
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
}

window.onload = displayBuy();

// 買家交換
function displayBuyCng() {
  let FilterBuyCng = document.getElementById("buyChangeFilter").value;
  $.ajax({
    method: "post",
    url: "../php/member/trading_change_buy.php",
    data: {
      Filter: FilterBuyCng,
    },
    dataType: "json",
    success: function (response) {
      $("#result_buy_change").html("");
      //更新html內容(透過jQuery跑迴圈取值)
      $.each(response, function (index, row) {
        
        $("#result_buy_change").append(
          `
               <div class="contain_list">
                                <span class="apply_date col-3">${row.CHANGEDATE}</span>
                                <div class="my_role col-3"><img src="../image/ROLE/${row.ROLE_IMG_BUY}"></div>
                                <span class="method col-2">交換(買)</span>
                                <div class="price col-2">
                                    <img src="../image/ROLE/${row.ROLE_IMG}">
                                </div>
                                <span class="block col-2"></span>
                            </div>
                                `
        );
      });
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    },
  });
};

// 賣家交換
function displaySaleCng() {
  let FilterSaleCng = document.getElementById("saleChangeFilter").value;
  $.ajax({
    method: "post",
    url: "../php/member/trading_change_buy.php",
    data: {
      Filter: FilterSaleCng,
    },
    dataType: "json",
    success: function (response) {
      $("#result_sale_change").html("");
      //更新html內容(透過jQuery跑迴圈取值)
      $.each(response, function (index, row) {
        
        $("#result_sale_change").append(
          `
               <div class="contain_list">
                            <span class="apply_date col-3">${row.CHANGEDATE}</span>
                            <div class="my_role col-3"><img src="../image/ROLE/${row.ROLE_IMG}"></div>
                            <span class="method col-2">交換</span>
                            <div class="price col-2">
                                <img src="../image/ROLE/${row.ROLE_IMG_BUY}">
                            </div>
                            <span class="block col-2"></span>
                        </div>
                                `
        );
      });
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    },
  });
};