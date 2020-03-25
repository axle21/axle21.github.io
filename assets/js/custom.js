var transparentDemo = true;
var fixedTop = false;

$(window).scroll(function(e) {
    oVal = ($(window).scrollTop() / 170);
    $(".blur").css("opacity", oVal);
    
});


// const instance = new Typewriter('#typed', {
//     strings: ['Hello', 'World'],
//     autoStart: true,
//     loop: true,
//   });