let slides = document.querySelectorAll('.t-o-slides');
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let numberOfSlides = 0;

    for(let i = 0; i < slides.length; i++) {
        slides[i]
    }

    right.addEventListener('click', function() {
        if (numberOfSlides < slides.length - 7) {
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