"use strict";

var that = $(void 0);
var mSearch = $("#m-search");
$("#search-input").bind("change paste keyup", function () {
  var value = $(this).val();

  if (!value) {
    mSearch.html("");
    return;
  }

  ;
  mSearch.html('.wrap:not([data-index*="' + value.toLowerCase() + '"]) {display: none;}');
});


// 

var sortfunctions = {
  sortArrayByDate : function (a, b){
      var a_date = Date.parse($(a).attr("ls_date"));
      var b_date = Date.parse($(b).attr("ls_date"));

      if (a_date > b_date) return -1;
      if (a_date < b_date) return 1;
      return 0;
  },
  sortArrayByScore : function (a, b){
      var a_int = $(a).attr("ls_score");
      var b_int =$(b).attr("ls_score");

      if (a_int === b_int) {
          return 0;
      }
      else {
          return (a_int > b_int) ? -1 : 1;
      }
      return 0;
  }
}

function letssort(p){ 
      var defaults = {
      _class:null,
      _target:null,
      _reverse:false,
      _attr:null
      }

      $.extend(defaults, p);
  
      var elements = document.getElementsByClassName(defaults._class);
      var array = $("#" + defaults._target + " ." + defaults._class).toArray();
  
      if(array.length > 0){
        if(defaults._attr == "ls_date"){
          array.sort(sortfunctions.sortArrayByDate);
        }else if(defaults._attr == "ls_score"){
          array.sort(sortfunctions.sortArrayByScore);
        }
          
        if(defaults._reverse){
            array.reverse();
          }

          $(array).appendTo("#" + defaults._target);
      }
  }

$("#block_1 .new").click(function(){
  letssort({
  _class: "sort", //specify the class to select
  _target: "block_1", //specify the target to add the sort to
  _reverse: false, //reverse the sort
  _multiple: "ls_date" //if multiple data attr, specify one
});
});

$("#block_1 .old").click(function(){
letssort({
  _class: "sort", //specify the class to select
  _target: "block_1", //specify the target to add the sort to
  _reverse: true, //reverse the sort
  _multiple: "ls_date" //if multiple data attr, specify one
});
});

//

$(document).ready(function(){
  $(".wrap78").slice(0, 99).hide();
  $("#bnbn").on("click", function(e){
    e.preventDefault();
    $(".wrap78:hidden").slice(0, 2).slideDown();
    if($(".wrap78:hidden").length == 0) {
      $("#bnbn").text("沒有更多內容了").addClass("noContent");
    }
  });
  
})

//

var input = document.getElementById('search-input');
input.addEventListener('focus', function(){
  input.style.outline = '2px solid rgba(96, 205, 144, 1)';
});

var input = document.getElementById('search-input');
input.addEventListener('blur', function(){
  input.style.outline = 'none';
});

//

$(document).ready(function(){
  $(".bbbn").on("click", function(e){
    $(".bbbn").css("display" , "none");
    $(".bbbn2").css("display" , "flex");
  });
});

$(document).ready(function(){
  $(".bbbn2").on("click", function(e){
    $(".bbbn2").css("display" , "none");
    $(".bbbn").css("display" , "flex");
  });
});

//

$(document).ready(function() {
  $('.upup').click(function(event) {
    event.preventDefault();
    
    $('html, body').animate({scrollTop: 0}, 100);
  })
});







