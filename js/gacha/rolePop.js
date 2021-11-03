var roleInfo = document.querySelectorAll('.roleInfo');
var len = roleInfo.length;
var pop = document.getElementById('rolesPop');
var closeBtn = document.querySelector('.closeBtn');

closeBtn.addEventListener('click', function () {
    pop.classList.add('none');
})

for (let i = 0; i < this.len; i++) {
    roleInfo[i].onclick = function () {
        pop.classList.remove('none')
    }
}



