$(function () {

  'use strict';
  // banner slider js
  $('#banner_part').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: true,
  });

  // coundown 
  $('.coundown').countdown('2025/01/01', function (event) {
    $(this).html(event.strftime(' %D days, %H: %M: %S'));
  });

  //increment decrement start
  $('#handleCounter').handleCounter({
    minimum: 1,
    maximize: null,
  })
  // delas right part
  $('.deals_right').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
  });

  // cloth part slider

  $('.right_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
  });
 
  // blog slider
  $('.slider_blog').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
  });

 ///view part slider
  $('.viewSlider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
  });


  ///shop page nodejs slider
  $('.rownode').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
  });


  //blog right side fixed

  $(window).on('scroll', function(){

      var aaa= $(this).scrollTop();

      if(aaa >490){
        $('.right_part').addClass('fixedblog');

      }

      else{
        $('.right_part').removeClass('fixedblog');
      }

  });
    //counter up 
    $('.counterjs').counterUp({
      delay: 10,
      time: 1000
    });
  
 // calender
 let c = $('.calendar');
 let calendar = new Calendar(c);
// mixitup
 let containerEl = document.querySelector('.mixitupbody');

 let mixer = mixitup(containerEl);

});