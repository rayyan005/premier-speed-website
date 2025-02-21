document.addEventListener('DOMContentLoaded', () => {
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Check if this is the first visit
    if (sessionStorage.getItem('hasVisited')) {
        loadingScreen.style.display = 'none';
        document.body.style.overflow = 'visible';
        // Dispatch event to start typewriter
        document.dispatchEvent(new Event('loadingComplete'));
        return;
    }

    const loadingProgress = document.querySelector('.loading-progress');
    const loadingPercentage = document.querySelector('.loading-percentage');
    let progress = 0;

    function updateProgress() {
        progress += 1;
        loadingProgress.style.width = `${progress}%`;
        loadingPercentage.textContent = `${progress}%`;

        if (progress < 100) {
            setTimeout(updateProgress, 37);
        } else {
            setTimeout(() => {
                loadingScreen.classList.add('hide');
                document.body.style.overflow = 'visible';
                sessionStorage.setItem('hasVisited', 'true');
                // Dispatch event to start typewriter
                document.dispatchEvent(new Event('loadingComplete'));
            }, 500);
        }
    }

    document.body.style.overflow = 'hidden';
    setTimeout(updateProgress, 100);
});
