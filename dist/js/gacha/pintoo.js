"use strict";

window.onload = function () {
  // console.log('1');
  function resize() {
    var p1 = new Ping();
    p1.init("ul", 3);
  }

  resize();
  window.addEventListener('resize', resize, false);
};

function Ping() {
  this.oUl = null;
  this.aLi = null;
  this.len = 0;
  this.oLi = null;
  this.num = 0;
  this.zIndex = 2;
  this.arr = [];
}

Ping.prototype.init = function (id, num) {
  this.oUl = document.querySelector(id);
  this.oUl.innerHTML = this.pics(num);
  this.aLi = this.oUl.querySelectorAll("li");
  this.len = this.aLi.length;
  this.oLi = this.aLi[this.len - 1]; //最後一個li

  this.num = num;
  this.oLi.className = "active";
  this.local();
  this.click();
  this.keycode();
}; //透過index找到li


Ping.prototype.Li = function (index) {
  for (var i = 0; i < this.len; i++) {
    if (this.aLi[i].index == index) {
      return this.aLi[i];
    }
  }
}; //判斷完成拼圖


Ping.prototype.done = function () {
  var array1 = [];
  var array2 = [];
  var n = 0;

  for (var i = 0; i < this.len; i++) {
    array1.push(this.aLi[i].index);
    array2.push(this.arr[i][2]);
  } // console.log(array1, array2);


  for (var _i = 0; _i < this.len; _i++) {
    if (array1[_i] == array2[_i]) {
      n += 1; // console.log('done');
    }
  }

  if (n == this.len) {
    console.log('done');
    this.num++;
    var This = this; //!do another function

    alert('恭喜完成'); // setTimeout(() => {
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

  for (var i = 0; i < this.len; i++) {
    this.aLi[i].onclick = function () {
      this.style.zIndex = This.zIndex++;
      This.move(this);
    };
  }
}; //定位


Ping.prototype.local = function () {
  var arr1 = [];
  var arrA = [];

  for (var i = 0; i < this.len; i++) {
    arr1.push([this.aLi[i].offsetLeft, this.aLi[i].offsetTop, i]);
    arrA.push([this.aLi[i].offsetLeft, this.aLi[i].offsetTop, i]);
  }

  ;
  this.arr = arrA; //隨機

  var arr2 = [];

  for (var _i2 = 0; _i2 < this.len - 1; _i2++) {
    arr2.push(arr1[_i2]);
  }

  arr2.sort(function (a, b) {// return Math.random() - 0.5;
  });
  arr2.push(arr1[this.len - 1]); // console.log(arr2);
  // 逆序數

  var arr3 = [];
  var a = 0;

  for (var _i3 = 0; _i3 < this.len; _i3++) {
    arr3.push(arr2[_i3][2]);
  }

  for (var _i4 = 0; _i4 < this.len; _i4++) {
    var b = arr3[_i4];

    for (var j = 0; j < this.len; j++) {
      var c = arr3[j];

      if (b > c) {
        a += 1;
      }
    }
  } // console.log(arr3, a);


  if (a % 2 == 0) {// console.log('go');
  } else {
    this.ding();
  }

  arr1 = arr2;
  var windowWidth = screen.width;

  if (windowWidth < 575.98) {
    for (var _i5 = 0; _i5 < this.len; _i5++) {
      this.aLi[_i5].style.position = "absolute";
      this.aLi[_i5].style.left = arr1[_i5][0] + "px";
      this.aLi[_i5].style.top = arr1[_i5][1] + "px";
      this.aLi[_i5].index = arr1[_i5][2];
      this.aLi[_i5].style.margin = 0;
      this.aLi[_i5].style.backgroundSize = this.num * 100 + "px";
      this.aLi[_i5].style.backgroundPositionX = _i5 % this.num * -100 + "px";
      this.aLi[_i5].style.backgroundPositionY = (_i5 - _i5 % this.num) / this.num * -100 + "px"; // (i % this.num) * -100 + "px" + ((i - (i % this.num)) / this.num) * -100 + "px";
      // console.log('1');
    }
  } else {
    for (var _i6 = 0; _i6 < this.len; _i6++) {
      this.aLi[_i6].style.position = "absolute";
      this.aLi[_i6].style.left = arr1[_i6][0] + "px";
      this.aLi[_i6].style.top = arr1[_i6][1] + "px";
      this.aLi[_i6].index = arr1[_i6][2];
      this.aLi[_i6].style.margin = 0;
      this.aLi[_i6].style.backgroundSize = this.num * 200 + "px";
      this.aLi[_i6].style.backgroundPositionX = _i6 % this.num * -200 + "px";
      this.aLi[_i6].style.backgroundPositionY = (_i6 - _i6 % this.num) / this.num * -200 + "px"; // (i % this.num) * -100 + "px" + ((i - (i % this.num)) / this.num) * -100 + "px";
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

    for (var i = 0; i < n; i++) {
      str += "<li></li>";
    }

    return str;
  } else {
    this.oUl.style.width = 10 + num * 2 + num * 200 + "px";
    this.oUl.style.height = 10 + num * 2 + num * 200 + "px";

    var _n = num * num;

    var _str = "";

    for (var _i7 = 0; _i7 < _n; _i7++) {
      _str += "<li></li>";
    }

    return _str;
  }
};