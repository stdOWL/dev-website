// ===== Scroll to Top Button =====
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 600) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Mobile Nav Toggle =====
const hamburger = document.getElementById('navHamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile nav on link click
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth scroll for nav links =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===== Typing effect for hero title =====
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    heroTitle.style.opacity = '0';
    setTimeout(() => {
        heroTitle.style.opacity = '1';
        heroTitle.style.transition = 'opacity 0.5s ease';
    }, 200);
}

// ===== Top bar background on scroll =====
const topbar = document.querySelector('.topbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        topbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.1)';
    } else {
        topbar.style.borderBottomColor = 'rgba(255, 255, 255, 0.08)';
    }
});
