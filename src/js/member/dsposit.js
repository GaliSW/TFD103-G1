let vm = new Vue({
  el: "#app",
  data: {
    cards: [
      {
        value: 50,
        imgUrl: "../image/deposit/b1.jpg",
      },
      {
        value: 100,
        imgUrl: "../image/deposit/b2.jpg",
      },
      {
        value: 300,
        imgUrl: "../image/deposit/b3.jpg",
      },
      {
        value: 500,
        imgUrl: "../image/deposit/b4.jpg",
      },
      {
        value: 1000,
        imgUrl: "../image/deposit/b5.jpg",
      },
      {
        value: 2000,
        imgUrl: "../image/deposit/b6.jpg",
      },
      {
        value: 3000,
        imgUrl: "../image/deposit/b7.jpg",
      },
      {
        value: 5000,
        imgUrl: "../image/deposit/b8.jpg",
      },
    ],
  },
  methods: {
    store(itemValue) {
      $.ajax({
        method: "POST",
        url: "../php/member/deposit.php",
        data: {
          total: itemValue,
        },
        dataType: "text",
        success: function (response) {
          if (response == "Y") {
            alert("ok");
              balance();
          } else {
            alert("儲值失敗")
          }
        },
        error: function (exception) {
          alert("發生錯誤: " + exception.status);
        },
      });
      
    },
  },
});

function balance(){
  $.ajax({
    url: "../php/member/balance.php",
    data: {},
    dataType: "json",
    method:"post",
    success: function (response) {
      $("#result").html("0");
      if(response > 0){
        $("#result").html(response);
      }
    },
    error: function (exception) {
      alert("發生錯誤: " + exception.status);
    },
  });
}

window.onload = balance();