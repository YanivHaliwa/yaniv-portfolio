// Smooth scrolling for navigation links
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

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Terminal typing effect
const terminalLines = document.querySelectorAll('.terminal-line');
let delay = 0;

terminalLines.forEach((line, index) => {
    setTimeout(() => {
        line.style.opacity = '1';
    }, delay);
    delay += 300;
});

// Add active state to navigation on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Mouse tracking for project cards - ONLY ON HOVER
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
    });
});

// Mouse tracking for stat cards - ONLY ON HOVER
document.querySelectorAll('.stat-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
    });
});

// Mouse tracking for skill categories - ONLY ON HOVER
document.querySelectorAll('.skill-category').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
    });

    card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mouse-x', '50%');
        card.style.setProperty('--mouse-y', '50%');
    });
});

// Add glitch effect to hero title on hover
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    heroTitle.addEventListener('mouseenter', () => {
        heroTitle.style.animation = 'glitch 0.3s ease';
    });

    heroTitle.addEventListener('animationend', () => {
        heroTitle.style.animation = '';
    });
}

// Add CSS for glitch animation and active nav dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes glitch {
        0% { transform: translate(0); }
        20% { transform: translate(-2px, 2px); }
        40% { transform: translate(-2px, -2px); }
        60% { transform: translate(2px, 2px); }
        80% { transform: translate(2px, -2px); }
        100% { transform: translate(0); }
    }
    
    nav a.active {
        color: var(--accent-primary);
    }
    
    .terminal-line {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
`;
document.head.appendChild(style);

// Console easter egg
console.log('%c👋 Hey there, fellow hacker!', 'color: #00ff41; font-size: 20px; font-weight: bold;');
console.log('%cWelcome to my portfolio. Feel free to explore the code!', 'color: #00d4ff; font-size: 14px;');
console.log('%cyaniv@kali:~$ cat /etc/motd', 'color: #a0a0a0; font-family: monospace;');
console.log('%c"Security is not a product, but a process." - Bruce Schneier', 'color: #ffffff; font-style: italic;');

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus search (if you add search later)
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        console.log('Search feature coming soon!');
    }

    // Ctrl/Cmd + / to show keyboard shortcuts
    if ((e.ctrlKey || e.metaKey) && e.key === '/') {
        e.preventDefault();
        alert('Keyboard Shortcuts:\n\nCtrl+K: Search (coming soon)\nCtrl+/: Show this help');
    }
});
