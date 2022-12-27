$(document).ready(function () {
  var altura = $('menu').offset().top;
  $(window).on('scroll',function(){
    if ($(window).scrollTop()>50){
        $('menu').addClass('shrink');
    }else{
        $('menu').removeClass('shrink');
        $('menu').addClass('top');
    }
  });
  });