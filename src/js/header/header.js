
//當前點數紀錄
function balance() {
    $.ajax({
        url: "../php/member/balance.php",
        data: {},
        dataType: "text",
        method: "post",
        success: (response) => {
            if (response > 0) {
                $("#headerResult").html("");
                $("#headerResult").html(response + "E");
            } else if (response == "") {
                $("#headerResult").html("");
                $("#headerResult").html(0 + "E");
            }
        },
        error: function (exception) {
            alert("發生錯誤: " + exception.status);
        },
    });
}

//申請中訊息提示
function countDeal() {
    $("#headerCountResult").html("");
    $.ajax({
        url: "../php/member/count_deal.php",
        data: {},
        dataType: "json",
        success: (response) => {
            if (response > 0) {
                $("#headerCountResult").append(response);
                $("#headerCountResult").removeClass("_off");
            } else if (response == "") {
                $("#headerCountResult").append(response);
                $("#headerCountResult").removeClass("_off");
            }
        }
    });
};

function status() {
    $.ajax({
        method: "POST",
        url: "../php/LoginCheck.php",
        data: {},
        dataType: "text",
        success: function (response) {
            if (response == "") {
                let LogOut = document.getElementById('LogOut');
                LogOut.classList.add('none');
                let LogOutPhone = document.getElementById('LogOutPhone');
                LogOutPhone.classList.add('none');
            } else {
                let appear1 = document.getElementById('appear1');
                appear1.classList.remove('disappear');
                let appear2 = document.getElementById('appear2');
                appear2.classList.remove('disappear');
                let LogOut = document.getElementById('LogOut');
                balance();
                countDeal();
            }
        },
        error: function (exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
}

function LogOut() {
    $.ajax({
        method: "POST",
        url: "../php/memLogin/LogOut.php",
        data: {},
        dataType: "text",
        success: function (response) {
            let appear1 = document.getElementById('appear1');
            appear1.classList.add('disappear');
            let appear2 = document.getElementById('appear2');
            appear2.classList.add('disappear');
            let LogOut = document.getElementById('LogOut');
            LogOut.classList.add('none');
            let LogOutPhone = document.getElementById('LogOutPhone');
            LogOutPhone.classList.add('none');
        },
        error: function (exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
}
function memberCheck() {
    $.ajax({
        method: "POST",
        url: "../php/LoginCheck.php",
        data: {},
        dataType: "text",
        success: function (response) {
            if (response == "") {
                location.href = 'login.html';
            } else {
                location.href = 'member.html';
            }
        },
        error: function (exception) {
            alert("數據載入失敗: " + exception.status);
        }
    });
}
