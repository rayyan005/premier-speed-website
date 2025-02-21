let slideIndex = 1;
let isFirstLoad = true;

function changeSlide(n) {
    showSlides(slideIndex += n, n > 0 ? 'right' : 'left');
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n, direction = null) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    // Hide all slides and remove classes
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].classList.remove('show', 'slide-right', 'slide-left');
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show current slide
    slides[slideIndex-1].style.display = "block";
    
    if (isFirstLoad) {
        // First load animation
        slides[slideIndex-1].classList.add('initial-load');
        setTimeout(() => {
            slides[slideIndex-1].classList.add('show');
            isFirstLoad = false;
        }, 100);
    } else if (direction) {
        // Regular slide animation
        slides[slideIndex-1].classList.add('show');
        slides[slideIndex-1].classList.add(`slide-${direction}`);
    } else {
        slides[slideIndex-1].classList.add('show');
    }
    
    dots[slideIndex-1].className += " active";
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
});

// Auto advance slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
