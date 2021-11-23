"use strict";

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var ball1 = document.getElementById('ball1');
var ball2 = document.getElementById('ball2');
var ball3 = document.getElementById('ball3');
var ball4 = document.getElementById('ball4');
var ball5 = document.getElementById('ball5');
var ballList = [ball1, ball2, ball3, ball4, ball5];
var ballNum = 10; //扭蛋機球數

var awardList = []; //扭蛋機球的陣列

var timer; //計時器

var award = document.getElementById('awardBall');
var message = document.getElementById('message');
var point = document.getElementById('point');
var mask = document.getElementById('pintooMask');
var gachaScreenBlk = document.getElementById('gachaScreen');

function init() {
  //初始化
  for (var i = 0; i < ballNum; i++) {
    //隨機生成各色小球
    var index = Math.floor(5 * Math.random());
    awardList[i] = new Ball(index, ballList[index]); //新建小球對象
  }

  window.clearInterval(timer); //計時器歸零

  timer = setInterval(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //清空扭蛋機球池

    for (var _i = 0; _i < awardList.length; _i++) {
      awardList[_i].run();
    } //扭蛋動畫

  }, 15);
}

function Ball(index, img) {
  this.r = 30; //扭蛋池半徑

  this.x = this.rand(canvas.width - this.r * 5); //小球X軸座標

  this.y = this.rand(canvas.height - this.r * 5); //小球Y軸座標

  this.color = index; //小球顏色

  this.img = img; //小球素材
  // console.log(this.x);

  do {
    this.speedX = this.rand(20) - 12;
  } while (this.speedX < 2); //小球横座標改變速度


  do {
    this.speedY = this.rand(20) - 12;
  } while (this.speedY < 2); //小球縱座標改變速度
  // console.log(this.speedX);

}

Ball.prototype = {
  rand: function rand(num) {
    //隨機數
    return Math.random() * num;
  },
  run: function run() {
    //扭蛋運動
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x > canvas.width - this.r * 2) {
      //小球碰到右邊，横座標速度變負數
      this.speedX = -this.speedX;
    }

    if (this.x < 0) {
      //小球碰到左邊，横坐标速度變正數
      this.speedX = Math.abs(this.speedX);
    }

    if (this.y > canvas.height - this.r * 2) {
      //小球碰到底，縱座標速度變為負
      this.speedY = -this.speedY;
    }

    if (this.y < 0) {
      //小球碰到上邊，縱座標速度變正
      this.speedY = Math.abs(this.speedY);
    }

    ctx.drawImage(this.img, this.x, this.y, 50, 50); //小球
  }
};

function play() {
  if (awardList.length === 0) {
    //球池中沒有球
    // alert('重新開始！');
    init();
    message.innerText = '扭蛋吧！';
  } else {
    window.clearInterval(timer); //歸零

    var r = awardList.pop(); //球數減少

    timer = setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height); //清空球池

      for (var i = 0; i < awardList.length; i++) {
        awardList[i].run();
      } //扭蛋運動

    }, 15);

    switch (r.color) {
      //扭蛋出獎
      case 0:
        award.setAttribute('class', 'dropBall1');
        break;

      case 1:
        award.setAttribute('class', 'dropBall2');
        break;

      case 2:
        award.setAttribute('class', 'dropBall3');
        break;

      case 3:
        award.setAttribute('class', 'dropBall4');
        break;

      case 4:
        award.setAttribute('class', 'dropBall5');
        break;
    }

    setTimeout(function () {
      //扭蛋成功提示
      award.setAttribute('class', '');
      var color = null;

      switch (r.color) {
        case 0:
          color = "purple";
          break;

        case 1:
          color = "green";
          break;

        case 2:
          color = "yellow";
          break;

        case 3:
          color = "red";
          break;

        case 4:
          color = "blue";
          break;
      } //由資料庫中扭顏色-->角色


      $.ajax({
        method: "POST",
        url: "../php/Gacha/callBall.php",
        data: {
          Color: color
        },
        dataType: "json",
        success: function success(response) {
          console.log(response);

          if (response == "") {
            // console.log('a');F
            play();
          } else {
            var roleStr = response[0][1];
            var roleImg = response[0][3];

            if (window.innerWidth < 414) {
              var img = document.getElementById('gachaRoleImgPhone');
              var str = "../image/ROLE/".concat(roleImg);
              img.attributes['src'].value = str;
              var ball = document.getElementById('gachaColorImgPhone');
              var str2 = "../image/gachaGame/".concat(color, ".png");
              ball.attributes['src'].value = str2;
              var top = document.getElementById('gachaTopImgPhone');
              var str3 = "../image/gachaGame/".concat(color, "top.png");
              top.attributes['src'].value = str3;
              var bottom = document.getElementById('gachaBottomImgPhone');
              var str4 = "../image/gachaGame/".concat(color, "bottom.png");
              bottom.attributes['src'].value = str4;
            } else {
              var _img = document.getElementById('gachaRoleImg');

              var _str = "../image/ROLE/".concat(roleImg);

              _img.attributes['src'].value = _str;

              var _ball = document.getElementById('gachaColorImg');

              var _str2 = "../image/gachaGame/".concat(color, ".png");

              _ball.attributes['src'].value = _str2;

              var _top = document.getElementById('gachaTopImg');

              var _str3 = "../image/gachaGame/".concat(color, "top.png");

              _top.attributes['src'].value = _str3;

              var _bottom = document.getElementById('gachaBottomImg');

              var _str4 = "../image/gachaGame/".concat(color, "bottom.png");

              _bottom.attributes['src'].value = _str4;
            }

            message.innerText = roleStr;
            setAmount(roleStr);
          }
        },
        error: function error(exception) {
          alert("發生錯誤: " + exception.status);
        }
      }); //將角色Amount -> 0

      function setAmount(roleStr) {
        $.ajax({
          method: "POST",
          url: "../php/Gacha/setAmount.php",
          data: {
            roleStr: roleStr
          },
          dataType: "text",
          success: function success(response) {
            findRoleId(roleStr);
          },
          error: function error(exception) {
            alert("發生錯誤: " + exception.status);
          }
        });
      } //撈出角色ID


      function findRoleId(roleStr) {
        // console.log(roleStr);
        $.ajax({
          method: "POST",
          url: "../php/Gacha/findRoleId.php",
          data: {
            roleStr: roleStr
          },
          dataType: "json",
          success: function success(response) {
            $.each(response, function (index, row) {
              var roleID = row.ROLE_ID;
              var img = row.ROLE_IMG;
              setGacha(roleID);
              gachaScreen(img); // if (window.innerWidth < 414) {
              //     gachaScreenPhone(img);
              // } else {
              //     gachaScreen(img);
              // }
            });
          },
          error: function error(exception) {
            alert("發生錯誤: " + exception.status);
          }
        });
      } //建立 Gacha 資料


      function setGacha(roleID) {
        // console.log(roleID);
        $.ajax({
          method: "POST",
          url: "../php/Gacha/setGacha.php",
          data: {
            roleID: roleID
          },
          dataType: "text",
          success: function success(response) {
            var member = response;
            dePoints(member);
          },
          error: function error(exception) {
            alert("發生錯誤: " + exception.status);
          }
        });
      } //扣除會員點數


      function dePoints(member) {
        $.ajax({
          method: "POST",
          url: "../php/Gacha/dePoints.php",
          data: {
            member: member
          },
          dataType: "text",
          success: function success(response) {
            callPoints();
          },
          error: function error(exception) {
            alert("發生錯誤: " + exception.status);
          }
        });
      }

      function callPoints() {
        $.ajax({
          method: "POST",
          url: "../php/Gacha/callPoints.php",
          data: {},
          dataType: "text",
          success: function success(response) {
            var p = response;

            if (response != "false") {
              if (response = "") {
                point.value = "0";
              } else {
                point.value = p + "E";
              }
            }
          },
          error: function error(exception) {
            alert("數據載入失敗: " + exception.status);
          }
        });
      }

      mask.classList.add('none');
      var element = document.getElementById('pintooBlk');

      function scrollToTop() {
        element.scrollIntoView(false);
      }

      scrollToTop();
      gachaScreenBlk.classList.add('none');
    }, 1100);
  }
}

init();