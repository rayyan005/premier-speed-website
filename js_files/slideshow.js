let slideIndex = 1;
let animationDone = false;

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Modify showSlides function to remove animation reset
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Modify animateText to only run once
function animateText() {
    if (animationDone) {
        return;
    }
    
    const textElements = document.querySelectorAll('.slide-text');
    textElements.forEach(textElement => {
        const text = textElement.textContent;
        textElement.textContent = '';
        
        [...text].forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char;
            span.style.animationDelay = `${index * 0.1}s`;
            textElement.appendChild(span);
        });
        
        textElement.classList.add('animated');
    });
    
    animationDone = true;
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSlides(slideIndex);
    animateText();
});

// Auto advance slides every 5 seconds
setInterval(() => {
    changeSlide(1);
}, 5000);
