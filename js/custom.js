
$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('#header').addClass('header-active');
    } else {
       $('#header').removeClass('header-active');
    }
});   

$(document).ready(function(){
    $(".navbar-toggler").click(function(){
        $("body").toggleClass("mb_active");
    });
});
    
AOS.init({
    duration: 1200,
        offset:50,
    once: true,
  })