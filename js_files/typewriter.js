function typeWriter(element, text, showElement = false) {
    element.innerHTML = '';
    if (showElement) {
        element.style.opacity = '1'; // Show element when animation starts
    }
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        if (char !== ' ') {
            span.style.margin = '0';
        }
        element.appendChild(span);
        
        setTimeout(() => {
            span.classList.add('visible');
        }, index * 50);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.hero-content h1');
    const subtitle = document.querySelector('.hero-content p');
    
    if (title && subtitle) {
        typeWriter(title, 'Premier Speed Logistics Services LLC.');
        
        setTimeout(() => {
            typeWriter(subtitle, 'Welcome to Premier Speed Logistics, where efficiency meets reliability. Our specialized services ensure the seamless transport of goods and containers, redefining the logistics experience.', true); // Pass true to show element
        }, 2000);
    }
});
