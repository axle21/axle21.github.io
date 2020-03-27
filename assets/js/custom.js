var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});

    $('.navbar-full').click(function(event){
        window.location.href = "#navbar-full";
        history.pushState('', document.title, window.location.pathname);
    });

    $('.about').click(function(event){
        window.location.href = "#about";
        history.pushState('', document.title, window.location.pathname);
    });

    $('.portfolio').click(function(event){
        window.location.href = "#portfolio";
        history.pushState('', document.title, window.location.pathname);
    });

    $('.contact').click(function(event){
        window.location.href = "#contact";
        history.pushState('', document.title, window.location.pathname);
    });