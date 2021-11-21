// 彈跳視窗
let vmm = new Vue({
    el: "#vmm",
    data: {
        pop: false,
        buy: true,
        success: false,
        one: true,
        two: false,
        three: false,
        ROLE:[],
    },
    methods: {
        clickPop() {
        vmm.$data.pop = true;
        vmm.$data.buy = true;
        vmm.$data.success = false;
        vmm.$data.one = false;
        vmm.$data.two = false;
        vmm.$data.three = false;
        },
        clickClose() {
        vmm.$data.pop = false;
        },
        clickChange() {
        vmm.$data.pop = true;
        vmm.$data.buy = false;
        vmm.$data.success = false;
        vmm.$data.one = true;
        vmm.$data.two = false;
        vmm.$data.three = false;
        },
        toSuccess() {
        vmm.$data.success = true;
        vmm.$data.buy = false;
        },
        toTwo() {
        vmm.$data.two = true;
        vmm.$data.one = false;
        vmm.$data.three = false;
        },
        toThree() {
        vmm.$data.three = true;
        vmm.$data.one = false;
        vmm.$data.two = false;
        },
                                   
    },
                         
});

function display() {
    let that=this
    $.ajax({
        method: "POST",
        url: "../php/member/getMemberRole.php",
        data: {},
        dataType: "json",
        success: (response)=>{
            $("#result").html("");
            $.each(response, function (indexA, rowA) {
                let ab1 = rowA.ABILITY.slice(0, 1);
                        let ab2 = rowA.ABILITY.slice(1, 2);
                        let ab3 = rowA.ABILITY.slice(2, 3);
                        let ab4 = rowA.ABILITY.slice(3, 4);
                        let ab5 = rowA.ABILITY.slice(4, 5);
                if (rowA.AMOUNT == 1) {
                        $("#result").append(
                        `
                            <div class="contain_list">
                                <div class="role col-2"><img src="../image/ROLE/${rowA.ROLE_IMG}"></div>
                                <span class="role_name col-2">
                                    ${rowA.RNAME}
                                    <p class="rwd_price">${rowA.PRICE}E</p>
                                </span>
                                <div class="ability col-3">
                                    <div class="chartBox">
                                        加速：${ab1}
                                        <br>
                                        抓地：${ab2}
                                        <br>
                                        碰撞：${ab3}
                                        <br>
                                        迴避：${ab4}
                                        <br>
                                        道具：${ab5}
                                    </div>
                                </div>
                                <span class="price col-2">${rowA.PRICE}</span>
                                <div class="trade_button col-2">
                                    <button class="buy" @click=clickPop()>購買</button>
                                    <button class="change " @click=clickChange()>交換</button>
                                </div>
                                <div class="delete col-1">
                                    <button class="delete_btn" onclick= "deleted(${rowA.FAV_ID})"><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                
                            <span>
                                <hr>
                            </span>
                        `);
                }else{
                    $("#result_off").append(
                    `
                        <div class="contain_list _off">
                            <div class="role col-2"><img src="../image/ROLE/${rowA.ROLE_IMG}"></div>
                            <span class="role_name col-2">${rowA.RNAME}
                                <p class="rwd_price">${rowA.PRICE}E</p>
                            </span>
                            <div class="ability col-3">
                            <div class="chartBox">
                                加速：${ab1}
                                <br>
                                抓地：${ab2}
                                <br>
                                碰撞：${ab3}
                                <br>
                                迴避：${ab4}
                                <br>
                                道具：${ab5}
                            </div>
                            </div>
                            <span class="price col-2">${rowA.PRICE}</span>
                            <div class="trade_button col-2">
                                已完售
                            </div>
                            <div class="delete col-1">
                                <button class="delete_btn" onclick= "deleted(${rowA.FAV_ID})"><i class="fas fa-trash-alt"></i></button>
                            </div>
                        </div>
                    `);
                }      
            })
        }
    })                      
}

window.onload = display();

function deleted(clickId) {
    $.ajax({
      method: "POST",
      url: "../php/member/delete.php",
      data: {
        Id: clickId,
      },
      dataType: "text",
      success: function (response) {
        if (response == "Y") {
          $("#result").html("");
          $("#result_off").html("");
          display();
        } else {
          alert("error");
        }
      },
      error: function (exception) {
        alert("發生錯誤: " + exception.status);
      },
    });
  }

