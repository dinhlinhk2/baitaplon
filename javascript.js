/* Cuộn thẻ header */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop()) {
            $('#header').addClass('sticky');
        } else {
            $('#header').removeClass('sticky');
        }
    });
});

var counter=1;
setInterval(function(){
    document.getElementById('radio'+ counter).checked =true;
    counter++;
    if (counter>4){
        counter=1;
    }
},3000);
/* Gotop  */
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>300){
            $('#gotop').addClass('show');
        }else 
            $('#gotop').removeClass('show');
    });
    $('#gotop').click(function(){
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    })
});
$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop()>1300){
            $('.chart-layout__item').addClass('show');
        }else 
            $('.chart-layout__item').removeClass('show');
    });
});

