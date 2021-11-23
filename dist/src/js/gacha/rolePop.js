"use strict";

var roleInfo = document.querySelectorAll('.roleInfo'); // console.log('1');

var len = roleInfo.length;
var pop = document.getElementById('rolesPop');
var closeBtn = document.querySelector('.roleCloseBtn'); // console.log(closeBtn);

closeBtn.addEventListener('click', function () {
  pop.classList.add('none');
});

for (var i = 0; i < (void 0).len; i++) {
  roleInfo[i].onclick = function () {
    pop.classList.remove('none');
  };
}