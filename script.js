const mobileToggle = document.getElementById('mobile-toggle');
const closeMenu = document.getElementById('close-menu');
const mainNav = document.getElementById('main-nav');

mobileToggle.addEventListener('click', () => {
    mainNav.classList.add('active');
});

closeMenu.addEventListener('click', () => {
    mainNav.classList.remove('active');
});

document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        mainNav.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);
reveal();

const counters = document.querySelectorAll('.counter');
const speed = 200;

const startCounters = () => {
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('h3'); 
        };
    });
}