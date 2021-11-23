"use strict";

$(document).ready(function () {
  $('.next').click(function () {
    var num = document.querySelector('.focus').innerText;

    if (num >= 5) {
      return false;
    } else {
      $('.pagination_list').find('.pageNumber.focus').next().addClass('focus');
      $('.pagination_list').find('.pageNumber.focus').prev().removeClass('focus'); // console.log(document.querySelector('.focus').innerText);
    }
  });
  $('.prev').click(function () {
    var num = document.querySelector('.focus').innerText;

    if (num == 1) {
      return false;
    } else {
      $('.pagination_list').find('.pageNumber.focus').prev().addClass('focus');
      $('.pagination_list').find('.pageNumber.focus').next().removeClass('focus');
    } // console.log("prev");

  });
  $('.one').click(function () {
    $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
    $('.one').addClass('focus');
  });
  $('.first').click(function () {
    $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
    $('.one').addClass('focus');
  });
  $('.two').click(function () {
    $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
    $('.two').addClass('focus');
  });
  $('.three').click(function () {
    $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
    $('.three').addClass('focus');
  });
  $('.four').click(function () {
    $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
    $('.four').addClass('focus');
  });
  $('.five').click(function () {
    $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
    $('.five').addClass('focus');
  });
});