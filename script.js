const toggle = document.querySelector('.darkmode-toggle');
const selector = toggle.querySelector('.selector');
const icons = toggle.querySelectorAll('.mode-icon');

/* gespeichertes Theme laden */

let savedTheme = localStorage.getItem("theme");

let isDarkMode = savedTheme === "dark";


function updateToggle() {

    const activeIcon = isDarkMode ? icons[1] : icons[0];

    const containerRect = toggle.getBoundingClientRect();
    const iconRect = activeIcon.getBoundingClientRect();
    const leftPos = iconRect.left - containerRect.left;

    selector.style.left = `${leftPos + (iconRect.width - selector.offsetWidth)/2}px`;

    icons.forEach((icon, idx) => {

        if ((isDarkMode && idx === 1) || (!isDarkMode && idx === 0)) {
            icon.classList.add('active');
        } else {
            icon.classList.remove('active');
        }

    });

    const theme = isDarkMode ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", theme);

    /* Theme speichern */

    localStorage.setItem("theme", theme);
}


/* Toggle Klick */

toggle.addEventListener("click", () => {

    isDarkMode = !isDarkMode;

    updateToggle();

});


/* Beim Laden der Seite anwenden */

updateToggle();



const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let posX = window.innerWidth / 2;
let posY = window.innerHeight / 2;

document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate() {
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;

    glow.style.left = posX + "px";
    glow.style.top = posY + "px";

    requestAnimationFrame(animate);
}

animate();


const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

const hoverElements = document.querySelectorAll("a, button");

hoverElements.forEach(el => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});