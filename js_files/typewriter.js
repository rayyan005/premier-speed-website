function typeWriter(text, elementType, speed = 50) { // Add speed parameter with default
    const element = document.querySelector(`.hero-content ${elementType}`);
    element.innerHTML = '';
    element.style.opacity = '1';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        if (char !== ' ') {
            span.style.margin = '0';
        }
        element.appendChild(span);
        
        setTimeout(() => {
            span.classList.add('visible');
        }, index * speed); // Use speed parameter instead of fixed value
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const titleElement = document.querySelector('.hero-content h1');
    const sloganElement = document.querySelector('.hero-content p');
    
    const titleText = titleElement.textContent;
    const sloganText = sloganElement.textContent;
    
    // Start animations with different speeds
    typeWriter(titleText, 'h1'); // Title keeps original 50ms delay
    setTimeout(() => {
        typeWriter(sloganText, 'p', 20); // Slogan types faster with 30ms delay
    }, titleText.length * 50 + 500);
});
