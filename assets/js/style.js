// calculator range slider - make chosen month number appear on screen

let output = document.querySelector('.calculator__table__month-number');
let slider = document.querySelector('#range-slider');
output.innerHTML = slider.value + ' თვე';

    slider.addEventListener('input', function () {
        output.innerHTML = slider.value + ' თვე';
    })


// send and get slider - moving left and right.
let slides = document.querySelectorAll('.t-o-slides');
let left = document.querySelector('.transfer-options__left');
let right = document.querySelector('.transfer-options__right');
let numberOfSlides = 0;

for(let i = 0; i < slides.length; i++) {
    slides[i]
}

right.addEventListener('click', function() {
    if (numberOfSlides < slides.length - 6) {
        slides[numberOfSlides].style.display = 'none';
        numberOfSlides += 1;
    }
})

left.addEventListener('click', function () {
    if(!(slides[0].style.display === 'block')) {
        numberOfSlides -= 1;
        slides[numberOfSlides].style.display = 'block';
    }
})





