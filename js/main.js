// Main JavaScript for Academic Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Year in footer copyright
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    
    function checkScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Initial check
    checkScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);
    
    // Active navigation item on scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');
    
    function setActiveNavItem() {
        let current = '';
        
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navItems.forEach((navItem) => {
            navItem.classList.remove('active');
            const link = navItem.querySelector('a');
            if (link && link.getAttribute('href') === `#${current}`) {
                navItem.classList.add('active');
            }
        });
    }
    
    // Initial check
    setActiveNavItem();
    
    // Add scroll event listener
    window.addEventListener('scroll', setActiveNavItem);
    
    // Reveal animations for elements
    function revealElements() {
        const elementsToReveal = document.querySelectorAll('.research-area, .card, .contact-item');
        
        elementsToReveal.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 50) {
                element.style.opacity = 1;
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for elements to be revealed
    const elementsToReveal = document.querySelectorAll('.research-area, .card, .contact-item');
    elementsToReveal.forEach((element) => {
        element.style.opacity = 0;
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Initial check
    revealElements();
    
    // Add scroll event listener
    window.addEventListener('scroll', revealElements);
});