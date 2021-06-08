$(document).ready(function(){
    $('.header-burger').click(function(e){
        $('.header-burger,.header-menu').toggleClass('active')
    });
    $('.container-slide').slick({
        dots: true,
    });
});
