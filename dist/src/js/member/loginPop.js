"use strict";

function popClose(item) {
  var blk = item.parentNode.parentNode.parentNode.parentNode;
  blk.classList.add('none');
}

function popCloseX(item) {
  var blk = item.parentNode.parentNode.parentNode;
  blk.classList.add('none');
}

function toVeri() {
  location.href = "./verify.html";
}

;