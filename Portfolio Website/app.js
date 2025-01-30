// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation on scroll
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

function updateNavigation() {
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === currentSection) {
            item.classList.add('active');
        }
    });
}

// Update navigation on scroll
window.addEventListener('scroll', updateNavigation);

// Form Validation and Submission
const contactForm = document.querySelector('.contact-form form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form inputs
        const name = this.querySelector('input[placeholder="Your Name"]');
        const email = this.querySelector('input[placeholder="Your Email"]');
        const message = this.querySelector('textarea');
        
        // Validate inputs
        let isValid = true;
        
        if (!name.value.trim()) {
            isValid = false;
            showError(name, 'Name is required');
        } else {
            removeError(name);
        }
        
        if (!email.value.trim()) {
            isValid = false;
            showError(email, 'Email is required');
        } else if (!isValidEmail(email.value)) {
            isValid = false;
            showError(email, 'Please enter a valid email');
        } else {
            removeError(email);
        }
        
        if (!message.value.trim()) {
            isValid = false;
            showError(message, 'Message is required');
        } else {
            removeError(message);
        }
        
        if (isValid) {
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        }
    });
}

// Helper functions for form validation
function showError(input, message) {
    const formControl = input.parentElement;
    const errorDiv = formControl.querySelector('.error-message') || document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    if (!formControl.querySelector('.error-message')) {
        formControl.appendChild(errorDiv);
    }
    input.classList.add('error');
}

function removeError(input) {
    const formControl = input.parentElement;
    const errorDiv = formControl.querySelector('.error-message');
    if (errorDiv) {
        formControl.removeChild(errorDiv);
    }
    input.classList.remove('error');
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize navigation state on page load
document.addEventListener('DOMContentLoaded', () => {
    updateNavigation();
});