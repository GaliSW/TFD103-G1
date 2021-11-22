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
        $("#ok").addClass("_on");
        setTimeout("trans()", 5);
      } else {
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
      if (response == "Y") {
          $("#resendOk").removeClass("_off");
      } else if (response == "X") {
        $("#idError").removeClass("_off");
      }
    },
  });
}