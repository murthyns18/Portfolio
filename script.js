// Navigation
const navbar = document.getElementById('navbar');
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

// Toggle mobile menu
function toggleMenu() {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu after clicking
            navLinks.classList.remove('active');
            menuIcon.classList.remove('active');
        }
    });
});

// Active section highlighting
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navHeight = navbar.offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Enhanced scroll reveal animation with stagger effect
const revealElements = document.querySelectorAll('.education-card, .project-card, .cert-card, .skill-category');

const revealOnScroll = () => {
    revealElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            // Add stagger delay based on index
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100); // 100ms delay between each card
        }
    });
};

// Initial styles for reveal elements
revealElements.forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    element.style.transitionDelay = `${index * 0.1}s`; // Stagger the initial animation
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Add hover effect to tech stack items
document.querySelectorAll('.project-tech span').forEach(tech => {
    tech.addEventListener('mouseover', function() {
        this.style.transform = 'translateY(-2px) scale(1.05)';
    });
    
    tech.addEventListener('mouseout', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);