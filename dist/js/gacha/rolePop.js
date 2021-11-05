"use strict";

var roleInfo = document.querySelectorAll('.roleInfo');
var len = roleInfo.length;
var pop = document.getElementById('rolesPop');
var closeBtn = document.querySelector('.roleCloseBtn');
// console.log(roleInfo);
closeBtn.addEventListener('click', function () {
  pop.classList.add('none');
});

for (var i = 0; i < len; i++) {
  roleInfo[i].onclick = function () {
    pop.classList.remove('none');
  };
}