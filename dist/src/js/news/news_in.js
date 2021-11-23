"use strict";

$(document).ready(function () {
  $('.upup').click(function (event) {
    event.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, 100);
  });
});