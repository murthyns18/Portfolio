// Navigation menu toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('active');
  }
  
  // Active navigation link on scroll
  document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function changeActiveLink() {
      let index = sections.length;
      
      while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
      
      navLinks.forEach(link => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
    
    changeActiveLink();
    window.addEventListener('scroll', changeActiveLink);
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu after clicking a link
        document.querySelector('.nav-links').classList.remove('active');
        document.querySelector('.menu-icon').classList.remove('active');
      });
    });
  });
  
  // Reveal animations on scroll
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);
  
  function revealOnScroll() {
    const elements = document.querySelectorAll('.education-card, .skill-category, .project-card, .cert-card');
    
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }