function typeWriter(text, elementType) {
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
        }, index * 50);
    });
}

document.addEventListener('loadingComplete', () => {
    const titleElement = document.querySelector('.hero-content h1');
    const sloganElement = document.querySelector('.hero-content p');
    
    const titleText = titleElement.textContent;
    const sloganText = sloganElement.textContent;
    
    // Start animations
    typeWriter(titleText, 'h1');
    setTimeout(() => {
        typeWriter(sloganText, 'p');
    }, titleText.length * 50 + 500); // Added extra delay between title and slogan
});
