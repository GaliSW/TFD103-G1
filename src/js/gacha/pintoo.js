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
    this.aLi = this.oUl.querySelectorAll("li");
    // console.log(this.aLi);
    this.len = this.aLi.length;
    this.oLi = this.aLi[this.len - 1];//最後一個li
    this.num = num;
    this.oLi.className = "active";
    this.roleImg = img;
    this.local(img);
    this.click();
    this.keycode();
}

//透過index找到li
Ping.prototype.Li = function (index) {
    for (let i = 0; i < this.len; i++) {
        if (this.aLi[i].index == index) {
            return this.aLi[i];
        }
    }
}
//判斷完成拼圖
Ping.prototype.done = function () {
    let array1 = [];
    let array2 = [];
    let n = 0;
    for (let i = 0; i < this.len; i++) {
        array1.push(this.aLi[i].index);
        array2.push(this.arr[i][2]);
    }
    // console.log(array1, array2);
    for (let i = 0; i < this.len; i++) {
        if (array1[i] == array2[i]) {
            n += 1;
            // console.log('done');
        }
    }
    if (n == this.len) {
        // console.log('done');
        this.num++;
        let This = this;
        //!do another function
        $.ajax({
            method: "POST",
            url: "../php/Gacha/InsertMemberImg.php",
            data: {
                roleImg: this.roleImg,
            },
            dataType: "json",
            success: function (response) {
            }
        })
        document.getElementById('bonusBlk').classList.remove('none');
        callPoints();
        // setTimeout(() => {
        //     This.init("ul", This.num)
        // }, 1000);
    }
}

//鍵盤移動
Ping.prototype.keycode = function () {
    let This = this;
    document.onkeydown = function (e) {
        // console.log(e.keyCode);
        // console.log(This.oLi.index);

        if (e.keyCode == 37) { //左
            if (This.oLi.index - 1 < 0) {
                This.move(This.Li(This.oLi.index));
            } else {
                This.move(This.Li(This.oLi.index - 1));
            }

        } else if (e.keyCode == 39) { //右
            if (This.oLi.index + 1 > This.len - 1) {
                This.move(This.Li(This.oLi.index));
            } else {
                This.move(This.Li(This.oLi.index + 1));
            }

        } else if (e.keyCode == 38) { //上
            if (This.oLi.index - This.num < 0) {
                This.move(This.Li(This.oLi.index));
            } else {
                This.move(This.Li(This.oLi.index - This.num));
            }

        } else if (e.keyCode == 40) { //下
            if (This.oLi.index + This.num > This.len - 1) {
                This.move(This.Li(This.oLi.index));
            } else {
                This.move(This.Li(This.oLi.index + This.num));
            }
        }
    }

}
//判斷移動
Ping.prototype.judge = function (li) {
    let index = li.index;
    let num = this.oLi.index;

    //最左邊
    if (num % this.num == 0) {
        if (index + this.num == num || index - this.num == num || index - 1 == num) {
            return true;
        }

    } else if (num % this.num == 2) {//最右邊
        if (index + this.num == num || index - this.num == num || index + 1 == num) {
            return true;
        }
    } else {//中間
        if (index + this.num == num || index - this.num == num || index - 1 == num || index + 1 == num) {
            return true;
        }
    }
    return false;
}
//移動
Ping.prototype.move = function (li) {
    if (this.judge(li)) {

        li.style.left = this.arr[this.oLi.index][0] + "px";
        li.style.top = this.arr[this.oLi.index][1] + "px";
        this.oLi.style.left = this.arr[li.index][0] + "px";
        this.oLi.style.top = this.arr[li.index][1] + "px";
        [this.oLi.index, li.index] = [li.index, this.oLi.index];

        this.done();
    }
}
//點擊
Ping.prototype.click = function () {
    let This = this;
    for (let i = 0; i < this.len; i++) {
        this.aLi[i].onclick = function () {
            this.style.zIndex = This.zIndex++;
            This.move(this);
        }
    }
}

//定位
Ping.prototype.local = function (img) {
    let arr1 = [];
    let arrA = [];
    for (let i = 0; i < this.len; i++) {
        arr1.push([this.aLi[i].offsetLeft, this.aLi[i].offsetTop, i])
        arrA.push([this.aLi[i].offsetLeft, this.aLi[i].offsetTop, i])
    };
    this.arr = arrA;
    //隨機
    let arr2 = [];
    for (let i = 0; i < this.len - 1; i++) {
        arr2.push(arr1[i]);
    }
    arr2.sort(function (a, b) {
        return Math.random() - 0.5;
    });
    arr2.push(arr1[this.len - 1]);
    // console.log(arr2);
    // 逆序數
    let arr3 = [];
    let a = 0;
    for (let i = 0; i < this.len; i++) {
        arr3.push(arr2[i][2]);
    }
    for (let i = 0; i < this.len; i++) {
        var bp = arr3[i];
        for (let j = i; j < this.len; j++) {
            var cp = arr3[j]
            if (bp > cp) {
                a += 1;
                // console.log(a, bp, cp);
            }
        }
    }
    // console.log(a);
    if (a % 2 == 0) {
        // console.log('go');
    } else {
        this.local(img);
        return false;
    }
    arr1 = arr2;
    let windowWidth = screen.width;
    if (windowWidth < 575.98) {
        let liArr = document.getElementById('ul').childNodes;
        for (i = 0; i < liArr.length - 1; i++) {
            liArr[i].style.background = `url(../image/ROLE/${img})`;
        }
        for (let i = 0; i < this.len; i++) {
            this.aLi[i].style.position = "absolute";
            this.aLi[i].style.left = arr1[i][0] + "px";
            this.aLi[i].style.top = arr1[i][1] + "px";
            this.aLi[i].index = arr1[i][2];
            this.aLi[i].style.margin = 0;
            this.aLi[i].style.backgroundSize = this.num * 100 + "px";
            this.aLi[i].style.backgroundPositionX = (i % this.num) * -100 + "px";
            this.aLi[i].style.backgroundPositionY = ((i - (i % this.num)) / this.num) * -100 + "px";
            // (i % this.num) * -100 + "px" + ((i - (i % this.num)) / this.num) * -100 + "px";
            // console.log('1');
        }
    } else {
        let liArr = document.getElementById('ul').childNodes;
        for (let i = 0; i < liArr.length - 1; i++) {
            liArr[i].style.background = `url(../image/ROLE/${img})`;
        }
        for (let i = 0; i < this.len; i++) {
            this.aLi[i].style.position = "absolute";
            this.aLi[i].style.left = arr1[i][0] + "px";
            this.aLi[i].style.top = arr1[i][1] + "px";
            this.aLi[i].index = arr1[i][2];
            this.aLi[i].style.margin = 0;
            this.aLi[i].style.backgroundSize = this.num * 200 + "px";
            this.aLi[i].style.backgroundPositionX = (i % this.num) * -200 + "px";
            this.aLi[i].style.backgroundPositionY = ((i - (i % this.num)) / this.num) * -200 + "px";
            // (i % this.num) * -100 + "px" + ((i - (i % this.num)) / this.num) * -100 + "px";
        }
    }
}
//生成元素
Ping.prototype.pics = function (num) {
    let windowWidth = screen.width;
    if (windowWidth < 575.98) {
        this.oUl.style.width = 10 + num * 2 + num * 100 + "px";
        this.oUl.style.height = 10 + num * 2 + num * 100 + "px";
        console.log('2');
        let n = num * num;
        let str = "";
        for (let i = 0; i < n; i++) {
            str += "<li></li>"
        }
        return str;
    } else {
        this.oUl.style.width = 10 + num * 2 + num * 200 + "px";
        this.oUl.style.height = 10 + num * 2 + num * 200 + "px";
        let n = num * num;
        let str = "";
        for (let i = 0; i < n; i++) {
            str += "<li></li>"
        }
        return str;
    }

}
