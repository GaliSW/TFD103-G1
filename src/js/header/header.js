function loginStatus(){
    let appear1 = document.getElementById('appear1');
    console.log(appear1);
    appear1.classList.remove('disappear');
    let appear2 = document.getElementById('appear2');
    appear2.classList.remove('disappear');
}


//當前點數紀錄
function balance(){
    $.ajax({
        url: "../php/member/balance.php",
        data: {},
        dataType: "json",
        method:"post",
        success: (response)=>{
            if(response > 0){
                $("#headerResult").html("");
                $("#headerResult").html(response + "E");
            }
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        },
    });
}

window.onload = balance();


//申請中訊息提示
function countDeal(){
    $("#headerCountResult").html("");
    $.ajax({
        url: "../php/member/count_deal.php",
        data: {},
        dataType: "json",
        success: (response)=>{
            if(response > 0){
                $("#headerCountResult").append(response);
                $("#headerCountResult").removeClass("_off");
            }
        }
    });
};

window.onload = countDeal();
