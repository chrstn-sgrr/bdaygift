document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    createFloatingHearts();
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('.fullscreen-section');
    
    // Set up intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease forwards';
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Function to create floating hearts
function createFloatingHearts() {
    const container = document.querySelector('.container');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓'];
    
    // Create 15 hearts
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Random position and delay
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        
        container.appendChild(heart);
    }
}