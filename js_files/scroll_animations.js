document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe services heading
    const servicesHeading = document.querySelector('.services-heading');
    observer.observe(servicesHeading);

    // Observe service cards
    const serviceCards = document.querySelectorAll('.services-cards > div');
    serviceCards.forEach(card => {
        observer.observe(card);
    });

    // Observe Why Choose Us heading
    const whyUsHeading = document.querySelector('.why-us-heading');
    observer.observe(whyUsHeading);

    // Observe Why Choose Us cards
    const whyUsCards = document.querySelectorAll('.why-us-points-cards > div');
    whyUsCards.forEach(card => {
        observer.observe(card);
    });
});
