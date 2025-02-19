const sections = {
    about: `
        <div class="about-container">
            <div class="about-heading">
                <h2>About Us</h2>
            </div>
            <div class="about-text">
                <p>Premier Speed Logistics is a leading provider of comprehensive transportation and logistics solutions. With years of experience in the industry, we have built a reputation for reliability, efficiency, and exceptional customer service. Our team of dedicated professionals works tirelessly to ensure that your cargo reaches its destination safely and on time.</p>
                <p>We understand that every client has unique needs, which is why we offer customized solutions tailored to your specific requirements. From container transport to loose cargo handling, our extensive network and modern fleet enable us to handle any logistics challenge with precision and care.</p>
            </div>
        </div>
    `,
    mission: `
        <div class="mission-vision-container">
            <h2 class="section-heading">Mission & Vision</h2>
            
            <div class="mission-row">
                <div class="image-container">
                    <img src="../images/mission-image.jpg" alt="Our Mission">
                </div>
                <div class="text-container">
                    <h3>Our Mission</h3>
                    <p>To provide world-class logistics solutions through innovation, dedication, and a commitment to excellence. We strive to exceed customer expectations by delivering reliable, efficient, and cost-effective transportation services while maintaining the highest standards of safety and professionalism.</p>
                </div>
            </div>

            <div class="vision-row">
                <div class="text-container">
                    <h3>Our Vision</h3>
                    <p>To become the leading logistics provider globally, recognized for our cutting-edge solutions, sustainable practices, and unwavering commitment to customer satisfaction. We aim to set new industry standards while fostering growth, innovation, and positive change in the transportation sector.</p>
                </div>
                <div class="image-container">
                    <img src="../images/vision-image.jpg" alt="Our Vision">
                </div>
            </div>
        </div>
    `,
    values: `
        <div class="values-container">
            <h2 class="section-heading">Our Values</h2>
            <div class="values-grid">
                <div class="value-card">
                    <div class="icon-circle"></div>
                    <h3>Integrity</h3>
                    <p>We conduct our business with the highest ethical standards, ensuring transparency and honesty in all our dealings.</p>
                </div>
                <div class="value-card">
                    <div class="icon-circle"></div>
                    <h3>Excellence</h3>
                    <p>We strive for excellence in every service we provide, maintaining the highest standards of quality and professionalism.</p>
                </div>
                <div class="value-card">
                    <div class="icon-circle"></div>
                    <h3>Teamwork</h3>
                    <p>We believe in the power of collaboration, working together to achieve common goals and deliver exceptional results.</p>
                </div>
                <div class="value-card innovation">
                    <div class="icon-circle"></div>
                    <h3>Innovation</h3>
                    <p>We continuously seek innovative solutions to improve our services and meet evolving industry demands.</p>
                </div>
                <div class="value-card reliability">
                    <div class="icon-circle"></div>
                    <h3>Reliability</h3>
                    <p>We are committed to being a dependable partner, delivering consistently reliable services to our clients.</p>
                </div>
            </div>
        </div>
    `
};

function switchSection(sectionId) {
    const contentSection = document.querySelector('.about-content');
    contentSection.innerHTML = sections[sectionId];
    
    // Update active state in navigation
    document.querySelectorAll('.about-nav a').forEach(link => {
        link.classList.remove('active');
    });
    document.querySelector(`a[href="#${sectionId}"]`).classList.add('active');
}

// Add click event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.about-nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = e.target.getAttribute('href').substring(1);
            switchSection(section);
        });
    });
});
