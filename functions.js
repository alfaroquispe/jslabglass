$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});

window.onscroll = function (e) {
    // Obtenemos la posicion del scroll en pantall
    var scroll = document.documentElement.scrollTop || document.body.scrollTop;


    if (scroll > 50) {
        var element = document.getElementById("active-border");
        element.classList.add("aqchange");
        $("#logo").attr("src", "images/logo_varo-va_neg.webp");
        $("#logo").attr("width", "120");
        console.log('mayor a 50');
        // var element = document.getElementById("navbarSupportedContent");
        // element.classList.remove("align-self-start");
    } else {
        var element = document.getElementById("active-border");
        element.classList.remove("aqchange");
        $("#logo").attr("src", "images/logo_varo-va_pos.webp");
        $("#logo").attr("width", "145");
        console.log('menor a 50');

        // var element = document.getElementById("navbarSupportedContent");
        // element.classList.add("align-self-start");
    }
}

function aqtoggle () {
    var element = document.getElementById("aqnavbar");
        element.classList.toggle("aqnavbar-toggle");
}