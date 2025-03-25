document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts
    createFloatingHearts();
    
    // Create header hearts
    createHeaderHearts();
    
    // Animate sections on scroll
    const sections = document.querySelectorAll('.fullscreen-section');
    
    // Set up intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 1s ease forwards';
                
                // If this is section4, start the number animations
                if (entry.target.id === 'section4') {
                    const numberElements = entry.target.querySelectorAll('.number');
                    numberElements.forEach(number => {
                        updateCount(number);
                    });
                }
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

// Add this function to create header hearts
function createHeaderHearts() {
    const heartContainer = document.querySelector('.heart-container');
    const heartSymbols = ['❤️', '💕', '💖', '💗', '💓', '✨', '💜'];
    
    // Create 20 hearts
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        
        // Random position and delay
        heart.style.left = Math.random() * 100 + '%';
        heart.style.top = Math.random() * 100 + '%';
        heart.style.animationDelay = (Math.random() * 5) + 's';
        heart.style.fontSize = (Math.random() * 20 + 15) + 'px';
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        
        heartContainer.appendChild(heart);
    }
}

// Updated function to handle number counting animation
function updateCount(numberElement) {
    const value = parseInt(numberElement.dataset.value);
    let initialValue = 0;
  
    // Adjust increment based on the size of the number
    const increment = Math.ceil(value / 100);
  
    const increaseCount = setInterval(() => {
        initialValue += increment;
  
        if (initialValue > value) {
            numberElement.textContent = value;
            clearInterval(increaseCount);
            return;
        }
  
        numberElement.textContent = initialValue;
    }, 30); // Slightly faster animation
}