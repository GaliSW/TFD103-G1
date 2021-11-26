function trans() {
  window.location.href = "./login.html";
}
function clickThis() {
  let Name = $("#Name").val();
  Name = $.trim(Name);
  let thisVerify = $("#thisVerify").val();
  thisVerify = $.trim(thisVerify);

  $.ajax({
    method: "POST",
    url: "../php/member/verify.php",
    data: {
      Name: Name,
      thisVerify: thisVerify,
    },
    dataType: "text",
    success: function (response) {
      if (response == "Y") {
        $("#thisOk").addClass("_off");
        $("#idError").addClass("_off");
        $("#falseVerify").addClass("_off");
        $("#resendOk").addClass("_off");
        $("#ok").addClass("_on");
        setTimeout("trans()", 5);
      }else if (response == "X1") {
        $("#resendOk").addClass("_off");
        $("#thisOk").addClass("_off");
        $("#idError").removeClass("_off");
        $("#falseVerify").addClass("_off");
      } else if (response == "N") {
        $("#resendOk").addClass("_off");
        $("#thisOk").addClass("_off");
        $("#idError").addClass("_off");
        $("#falseVerify").removeClass("_off");
      }
    },
  });
}

function resendThis() {
  let Name = $("#Name").val();
  Name = $.trim(Name);
  
  $.ajax({
    method: "POST",
    url: "../php/member/resendVerify.php",
    data: {
      Name: Name,
    },
    dataType: "text",
    success: function (response) {
      if (response == "X") {
          $("#thisOk").addClass("_off");
          $("#idError").removeClass("_off");
          $("#falseVerify").addClass("_off");

      } else{
          $("#resendOk").removeClass("_off");
          $("#falseVerify").addClass("_off");
          $("#idError").addClass("_off");
          let str = response;

          console.log(response);
          let verify = str.slice(-5, -1);
          // console.log(str.slice(-5,-1));
          let email = str.slice(0, -5);
          // console.log(str.slice(0,-5))

          send(email, verify);
        
          
      }
    },
  });
}

function send(em, num) {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "tfd103g1",
    Password: "tibame_tfd103",
    To: em,
    From: "tfd103g1@gmail.com",
    Subject: "怪哩怪氣驗證信",
    Body: `您的驗證碼為: ${num} ，請點擊網址驗證。
          https://tibamef2e.com/tfd103/g1/TFD103-G1/src/verify.html"`,
  })
}