"use strict";

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var boxOne = document.getElementById('boxOne');
var boxTwo = document.getElementById('boxTwo');
var boxThree = document.getElementById('boxThree');
box1.addEventListener('click', function () {
  if (box1.classList.contains('-on')) {
    boxTwo.classList.add('boxBlur');
    boxThree.classList.add('boxBlur');
  } else {
    box1.classList.add('-on');
    boxOne.classList.remove('boxBlur');
    boxThree.classList.add('boxBlur');
    boxTwo.classList.add('boxBlur');
    box2.classList.remove('-on');
    box3.classList.remove('-on');
  }
});
box2.addEventListener('click', function () {
  if (box2.classList.contains('-on')) {
    boxThree.classList.add('boxBlur');
    boxOne.classList.add('boxBlur');
  } else {
    box2.classList.add('-on');
    boxTwo.classList.remove('boxBlur');
    boxThree.classList.add('boxBlur');
    boxOne.classList.add('boxBlur');
    box1.classList.remove('-on');
    box3.classList.remove('-on');
  }
});
box3.addEventListener('click', function () {
  if (box3.classList.contains('-on')) {
    boxTwo.classList.add('boxBlur');
    boxOne.classList.add('boxBlur');
  } else {
    box3.classList.add('-on');
    boxThree.classList.remove('boxBlur');
    boxTwo.classList.add('boxBlur');
    boxOne.classList.add('boxBlur');
    box1.classList.remove('-on');
    box2.classList.remove('-on');
  }
});