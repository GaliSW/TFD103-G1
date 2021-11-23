"use strict";

// window.onload = function () {
//     function resize() {
//         let p1 = new Ping();
//         p1.init("#ul", 3);
//     }
//     resize();
//     window.addEventListener('resize', resize, false);
// }
function Ping() {
  this.oUl = null;
  this.aLi = null;
  this.len = 0;
  this.oLi = null;
  this.num = 0;
  this.zIndex = 2;
  this.arr = [];
  this.roleImg = null;
}

Ping.prototype.init = function (id, num, img) {
  this.oUl = document.querySelector(id);
  this.oUl.innerHTML = this.pics(num);
  this.aLi = this.oUl.querySelectorAll("li"); // console.log(this.aLi);

  this.len = this.aLi.length;
  this.oLi = this.aLi[this.len - 1]; //最後一個li

  this.num = num;
  this.oLi.className = "active";
  this.roleImg = img;
  this.local(img);
  this.click();
  this.keycode();
}; //透過index找到li


Ping.prototype.Li = function (index) {
  for (var _i = 0; _i < this.len; _i++) {
    if (this.aLi[_i].index == index) {
      return this.aLi[_i];
    }
  }
}; //判斷完成拼圖


Ping.prototype.done = function () {
  var array1 = [];
  var array2 = [];
  var n = 0;

  for (var _i2 = 0; _i2 < this.len; _i2++) {
    array1.push(this.aLi[_i2].index);
    array2.push(this.arr[_i2][2]);
  } // console.log(array1, array2);


  for (var _i3 = 0; _i3 < this.len; _i3++) {
    if (array1[_i3] == array2[_i3]) {
      n += 1; // console.log('done');
    }
  }

  if (n == this.len) {
    // console.log('done');
    this.num++;
    var This = this; //!do another function

    $.ajax({
      method: "POST",
      url: "../php/Gacha/InsertMemberImg.php",
      data: {
        roleImg: this.roleImg
      },
      dataType: "json",
      success: function success(response) {}
    });
    document.getElementById('bonusBlk').classList.remove('none');
    callPoints(); // setTimeout(() => {
    //     This.init("ul", This.num)
    // }, 1000);
  }
}; //鍵盤移動


Ping.prototype.keycode = function () {
  var This = this;

  document.onkeydown = function (e) {
    // console.log(e.keyCode);
    // console.log(This.oLi.index);
    if (e.keyCode == 37) {
      //左
      if (This.oLi.index - 1 < 0) {
        This.move(This.Li(This.oLi.index));
      } else {
        This.move(This.Li(This.oLi.index - 1));
      }
    } else if (e.keyCode == 39) {
      //右
      if (This.oLi.index + 1 > This.len - 1) {
        This.move(This.Li(This.oLi.index));
      } else {
        This.move(This.Li(This.oLi.index + 1));
      }
    } else if (e.keyCode == 38) {
      //上
      if (This.oLi.index - This.num < 0) {
        This.move(This.Li(This.oLi.index));
      } else {
        This.move(This.Li(This.oLi.index - This.num));
      }
    } else if (e.keyCode == 40) {
      //下
      if (This.oLi.index + This.num > This.len - 1) {
        This.move(This.Li(This.oLi.index));
      } else {
        This.move(This.Li(This.oLi.index + This.num));
      }
    }
  };
}; //判斷移動


Ping.prototype.judge = function (li) {
  var index = li.index;
  var num = this.oLi.index; //最左邊

  if (num % this.num == 0) {
    if (index + this.num == num || index - this.num == num || index - 1 == num) {
      return true;
    }
  } else if (num % this.num == 2) {
    //最右邊
    if (index + this.num == num || index - this.num == num || index + 1 == num) {
      return true;
    }
  } else {
    //中間
    if (index + this.num == num || index - this.num == num || index - 1 == num || index + 1 == num) {
      return true;
    }
  }

  return false;
}; //移動


Ping.prototype.move = function (li) {
  if (this.judge(li)) {
    li.style.left = this.arr[this.oLi.index][0] + "px";
    li.style.top = this.arr[this.oLi.index][1] + "px";
    this.oLi.style.left = this.arr[li.index][0] + "px";
    this.oLi.style.top = this.arr[li.index][1] + "px";
    var _ref = [li.index, this.oLi.index];
    this.oLi.index = _ref[0];
    li.index = _ref[1];
    this.done();
  }
}; //點擊


Ping.prototype.click = function () {
  var This = this;

  for (var _i4 = 0; _i4 < this.len; _i4++) {
    this.aLi[_i4].onclick = function () {
      this.style.zIndex = This.zIndex++;
      This.move(this);
    };
  }
}; //定位


Ping.prototype.local = function (img) {
  var arr1 = [];
  var arrA = [];

  for (var _i5 = 0; _i5 < this.len; _i5++) {
    arr1.push([this.aLi[_i5].offsetLeft, this.aLi[_i5].offsetTop, _i5]);
    arrA.push([this.aLi[_i5].offsetLeft, this.aLi[_i5].offsetTop, _i5]);
  }

  ;
  this.arr = arrA; //隨機

  var arr2 = [];

  for (var _i6 = 0; _i6 < this.len - 1; _i6++) {
    arr2.push(arr1[_i6]);
  }

  arr2.sort(function (a, b) {
    return Math.random() - 0.5;
  });
  arr2.push(arr1[this.len - 1]); // console.log(arr2);
  // 逆序數

  var arr3 = [];
  var a = 0;

  for (var _i7 = 0; _i7 < this.len; _i7++) {
    arr3.push(arr2[_i7][2]);
  }

  for (var _i8 = 0; _i8 < this.len; _i8++) {
    var bp = arr3[_i8];

    for (var j = _i8; j < this.len; j++) {
      var cp = arr3[j];

      if (bp > cp) {
        a += 1; // console.log(a, bp, cp);
      }
    }
  } // console.log(a);


  if (a % 2 == 0) {// console.log('go');
  } else {
    this.local(img);
    return false;
  }

  arr1 = arr2;
  var windowWidth = screen.width;

  if (windowWidth < 575.98) {
    var liArr = document.getElementById('ul').childNodes;

    for (i = 0; i < liArr.length - 1; i++) {
      liArr[i].style.background = "url(../image/ROLE/".concat(img, ")");
    }

    for (var _i9 = 0; _i9 < this.len; _i9++) {
      this.aLi[_i9].style.position = "absolute";
      this.aLi[_i9].style.left = arr1[_i9][0] + "px";
      this.aLi[_i9].style.top = arr1[_i9][1] + "px";
      this.aLi[_i9].index = arr1[_i9][2];
      this.aLi[_i9].style.margin = 0;
      this.aLi[_i9].style.backgroundSize = this.num * 100 + "px";
      this.aLi[_i9].style.backgroundPositionX = _i9 % this.num * -100 + "px";
      this.aLi[_i9].style.backgroundPositionY = (_i9 - _i9 % this.num) / this.num * -100 + "px"; // (i % this.num) * -100 + "px" + ((i - (i % this.num)) / this.num) * -100 + "px";
      // console.log('1');
    }
  } else {
    var _liArr = document.getElementById('ul').childNodes;

    for (i = 0; i < _liArr.length - 1; i++) {
      _liArr[i].style.background = "url(../image/ROLE/".concat(img, ")");
    }

    for (var _i10 = 0; _i10 < this.len; _i10++) {
      this.aLi[_i10].style.position = "absolute";
      this.aLi[_i10].style.left = arr1[_i10][0] + "px";
      this.aLi[_i10].style.top = arr1[_i10][1] + "px";
      this.aLi[_i10].index = arr1[_i10][2];
      this.aLi[_i10].style.margin = 0;
      this.aLi[_i10].style.backgroundSize = this.num * 200 + "px";
      this.aLi[_i10].style.backgroundPositionX = _i10 % this.num * -200 + "px";
      this.aLi[_i10].style.backgroundPositionY = (_i10 - _i10 % this.num) / this.num * -200 + "px"; // (i % this.num) * -100 + "px" + ((i - (i % this.num)) / this.num) * -100 + "px";
    }
  }
}; //生成元素


Ping.prototype.pics = function (num) {
  var windowWidth = screen.width;

  if (windowWidth < 575.98) {
    this.oUl.style.width = 10 + num * 2 + num * 100 + "px";
    this.oUl.style.height = 10 + num * 2 + num * 100 + "px";
    console.log('2');
    var n = num * num;
    var str = "";

    for (var _i11 = 0; _i11 < n; _i11++) {
      str += "<li></li>";
    }

    return str;
  } else {
    this.oUl.style.width = 10 + num * 2 + num * 200 + "px";
    this.oUl.style.height = 10 + num * 2 + num * 200 + "px";

    var _n = num * num;

    var _str = "";

    for (var _i12 = 0; _i12 < _n; _i12++) {
      _str += "<li></li>";
    }

    return _str;
  }
};