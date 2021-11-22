function popClose(item) {
    let blk = item.parentNode.parentNode.parentNode.parentNode;
    blk.classList.add('none');
}
function popCloseX(item) {
    let blk = item.parentNode.parentNode.parentNode;
    blk.classList.add('none');
}
function toVeri() {
    location.href = "./verify.html";
};