if (window.Lenis) {
    const lenis = new Lenis({ duration: 1.8, smoothWheel: true });
    const updateLenis = (time) => {
        lenis.raf(time);
        requestAnimationFrame(updateLenis);
    };
    requestAnimationFrame(updateLenis);
}

const toggle = document.querySelector('.darkmode-toggle');

if (toggle) {
    const selector = toggle.querySelector('.selector');
    const icons = [...toggle.querySelectorAll('.mode-icon')];
    let isDarkMode = localStorage.getItem('theme') === 'dark';

    const updateTheme = () => {
        const activeIndex = isDarkMode ? 1 : 0;
        const activeIcon = icons[activeIndex];

        document.documentElement.dataset.theme = isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', document.documentElement.dataset.theme);
        icons.forEach((icon, index) => icon.classList.toggle('active', index === activeIndex));

        const toggleRect = toggle.getBoundingClientRect();
        const iconRect = activeIcon.getBoundingClientRect();
        selector.style.left = `${iconRect.left - toggleRect.left + (iconRect.width - selector.offsetWidth) / 2}px`;
    };

    toggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        updateTheme();
    });
    window.addEventListener('resize', updateTheme);
    updateTheme();
}

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const cursor = document.querySelector('.cursor');
    const glow = document.querySelector('.cursor-glow');

    if (cursor && glow) {
        let mouseX = innerWidth / 2;
        let mouseY = innerHeight / 2;
        let glowX = mouseX;
        let glowY = mouseY;

        document.addEventListener('mousemove', ({ clientX, clientY }) => {
            mouseX = clientX;
            mouseY = clientY;
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

        document.querySelectorAll('a, button').forEach((element) => {
            element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        const animateGlow = () => {
            glowX += (mouseX - glowX) * 0.1;
            glowY += (mouseY - glowY) * 0.1;
            glow.style.left = `${glowX}px`;
            glow.style.top = `${glowY}px`;
            requestAnimationFrame(animateGlow);
        };
        animateGlow();
    }
}

const previousButton = document.querySelector('.carousel-btn.prev');
const nextButton = document.querySelector('.carousel-btn.next');
const projectCards = [...document.querySelectorAll('.project-card')];

if (previousButton && nextButton && projectCards.length) {
    let currentCard = 0;
    const showCard = (direction) => {
        currentCard = Math.max(0, Math.min(currentCard + direction, projectCards.length - 1));
        projectCards[currentCard].scrollIntoView({ behavior: 'smooth', inline: 'center' });
    };

    nextButton.addEventListener('click', () => showCard(1));
    previousButton.addEventListener('click', () => showCard(-1));
}
