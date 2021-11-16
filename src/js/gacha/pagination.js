$(document).ready(function () {
    $('.next').click(function () {
        $('.pagination_list').find('.pageNumber.focus').next().addClass('focus');
        $('.pagination_list').find('.pageNumber.focus').prev().removeClass('focus');
        console.log("next");
    })
    $('.prev').click(function () {
        $('.pagination_list').find('.pageNumber.focus').prev().addClass('focus');
        $('.pagination_list').find('.pageNumber.focus').next().removeClass('focus');
        console.log("prev");
    })
    $('.one').click(function () {
        $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
        $('.one').addClass('focus');
    })
    $('.two').click(function () {
        $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
        $('.two').addClass('focus');
    })
    $('.three').click(function () {
        $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
        $('.three').addClass('focus');
    })
    $('.four').click(function () {
        $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
        $('.four').addClass('focus');
    })
    $('.five').click(function () {
        $('.pagination_list').find('.pageNumber.focus').removeClass('focus');
        $('.five').addClass('focus');
    })
})