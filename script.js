// INSYDE CREATIVE - GLOBAL ANIMATION SCRIPT
document.addEventListener("DOMContentLoaded", function() {
    
    // Check if the browser supports IntersectionObserver
    if ('IntersectionObserver' in window) {
        
        // Create an intersection observer object
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // Add the 'visible' class when the element enters the viewport
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.15 }); // Trigger animation when 15% of the element is visible

        // Find all elements with the 'animate-on-scroll' class and observe them
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
        
    } else {
        // Fallback for older browsers that don't support IntersectionObserver: 
        // show all elements immediately so the content remains accessible
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            el.classList.add('visible');
        });
    }
});