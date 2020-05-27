
var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');
var menu = document.getElementById('modal-menu');
var info = document.getElementById('modal-info');
var image = document.getElementById('modal-image');
var background1 = document.getElementById('slider__1'); 
var background2 = document.getElementById('slider__2'); 
var background3 = document.getElementById('slider__3'); 
var sliderBtn1 = document.getElementById('slider-btn'); 
var sliderBtn2 = document.getElementById('slider-btn2'); 
var sliderBtn3 = document.getElementById('slider-btn3'); 

document.getElementById('open-menu').addEventListener('click', function() {
    overlay.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function() {
    overlay.classList.remove('show-menu');
});

background1.addEventListener('mouseover', function() {
    sliderBtn1.classList.add('show-btn');
});

background1.addEventListener('mouseout', function() {
    sliderBtn1.classList.remove('show-btn');
});

background2.addEventListener('mouseover', function() {
    sliderBtn2.classList.add('show-btn');
});

background2.addEventListener('mouseout', function() {
    sliderBtn2.classList.remove('show-btn');
});

background3.addEventListener('mouseover', function() {
    sliderBtn3.classList.add('show-btn');
});

background3.addEventListener('mouseout', function() {
    sliderBtn3.classList.remove('show-btn');
});

 document.getElementById('btn__next').onclick = sliderRight;
 document.getElementById('btn__back').onclick = sliderLeft;
 var left = 0;

 function sliderRight () {
     var slider = document.getElementById('slider');
     left = left - 500;
     if (left < -1200) {
         left = 0;
     }
     slider.style.left = left +'px';
 }

 function sliderLeft () {
     var slider = document.getElementById('slider');
     left = left + 0;
     if (left > -1200) {
         left = 0;
     }
     slider.style.left = left +'px';
 }

//  Слайдер

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}


function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("objects__image")

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";

    autoSlider();
}
