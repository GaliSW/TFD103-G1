"use strict";

function trans() {
  window.location.href = "./login.html";
}

function clickThis() {
  var Name = $("#Name").val();
  Name = $.trim(Name);
  var thisVerify = $("#thisVerify").val();
  thisVerify = $.trim(thisVerify);
  $.ajax({
    method: "POST",
    url: "../php/member/verify.php",
    data: {
      Name: Name,
      thisVerify: thisVerify
    },
    dataType: "text",
    success: function success(response) {
      if (response == "Y") {
        $("#thisOk").addClass("_off");
        $("#idError").addClass("_off");
        $("#falseVerify").addClass("_off");
        $("#resendOk").addClass("_off");
        $("#ok").addClass("_on");
        setTimeout("trans()", 5);
      } else if (response == "X1") {
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
    }
  });
}

function resendThis() {
  var Name = $("#Name").val();
  Name = $.trim(Name);
  $.ajax({
    method: "POST",
    url: "../php/member/resendVerify.php",
    data: {
      Name: Name
    },
    dataType: "text",
    success: function success(response) {
      if (response == "Y") {
        $("#resendOk").removeClass("_off");
        $("#falseVerify").addClass("_off");
        $("#idError").addClass("_off");
      } else if (response == "X") {
        $("#thisOk").addClass("_off");
        $("#idError").removeClass("_off");
        $("#falseVerify").addClass("_off");
      }
    }
  });
}