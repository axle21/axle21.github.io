var transparentDemo = true;
var fixedTop = false;

const btnHire = document.querySelector(".btn-hire");
const getCV = document.querySelector(".btn-getCV");

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

// animation of button HIRE/GEtCV

if ($(window).width() > 748) {
    btnHire.addEventListener("mouseover" , () => {
        
        btnHire.classList.add('magictime', 'puffIn')
        btnHire.style.boxShadow = '0px 15px 20px gray';
        btnHire.style.transform = 'translateY(-7px)';
    
    })
    
    btnHire.addEventListener("mouseout" , () => {
    
        btnHire.classList.remove('magictime' ,'puffIn')
        btnHire.style.backgroundColor  = '';
        btnHire.style.boxShadow = '';
        btnHire.style.transform = '';
    
    })
    
    getCV.addEventListener("mouseover" , () => {
        
    getCV.classList.add('magictime', 'puffIn')
    getCV.style.boxShadow = '0px 15px 20px gray';
    getCV.style.transform = 'translateY(-7px)';
    
    })
    
    getCV.addEventListener("mouseout" , () => {
    
    getCV.classList.remove('magictime' ,'puffIn')
    getCV.style.backgroundColor  = '';
    getCV.style.boxShadow = '';
    getCV.style.transform = '';
    
    })
}

