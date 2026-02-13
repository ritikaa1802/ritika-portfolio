// Animated background with code symbols
const bgElement = document.getElementById('animatedBg');
const symbols = ['<>', '</>', '{', '}', '[', ']', '( )', 'JS', 'CSS', 'HTML', '=', '=>', '++', '--'];

function createSymbol() {
    const symbol = document.createElement('div');
    symbol.className = 'code-symbol';
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.left = Math.random() * 100 + '%';
    symbol.style.animationDuration = (15 + Math.random() * 10) + 's';
    symbol.style.animationDelay = Math.random() * 5 + 's';
    bgElement.appendChild(symbol);

    setTimeout(() => {
        symbol.remove();
    }, 25000);
}

// Create initial symbols
for (let i = 0; i < 15; i++) {
    setTimeout(createSymbol, i * 1000);
}

// Continue creating symbols
setInterval(createSymbol, 2000);

// Floating items animation for hero section
const items = document.querySelectorAll(".item");

items.forEach(item => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;

    let speedX = (Math.random() - 0.5) * 0.6;
    let speedY = (Math.random() - 0.5) * 0.6;

    item.style.left = x + "px";
    item.style.top = y + "px";

    function move() {
        x += speedX;
        y += speedY;

        if (x < 0 || x > window.innerWidth) speedX *= -1;
        if (y < 0 || y > window.innerHeight) speedY *= -1;

        item.style.left = x + "px";
        item.style.top = y + "px";

        requestAnimationFrame(move);
    }

    move();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate skill bars on scroll
const observerOptions = {
    threshold: 0.5
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                const progress = bar.getAttribute('data-progress');
                bar.style.width = progress + '%';
            });
        }
    });
}, observerOptions);

const skillsSection = document.querySelector('.skills-section');
if (skillsSection) {
    observer.observe(skillsSection);
}

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}
